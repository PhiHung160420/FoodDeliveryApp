import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import {COLORS, constants, FONTS, icons, images, SIZES} from '../../../constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const AuthLayout = ({title, subTitle, titleContainerStyle, children}) => {
  return (
    <View style={styles.container}>
      <View style={styles.authLayout}>
        {/* App Icon */}
        <View style={styles.iconContainer}>
          <Image
            source={images.logo_02}
            resizeMode="contain"
            style={styles.icon}
          />
        </View>

        {/* Title & Subtitle */}
        <View style={{...styles.contentContainer, ...titleContainerStyle}}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>

        {/* Content / Children */}
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: SIZES.padding * 3,
    backgroundColor: COLORS.white,
  },
  authLayout: {
    flex: 1, 
    paddingHorizontal: SIZES.padding
  },
  iconContainer: {
    alignItems: 'center'
  },
  icon: {
    height: 100, 
    width: 200
  },
  contentContainer: {
    marginTop: SIZES.padding
  },
  title: {
    textAlign: 'center', 
    ...FONTS.h2
  },
  subTitle: {
    textAlign: 'center',
    color: COLORS.darkGray,
    ...FONTS.h3,
    marginTop: SIZES.base,
  },
});

export default AuthLayout;
