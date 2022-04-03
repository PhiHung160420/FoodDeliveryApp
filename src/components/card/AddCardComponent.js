import React, {useState} from 'react'
import { PaymentCard } from '../common';
import { useNavigation } from '@react-navigation/native';
import {View, StyleSheet, Image, ImageBackground, Text} from 'react-native';
import {COLORS, images, FONTS, icons, SIZES} from 'constants';
import {
  FormInput,
  Header,
  TextButton,
  FormInputCheck,
  RadioButton,
} from 'components/common';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {validate, formats} from 'utils';
import { ScrollView } from 'react-native-gesture-handler';

const AddCardComponent = (props) => {
  const {
    selectedCard,
    cardNumber,
    cardHolderName,
    expiryDate,
    cvv,
    isRemember,
    setCardNumber,
    setCardHolderName,
    setExpiryDate,
    setCvv,
    setIsRemember,
  } = props;

  const [cardNumberErr, setCardNumberErr] = useState('');
  const [cardHolderNameErr, setCardHolderNameErr] = useState('');
  const [expiryDateErr, setExpiryDateErr] = useState('');
  const [cvvErr, setCvvErr] = useState('');

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

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
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

      <View style={styles.content}>
        <PaymentCard 
          selectedCard={selectedCard}
          cardHolderName={cardHolderName}
          cardNumber={cardNumber}
          expiryDate={expiryDate}
        />  

        <ScrollView style={styles.marginTop}>
          <FormInput
            label="Card Number"
            keyboardType="number-pad"
            value={cardNumber}
            inputContainerStyle={styles.inputContainerStyle}
            onChange={value => {
              setCardNumber(formats.formatCardNumber(value));
              validate.validateInput(value, 19, setCardNumberErr);
            }}
            inputStyle={styles.inputStyle}
            maxLength={19}
            errMsg={cardNumberErr}
            appendComponent={<FormInputCheck value={cardNumber} error={cardNumberErr} />}
          />

          <FormInput
            label="Cardholder Name"
            value={cardHolderName}
            containerStyle={styles.cardHolderContainer}
            inputContainerStyle={styles.inputContainerStyle}
            onChange={value => {
              validate.validateInput(value, 1, setCardHolderNameErr);
              setCardHolderName(value);
            }}
            inputStyle={styles.inputStyle}
            errMsg={cardHolderNameErr}
            appendComponent={<FormInputCheck value={cardHolderName} error={cardHolderNameErr} />}
          />

          <View style={styles.flexRow}>
            <FormInput
              label="Expire Date"
              placeholder="MM/YY"
              maxLength={5}
              value={expiryDate}
              containerStyle={{flex: 1}}
              inputContainerStyle={styles.inputContainerStyle}
              onChange={value => {
                validate.validateInput(value, 5, setExpiryDateErr);
                setExpiryDate(value);
              }}
              inputStyle={styles.inputStyle}
              appendComponent={<FormInputCheck value={expiryDate} error={expiryDateErr} />}
            />

            <FormInput
              label="CVV"
              maxLength={3}
              value={cvv}
              containerStyle={styles.cvvInputContainer}
              inputContainerStyle={{backgroundColor: COLORS.lightGray2}}
              onChange={value => {
                validate.validateInput(value, 3, setCvvErr);
                setCvv(value);
              }}
              inputStyle={styles.inputStyle}
              appendComponent={<FormInputCheck value={cvv} error={cvvErr} />}
            />
          </View>

          <View style={styles.radioButtonContainer}>
            <RadioButton
              label="Remember this card details"
              isSelected={isRemember}
              onPress={() => setIsRemember(!isRemember)}
            />
          </View>
        </ScrollView>
      </View>

      <View style={styles.footerContainer}>
        <TextButton
          label="Add Card"
          buttonContainerStyle={[styles.addCardButton, {backgroundColor: isEnableAddCard() ? COLORS.primary : COLORS.gray2}]}
          labelStyle={styles.addCardLabel}
          disable={isEnableAddCard() ? false : true}
          onPress={() => navigation.goBack()}
        />
      </View>
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
  content: {
    flexGrow: 1,
    paddingHorizontal: SIZES.padding,
  },
  marginTop: {
    marginTop: SIZES.padding * 2
  },
  inputContainerStyle: {
    backgroundColor: COLORS.lightGray2
  },
  inputStyle: {
    ...FONTS.body2
  },
  flexRow: {
    flexDirection: 'row', 
    marginTop: SIZES.padding
  },
  cvvInputContainer: {
    flex: 1, 
    marginLeft: SIZES.radius
  },
  radioButtonContainer: {
    marginTop: SIZES.padding, 
    alignItems: 'flex-start'
  },
  footerContainer: {
    paddingTop: SIZES.radius,
    paddingBottom: SIZES.padding,
    paddingHorizontal: SIZES.padding,
  },
  addCardButton: {
    height: 60,
    borderRadius: SIZES.radius,
  },
  addCardLabel: {
    ...FONTS.body2, 
    color: COLORS.white
  },
  cardHolderContainer: {
    marginTop: SIZES.padding
  }
});

export default AddCardComponent