import React from 'react';
import {Platform, View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {LineDivider, TextButton} from '.';
import {COLORS, FONTS, icons, SIZES} from '../constants';

const FooterTotal = ({subTotal, shippingCost, total, onPress}) => {
  return (
    <View>
      {/* Shadow */}
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={[COLORS.transparent, COLORS.gray2]}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: -20,
          height: Platform.OS === 'ios' ? 200 : 50,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}
      />
      {/* Order Detail */}
      <View
        style={{
          padding: SIZES.padding,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: COLORS.white,
        }}>
        {/* subtotal */}
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{flex: 1, ...FONTS.body3, fontWeight: 'bold', fontSize: 18}}>
            Subtotal
          </Text>
          <Text style={{...FONTS.body3, fontWeight: 'bold', fontSize: 18}}>
            ${subTotal.toFixed(2)}
          </Text>
        </View>

        {/* shipping fee */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.base,
            marginBottom: SIZES.padding,
          }}>
          <Text
            style={{flex: 1, ...FONTS.body3, fontWeight: 'bold', fontSize: 18}}>
            Shipping Fee
          </Text>
          <Text style={{...FONTS.body3, fontWeight: 'bold', fontSize: 18}}>
            ${shippingCost.toFixed(2)}
          </Text>
        </View>

        {/* Line */}
        <LineDivider />

        {/* total */}
        <View style={{flexDirection: 'row', marginTop: SIZES.padding}}>
          <Text style={{flex: 1, ...FONTS.body2, fontWeight: 'bold'}}>
            Total
          </Text>
          <Text style={{...FONTS.body2, fontWeight: 'bold'}}>
            ${total.toFixed(2)}
          </Text>
        </View>

        {/* Order Button */}
        <TextButton
          buttonContainerStyle={{
            height: 60,
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary,
          }}
          label="Place Your Order"
          labelStyle={{color: COLORS.white, fontSize: 20}}
          onPress={onPress}
        />
      </View>
    </View>
  );
};

export default FooterTotal;
