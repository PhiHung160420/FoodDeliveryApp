import React, {useState} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {COLORS, constants, FONTS, icons, images, SIZES} from '../../constants';
import {validate} from 'utils';
import {FormInput, TextButton, AuthLayout} from 'components/common';
import { ForgotPasswordComponent } from '../../components';

const ForgotPasswordScreen = ({navigation}) => {
  const [emailError, setEmailError] = useState('');

  const isEnableSendEmail = () => {
    return email != '' && emailError == '';
  };

  return (
    <ForgotPasswordComponent />
  );
};

export default ForgotPasswordScreen;
