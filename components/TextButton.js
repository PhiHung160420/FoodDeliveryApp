import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {COLORS, FONTS} from '../constants';

const TextButton = ({label, labelStyle, buttonContainerStyle, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        ...buttonContainerStyle,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={onPress}>
      <Text style={{color: COLORS.white, ...FONTS.h3, ...labelStyle}}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;
