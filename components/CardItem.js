import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '../constants';

const CardItem = ({item, isSelectedItem, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        height: 100,
        alignItems: 'center',
        marginTop: SIZES.radius,
        paddingHorizontal: SIZES.padding,
        borderWidth: 2,
        borderRadius: SIZES.radius,
        borderColor: isSelectedItem ? COLORS.primary : COLORS.lightGray2,
      }}
      onPress={onPress}>
      {/* card image */}
      <View
        style={{
          width: 60,
          height: 60,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 2,
          borderRadius: SIZES.radius,
          borderColor: COLORS.lightGray2,
        }}>
        <Image
          source={item.icon}
          style={{width: 35, height: 35}}
          resizeMode="contain"
        />
      </View>

      {/* card name */}
      <Text style={{flex: 1, marginLeft: SIZES.radius, ...FONTS.h3}}>
        {item.name}
      </Text>

      {/* radio button */}
      <Image
        source={isSelectedItem ? icons.check_on : icons.check_off}
        style={{width: 25, height: 25}}
      />
    </TouchableOpacity>
  );
};

export default CardItem;
