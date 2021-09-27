import React from 'react';
import {TextInput, View, Text} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '../constants';

const FormInput = ({
  containerStyle,
  label,
  placeholder,
  inputStyle,
  prependComponent,
  appendComponent,
  onChange,
  secureTextEntry,
  keyboardType,
  autoCompletedType = 'off',
  autoCapitalize = 'none',
  errMsg = '',
}) => {
  return (
    <View style={{...containerStyle}}>
      {/* Label & Error Msg */}
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{color: COLORS.gray, ...FONTS.h3, marginLeft: 5}}>
          {label}
        </Text>
        <Text style={{color: COLORS.red, ...FONTS.body4}}>{errMsg}</Text>
      </View>

      {/* Text Input */}
      <View
        style={{
          flexDirection: 'row',
          height: 55,
          paddingHorizontal: SIZES.padding,
          marginTop: SIZES.base,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.lightGray1,
        }}>
        {prependComponent}
        <TextInput
          style={{flex: 1, ...inputStyle}}
          placeholder={placeholder}
          placeholderTextColor={COLORS.gray}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCompleteType={autoCompletedType}
          autoCapitalize={autoCapitalize}
          onChangeText={val => onChange(val)}
        />
        {appendComponent}
      </View>
    </View>
  );
};

export default FormInput;
