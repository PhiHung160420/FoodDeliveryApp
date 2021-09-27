import React from 'react';
import {Image, Text, View} from 'react-native';
import {COLORS, constants, FONTS, icons, images, SIZES} from '../../constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const AuthLayout = ({title, subTitle, titleContainerStyle, children}) => {
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: SIZES.padding * 3,
        backgroundColor: COLORS.white,
      }}>
      <View style={{flex: 1, paddingHorizontal: SIZES.padding}}>
        {/* App Icon */}
        <View style={{alignItems: 'center'}}>
          <Image
            source={images.logo_02}
            resizeMode="contain"
            style={{height: 100, width: 200}}
          />
        </View>

        {/* Title & Subtitle */}
        <View style={{marginTop: SIZES.padding, ...titleContainerStyle}}>
          <Text style={{textAlign: 'center', ...FONTS.h2}}>{title}</Text>
          <Text
            style={{
              textAlign: 'center',
              color: COLORS.darkGray,
              ...FONTS.h3,
              marginTop: SIZES.base,
            }}>
            {subTitle}
          </Text>
        </View>

        {/* Content / Children */}
        {children}
      </View>
    </View>
  );
};

export default AuthLayout;
