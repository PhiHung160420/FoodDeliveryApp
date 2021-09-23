import React from 'react';
import {Text, View} from 'react-native';
import {FONTS} from '../constants';

const Header = ({containerStyle, title, leftComponent, rightComponent}) => {
  return (
    <View style={{flexDirection: 'row', ...containerStyle}}>
      {/* Left */}
      {leftComponent}

      {/* Title */}
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{...FONTS.h3}}>{title}</Text>
      </View>

      {/* Right */}
      {rightComponent}
    </View>
  );
};

export default Header;
