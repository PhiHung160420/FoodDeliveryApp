import React from 'react'
import {View, StyleSheet, ScrollView, Image, Text} from 'react-native';
import {COLORS, data, FONTS, icons, images, SIZES} from 'constants';
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
import { useNavigation } from '@react-navigation/native';

const FoodDetailComponent = (props) => {
  const navigation = useNavigation();
  
  const {foodItem, selectedSize, quantity, setQuantity, setSelectedSize} = props;
  
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
      <View style={styles.foodCard}>
        <View style={styles.foodCardHeader}>
          <View style={styles.calories}>
            <Image source={icons.calories} style={styles.caloriesIcon} />
            <Text style={styles.caloriesText}>Calories</Text>
          </View>
          <Image source={icons.love} style={[styles.heartIcon, {tintColor: foodItem?.isFavourite ? COLORS.primary : COLORS.gray}]}/>
        </View>

        <Image source={foodItem?.image} style={styles.foodImage} resizeMode="contain" />
      </View>

      <View style={styles.foodInfo}>
        <Text style={styles.foodName}>{foodItem?.name || ''}</Text>
        <Text style={styles.foodDescription}>{foodItem?.description || ''}</Text>

        <View style={styles.flexRow}>
          <IconLabel
            containerStyle={{backgroundColor: COLORS.primary}}
            icon={icons.star}
            label="4.5"
            labelStyle={{color: COLORS.white}}
          />

          <IconLabel
            containerStyle={{marginLeft: SIZES.radius, paddingHorizontal: 0}}
            icon={icons.clock}
            iconStyle={{tintColor: COLORS.black}}
            label="30 Mins"
          />

          <IconLabel
            containerStyle={{marginLeft: SIZES.radius, paddingHorizontal: 0}}
            icon={icons.dollar}
            iconStyle={{tintColor: COLORS.black}}
            label="Free Shipping"
          />
        </View>

        <View
          style={styles.sizeContainer}>
          <Text style={styles.sizeLabel}>Sizes: </Text>
          <View style={styles.sizesList}>
            {data.sizes.map((item, index) => (
              <TextButton
                key={`sizes-${index}`}
                label={item.label}
                buttonContainerStyle={[styles.sizeItem,
                {
                  borderColor: selectedSize == item.id ? COLORS.primary : COLORS.gray2,
                  backgroundColor: selectedSize == item.id ? COLORS.primary : null,
                }]}
                labelStyle={styles.sizeContent}
                onPress={() => setSelectedSize(item.id)}
              />
            ))}
          </View>
        </View>
      </View>
    </View>
  );

  const renderProfile = () => {
    return (
      <View style={styles.profileContainer}>
        <Image source={images.profile} style={styles.profileImage} />

        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>My Restaurant</Text>
          <Text style={styles.profileDesc}>1.2 Km away form you</Text>
        </View>
        <Rating rating={4} iconStyle={{marginLeft: 3}} />
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View style={styles.footerContainer}>
        <StepperInput
          value={quantity}
          onAdd={() => setQuantity(quantity + 1)}
          onMinus={() => {
            if (quantity > 1) {
              setQuantity(quantity - 1);
            }
          }}
        />
        <TextButton
          buttonContainerStyle={styles.buyButton}
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
      {renderHeader()}

      <ScrollView showsVerticalScrollIndicator={false}>
        {renderFoodDetail()}

        <LineDivider />

        {renderProfile()}
      </ScrollView>

      <LineDivider />

      {renderFooter()}
    </View>
  )
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
  caloriesIcon: {
    width: 30, 
    height: 30
  },
  caloriesText: {
    color: COLORS.gray2, 
    ...FONTS.body4
  },
  heartIcon: {
    width: 30,
    height: 30
  },
  foodImage: {
    height: 180, 
    width: '100%'
  },
  foodInfo: {
    marginTop: SIZES.padding
  },
  foodName: {
    ...FONTS.h1
  },
  foodDescription: {
    marginTop: SIZES.base,
    color: COLORS.darkGray,
    ...FONTS.body3,
  },
  flexRow: {
    flexDirection: 'row', 
    marginTop: SIZES.padding
  },
  sizeContainer: {
    flexDirection: 'row',
    marginTop: SIZES.padding,
    alignItems: 'center',
  },
  sizeLabel: {
    ...FONTS.h3
  },
  sizesList: {
    flexDirection: 'row', 
    flexWrap: 'wrap'
  },
  sizeItem: {
    width: 50,
    height: 50,
    margin: SIZES.base,
    borderRadius: SIZES.radius,
    borderWidth: 1,
  },
  sizeContent: {
    color: COLORS.gray2
  },
  buyButton: {
    flex: 1,
    marginLeft: SIZES.radius,
    paddingHorizontal: SIZES.radius,
    height: 60,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.primary,
  },
  footerContainer: {
    flexDirection: 'row',
    height: 120,
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.radius,
  },
  profileContainer: {
    flexDirection: 'row',
    marginVertical: SIZES.padding,
    paddingHorizontal: SIZES.padding,
    alignItems: 'center',
  },
  profileImage: {
    width: 50, 
    height: 50, 
    borderRadius: SIZES.radius
  },
  profileInfo: {
    flex: 1, 
    marginLeft: SIZES.radius, 
    justifyContent: 'center'
  },
  profileName: {
    ...FONTS.h3
  },
  profileDesc: {
    color: COLORS.gray, 
    ...FONTS.body4
  }
});

export default FoodDetailComponent