import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import { COLORS, FONTS, SIZES } from '../../../constants';
import TextButton from '../Buttons/TextButton';

const OrderCard = ({item}) => {
  const renderStatus = () => {
    if (item?.status == 'Delivered') {
      return {
        color: COLORS.green,
        status: 'Order Delivered'
      };
    } else if (item?.status == 'Cancel') {
      return {
        color: COLORS.red,
        status: 'Order Calcelled'
      };
    }
    return {
      color: COLORS.orange,
      status: 'Food is on the way'
    };
  };

  return (
    <View style={styles.container}>
      <Text style={styles.totalPrice}>{item?.totalPrice ? `$${item?.totalPrice.toFixed(2)}` : item?.order_code}</Text>

      <View style={styles.contentContainer}>
        <View style={styles.imageBackround}>
          <Image source={item?.avatar} style={styles.avatar}/>
        </View>

        <View style={styles.infoContainer}>
          <Text style={{...FONTS.h3}}>{item?.name || ''}</Text>

          <View style={styles.flexRow}>
            <Text style={styles.dateTime}>{item?.date_time || ''}</Text>
            <Text style={[styles.dateTime, {marginLeft: 5}]}>- {item?.items || ''} items</Text>
          </View>

          <Text style={{color: renderStatus().color, fontWeight: '500'}}>{renderStatus().status}</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TextButton 
          label={item?.status == 'InProgress' ? 'Track-Order' : 'Re-Order'}
          buttonContainerStyle={styles.leftButton}
          labelStyle={styles.leftButtonLabel}
        />

        <TextButton 
          label={item?.status == 'InProgress' ? 'Cancel' : 'Rate'}
          buttonContainerStyle={styles.rightButton}
          labelStyle={styles.rightButtonLabel}
        />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightGray2,
    marginTop: SIZES.radius
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar: {
    width: 30,
    height: 30,
  },
  imageBackround: {
    backgroundColor: COLORS.white,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.radius
  },
  infoContainer: {
    marginLeft: 20,
  },
  dateTime: {
    fontSize: 16,
    color: COLORS.gray,
    marginVertical: 5
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SIZES.radius
  },
  leftButton: {
    width: 150,
    height: 40,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.primary
  },
  leftButtonLabel: {
    color: COLORS.white,
    fontSize: 16
  },
  rightButton: {
    width: 150,
    height: 40,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightOrange2,
    marginLeft: 10
  },
  rightButtonLabel: {
    color: COLORS.primary,
    fontSize: 16
  },
  totalPrice: {
    ...FONTS.h3,
    color: COLORS.primary,
    position: 'absolute',
    right: 10,
    top: 10,
  }
});

export default OrderCard