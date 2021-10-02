import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image, ImageBackground, Text} from 'react-native';
import {COLORS, images, FONTS, icons, SIZES} from '../../constants';
import {
  FormInput,
  Header,
  TextButton,
  FormInputCheck,
  RadioButton,
} from '../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {validate} from '../../utils';

const AddCard = ({navigation, route}) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const [cardNumber, setCardNumber] = useState('');
  const [cardNumberErr, setCardNumberErr] = useState('');

  const [cardHolderName, setCardHolderName] = useState('');
  const [cardHolderNameErr, setCardHolderNameErr] = useState('');

  const [expiryDate, setExpiryDate] = useState('');
  const [expiryDateErr, setexpiryDateErr] = useState('');

  const [cvv, setCvv] = useState('');
  const [cvvErr, setCvvErr] = useState('');

  const [isRemember, setIsRemember] = useState(false);

  const isEnableAddCard = () => {
    return (
      cardNumber != '' &&
      cardHolderName != '' &&
      expiryDate != '' &&
      cvv != '' &&
      cardNumberErr == '' &&
      cardHolderNameErr == '' &&
      expiryDateErr == '' &&
      cvvErr == ''
    );
  };

  useEffect(() => {
    let {selectedCard} = route.params;
    setSelectedCard(selectedCard);
  }, []);

  const renderHeader = () => {
    return (
      <Header
        title="ADD NEW CARD"
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

  const renderCard = () => (
    <ImageBackground
      source={images.card}
      style={{
        height: 200,
        width: '100%',
        marginTop: SIZES.radius,
        borderRadius: SIZES.radius,
        overflow: 'hidden',
      }}>
      {/* Logo */}
      <Image
        source={selectedCard?.icon}
        resizeMode="contain"
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
          height: 40,
          width: 40,
        }}
      />

      {/* Detail */}
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: SIZES.padding,
          paddingVertical: SIZES.base,
        }}>
        <Text style={{color: COLORS.white, ...FONTS.h3}}>{cardHolderName}</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{flex: 1, color: COLORS.white, ...FONTS.body3}}>
            {cardNumber}
          </Text>
          <Text style={{color: COLORS.white, ...FONTS.body3}}>
            {expiryDate}
          </Text>
        </View>
      </View>
    </ImageBackground>
  );

  const renderForm = () => {
    return (
      <View style={{marginTop: SIZES.padding * 2}}>
        {/* Card Number */}
        <FormInput
          label="Card Number"
          keyboardType="number-pad"
          value={cardNumber}
          inputContainerStyle={{backgroundColor: COLORS.lightGray2}}
          onChange={value => {
            setCardNumber(
              value
                .replace(/\s/g, '')
                .replace(/(\d{4})/g, '$1 ')
                .trim(),
            );
            validate.validateInput(value, 19, setCardNumberErr);
          }}
          inputStyle={{...FONTS.body2}}
          maxLength={19}
          errMsg={cardNumberErr}
          appendComponent={
            <FormInputCheck value={cardNumber} error={cardNumberErr} />
          }
        />

        {/* Cardholder Name */}
        <FormInput
          label="Cardholder Name"
          value={cardHolderName}
          containerStyle={{marginTop: SIZES.radius}}
          inputContainerStyle={{backgroundColor: COLORS.lightGray2}}
          onChange={value => {
            validate.validateInput(value, 1, setCardHolderNameErr);
            setCardHolderName(value);
          }}
          inputStyle={{...FONTS.body2}}
          errMsg={cardHolderNameErr}
          appendComponent={
            <FormInputCheck value={cardHolderName} error={cardHolderNameErr} />
          }
        />

        {/* Expire Date & CVV */}
        <View style={{flexDirection: 'row', marginTop: SIZES.radius}}>
          {/* Expire Date */}
          <FormInput
            label="Expire Date"
            placeholder="MM/YY"
            maxLength={5}
            value={expiryDate}
            containerStyle={{flex: 1}}
            inputContainerStyle={{backgroundColor: COLORS.lightGray2}}
            onChange={value => {
              validate.validateInput(value, 5, setexpiryDateErr);
              setExpiryDate(value);
            }}
            inputStyle={{...FONTS.body2}}
            errMsg={expiryDateErr}
            appendComponent={
              <FormInputCheck value={expiryDate} error={expiryDateErr} />
            }
          />

          {/* CVV */}
          <FormInput
            label="CVV"
            maxLength={3}
            value={cvv}
            containerStyle={{flex: 1, marginLeft: SIZES.radius}}
            inputContainerStyle={{backgroundColor: COLORS.lightGray2}}
            onChange={value => {
              validate.validateInput(value, 3, setCvvErr);
              setCvv(value);
            }}
            inputStyle={{...FONTS.body2}}
            errMsg={cvvErr}
            appendComponent={<FormInputCheck value={cvv} error={cvvErr} />}
          />
        </View>

        {/* Remember */}
        <View style={{marginTop: SIZES.padding, alignItems: 'flex-start'}}>
          <RadioButton
            label="Remember this card details"
            isSelected={isRemember}
            onPress={() => setIsRemember(!isRemember)}
          />
        </View>
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View
        style={{
          paddingTop: SIZES.radius,
          paddingBottom: SIZES.padding,
          paddingHorizontal: SIZES.padding,
        }}>
        <TextButton
          label="Add Card"
          buttonContainerStyle={{
            height: 60,
            borderRadius: SIZES.radius,
            backgroundColor: isEnableAddCard() ? COLORS.primary : COLORS.gray2,
          }}
          labelStyle={{...FONTS.body2, color: COLORS.white}}
          disable={isEnableAddCard() ? false : true}
          onPress={() => navigation.goBack()}
        />
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      {/* Header */}
      {renderHeader()}
      {/* Body */}
      <View style={styles.contentStyle}>
        {/* Card */}
        {renderCard()}

        {/* Forms */}
        {renderForm()}
      </View>

      {/* Footer */}
      {renderFooter()}
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
  contentStyle: {
    flexGrow: 1,
    paddingHorizontal: SIZES.padding,
  },
});

export default AddCard;
