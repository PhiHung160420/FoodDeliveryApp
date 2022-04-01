import React from 'react';
import {TouchableOpacity, StyleSheet, Image, View, Text} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '../../../constants';

const CartQuantityButton = ({containerStyle, iconStyle, quantity, onPress}) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}>
      <Image source={icons.cart} style={[styles.cart, iconStyle]} />
      <View style={styles.quantityContainer}>
        <Text style={styles.quantityText}>{quantity}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightOrange2,
  },
  cart: {
    width: 20,
    height: 20,
    tintColor: COLORS.black,
  },
  quantityContainer: {
    position: 'absolute',
    top: 3,
    right: 3,
    height: 15,
    width: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
  },
  quantityText: {
    color: COLORS.white,
    ...FONTS.body5,
    lineHeight: 0,
    fontSize: 10,
  },
});

export default CartQuantityButton;
