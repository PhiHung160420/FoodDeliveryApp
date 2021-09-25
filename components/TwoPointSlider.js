import MultiSlider from '@ptomasroos/react-native-multi-slider';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

const TwoPointSlider = ({
  values,
  min,
  max,
  prefix,
  postfix,
  onValuesChange,
}) => {
  return (
    <MultiSlider
      values={values}
      sliderLength={SIZES.width - SIZES.padding * 2 - 45}
      min={min}
      max={max}
      step={1}
      markerOffsetY={20}
      selectedStyle={{backgroundColor: COLORS.primary}}
      trackStyle={{
        height: 10,
        borderRadius: 10,
        backgroundColor: COLORS.lightGray2,
      }}
      minMarkerOverlapDistance={50}
      customMarker={e => (
        <View
          style={{
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: -5,
            marginLeft: -5,
          }}>
          <View
            style={{
              width: 20,
              height: 20,
              borderRadius: 10,
              borderWidth: 4,
              borderColor: COLORS.white,
              backgroundColor: COLORS.primary,
              ...styles.shadow,
            }}
          />
          <Text style={{marginTop: 5, color: COLORS.darkGray, ...FONTS.body3}}>
            {prefix}
            {e.currentValue}
            {postfix}
          </Text>
        </View>
      )}
      onValuesChange={values => onValuesChange(values)}
    />
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 1,
    shadowOpacity: 1,
  },
});

export default TwoPointSlider;
