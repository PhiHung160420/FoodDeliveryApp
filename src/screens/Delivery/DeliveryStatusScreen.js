import React, {useState} from 'react';
import {View, StyleSheet, Text, ScrollView, Image} from 'react-native';
import {COLORS, constants, FONTS, icons, images, SIZES} from '../../constants';
import {
  Header,
  TextButton,
  CartQuantityButton,
  LineDivider,
} from 'components/common';

const DeliveryStatusScreen = ({navigation}) => {
  const [currentStep, setCurrentStep] = useState(2);

  const renderHeader = () => {
    return (
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
    );
  };

  const renderInfo = () => {
    return (
      <View
        style={{
          marginTop: SIZES.radius,
          paddingHorizontal: SIZES.padding,
        }}>
        <Text style={{textAlign: 'center', color: COLORS.gray, ...FONTS.body3}}>
          Estimated Delivery
        </Text>
        <Text style={{textAlign: 'center', ...FONTS.h2}}>21 Sept 2021</Text>
      </View>
    );
  };

  const renderTrackOrder = () => {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          paddingVertical: SIZES.padding,
          borderRadius: SIZES.radius,
          borderWidth: 2,
          borderColor: COLORS.lightGray2,
          backgroundColor: COLORS.white2,
        }}>
        {/* Track Order */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 20,
            paddingHorizontal: SIZES.padding,
          }}>
          <Text style={{...FONTS.h3}}>Track Order</Text>
          <Text style={{color: COLORS.gray, ...FONTS.body3}}>MH001010</Text>
        </View>
        <LineDivider lineStyle={{backgroundColor: COLORS.lightGray2}} />

        {/* Status */}
        <View
          style={{marginTop: SIZES.padding, paddingHorizontal: SIZES.padding}}>
          {constants.track_order_status.map((item, index) => {
            return (
              <View key={`StatusList-${index}`}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginVertical: -5,
                  }}>
                  <Image
                    source={icons.check_circle}
                    style={{
                      width: 40,
                      height: 40,
                      tintColor:
                        index <= currentStep
                          ? COLORS.primary
                          : COLORS.lightGray1,
                    }}
                  />
                  <View style={{marginLeft: SIZES.radius}}>
                    <Text style={{...FONTS.h3}}>{item.title}</Text>
                    <Text style={{color: COLORS.gray, ...FONTS.body4}}>
                      {item.sub_title}
                    </Text>
                  </View>
                </View>
                {index < constants.track_order_status.length - 1 && (
                  <View style={{}}>
                    {index < currentStep && (
                      <View
                        style={{
                          height: 50,
                          width: 3,
                          marginLeft: 18,
                          backgroundColor: COLORS.primary,
                          zIndex: -1,
                        }}
                      />
                    )}
                    {index >= currentStep && (
                      <Image
                        source={icons.dotted_line}
                        resizeMode="cover"
                        style={{width: 4, height: 50, marginLeft: 17}}
                      />
                    )}
                  </View>
                )}
              </View>
            );
          })}
        </View>
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View style={{marginTop: SIZES.radius, marginBottom: SIZES.padding}}>
        {currentStep < constants.track_order_status.length - 1 && (
          <View style={{flexDirection: 'row', height: 55}}>
            {/* Cancel */}
            <TextButton
              buttonContainerStyle={{
                width: '40%',
                borderRadius: SIZES.base,
                backgroundColor: COLORS.lightGray2,
              }}
              label="Cancel"
              labelStyle={{color: COLORS.primary}}
              onPress={() => navigation.navigate('FooterDetail')}
            />
            {/* MapView */}
            <TextButton
              label="Map View"
              buttonContainerStyle={{
                flex: 1,
                marginLeft: SIZES.radius,
                backgroundColor: COLORS.primary,
                borderRadius: SIZES.radius,
              }}
              labelStyle={{color: COLORS.white, ...FONTS.h3}}
              icon={icons.map}
              iconStyle={{
                width: 25,
                height: 25,
                marginRight: SIZES.radius,
                tintColor: COLORS.white,
              }}
              onPress={() => navigation.navigate('Map')}
            />
          </View>
        )}

        {currentStep == constants.track_order_status.length - 1 && (
          <TextButton
            buttonContainerStyle={{
              height: 55,
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.primary,
            }}
            label="DONE"
            labelStyle={{color: COLORS.white, ...FONTS.body2}}
            onPress={() => navigation.navigate('FoodDetail')}
          />
        )}
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: SIZES.padding,
        backgroundColor: COLORS.white,
      }}>
      {/* Header */}
      {renderHeader()}

      {/* Info */}
      {renderInfo()}

      {/* Track Order */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderTrackOrder()}
      </ScrollView>

      {/* Footer */}
      {renderFooter()}
    </View>
  );
};

const styles = StyleSheet.create({
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
  iconBack: {width: 20, height: 20, tintColor: COLORS.gray2},
});

export default DeliveryStatusScreen;
