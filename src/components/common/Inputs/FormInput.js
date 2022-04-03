import React from 'react';
import {TextInput, View, Text, StyleSheet} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from 'constants';

const FormInput = (props) => {
  const {
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
    value,
    maxLength,
  } = props;

  return (
    <View style={containerStyle}>
      {/* Label & Error Msg */}
      <View style={styles.flexRow}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.textError}>{errMsg}</Text>
      </View>

      {/* Text Input */}
      <View style={[styles.textInput, inputContainerStyle]}>
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
          onChangeText={onChange}
          maxLength={maxLength}
        />
        
        {appendComponent}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  label: {
    color: COLORS.gray, 
    ...FONTS.h3, 
    marginLeft: 5
  },
  textError: {
    color: COLORS.red, 
    ...FONTS.body4
  },
  textInput: {
    flexDirection: 'row',
    height: SIZES.height > 800 ? 55 : 45,
    paddingHorizontal: SIZES.padding,
    marginTop: SIZES.height > 800 ? SIZES.base : 0,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightGray1,
  }
});

export default FormInput;
