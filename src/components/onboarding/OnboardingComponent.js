import React, {useRef, useState} from 'react';
import {Animated, Image, Text, View, FlatList, StyleSheet} from 'react-native';
import {COLORS, constants, images, SIZES, ScreenName} from 'constants';
import SplashScreen from './SplashScreen';

const OnboardingComponent = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const flatListRef = useRef();

  const [currentIndex, setCurrentIndex] = useState(0);

  const onViewChangeRef = useRef(({viewableItems, changed}) =>
    setCurrentIndex(viewableItems[0].index),
  );

  const scrollToIndexFlatlist = () => {
    flatListRef?.current.scrollToIndex({
      index: currentIndex + 1,
      animated: true,
    });
  };

  const renderFlashscreenItem = ({item, index}) => (
    <SplashScreen
      item={item}
      index={index}
      scrollX={scrollX}
      scrollToIndexFlatlist={scrollToIndexFlatlist}
      currentIndex={currentIndex}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerLogo}>
        <Image
          source={images.logo_02}
          resizeMode="contain"
          style={styles.headerImage}
        />
      </View>

      <Animated.FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        data={constants.onboarding_screens}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewChangeRef.current}
        onScroll={Animated.event(
          [
            {nativeEvent: {contentOffset: {x: scrollX}}}
          ],
          {useNativeDriver: false},
        )}
        keyExtractor={item => `${item.id}`}
        renderItem={renderFlashscreenItem}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  headerLogo: {
    position: 'absolute',
    top: SIZES.height > 800 ? 50 : 25,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerImage: {
    width: SIZES.width * 0.5, 
    height: 100
  },
  container: {
    flex: 1, 
    backgroundColor: COLORS.white
  }
});

export default OnboardingComponent