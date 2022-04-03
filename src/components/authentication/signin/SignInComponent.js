import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import AuthLayout from 'components/common/sections/AuthLayout';
import {FormInput, CustomSwitch, TextButton} from 'components/common';
import {COLORS, constants, FONTS, icons, images, SIZES, screenNames} from 'constants';
import {validate} from 'utils';
import { useNavigation } from '@react-navigation/native';

const SignInComponent = (props) => {
  const {
    email,
    password,
    saveMe,
    setEmail,
    setPassword,
    setSaveMe
  } = props;
  const navigation = useNavigation();
  const [emailError, setEmailError] = useState('');
  const [showPass, setShowPass] = useState(false);

  const isEnableSignIn = () => {
    return email !== '' && password !== '' && emailError == '';
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
      title="Let's Sign In"
      subTitle="Welcome back, you've been missed">
      <View style={styles.container}>
        <FormInput
          label="Email"
          keyboardType="email-address"
          placeholder="Email"
          autoCompletedType="email"
          errMsg={emailError}
          onChange={value => {
            validate.validateEmail(value, setEmailError);
            setEmail(value);
          }}
          appendComponent={appendComponent(email, emailError)}
          inputStyle={styles.inputStyle}
        />

        <FormInput
          label="Password"
          placeholder="password"
          autoCompletedType="password"
          secureTextEntry={!showPass}
          onChange={value => {
            setPassword(value);
          }}
          appendComponent={
            <TouchableOpacity
              style={styles.btnShowHidePwd}
              onPress={() => setShowPass(!showPass)}>
              <Image
                source={showPass ? icons.eye_close : icons.eye}
                style={styles.iconPwd}
              />
            </TouchableOpacity>
          }
          inputStyle={{fontSize: 20}}
          containerStyle={{marginTop: SIZES.radius}}
        />

        {/* Save me & Forgot Password */}
        <View style={styles.saveAccount}>
          <CustomSwitch value={saveMe} onChange={value => setSaveMe(value)} />
          <TextButton
            label="Forgot Password?"
            buttonContainerStyle={{backgroundColor: null}}
            labelStyle={{color: COLORS.gray, ...FONTS.body4}}
            onPress={() => navigation.navigate(screenNames.ForgotPassword)}
          />
        </View>

        {/* Sign in */}
        <TextButton
          label="Sign In"
          disable={isEnableSignIn() ? false : true}
          buttonContainerStyle={[styles.signInBtn,
            {backgroundColor: isEnableSignIn()
              ? COLORS.primary
              : COLORS.transparentPrimray}
          ]}
          labelStyle={{color: COLORS.white, ...FONTS.h2}}
          onPress={() => navigation.navigate(screenNames.Home)}
        />

        {/* Sign Up */}
        <View style={styles.signUpContainer}>
          <Text style={{color: COLORS.gray, ...FONTS.body3}}>
            Don't have an account?
          </Text>
          <TextButton
            label="Sign Up"
            buttonContainerStyle={{backgroundColor: null, marginLeft: 3}}
            labelStyle={{color: COLORS.primary, ...FONTS.h3}}
            onPress={() => navigation.navigate(screenNames.SignUp)}
          />
        </View>

        {/* Sign In With Google / Facebook */}
        {/* FaceBook */}
        <View style={{marginTop: SIZES.padding * 2}}>
          <TextButton
            label="Continue With Facebook"
            icon={icons.fb}
            buttonContainerStyle={styles.btnLoginFB}
            labelStyle={styles.lableFB}
          />

          {/* Google */}
          <TextButton
            label="Continue With Google"
            icon={icons.google}
            buttonContainerStyle={styles.btnLoginGG}
            labelStyle={styles.labelGG}
          />
        </View>
      </View>
    </AuthLayout>
  )
};

const styles = StyleSheet.create({
  container: {flex: 1, marginTop: SIZES.padding * 2},
  btnShowHidePwd: {
    width: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  iconPwd: {width: 25, height: 25, tintColor: COLORS.gray},
  saveAccount: {
    flexDirection: 'row',
    marginTop: SIZES.radius,
    justifyContent: 'space-between',
  },
  signInBtn: {
    height: 55,
    alignItems: 'center',
    marginTop: SIZES.padding,
    borderRadius: SIZES.radius,
  },
  btnLoginFB: {
    height: 50,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.blue,
  },
  lableFB: {
    marginLeft: SIZES.radius,
    color: COLORS.white,
    ...FONTS.body3,
  },
  btnLoginGG: {
    height: 50,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightGray2,
    marginTop: SIZES.radius,
  },
  labelGG: {
    marginLeft: SIZES.radius,
    ...FONTS.body3,
  },
  signUpContainer: {
    flexDirection: 'row',
    marginTop: SIZES.radius,
    justifyContent: 'center',
  },
  appendComponent: {
    justifyContent: 'center'
  },
  appendIcon: {
    width: 20,
    height: 20
  },
  inputStyle: {
    fontSize: 20
  }
});

export default SignInComponent