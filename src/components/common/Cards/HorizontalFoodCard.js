import React from 'react';
import {TouchableOpacity, View, Image, Text, StyleSheet} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '../../../constants';

const HorizontalFoodCard = ({containerStyle, imageStype, item, onPress}) => {
  return (
    <TouchableOpacity style={[styles.container, containerStyle]} onPress={onPress}>
      <Image source={item.image} style={imageStype} />

      <View style={{flex: 1}}>
        <Text style={styles.name}>{item.name}</Text>

        <Text style={styles.description}>{item.title}</Text>

        <Text style={styles.price}>{item.price}</Text>
      </View>

      <View style={styles.calories}>
        <Image source={icons.calories} style={styles.icon} />
        <Text style={styles.text}>{item.calories} Calories</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightGray2,
  },
  name: {
    ...FONTS.h3, 
    fontSize: 17
  },
  description: {
    ...FONTS.body4, 
    color: COLORS.darkGray2
  },
  price: {
    marginTop: SIZES.base, 
    ...FONTS.h2
  },
  calories: {
    flexDirection: 'row',
    position: 'absolute',
    top: 5,
    right: SIZES.radius,
  },
  icon: {
    width: 30, 
    height: 30
  },
  text: {
    color: COLORS.darkGray2, 
    ...FONTS.body5
  }
});

export default HorizontalFoodCard;
