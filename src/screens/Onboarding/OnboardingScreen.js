import React, {useRef, useState} from 'react';
import {Animated, Image, Text, View, FlatList} from 'react-native';
import {COLORS, constants, images, SIZES} from '../../constants';
import SplashScreen from './SplashScreen';

const OnboardingScreen = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const flatListRef = useRef();

  const [currentIndex, setCurrentIndex] = useState(0);

  const onViewChangeRef = useRef(({viewableItems, changed}) =>
    setCurrentIndex(viewableItems[0].index),
  );

  const scrollToIndexFlatlist = index => {
    flatListRef?.current.scrollToIndex({
      index: currentIndex + 1,
      animated: true,
    });
  };

  const renderHeaderLogo = () => {
    return (
      <View
        style={{
          position: 'absolute',
          top: SIZES.height > 800 ? 50 : 25,
          left: 0,
          right: 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={images.logo_02}
          resizeMode="contain"
          style={{width: SIZES.width * 0.5, height: 100}}
        />
      </View>
    );
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
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      {renderHeaderLogo()}

      <Animated.FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        data={constants.onboarding_screens}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewChangeRef.current}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        keyExtractor={item => `${item.id}`}
        renderItem={renderFlashscreenItem}
      />
    </View>
  );
};

export default OnboardingScreen;
