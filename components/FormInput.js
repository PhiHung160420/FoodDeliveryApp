import React from 'react';
import {TextInput, View, Text} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '../constants';

const FormInput = ({
  containerStyle,
  inputContainerStyle,
  label,
  placeholder,
  inputStyle,
  prependComponent,
  appendComponent,
  onChange,
  secureTextEntry,
  keyboardType = 'default',
  autoCompletedType = 'off',
  autoCapitalize = 'none',
  errMsg = '',
  value = '',
  maxLength,
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
          height: SIZES.height > 800 ? 55 : 45,
          paddingHorizontal: SIZES.padding,
          marginTop: SIZES.height > 800 ? SIZES.base : 0,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.lightGray1,
          ...inputContainerStyle,
        }}>
        {prependComponent}
        <TextInput
          style={{flex: 1, ...inputStyle}}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={COLORS.gray}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCompleteType={autoCompletedType}
          autoCapitalize={autoCapitalize}
          onChangeText={val => onChange(val)}
          maxLength={maxLength}
        />
        {appendComponent}
      </View>
    </View>
  );
};

export default FormInput;
