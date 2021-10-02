import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, ScrollView, Image} from 'react-native';
import {
  CardItem,
  FooterTotal,
  FormInput,
  Header,
  TextButton,
} from '../../components';
import {COLORS, SIZES, icons, dummyData, FONTS} from '../../constants';

const Checkout = ({route, navigation}) => {
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    let {selectedCard} = route.params;
    setSelectedCard(selectedCard);
  }, []);

  const renderHeader = () => {
    return (
      <Header
        title="CHECKOUT"
        containerStyle={styles.headerContainer}
        leftComponent={
          <TextButton
            icon={icons.back}
            iconStyle={styles.iconBack}
            buttonContainerStyle={styles.btnBack}
            onPress={() => navigation.goBack()}
          />
        }
        rightComponent={<View style={{width: 40}}></View>}
      />
    );
  };

  const renderMyCards = () => {
    return (
      <View style={{}}>
        {selectedCard &&
          dummyData.myCards.map((item, index) => {
            return (
              <CardItem
                key={`MyCard-${item.id}`}
                item={item}
                isSelectedItem={
                  `${selectedCard?.key}-${selectedCard?.id}` ==
                  `MyCard-${item.id}`
                }
                onPress={() => setSelectedCard({...item, key: 'MyCard'})}
              />
            );
          })}
      </View>
    );
  };

  const renderDeliveryAddress = () => {
    return (
      <View style={{marginTop: SIZES.padding}}>
        <Text style={{...FONTS.h3}}>Delivery Address</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: SIZES.radius,
            paddingVertical: SIZES.radius,
            paddingHorizontal: SIZES.padding,
            borderWidth: 2,
            borderRadius: SIZES.radius,
            borderColor: COLORS.lightGray2,
          }}>
          <Image source={icons.location1} style={{width: 40, height: 40}} />
          <Text
            style={{
              marginLeft: SIZES.radius,
              width: '80%',
              ...FONTS.body3,
            }}>
            123 Hung Vuong street, Long Khanh city
          </Text>
        </View>
      </View>
    );
  };

  const renderCoupon = () => {
    return (
      <View style={{marginTop: SIZES.padding}}>
        <Text style={{...FONTS.h3}}>Add Coupon</Text>
        <FormInput
          inputContainerStyle={{
            marginTop: 0,
            paddingLeft: SIZES.padding,
            paddingRight: 0,
            borderWidth: 2,
            backgroundColor: COLORS.white,
            borderColor: COLORS.lightGray2,
            overflow: 'hidden',
          }}
          placeholder="Coupon Code"
          appendComponent={
            <View
              style={{
                width: 60,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: COLORS.primary,
              }}>
              <Image source={icons.discount} style={{width: 40, height: 40}} />
            </View>
          }
        />
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      {/* Header */}
      {renderHeader()}

      {/* body */}
      <ScrollView
        style={{
          paddingHorizontal: SIZES.padding,
          paddingBottom: 30,
        }}
        showsVerticalScrollIndicator={false}>
        {/* My Cards */}
        {renderMyCards()}

        {/* Delivery Address */}
        {renderDeliveryAddress()}

        {/* coupon */}
        {renderCoupon()}
      </ScrollView>

      {/* Footer */}
      <FooterTotal
        containerStyle={{marginTop: SIZES.padding}}
        subTotal={37.97}
        shippingCost={0.0}
        total={37.97}
        onPress={() => navigation.replace('Success')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 50,
    marginHorizontal: SIZES.padding,
    marginTop: 50,
  },
  btnBack: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.radius,
    borderWidth: 1,
    borderColor: COLORS.gray2,
  },
  iconBack: {width: 20, height: 20, tintColor: COLORS.gray2},
});

export default Checkout;
