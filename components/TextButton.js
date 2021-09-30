import React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import {COLORS, FONTS} from '../constants';

const TextButton = ({
  label,
  labelStyle,
  buttonContainerStyle,
  icon = null,
  iconStyle,
  onPress,
  disable,
  label2 = '',
  label2Style,
}) => {
  return (
    <TouchableOpacity
      disabled={disable}
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        ...buttonContainerStyle,
      }}
      onPress={onPress}>
      {icon != null && (
        <Image source={icon} style={{width: 20, height: 20, ...iconStyle}} />
      )}
      <Text style={{...FONTS.h3, ...labelStyle}}>{label}</Text>
      {label2 != '' && (
        <Text
          style={{
            flex: 1,
            textAlign: 'right',
            color: COLORS.white,
            ...FONTS.h3,
            ...label2Style,
          }}>
          {label2}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default TextButton;
