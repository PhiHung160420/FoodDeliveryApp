import React, {useState} from 'react'
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {COLORS, constants, FONTS, icons, images, SIZES, screenNames} from 'constants';
import {validate} from 'utils';
import {FormInput, TextButton, AuthLayout} from 'components/common';
import { useNavigation } from '@react-navigation/native';

const SignUpComponent = (props) => {
  const {
    email,
    userName,
    password,
    setEmail,
    setUserName,
    setPassword,
  } = props;
  const navigation = useNavigation();

  const [emailErr, setEmailErr] = useState('');
  const [userNameErr, setUserNameErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');

  const [showPass, setShowPass] = useState('');

  const isEnableSignUp = () => {
    return (
      email != '' &&
      userName != '' &&
      password != '' &&
      emailErr == '' &&
      passwordErr == '' &&
      userNameErr == ''
    );
  };

  const appendComponent = (textField, textFieldErr) => {
    return (
      <View style={styles.appendComponent}>
        <Image
          source={textField == '' || (textField !== '' && textFieldErr == '') ? icons.correct : icons.cross}
          style={[
            styles.appendIcon,
            {tintColor: textField == '' ? COLORS.gray : textField !== '' && textFieldErr == '' ? COLORS.green : COLORS.red}
          ]}
        />
      </View>
    )
  };

  return (
    <AuthLayout
      title="Getting Started"
      subTitle="Create an account to continue!">
      <View style={styles.container}>
        {/* Email */}
        <FormInput
          label="Email"
          keyboardType="email-address"
          placeholder="email"
          autoCompletedType="email"
          errMsg={emailErr}
          onChange={value => {
            validate.validateEmail(value, setEmailErr);
            setEmail(value)
          }}
          appendComponent={appendComponent(email, emailErr)}
          inputStyle={styles.inputStyle}
        />

        {/* UserName */}
        <FormInput
          label="UserName"
          placeholder="username"
          errMsg={userNameErr}
          onChange={value => {
            validate.validateUsername(value, setUserNameErr);
            setUserName(value);
          }}
          appendComponent={appendComponent(userName, userNameErr)}
          inputStyle={styles.inputStyle}
          containerStyle={styles.marginTopInput}
        />

        {/* Password */}
        <FormInput
          label="Password"
          placeholder="password"
          autoCompletedType="password"
          secureTextEntry={!showPass}
          errMsg={passwordErr}
          onChange={value => {
            validate.validatePassword(value, setPasswordErr);
            setPassword(value);
          }}
          appendComponent={
            <TouchableOpacity
              style={styles.btnShowHidePwd}
              onPress={() => setShowPass(!showPass)}>
              <Image
                source={showPass ? icons.eye_close : icons.eye}
                style={styles.iconShowHidePwd}
              />
            </TouchableOpacity>
          }
          inputStyle={styles.inputStyle}
          containerStyle={styles.marginTopInput}
        />

        <TextButton
          label="Sign Up"
          buttonContainerStyle={[styles.btnSignUp, {backgroundColor: isEnableSignUp() ? COLORS.primary : COLORS.transparentPrimray}]}
          onPress={() => navigation.navigate(screenNames.Otp)}
          disable={isEnableSignUp() ? false : true}
          labelStyle={styles.labelSignUp}
        />

        <View style={styles.signIncontainer}>
          <Text style={{color: COLORS.gray, ...FONTS.body3}}>
            Already have an account?
          </Text>
          <TextButton
            label="Sign In"
            buttonContainerStyle={styles.btnSignIn}
            labelStyle={styles.labelSignIn}
            onPress={() => navigation.goBack()}
          />
        </View>

        <View style={{marginTop: SIZES.padding}}>
          <TextButton
            label="Continue With Facebook"
            icon={icons.fb}
            buttonContainerStyle={styles.btnSignInFB}
            labelStyle={styles.labelBtnFB}
          />

          <TextButton
            label="Continue With Google"
            icon={icons.google}
            buttonContainerStyle={styles.btnSignInGG}
            labelStyle={styles.labelBtnGG}
          />
        </View>
      </View>
    </AuthLayout>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    marginTop: SIZES.padding * 2
  },
  btnShowHidePwd: {
    width: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  iconShowHidePwd: {
    width: 25, 
    height: 25, 
    tintColor: COLORS.gray
  },
  btnSignUp: {
    height: 50,
    marginTop: SIZES.padding,
    borderRadius: SIZES.radius,
  },
  labelSignUp: {
    color: COLORS.white, 
    ...FONTS.body2
  },
  signIncontainer: {
    flexDirection: 'row',
    marginTop: SIZES.radius,
    justifyContent: 'center',
  },
  btnSignIn: {
    backgroundColor: null, 
    marginLeft: 3
  },
  btnSignInFB: {
    height: 40,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.blue,
  },
  labelBtnFB: {
    marginLeft: SIZES.radius,
    color: COLORS.white,
    ...FONTS.body3,
  },
  btnSignInGG: {
    height: 40,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightGray2,
    marginTop: SIZES.radius,
  },
  labelBtnGG: {
    marginLeft: SIZES.radius,
    ...FONTS.body3,
  },
  appendComponent: {
    justifyContent: 'center'
  },
  appendIcon: {
    width: 25,
    height: 25,
  },
  inputStyle: {
    fontSize: 20
  },
  marginTopInput: {
    marginTop: SIZES.radius
  },
  labelSignIn: {
    color: COLORS.primary, 
    ...FONTS.h3
  }
});

export default SignUpComponent