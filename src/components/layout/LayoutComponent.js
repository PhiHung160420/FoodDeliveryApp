import { useDrawerStatus } from '@react-navigation/drawer';
import { setSelectedTab } from 'actions/tabActions';
import { Header, TabButton } from 'components/common';
import {
  COLORS, constants, data, icons, SIZES
} from 'constants';
import React, { useEffect, useRef } from 'react';
import { FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  Extrapolate,
  interpolate, useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';
import { connect } from 'react-redux';
import { FavouriteScreen, HomeScreen, MyCartScreen, NotificationScreen, SearchScreen } from 'screens';

const LayoutComponent = ({
  selectedTab,
  setSelectedTab,
  navigation,
}) => {
  const flatlistRef = useRef();

  const isDrawerOpen = useDrawerStatus();
  
  const progress = useSharedValue(0);

  // Reanimated Shared Value
  // home
  const homeTabFlex = useSharedValue(1);
  const homeTabColor = useSharedValue(COLORS.white);

  // search
  const searchTabFlex = useSharedValue(1);
  const searchTabColor = useSharedValue(COLORS.white);

  // cart
  const cartTabFlex = useSharedValue(1);
  const cartTabColor = useSharedValue(COLORS.white);

  // favourite
  const favouriteTabFlex = useSharedValue(1);
  const favouriteTabColor = useSharedValue(COLORS.white);

  // notification
  const notificationTabFlex = useSharedValue(1);
  const notificationTabColor = useSharedValue(COLORS.white);

  // Reanimated Animated Style
  // home
  const homeFlexStyle = useAnimatedStyle(() => {
    return {
      flex: homeTabFlex.value,
    };
  });
  const homeColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: homeTabColor.value,
    };
  });

  // search
  const searchFlexStyle = useAnimatedStyle(() => {
    return {
      flex: searchTabFlex.value,
    };
  });
  const searchColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: searchTabColor.value,
    };
  });

  // cart
  const cartFlexStyle = useAnimatedStyle(() => {
    return {
      flex: cartTabFlex.value,
    };
  });
  const cartColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: cartTabColor.value,
    };
  });

  // favourite
  const favouriteFlexStyle = useAnimatedStyle(() => {
    return {
      flex: favouriteTabFlex.value,
    };
  });
  const favouriteColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: favouriteTabColor.value,
    };
  });

  // notification
  const notificationFlexStyle = useAnimatedStyle(() => {
    return {
      flex: notificationTabFlex.value,
    };
  });
  const notificationColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: notificationTabColor.value,
    };
  });

  useEffect(() => {
    setSelectedTab(constants.screens.home);
  }, []);

  useEffect(() => {
    // home
    if (selectedTab == constants.screens.home) {
      flatlistRef?.current?.scrollToIndex({
        index: 0,
        animated: false,
      });
      homeTabFlex.value = withTiming(4, {duration: 500});
      homeTabColor.value = withTiming(COLORS.primary, {duration: 500});
    } else {
      homeTabFlex.value = withTiming(1, {duration: 500});
      homeTabColor.value = withTiming(COLORS.white, {duration: 500});
    }

    //search
    if (selectedTab == constants.screens.search) {
      flatlistRef?.current?.scrollToIndex({
        index: 1,
        animated: false,
      });
      searchTabFlex.value = withTiming(4, {duration: 500});
      searchTabColor.value = withTiming(COLORS.primary, {duration: 500});
    } else {
      searchTabFlex.value = withTiming(1, {duration: 500});
      searchTabColor.value = withTiming(COLORS.white, {duration: 500});
    }

    // cart
    if (selectedTab == constants.screens.cart) {
      flatlistRef?.current?.scrollToIndex({
        index: 2,
        animated: false,
      });
      cartTabFlex.value = withTiming(4, {duration: 500});
      cartTabColor.value = withTiming(COLORS.primary, {duration: 500});
    } else {
      cartTabFlex.value = withTiming(1, {duration: 500});
      cartTabColor.value = withTiming(COLORS.white, {duration: 500});
    }

    // favourite
    if (selectedTab == constants.screens.favourite) {
      flatlistRef?.current?.scrollToIndex({
        index: 3,
        animated: false,
      });
      favouriteTabFlex.value = withTiming(4, {duration: 500});
      favouriteTabColor.value = withTiming(COLORS.primary, {duration: 500});
    } else {
      favouriteTabFlex.value = withTiming(1, {duration: 500});
      favouriteTabColor.value = withTiming(COLORS.white, {duration: 500});
    }

    // notification
    if (selectedTab == constants.screens.notification) {
      flatlistRef?.current?.scrollToIndex({
        index: 4,
        animated: false,
      });
      notificationTabFlex.value = withTiming(4, {duration: 500});
      notificationTabColor.value = withTiming(COLORS.primary, {duration: 500});
    } else {
      notificationTabFlex.value = withTiming(1, {duration: 500});
      notificationTabColor.value = withTiming(COLORS.white, {duration: 500});
    }
  }, [selectedTab]);

  useEffect(() => {
    if(isDrawerOpen == 'open') {
      progress.value = withTiming(1);
    } else {
      progress.value = withTiming(0);
    }
  }, [isDrawerOpen]);

  const drawerAnimationStyle = useAnimatedStyle(() => {
    const scale = interpolate(progress.value, [0, 1], [1, 0.8], {
      extrapolateRight: Extrapolate.CLAMP
    });
  
    const borderRadius = interpolate(progress.value, [0, 1], [0, 25], {
      extrapolateRight: Extrapolate.CLAMP
    });

    return {borderRadius, transform: [{ scale }]};
  });

  return (
    <Animated.View style={[styles.container, drawerAnimationStyle]}>
      <Header 
        containerStyle={styles.header}
        title={selectedTab.toUpperCase()}
        leftComponent={
          <TouchableOpacity style={styles.leftComponent} onPress={() => navigation.openDrawer()}>
            <Image source={icons.menu} />
          </TouchableOpacity>
        }
        rightComponent={
          <TouchableOpacity style={styles.rightComponent} onPress={() => navigation.openDrawer()}>
            <Image source={data?.myProfile?.profile_image} style={styles.rightImage}/>
          </TouchableOpacity>
        }
      />

      <FlatList
        ref={flatlistRef}
        horizontal
        scrollEnabled={false}
        pagingEnabled
        snapToAlignment="center"
        snapToInterval={SIZES.width}
        showsHorizontalScrollIndicator={false}
        data={constants.bottom_tabs}
        keyExtractor={item => `${item.id}`}
        renderItem={({item, index}) => {
          return (
            <View style={{height: SIZES.height, width: SIZES.width}}>
              {item.label == constants.screens.home && <HomeScreen />}
              {item.label == constants.screens.search && <SearchScreen />}
              {item.label == constants.screens.cart && <MyCartScreen />}
              {item.label == constants.screens.favourite && <FavouriteScreen />}
              {item.label == constants.screens.notification && <NotificationScreen />}
            </View>
          );
        }}
      />

      {/* Footer */}
      <View style={styles.footerComponent}>
        <LinearGradient
          colors={[COLORS.transparent, COLORS.lightGray1]}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 4}}
          style={styles.linearGradient}
        />
        {/* Tabs */}
        <View style={styles.tabComponent}>
          <TabButton
            label={constants?.screens?.home}
            icon={icons.home}
            outerContainerStyle={homeFlexStyle}
            innerContainerStyle={homeColorStyle}
            isFocused={selectedTab == constants?.screens?.home}
            onPress={() => setSelectedTab(constants.screens.home)}
          />

          <TabButton
            label={constants?.screens?.search}
            icon={icons.search}
            outerContainerStyle={searchFlexStyle}
            innerContainerStyle={searchColorStyle}
            isFocused={selectedTab == constants?.screens?.search}
            onPress={() => setSelectedTab(constants.screens.search)}
          />

          <TabButton
            label={constants?.screens?.cart}
            icon={icons.cart}
            outerContainerStyle={cartFlexStyle}
            innerContainerStyle={cartColorStyle}
            isFocused={selectedTab == constants?.screens?.cart}
            onPress={() => setSelectedTab(constants.screens.cart)}
          />

          <TabButton
            label={constants?.screens?.favourite}
            icon={icons.favourite}
            outerContainerStyle={favouriteFlexStyle}
            innerContainerStyle={favouriteColorStyle}
            isFocused={selectedTab == constants?.screens?.favourite}
            onPress={() => setSelectedTab(constants.screens.favourite)}
          />

          <TabButton
            label={constants?.screens?.notification}
            icon={icons.notification}
            outerContainerStyle={notificationFlexStyle}
            innerContainerStyle={notificationColorStyle}
            isFocused={selectedTab == constants?.screens?.notification}
            onPress={() => setSelectedTab(constants?.screens?.notification)}
          />
        </View>
      </View>
    </Animated.View>
  );
};

const mapStateToProps = state => {
  return {
    selectedTab: state.TabReducer.selectedTab,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSelectedTab: selectedTab => {
      return dispatch(setSelectedTab(selectedTab));
    },
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    height: 70,
    paddingHorizontal: SIZES.padding,
    marginTop: 40,
    alignItems: 'center',
  },
  leftComponent: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.gray2,
    borderRadius: SIZES.radius,
  },
  rightComponent: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.primary,
  },
  rightImage: {
    height: 25, 
    width: 25
  },
  footerComponent: {
    height: 100, 
    justifyContent: 'flex-end'
  },
  linearGradient: {
    position: 'absolute',
    top: -40,
    left: 0,
    right: 0,
    height: 100,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  tabComponent: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: SIZES.radius,
    paddingBottom: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 25,
    backgroundColor: COLORS.white,
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LayoutComponent);