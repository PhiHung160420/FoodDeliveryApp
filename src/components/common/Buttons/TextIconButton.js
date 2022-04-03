import React from 'react';
import {StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import {COLORS, data, FONTS, icons, SIZES} from 'constants';

const TextIconButton = (props) => {
  const {
    index,
    icon,
    label,
    isSelected = false,
    onPress,
    containerStyle,
    iconStyle,
    labelStyle
  } = props;

  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}
    >
      <Image source={icon} style={[styles.icon, iconStyle]} />
      <Text style={[styles.label, 
        labelStyle,
        {
          color: isSelected ? COLORS.white : COLORS.darkGray,
        }]}>
        {label}
      </Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 55,
    paddingHorizontal: 8,
    borderRadius: SIZES.radius,
  },
  icon: {
    marginTop: 5, 
    width: 50, 
    height: 50
  },
  label: {
    alignSelf: 'center',
    marginRight: SIZES.base,
    ...FONTS.h3
  }
});

export default TextIconButton