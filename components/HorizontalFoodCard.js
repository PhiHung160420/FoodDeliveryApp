import React from 'react';
import {TouchableOpacity, View, Image, Text} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '../constants';

const HorizontalFoodCard = ({containerStyle, imageStype, item, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray2,
        ...containerStyle,
      }}>
      {/* Image */}
      <Image source={item.image} style={imageStype} />

      {/* Info */}
      <View style={{flex: 1}}>
        {/* Name */}
        <Text style={{...FONTS.h3, fontSize: 17}}>{item.name}</Text>

        {/* Description */}
        <Text style={{...FONTS.body4, color: COLORS.darkGray2}}>
          {item.description}
        </Text>

        {/* Price */}
        <Text style={{marginTop: SIZES.base, ...FONTS.h2}}>{item.price}</Text>
      </View>

      {/* calories */}
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          top: 5,
          right: SIZES.radius,
        }}>
        <Image source={icons.calories} style={{width: 30, height: 30}} />
        <Text style={{color: COLORS.darkGray2, ...FONTS.body5}}>
          {item.calories} Calories
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default HorizontalFoodCard;
