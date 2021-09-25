import React, {useRef, useState} from 'react';
import {Animated, Image, ImageBackground, Text, View} from 'react-native';
import {COLORS, constants, FONTS, SIZES} from '../../constants';
import {TextButton} from '../../components';
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
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
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
              style={{
                borderRadius: 5,
                marginHorizontal: 6,
                width: dotWidth,
                height: 10,
                backgroundColor: dotColor,
              }}></Animated.View>
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
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            height: index == 1 ? '87%' : '100%',
            width: '100%',
          }}>
          <Image
            source={item.bannerImage}
            resizeMode="contain"
            style={{
              width: SIZES.width * 0.8,
              height: SIZES.width * 0.8,
              marginBottom: -180,
            }}
          />
        </ImageBackground>
      </View>

      {/* Detail */}
      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding * 3,
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: SIZES.radius,
        }}>
        <Text style={{...FONTS.h1, fontSize: 25}}>{item.title}</Text>
        <Text
          style={{
            marginTop: SIZES.radius,
            textAlign: 'center',
            color: COLORS.darkGray,
            paddingHorizontal: SIZES.radius,
            ...FONTS.body3,
          }}>
          {item.description}
        </Text>
      </View>

      {/* footer */}
      <View style={{height: 160}}>
        {/* Pagination / Dot */}
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Dots />
        </View>

        {/* Buttons */}
        {currentIndex < constants.onboarding_screens.length - 1 && (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: SIZES.padding,
              marginVertical: SIZES.padding,
            }}>
            <TextButton
              label="Skip"
              buttonContainerStyle={{}}
              labelStyle={{color: COLORS.darkGray2}}
              onPress={() => navigation.replace('SignIn')}
            />
            <TextButton
              label="Next"
              buttonContainerStyle={{
                width: 120,
                backgroundColor: COLORS.primary,
                height: 40,
                borderRadius: SIZES.radius,
              }}
              labelStyle={{color: COLORS.white}}
              onPress={scrollToIndexFlatlist}
            />
          </View>
        )}
        {currentIndex == constants.onboarding_screens.length - 1 && (
          <View
            style={{
              paddingHorizontal: SIZES.padding,
              marginVertical: SIZES.padding,
            }}>
            <TextButton
              label="Let's Get Started"
              buttonContainerStyle={{
                height: 60,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.primary,
              }}
              onPress={() => navigation.replace('SignIn')}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default SplashScreen;
