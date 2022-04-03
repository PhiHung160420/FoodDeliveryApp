import React from 'react';
import {TouchableOpacity, View, Text, Image, StyleSheet} from 'react-native';
import {COLORS, FONTS} from 'constants';

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
      style={[styles.container, buttonContainerStyle]}
      onPress={onPress}
    >
      {icon != null && <Image source={icon} style={[styles.icon, iconStyle]} />}

      <Text style={[styles.label_1, labelStyle]}>{label}</Text>
      
      {label2 != '' && <Text style={[styles.label_2,label2Style]}>{label2}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 20, 
    height: 20
  },
  label_1: {
    ...FONTS.h3
  },
  label_2: {
    flex: 1,
    textAlign: 'right',
    color: COLORS.white,
    ...FONTS.h3,
  }
});

export default TextButton;