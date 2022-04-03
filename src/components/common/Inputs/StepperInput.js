import React from 'react';
import {View, Text} from 'react-native';
import {IconButton} from 'components/common';
import {COLORS, FONTS, icons, SIZES} from 'constants';

const StepperInput = ({containerStyle, value = 1, onAdd, onMinus}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 60,
        width: 130,
        backgroundColor: COLORS.lightGray2,
        borderRadius: SIZES.radius,
        ...containerStyle,
      }}>
      <IconButton
        icon={icons.minus}
        containerStyle={{
          width: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        iconStyle={{
          height: 25,
          width: 25,
          tintColor: value > 1 ? COLORS.primary : COLORS.gray,
        }}
        onPress={onMinus}
      />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{...FONTS.h2}}>{value}</Text>
      </View>
      <IconButton
        icon={icons.plus}
        containerStyle={{
          width: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        iconStyle={{
          height: 25,
          width: 25,
          tintColor: COLORS.primary,
        }}
        onPress={onAdd}
      />
    </View>
  );
};

export default StepperInput;
