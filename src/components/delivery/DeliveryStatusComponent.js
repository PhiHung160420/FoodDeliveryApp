import React from 'react'
import {View, StyleSheet, Text, ScrollView, Image} from 'react-native';
import {COLORS, constants, FONTS, icons, images, SIZES} from 'constants';
import {
  Header,
  TextButton,
  CartQuantityButton,
  LineDivider,
} from 'components/common';
import { useNavigation } from '@react-navigation/native';

const DeliveryStatusComponent = ({currentStep}) => {
  const navigation = useNavigation();
  
  return (
    <View
      style={styles.container}>
      <Header
        title="DELIVERY STATUS"
        containerStyle={styles.headerContainer}
        leftComponent={
          <TextButton
            icon={icons.back}
            iconStyle={styles.iconBack}
            buttonContainerStyle={styles.btnBack}
            onPress={() => navigation.goBack()}
          />
        }
        rightComponent={<View style={{width: 40}} />}
      />

      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Estimated Delivery</Text>
        <Text style={styles.infoDateTime}>21 Sept 2021</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.trackOrderContainer}>
          <View style={styles.trackOrderHeader}>
            <Text style={styles.trackOrderHeaderLeft}>Track Order</Text>
            <Text style={styles.trackOrderHeaderRight}>MH001010</Text>
          </View>
          <LineDivider lineStyle={{backgroundColor: COLORS.lightGray2}} />

          <View style={styles.trackStatusContainer}>
            {constants.track_order_status.map((item, index) => {
              return (
                <View key={`StatusList-${index}`}>
                  <View style={styles.trackStatusItem}>
                    <Image source={icons.check_circle} style={[styles.trackItemImage, {tintColor: index <= currentStep ? COLORS.primary : COLORS.lightGray1}]} />
                    <View style={styles.trackItemInfo}>
                      <Text style={{...FONTS.h3}}>{item.title}</Text>
                      <Text style={styles.trackStatusTitle}>{item.sub_title}</Text>
                    </View>
                  </View>

                  {index < constants.track_order_status.length - 1 && (
                    <View>
                      {index < currentStep && <View style={styles.currentStep} />}
                      {index >= currentStep && <Image source={icons.dotted_line} resizeMode="cover" style={styles.currentStepImage}/>}
                    </View>
                  )}
                </View>
              )
            })}
          </View>
        </View>
      </ScrollView>

      <View style={styles.footerContainer}>
        {currentStep < constants.track_order_status.length - 1 && (
          <View style={styles.footerFlex}>
            <TextButton
              buttonContainerStyle={styles.cancelButton}
              label="Cancel"
              labelStyle={{color: COLORS.primary}}
              onPress={() => navigation.navigate('FooterDetail')}
            />

            <TextButton
              label="Map View"
              buttonContainerStyle={styles.mapViewButton}
              labelStyle={{color: COLORS.white, ...FONTS.h3}}
              icon={icons.map}
              iconStyle={styles.mapViewIcon}
              onPress={() => navigation.navigate('Map')}
            />
          </View>
        )}

        {currentStep == constants.track_order_status.length - 1 && (
          <TextButton
            buttonContainerStyle={styles.doneButton}
            label="DONE"
            labelStyle={styles.doneButtonLabel}
            onPress={() => navigation.navigate('FoodDetail')}
          />
        )}
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    backgroundColor: COLORS.white,
  },
  headerContainer: {
    height: 50,
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
  infoContainer: {
    marginTop: SIZES.radius,
    paddingHorizontal: SIZES.padding,
  },
  infoTitle: {
    textAlign: 'center', 
    color: COLORS.gray, 
    ...FONTS.body3
  },
  infoDateTime: {
    textAlign: 'center', 
    ...FONTS.h2
  },
  trackOrderContainer: {
    marginTop: SIZES.padding,
    paddingVertical: SIZES.padding,
    borderRadius: SIZES.radius,
    borderWidth: 2,
    borderColor: COLORS.lightGray2,
    backgroundColor: COLORS.white2,
  },
  trackOrderHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: SIZES.padding,
  },
  trackOrderHeaderLeft: {
    ...FONTS.h3
  },
  trackOrderHeaderRight: {
    color: COLORS.gray, 
    ...FONTS.body3
  },
  trackStatusContainer: {
    marginTop: SIZES.padding, 
    paddingHorizontal: SIZES.padding
  },
  trackStatusItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: -5,
  },
  trackItemImage: {
    width: 40,
    height: 40,
  },
  trackItemInfo: {
    marginLeft: SIZES.radius
  },
  trackStatusTitle: {
    color: COLORS.gray, 
    ...FONTS.body4
  },
  currentStep: {
    height: 50,
    width: 3,
    marginLeft: 18,
    backgroundColor: COLORS.primary,
    zIndex: -1,
  },
  currentStepImage: {
    width: 4, 
    height: 50, 
    marginLeft: 17
  },
  footerContainer: {
    marginTop: SIZES.radius, 
    marginBottom: SIZES.padding
  },
  footerFlex: {
    flexDirection: 'row', 
    height: 55
  },
  cancelButton: {
    width: '40%',
    borderRadius: SIZES.base,
    backgroundColor: COLORS.lightGray2,
  },
  mapViewButton: {
    flex: 1,
    marginLeft: SIZES.radius,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.radius,
  },
  mapViewIcon: {
    width: 25,
    height: 25,
    marginRight: SIZES.radius,
    tintColor: COLORS.white,
  },
  doneButton: {
    height: 55,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.primary,
  },
  doneButtonLabel: {
    color: COLORS.white, 
    ...FONTS.body2
  }
});

export default DeliveryStatusComponent