import React from 'react';
import {ImageBackground, Image, View, Text, StyleSheet} from 'react-native';
import {images, SIZES, COLORS, FONTS} from 'constants';

const PaymentCard = ({selectedCard, cardHolderName, cardNumber, expiryDate}) => {
  return (
    <ImageBackground source={images.card} style={styles.background}>
      <Image source={selectedCard?.icon} resizeMode="contain" style={styles.cardImage} />

      <View style={styles.cardContent}>
        <Text style={styles.cardHolderName}>{cardHolderName}</Text>
        <View style={styles.cardInfo}>
          <Text style={styles.cardNumber}>{cardNumber}</Text>
          <Text style={styles.cardExpireDate}>{expiryDate}</Text>
        </View>
      </View>
    </ImageBackground>
  )
};

const styles = StyleSheet.create({
  background:  {
    height: 200,
    width: '100%',
    marginTop: SIZES.radius,
    borderRadius: SIZES.radius,
    overflow: 'hidden',
  },
  cardImage: {
    position: 'absolute',
    top: 10,
    right: 10,
    height: 40,
    width: 40,
  },
  cardContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.base,
  },
  cardHolderName: {
    color: COLORS.white, 
    ...FONTS.h3
  },
  cardInfo: {
    flexDirection: 'row', 
    alignItems: 'center'
  },
  cardNumber: {
    flex: 1, 
    color: COLORS.white, 
    ...FONTS.body3
  },
  cardExpireDate: {
    color: COLORS.white, 
    ...FONTS.body3
  }
});

export default PaymentCard