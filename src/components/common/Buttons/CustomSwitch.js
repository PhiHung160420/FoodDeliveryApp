import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback, Text} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../../constants';

const CustomSwitch = ({value, onChange}) => {
  return (
    <TouchableWithoutFeedback onPress={() => onChange(!value)}>
      <View style={{flexDirection: 'row'}}>
        {/* Switch */}
        <View
          style={value ? styles.switchOnContainer : styles.switchOffContainer}>
          {/* Dots */}
          <View
            style={{
              ...styles.dot,
              backgroundColor: value ? COLORS.white : COLORS.gray,
            }}
          />
        </View>
        {/* Text */}
        <Text
          style={{
            marginLeft: SIZES.base,
            ...FONTS.body4,
            color: value ? COLORS.primary : COLORS.gray,
          }}>
          Save me
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  switchOnContainer: {
    width: 45,
    height: 22,
    paddingRight: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderRadius: 10,
    backgroundColor: COLORS.primary,
  },
  switchOffContainer: {
    width: 45,
    height: 22,
    paddingLeft: 5,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 10,
    backgroundColor: COLORS.gray2,
  },
  dot: {
    width: 15,
    height: 15,
    borderRadius: 8,
  },
});

export default CustomSwitch;
