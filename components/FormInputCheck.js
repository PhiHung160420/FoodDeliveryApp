import React from 'react';
import {Image, View} from 'react-native';
import {COLORS, icons} from '../constants';

const FormInputCheck = ({value, error}) => {
  return (
    <View style={{justifyContent: 'center'}}>
      <Image
        source={
          value == '' || (value !== '' && error == '')
            ? icons.correct
            : icons.cross
        }
        style={{
          width: 25,
          height: 25,
          tintColor:
            value == ''
              ? COLORS.gray
              : value !== '' && error == ''
              ? COLORS.green
              : COLORS.red,
        }}
      />
    </View>
  );
};

export default FormInputCheck;
