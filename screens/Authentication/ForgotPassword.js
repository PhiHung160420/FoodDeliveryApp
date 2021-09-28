import React, {useState} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {COLORS, constants, FONTS, icons, images, SIZES} from '../../constants';
import AuthLayout from './AuthLayout';
import {validate} from '../../utils';
import {FormInput, TextButton} from '../../components';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const isEnableSendEmail = () => {
    return email != '' && emailError == '';
  };

  return (
    <AuthLayout
      title="Password Recovery"
      subTitle="Please enter your email address to recover your password">
      <View style={styles.container}>
        {/* Email */}
        <FormInput
          label="Email"
          keyboardType="email-address"
          placeholder="Email"
          autoCompletedType="email"
          errMsg={emailError}
          onChange={value => {
            // validate email
            validate.validateEmail(value, setEmailError);
            setEmail(value);
          }}
          appendComponent={
            <View style={styles.content}>
              <Image
                source={
                  email == '' || (email !== '' && emailError == '')
                    ? icons.correct
                    : icons.cross
                }
                style={{
                  width: 25,
                  height: 25,
                  tintColor:
                    email == ''
                      ? COLORS.gray
                      : email !== '' && emailError == ''
                      ? COLORS.green
                      : COLORS.red,
                }}
              />
            </View>
          }
          inputStyle={{fontSize: 20}}
        />
      </View>
      <TextButton
        label="Send Email"
        buttonContainerStyle={{
          ...styles.buttonContainer,
          backgroundColor: isEnableSendEmail()
            ? COLORS.primary
            : COLORS.transparentPrimray,
        }}
        labelStyle={{color: COLORS.white, ...FONTS.body2}}
        onPress={() => navigation.goBack()}
        disable={isEnableSendEmail() ? false : true}
      />
    </AuthLayout>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, marginTop: SIZES.padding * 2},
  content: {justifyContent: 'center'},
  buttonContainer: {
    height: 50,
    marginTop: SIZES.padding,
    borderRadius: SIZES.radius,
  },
});

export default ForgotPassword;
