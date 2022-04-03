import React, {useRef, useState} from 'react';
import {Animated, Image, ImageBackground, Text, View, StyleSheet} from 'react-native';
import {COLORS, constants, FONTS, SIZES, screenNames} from 'constants';
import {TextButton} from 'components/common';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = ({
  item,
  index,
  scrollX,
  scrollToIndexFlatlist,
  currentIndex,
}) => {
  const navigation = useNavigation();

  const Dots = () => {
    const dotPosition = Animated.divide(scrollX, SIZES.width);

    return (
      <View style={styles.dotContainer}>
        {constants.onboarding_screens.map((item, index) => {
          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [
              COLORS.lightOrange,
              COLORS.primary,
              COLORS.lightOrange,
            ],
            extrapolate: 'clamp',
          });

          const dotWidth = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [10, 30, 10],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={`dot-${index}`}
              style={[styles.dotStyle, {width: dotWidth, backgroundColor: dotColor}]}/>
          );
        })}
      </View>
    );
  };

  return (
    <View style={{width: SIZES.width}}>
      {/* Header */}
      <View style={{flex: 3}}>
        <ImageBackground
          source={item.backgroundImage}
          style={[styles.imageBackground, {height: index == 1 ? '87%' : '100%'}]}>
          <Image
            source={item.bannerImage}
            resizeMode="contain"
            style={styles.bannerImage}
          />
        </ImageBackground>
      </View>

      {/* Detail */}
      <View
        style={styles.detail}>
        
        <Text style={styles.title}>{item.title}</Text>
        <Text
          style={styles.description}>
          {item.description}
        </Text>
      </View>

      {/* footer */}
      <View style={{height: 160}}>
        {/* Pagination / Dot */}
        <View style={styles.pagination}>
          <Dots />
        </View>

        {/* Buttons */}
        {currentIndex < constants.onboarding_screens.length - 1 && (
          <View style={styles.buttonContainer}>
            <TextButton
              label="Skip"
              labelStyle={{color: COLORS.darkGray2}}
              onPress={() => navigation.replace(screenNames.SignIn)}
            />
            <TextButton
              label="Next"
              buttonContainerStyle={styles.buttonNext}
              labelStyle={{color: COLORS.white}}
              onPress={scrollToIndexFlatlist}
            />
          </View>
        )}
        {currentIndex == constants.onboarding_screens.length - 1 && (
          <View
            style={styles.padding}>
            <TextButton
              label="Let's Get Started"
              buttonContainerStyle={styles.getStartButton}
              onPress={() => navigation.replace(screenNames.SignIn)}
            />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  bannerImage: {
    width: SIZES.width * 0.8,
    height: SIZES.width * 0.8,
    marginTop: 200
  },
  detail: {
    flex: 1,
    marginTop: SIZES.padding * 3,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SIZES.radius,
  },
  description: {
    marginTop: SIZES.radius,
    textAlign: 'center',
    color: COLORS.darkGray,
    paddingHorizontal: SIZES.radius,
    ...FONTS.body3,
  },
  title: {
    ...FONTS.h1, 
    fontSize: 25
  },
  pagination: {
    flex: 1, 
    justifyContent: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.padding,
    marginVertical: SIZES.padding,
  },
  buttonNext: {
    width: 120,
    backgroundColor: COLORS.primary,
    height: 40,
    borderRadius: SIZES.radius,
  },
  padding: {
    paddingHorizontal: SIZES.padding,
    marginVertical: SIZES.padding,
  },
  getStartButton: {
    height: 60,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.primary,
  },
  dotStyle: {
    borderRadius: 5,
    marginHorizontal: 6,
    height: 10,
  },
});

export default SplashScreen;
