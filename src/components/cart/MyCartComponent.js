import React from 'react'
import {View, StyleSheet, Text, Image} from 'react-native';
import {COLORS, data, FONTS, icons, SIZES, screenNames} from 'constants';
import {
  Header,
  TextButton,
  CartQuantityButton,
  StepperInput,
  IconButton,
  FooterTotal,
} from 'components/common';
import {SwipeListView} from 'react-native-swipe-list-view';
import { useNavigation } from '@react-navigation/native';

const MyCartComponent = ({mycartList, updateQuantityHandler, removeMycartList}) => {
  const navigation = useNavigation();
  
  const renderHeader = () => {
    return (
      <Header
        title="MY CART"
        containerStyle={styles.headerContainer}
        leftComponent={
          <TextButton
            icon={icons.back}
            iconStyle={styles.iconBack}
            buttonContainerStyle={styles.btnBack}
            onPress={() => navigation.goBack()}
          />
        }
        rightComponent={<CartQuantityButton quantity={2} />}
      />
    );
  };

  const renderCartList = () => {
    return (
      <SwipeListView
        data={mycartList}
        keyExtractor={item => `${item.id}`}
        contentContainerStyle={styles.cartListContainer}
        disableRightSwipe={true}
        rightOpenValue={-75}
        renderItem={(data, rowMap) => {
          return (
            <View style={styles.cartItemContainer}>
              <View style={styles.foodImageCart}>
                <Image source={data.item.image} style={styles.image} />
              </View>

              <View style={{flex: 1}}>
                <Text style={styles.foodName}>{data.item.name}</Text>
                <Text style={styles.foodPrice}>${data.item.price}</Text>
              </View>

              <StepperInput
                containerStyle={styles.quantity}
                value={data.item.qty}
                onAdd={() =>
                  updateQuantityHandler(data?.item?.qty + 1, data?.item?.id)
                }
                onMinus={() => {
                  if (data.item.qty > 1) {
                    updateQuantityHandler(data?.item?.qty - 1, data?.item?.id);
                  }
                }}
              />
            </View>
          );
        }}
        renderHiddenItem={(data, rowMap) => (
          <IconButton
            icon={icons.delete_icon}
            iconStyle={{marginRight: 10}}
            containerStyle={styles.hiddenBtn}
            onPress={() => removeMycartList(data.item.id)}
          />
        )}
        leftOpenValue={75}
      />
    );
  };
  
  const renderFooter = () => (
    <FooterTotal
      subTotal={37.97}
      shippingCost={0.0}
      total={37.97}
      onPress={() => navigation.navigate(screenNames.MyCard)}
    />
  );

  return (
    <View style={styles.container}>
      {renderHeader()}

      {renderCartList()}

      {renderFooter()}
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
  cartItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZES.radius,
    paddingHorizontal: SIZES.radius,
    borderRadius: SIZES.radius,
    height: 100,
    backgroundColor: COLORS.lightGray2,
  },
  foodImageCart: {
    width: 90,
    height: 100,
    marginLeft: -10,
  },
  cartListContainer: {
    marginTop: SIZES.radius,
    paddingHorizontal: SIZES.padding,
    paddingBottom: SIZES.padding * 2,
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 10,
  },
  foodName: {
    ...FONTS.body3,
  },
  foodPrice: {
    color: COLORS.primary,
    ...FONTS.h3,
  },
  quantity: {
    height: 50,
    width: 120,
    backgroundColor: COLORS.white,
  },
  hiddenBtn: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZES.radius,
    paddingHorizontal: SIZES.radius,
    borderRadius: SIZES.radius,
    height: 100,
    backgroundColor: COLORS.primary,
  },
});

export default MyCartComponent;