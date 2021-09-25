import React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import {COLORS, FONTS} from '../constants';

const TextButton = ({
  label,
  labelStyle,
  buttonContainerStyle,
  icon,
  iconStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        ...buttonContainerStyle,
      }}
      onPress={onPress}>
      {icon && (
        <Image source={icon} style={{width: 20, height: 20, ...iconStyle}} />
      )}
      <Text style={{...FONTS.h3, ...labelStyle}}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;
