import React from 'react';
import {View, TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '../../../constants';

const VerticalFoodCard = ({containerStyle, item, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        ...containerStyle,
      }}>
      {/* Calories - favourite */}
      <View style={styles.caloriesContainer}>
        {/* Calories */}
        <View style={styles.calories}>
          <Image source={icons.calories} style={styles.caloriesIcon} />
          <Text style={styles.caloriesText}>Calories</Text>
        </View>

        {/* Favourite */}
        <Image
          source={icons.love}
          style={{
            ...styles.favorite,
            tintColor: item.isFavourite ? COLORS.primary : COLORS.gray,
          }}
        />
      </View>

      {/* Image */}
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
      </View>

      {/* Info */}
      <View style={styles.infoContainer}>
        <Text style={{...FONTS.h3}}>{item.name}</Text>
        <Text style={styles.infoText}>{item.description}</Text>
        <Text style={{...FONTS.h2}}>$ {item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightGray2,
    borderRadius: SIZES.radius,
  },
  caloriesContainer: {flexDirection: 'row'},
  calories: {flex: 1, flexDirection: 'row'},
  caloriesIcon: {width: 30, height: 30},
  caloriesText: {color: COLORS.darkGray2, ...FONTS.body5},
  favorite: {
    width: 20,
    height: 20,
  },
  imageContainer: {
    height: 150,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {height: '100%', width: '100%'},
  infoContainer: {alignItems: 'center', marginTop: -20},
  infoText: {
    color: COLORS.darkGray2,
    textAlign: 'center',
    ...FONTS.body5,
  },
});

export default VerticalFoodCard;
