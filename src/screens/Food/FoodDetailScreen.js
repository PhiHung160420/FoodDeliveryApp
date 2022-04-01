import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Image, Text} from 'react-native';
import {COLORS, dummyData, FONTS, icons, images, SIZES} from '../../constants';
import {
  Header,
  TextButton,
  CartQuantityButton,
  VerticalFoodCard,
  IconLabel,
  LineDivider,
  Rating,
  StepperInput,
} from 'components/common';

const FoodDetailScreen = ({navigation}) => {
  const [foodItem, setFoodItem] = useState(dummyData.vegBiryani);
  const [selectedSize, setSelectedSize] = useState('');
  const [qty, setQty] = useState(1);

  const renderHeader = () => (
    <Header
      title="DETAILS"
      leftComponent={
        <TextButton
          icon={icons.back}
          iconStyle={styles.iconBack}
          buttonContainerStyle={styles.btnBack}
          onPress={() => navigation.goBack()}
        />
      }
      rightComponent={<CartQuantityButton quantity={2} />}
      containerStyle={styles.headerContainer}
      titleStyle={styles.headerTitle}
    />
  );

  const renderFoodDetail = () => (
    <View style={styles.foodDetailContainer}>
      {/* Food Card */}
      <View style={styles.foodCard}>
        {/* Calories & Favourite */}
        <View style={styles.foodCardHeader}>
          {/* Calories */}
          <View style={styles.calories}>
            <Image source={icons.calories} style={{width: 30, height: 30}} />
            <Text style={{color: COLORS.gray2, ...FONTS.body4}}>Calories</Text>
          </View>
          {/* Favourite */}
          <Image
            source={icons.love}
            style={{
              width: 20,
              height: 20,
              tintColor: foodItem?.isFavourite ? COLORS.primary : COLORS.gray,
            }}
          />
        </View>

        {/* Food Image */}
        <Image
          source={foodItem.image}
          style={{height: 180, width: '100%'}}
          resizeMode="contain"
        />
      </View>

      {/* Food Info */}
      <View style={{marginTop: SIZES.padding}}>
        <Text style={{...FONTS.h1}}>{foodItem?.name}</Text>
        <Text
          style={{
            marginTop: SIZES.base,
            color: COLORS.darkGray,
            ...FONTS.body3,
          }}>
          {foodItem?.description}
        </Text>

        {/* Rating, Duration & Shipping */}
        <View style={{flexDirection: 'row', marginTop: SIZES.padding}}>
          {/* Rating */}
          <IconLabel
            containerStyle={{backgroundColor: COLORS.primary}}
            icon={icons.star}
            label="4.5"
            labelStyle={{color: COLORS.white}}
          />

          {/* Duration */}
          <IconLabel
            containerStyle={{marginLeft: SIZES.radius, paddingHorizontal: 0}}
            icon={icons.clock}
            iconStyle={{tintColor: COLORS.black}}
            label="30 Mins"
          />

          {/* Shipping */}
          <IconLabel
            containerStyle={{marginLeft: SIZES.radius, paddingHorizontal: 0}}
            icon={icons.dollar}
            iconStyle={{tintColor: COLORS.black}}
            label="Free Shipping"
          />
        </View>

        {/* Sizes */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.padding,
            alignItems: 'center',
          }}>
          <Text style={{...FONTS.h3}}>Sizes: </Text>
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            {dummyData.sizes.map((item, index) => (
              <TextButton
                key={`sizes-${index}`}
                label={item.label}
                buttonContainerStyle={{
                  width: 50,
                  height: 50,
                  margin: SIZES.base,
                  borderRadius: SIZES.radius,
                  borderColor:
                    selectedSize == item.id ? COLORS.primary : COLORS.gray2,
                  borderWidth: 1,
                  backgroundColor:
                    selectedSize == item.id ? COLORS.primary : null,
                }}
                labelStyle={{color: COLORS.gray2}}
                onPress={() => setSelectedSize(item.id)}
              />
            ))}
          </View>
        </View>
      </View>
    </View>
  );

  const renderRestaurant = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginVertical: SIZES.padding,
          paddingHorizontal: SIZES.padding,
          alignItems: 'center',
        }}>
        <Image
          source={images.profile}
          style={{width: 50, height: 50, borderRadius: SIZES.radius}}
        />

        {/* Info */}
        <View
          style={{flex: 1, marginLeft: SIZES.radius, justifyContent: 'center'}}>
          <Text style={{...FONTS.h3}}>My Restaurant</Text>
          <Text style={{color: COLORS.gray, ...FONTS.body4}}>
            1.2 Km away form you
          </Text>
        </View>
        {/* Ratings */}
        <Rating rating={4} iconStyle={{marginLeft: 3}} />
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 120,
          alignItems: 'center',
          paddingHorizontal: SIZES.padding,
          paddingVertical: SIZES.radius,
        }}>
        {/* Stepper Input */}
        <StepperInput
          value={qty}
          onAdd={() => setQty(qty + 1)}
          onMinus={() => {
            if (qty > 1) {
              setQty(qty - 1);
            }
          }}
        />
        {/* Text Button */}
        <TextButton
          buttonContainerStyle={{
            flex: 1,
            marginLeft: SIZES.radius,
            paddingHorizontal: SIZES.radius,
            height: 60,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary,
          }}
          label="Buy Now"
          labelStyle={{color: COLORS.white}}
          label2="$15.99"
          onPress={() => navigation.navigate('MyCart')}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      {renderHeader()}

      {/* Body */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Food Detail */}
        {renderFoodDetail()}
        <LineDivider />

        {/* Restaurant */}
        {renderRestaurant()}
      </ScrollView>

      <LineDivider />
      {/* Footer */}
      {renderFooter()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
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
  headerContainer: {
    marginTop: 40,
    marginHorizontal: SIZES.padding,
    alignItems: 'center',
  },
  headerTitle: {fontSize: 20},
  foodDetailContainer: {
    marginTop: SIZES.radius,
    marginBottom: SIZES.padding,
    paddingHorizontal: SIZES.padding,
  },
  foodCard: {
    height: 190,
    borderRadius: 15,
    backgroundColor: COLORS.lightGray2,
  },
  foodCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: SIZES.base,
    paddingHorizontal: SIZES.radius,
  },
  calories: {
    flexDirection: 'row',
  },
});

export default FoodDetailScreen;
