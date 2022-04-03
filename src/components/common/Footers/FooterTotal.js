import React from 'react';
import {Platform, View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {LineDivider, TextButton} from 'components/common';
import {COLORS, FONTS, icons, SIZES} from 'constants';

const FooterTotal = ({
  containerStyle,
  subTotal,
  shippingCost,
  total,
  onPress,
}) => {
  return (
    <View style={containerStyle}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={[COLORS.transparent, COLORS.gray2]}
        style={styles.shadowComponent}
      />
      <View style={styles.content}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.subTotal}>Subtotal</Text>
          <Text style={styles.subTotalValue}>${subTotal.toFixed(2)}</Text>
        </View>

        <View style={styles.shippingComponent}>
          <Text style={styles.shippingLabel}>Shipping Fee</Text>
          <Text style={styles.subTotalValue}>
            ${shippingCost.toFixed(2)}
          </Text>
        </View>

        <LineDivider />

        <View style={styles.totalComponent}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
        </View>

        <TextButton
          buttonContainerStyle={styles.buttonStyle}
          label="Place Your Order"
          labelStyle={styles.buttonLabel}
          onPress={onPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shadowComponent: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: -20,
    height: Platform.OS === 'ios' ? 200 : 50,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  content: {
    padding: SIZES.padding,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: COLORS.white,
  },
  subTotal: {
    flex: 1, 
    ...FONTS.body3, 
    fontSize: 18
  },
  subTotalValue: {
    ...FONTS.body3, 
    fontWeight: 'bold', 
    fontSize: 18
  },
  shippingComponent: {
    flexDirection: 'row',
    marginTop: SIZES.base,
    marginBottom: SIZES.padding,
  },
  shippingLabel: {
    flex: 1, 
    ...FONTS.body3, 
    fontSize: 18
  },
  totalComponent: {
    flexDirection: 'row', 
    marginTop: SIZES.padding
  },
  totalLabel: {
    flex: 1, 
    ...FONTS.body2, 
    fontWeight: 'bold'
  },
  totalValue: {
    ...FONTS.body2, 
    fontWeight: 'bold'
  },
  buttonStyle: {
    height: 60,
    marginTop: SIZES.padding,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonLabel: {
    color: COLORS.white, 
    fontSize: 20
  }
});

export default FooterTotal;
