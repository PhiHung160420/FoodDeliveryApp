import React, {useEffect, useRef, useState} from 'react';
import {
  Modal,
  TouchableWithoutFeedback,
  View,
  Animated,
  Text,
  ScrollView,
} from 'react-native';
import {
  COLORS,
  constants,
  dummyData,
  FONTS,
  icons,
  SIZES,
} from '../../constants';
import {IconButton, TwoPointSlider, TextButton} from '../../components';

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

  const [deliveryTime, setDeliveryTime] = useState();

  const [ratings, setRatings] = useState('');

  const [tags, setTags] = useState('');

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
          </ScrollView>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default FilterModal;
