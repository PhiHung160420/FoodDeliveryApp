import React, {useEffect, useRef, useState} from 'react';
import {Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  useDrawerProgress,
} from '@react-navigation/drawer';
import {LayoutComponent} from 'components';
import {constants, COLORS, SIZES, FONTS, icons, data, screenNames} from 'constants';
import Animated, {interpolateNode} from 'react-native-reanimated';
import {connect} from 'react-redux';
import {setSelectedTab} from 'actions/tabActions';

const Drawer = createDrawerNavigator();

const CustomDrawerItem = ({label, icon, onPress, isFocused}) => {
  return (
    <TouchableOpacity 
      style={[styles.drawerItem, {backgroundColor: isFocused ? COLORS.transparentBlack1 : null}]} 
      onPress={onPress}
    >
      <Image source={icon} style={styles.drawerItemImage}/>
      <Text style={styles.drawerItemText}>{label}</Text>
    </TouchableOpacity>
  );
};

const CustomDrawerContent = ({
  navigation,
  setProgress,
  selectedTab,
  setSelectedTab,
}) => {
  const progress = useDrawerProgress();

  useEffect(() => {
    setProgress(progress);
  }, [progress]);

  return (
    <DrawerContentScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {/* Close Button */}
        <View style={styles.closeButtonContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={() => navigation.closeDrawer()}>
            <Image source={icons.cross} style={styles.closeIcon}/>
          </TouchableOpacity>
        </View>

        {/* Profile */}
        <TouchableOpacity style={styles.profileContainer}>
          <Image source={data?.myProfile?.profile_image} style={styles.profileImage} />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>{data?.myProfile?.name}</Text>
            <Text style={styles.profileAddress}>{data?.myProfile?.address}</Text>
          </View>
        </TouchableOpacity>

        {/* Drawer Items */}
        <View style={styles.drawerList}>
          {constants.bottom_tabs.map((item, index) => (
            <CustomDrawerItem
              key={index}
              label={item.label}
              icon={item.icon}
              isFocused={selectedTab == item.label}
              onPress={() => {
                setSelectedTab(item.label);
                navigation.navigate(screenNames.Main_Layout);
              }}
            />
          ))}

          <CustomDrawerItem
            label={constants.screens.my_wallet}
            icon={icons.wallet}
          />

          <View style={styles.lineDevider}/>

          <CustomDrawerItem label="Track Your Order" icon={icons.location} />
          <CustomDrawerItem label="Order History" icon={icons.order_history} onPress={() => navigation.navigate('OrderHistory')}/>
          <CustomDrawerItem label="Coupons" icon={icons.coupon} />
          <CustomDrawerItem label="Settings" icon={icons.setting} onPress={() => navigation.navigate('Setting')}/>
          <CustomDrawerItem label="Invite a Friend" icon={icons.profile} />
        </View>

        <View style={styles.lineDevider}/>

        <View style={styles.logoutButton}>
          <CustomDrawerItem
            label="Logout"
            icon={icons.logout}
            onPress={() => navigation.navigate(screenNames.Onboarding)}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const CustomDrawer = ({selectedTab, setSelectedTab}) => {
  const [progress, setProgress] = useState(new Animated.Value(0));

  const scale = interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  const borderRadius = interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 25],
  });

  const animatedStyle = {borderRadius, transform: [{scale}]};

  const screenOptions = () => {
    return {
      drawerType: 'slide',
      overlayColor: 'transparent',
      drawerStyle: styles.drawerStyle,
      sceneContainerStyle: styles.sceneContainerStyle,
      headerShown: false,
    }
  };

  return (
    <View style={styles.background}>
      <Drawer.Navigator
        screenOptions={screenOptions()}
        initialRouteName={screenNames.Main_Layout}
        drawerContent={props => {
          return (
            <CustomDrawerContent
              {...props}
              setProgress={setProgress}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
          );
        }}>
        <Drawer.Screen name={screenNames.Main_Layout}>
          {props => (
            <LayoutComponent {...props} drawerAnimationStyle={animatedStyle} />
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
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
  background: {
    flex: 1, 
    backgroundColor: COLORS.primary
  },
  drawerItem: {
    flexDirection: 'row',
    height: 40,
    marginBottom: SIZES.base,
    alignItems: 'center',
    borderRadius: SIZES.base,
    paddingLeft: SIZES.base,
  },
  drawerItemImage: {
    width: 30, 
    height: 30, 
    tintColor: COLORS.white
  },
  drawerItemText: {
    marginLeft: 10, 
    color: COLORS.white, 
    ...FONTS.h3
  },
  container: {
    flex: 1, 
    paddingHorizontal: SIZES.radius
  },
  closeButtonContainer: {
    alignItems: 'flex-start', 
    justifyContent: 'center'
  },
  closeButton: {
    alignItems: 'center', 
    justifyContent: 'center'
  },
  closeIcon: {
    height: 35, 
    width: 35, 
    tintColor: COLORS.white
  },
  profileContainer: {
    flexDirection: 'row',
    marginTop: SIZES.radius,
    alignItems: 'center',
  },
  profileImage: {
    width: 50, 
    height: 50
  },
  profileInfo: {
    flexDirection: 'column', 
    marginLeft: SIZES.radius
  },
  profileName: {
    color: COLORS.white, 
    ...FONTS.h3
  },
  profileAddress: {
    color: COLORS.white, 
    ...FONTS.body4
  },
  drawerList: {
    flex: 1, 
    marginTop: SIZES.padding
  },
  lineDevider: {
    height: 1,
    marginVertical: SIZES.radius,
    marginLeft: SIZES.radius,
    backgroundColor: COLORS.lightGray1,
  },
  logoutButton: {
    marginTop: SIZES.base,
    marginLeft: 5,
  },
  drawerStyle: {
    flex: 1,
    width: '65%',
    padding: 20,
    backgroundColor: 'transparent',
  },
  sceneContainerStyle: {
    backgroundColor: 'transparent',
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer);
