import React, {useEffect, useRef, useState} from 'react';
import {
  Modal,
  TouchableWithoutFeedback,
  View,
  Animated,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  COLORS,
  constants,
  FONTS,
  icons,
  SIZES,
} from 'constants';
import {IconButton, TwoPointSlider, TextButton} from 'components/common';

const Section = ({children, containerStyle, title}) => {
  return (
    <View style={{marginTop: SIZES.padding, ...containerStyle}}>
      <Text style={{...FONTS.h3}}>{title}</Text>
      {children}
    </View>
  );
};

const FilterModal = ({isVisible, onClose}) => {
  const modalAnimatedValue = useRef(new Animated.Value(0)).current;

  const [showModal, setShowModal] = useState(isVisible);

  const [deliveryTime, setDeliveryTime] = useState(1);

  const [ratings, setRatings] = useState(5);

  const [tags, setTags] = useState(1);

  useEffect(() => {
    if (showModal) {
      Animated.timing(modalAnimatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(modalAnimatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start(() => onClose());
    }
  }, [showModal]);

  const modalY = modalAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [SIZES.height, SIZES.height - 680],
  });

  const renderDistance = () => {
    return (
      <Section title="Distance">
        <View
          style={{
            marginHorizontal: SIZES.padding,
          }}>
          <TwoPointSlider
            values={[3, 10]}
            min={1}
            max={20}
            postfix="km"
            onValuesChange={values => console.log(values)}
          />
        </View>
      </Section>
    );
  };

  const renderDeliveryTime = () => {
    return (
      <Section title="Delivery Time" containerStyle={{marginTop: 40}}>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: SIZES.base,
          }}>
          {constants.delivery_time.map((item, index) => {
            return (
              <TextButton
                key={`delivery_time-${index}`}
                label={item.label}
                labelStyle={{
                  color: item.id == deliveryTime ? COLORS.white : COLORS.gray,
                }}
                buttonContainerStyle={{
                  width: '30%',
                  height: 50,
                  margin: 5,
                  alignItems: 'center',
                  borderRadius: SIZES.base,
                  backgroundColor:
                    item.id == deliveryTime
                      ? COLORS.primary
                      : COLORS.lightGray2,
                }}
                onPress={() => setDeliveryTime(item.id)}
              />
            );
          })}
        </View>
      </Section>
    );
  };

  const renderPricingRange = () => {
    return (
      <Section title="Pricing Range">
        <View style={{alignItems: 'center'}}>
          <TwoPointSlider
            values={[10, 50]}
            min={1}
            max={100}
            prefix="$"
            postfix=""
            onValuesChange={values => console.log(values)}
          />
        </View>
      </Section>
    );
  };

  const renderRatings = () => {
    return (
      <Section title="Ratings">
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          {constants.ratings.map((item, index) => (
            <TextButton
              key={`Ratings-${index}`}
              buttonContainerStyle={{
                flex: 1,
                height: 50,
                margin: 5,
                borderRadius: SIZES.base,
                backgroundColor:
                  item.id == ratings ? COLORS.primary : COLORS.lightGray2,
              }}
              label={item.label}
              labelStyle={{
                color: item.id == ratings ? COLORS.white : COLORS.gray,
                marginTop: 5,
              }}
              icon={icons.star}
              iconStyle={{
                tintColor: item.id == ratings ? COLORS.white : COLORS.gray,
                marginRight: SIZES.base,
              }}
              onPress={() => setRatings(item.id)}
            />
          ))}
        </View>
      </Section>
    );
  };

  const renderTags = () => {
    return (
      <Section title="Tags">
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {constants.tags.map((item, index) => (
            <TextButton
              key={`Tags-${index}`}
              buttonContainerStyle={{
                height: 40,
                margin: 5,
                paddingHorizontal: SIZES.radius,
                borderRadius: SIZES.base,
                backgroundColor:
                  item.id == tags ? COLORS.primary : COLORS.lightGray2,
              }}
              label={item.label}
              labelStyle={{
                color: item.id == tags ? COLORS.white : COLORS.gray,
              }}
              onPress={() => setTags(item.id)}
            />
          ))}
        </View>
      </Section>
    );
  };

  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <View style={{flex: 1, backgroundColor: COLORS.transparentBlack7}}>
        {/* Transparent Background */}
        <TouchableWithoutFeedback onPress={() => setShowModal(false)}>
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}></View>
        </TouchableWithoutFeedback>

        <Animated.View
          style={{
            position: 'absolute',
            top: modalY,
            left: 0,
            width: '100%',
            height: '100%',
            padding: SIZES.padding,
            borderTopRightRadius: SIZES.padding,
            borderTopLeftRadius: SIZES.padding,
            backgroundColor: COLORS.white,
          }}>
          {/* Header Section */}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{flex: 1, ...FONTS.h3, fontSize: 18}}>
              Filter Your Search
            </Text>
            <IconButton
              containerStyle={{
                borderWidth: 2,
                borderRadius: 10,
                borderColor: COLORS.gray2,
              }}
              icon={icons.cross}
              iconStyle={{tintColor: COLORS.gray2}}
              onPress={() => setShowModal(false)}
            />
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 250}}>
            {/* Distance */}
            {renderDistance()}

            {/* Delivery Time */}
            {renderDeliveryTime()}

            {/* Pricing Range */}
            {renderPricingRange()}

            {/* Ratings */}
            {renderRatings()}

            {/* Tags */}
            {renderTags()}
          </ScrollView>
          {/* Apply Button */}
          <View
            style={{
              position: 'absolute',
              bottom: 150,
              left: 0,
              right: 0,
              height: 110,
              paddingHorizontal: SIZES.padding,
              paddingVertical: SIZES.radius,
              backgroundColor: COLORS.white,
            }}>
            <TextButton
              label="Apply Filters"
              buttonContainerStyle={{
                height: 50,
                borderRadius: SIZES.base,
                backgroundColor: COLORS.primary,
              }}
              labelStyle={{color: COLORS.white}}
              onPress={() => console.log('apply filter')}
            />
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default FilterModal;
