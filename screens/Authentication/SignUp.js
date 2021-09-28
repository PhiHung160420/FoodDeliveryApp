import React, {useState} from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {COLORS, constants, FONTS, icons, images, SIZES} from '../../constants';
import {validate} from '../../utils';
import AuthLayout from './AuthLayout';
import {FormInput, TextButton} from '../../components';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

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

  return (
    <AuthLayout
      title="Getting Started"
      subTitle="Create an account to continue!">
      {/* Children */}
      <View style={styles.container}>
        {/* Form input and sign up */}
        {/* Email */}
        <FormInput
          label="Email"
          keyboardType="email-address"
          placeholder="email"
          autoCompletedType="email"
          errMsg={emailErr}
          onChange={value => {
            // validate email
            validate.validateEmail(value, setEmailErr);
            setEmail(value);
          }}
          appendComponent={
            <View style={{justifyContent: 'center'}}>
              <Image
                source={
                  email == '' || (email !== '' && emailErr == '')
                    ? icons.correct
                    : icons.cross
                }
                style={{
                  width: 25,
                  height: 25,
                  tintColor:
                    email == ''
                      ? COLORS.gray
                      : email !== '' && emailErr == ''
                      ? COLORS.green
                      : COLORS.red,
                }}
              />
            </View>
          }
          inputStyle={{fontSize: 20}}
        />

        {/* UserName */}
        <FormInput
          label="UserName"
          placeholder="username"
          errMsg={userNameErr}
          onChange={value => {
            // validate username
            validate.validateUsername(value, setUserNameErr);
            setUserName(value);
          }}
          appendComponent={
            <View style={{justifyContent: 'center'}}>
              <Image
                source={
                  userName == '' || (userName !== '' && userNameErr == '')
                    ? icons.correct
                    : icons.cross
                }
                style={{
                  width: 25,
                  height: 25,
                  tintColor:
                    userName == ''
                      ? COLORS.gray
                      : userName !== '' && userNameErr == ''
                      ? COLORS.green
                      : COLORS.red,
                }}
              />
            </View>
          }
          inputStyle={{fontSize: 20}}
          containerStyle={{marginTop: SIZES.radius}}
        />

        {/* Password */}
        <FormInput
          label="Password"
          placeholder="password"
          autoCompletedType="password"
          secureTextEntry={!showPass}
          errMsg={passwordErr}
          onChange={value => {
            // validate password
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
          inputStyle={{fontSize: 20}}
          containerStyle={{marginTop: SIZES.radius}}
        />
        <TextButton
          label="Sign Up"
          buttonContainerStyle={{
            ...styles.btnSignUp,
            backgroundColor: isEnableSignUp()
              ? COLORS.primary
              : COLORS.transparentPrimray,
          }}
          onPress={() => navigation.navigate('Otp')}
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
            labelStyle={{color: COLORS.primary, ...FONTS.h3}}
            onPress={() => navigation.goBack()}
          />
        </View>
        {/* Sign In With Google / Facebook */}
        {/* FaceBook */}
        <View style={{marginTop: SIZES.padding}}>
          <TextButton
            label="Continue With Facebook"
            icon={icons.fb}
            buttonContainerStyle={styles.btnSignInFB}
            labelStyle={styles.labelBtnFB}
          />

          {/* Google */}
          <TextButton
            label="Continue With Google"
            icon={icons.google}
            buttonContainerStyle={styles.btnSignInGG}
            labelStyle={styles.labelBtnGG}
          />
        </View>
      </View>
    </AuthLayout>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, marginTop: SIZES.padding * 2},
  btnShowHidePwd: {
    width: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  iconShowHidePwd: {width: 25, height: 25, tintColor: COLORS.gray},
  btnSignUp: {
    height: 50,
    marginTop: SIZES.padding,
    borderRadius: SIZES.radius,
  },
  labelSignUp: {color: COLORS.white, ...FONTS.body2},
  signIncontainer: {
    flexDirection: 'row',
    marginTop: SIZES.radius,
    justifyContent: 'center',
  },
  btnSignIn: {backgroundColor: null, marginLeft: 3},
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
});

export default SignUp;
