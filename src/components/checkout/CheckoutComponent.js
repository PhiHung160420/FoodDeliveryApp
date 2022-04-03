import React from 'react'
import {Text, View, StyleSheet, ScrollView, Image} from 'react-native';
import {
  CardItem,
  FooterTotal,
  FormInput,
  Header,
  TextButton,
} from 'components/common';
import {COLORS, SIZES, icons, data, FONTS} from 'constants';
import { useNavigation } from '@react-navigation/native';

const CheckoutComponent = ({selectedCard, setSelectedCard}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
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

      <ScrollView style={styles.scrollViewContainer} showsVerticalScrollIndicator={false}>
        <View>
          {selectedCard &&
            data.myCards.map((item, index) => {
              return (
                <CardItem
                  key={`MyCard-${item.id}`}
                  item={item}
                  isSelectedItem={`${selectedCard?.key}-${selectedCard?.id}` == `MyCard-${item.id}`}
                  onPress={() => setSelectedCard({...item, key: 'MyCard'})}
                />
              )
            })}
        </View>

        <View style={{marginTop: SIZES.padding}}>
          <Text style={{...FONTS.h3}}>Delivery Address</Text>
          <View style={styles.addressContainer}>
            <Image source={icons.location1} style={styles.locationIcon} />
            <Text style={styles.address}>123 Hung Vuong street, Long Khanh city</Text>
          </View>
        </View>

        <View style={{marginTop: SIZES.padding}}>
          <Text style={{...FONTS.h3}}>Add Coupon</Text>
          <FormInput 
            inputContainerStyle={styles.couponInput}
            placeholder="Coupon Code"
            appendComponent={
              <View style={styles.appendComponent}>
                <Image source={icons.discount} style={styles.discount} />
              </View>
            }
          />
        </View>
      </ScrollView>

      <FooterTotal
        containerStyle={{marginTop: SIZES.padding}}
        subTotal={37.97}
        shippingCost={0.0}
        total={37.97}
        onPress={() => navigation.replace('Success')}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: COLORS.white
  },
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
  iconBack: {
    width: 20, 
    height: 20, 
    tintColor: COLORS.gray2
  },
  scrollViewContainer: {
    paddingHorizontal: SIZES.padding,
    paddingBottom: 30,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZES.radius,
    paddingVertical: SIZES.radius,
    paddingHorizontal: SIZES.padding,
    borderWidth: 2,
    borderRadius: SIZES.radius,
    borderColor: COLORS.lightGray2,
  },
  locationIcon: {
    width: 40, 
    height: 40
  },
  address: {
    marginLeft: SIZES.radius,
    width: '80%',
    ...FONTS.body3,
  },
  couponInput: {
    marginTop: 0,
    paddingLeft: SIZES.padding,
    paddingRight: 0,
    borderWidth: 2,
    backgroundColor: COLORS.white,
    borderColor: COLORS.lightGray2,
    overflow: 'hidden',
  },
  appendComponent: {
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
  },
  discount: {
    width: 40, 
    height: 40
  }
});

export default CheckoutComponent