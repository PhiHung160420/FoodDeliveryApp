import React, {useEffect} from 'react'
import {Text, View, StyleSheet} from 'react-native';
import {COLORS, constants, FONTS, icons, images, SIZES} from 'constants';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {TextButton, AuthLayout} from 'components/common';

const OtpComponent = ({timer, setTimer}) => {
  useEffect(() => {
    let interval = setInterval(() => {
      setTimer(prevTime => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          return prevTime;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  
  return (
    <AuthLayout
      title="OTP Authentication"
      subTitle="An authentication code has been sent to your email">
      {/* OTP Input */}
      <View style={styles.container}>
        <OTPInputView
          pinCount={4}
          style={{width: '100%', height: 50}}
          codeInputFieldStyle={styles.otpInput}
          onCodeFilled={code => console.log(code)}
          autoFocusOnLoad
          codeInputHighlightStyle={{borderColor: COLORS.primary}}
        />

        {/* Countdown timer */}
        <View style={styles.countDown}>
          <Text style={{color: COLORS.darkGray}}>Didn't receive code?</Text>
          <TextButton
            label={`Resend (${timer}s)`}
            labelStyle={{color: COLORS.primary, ...FONTS.h3}}
            buttonContainerStyle={styles.btnResend}
            onPress={() => setTimer(60)}
          />
        </View>
      </View>

      {/* Footer */}
      <View>
        <TextButton
          label="Continue"
          buttonContainerStyle={styles.btnContinue}
          labelStyle={{color: COLORS.white, ...FONTS.body2}}
          onPress={() => console.log('continue')}
        />
        <View style={styles.footer}>
          <Text style={styles.footerText}>By Signing up, you agree to our</Text>
          <TextButton
            label="Terms and Conditions"
            buttonContainerStyle={{backgroundColor: null}}
            labelStyle={{color: COLORS.primary, ...FONTS.body4}}
            onPress={() => console.log('continue')}
          />
        </View>
      </View>
    </AuthLayout>
  )
};

const styles = StyleSheet.create({
  container: {flex: 1, marginTop: SIZES.padding * 2},
  otpInput: {
    width: 65,
    height: 65,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightGray2,
    color: COLORS.black,
    ...FONTS.h3,
  },
  countDown: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SIZES.padding,
  },
  btnResend: {
    marginLeft: SIZES.base,
    backgroundColor: null,
  },
  btnContinue: {
    height: 50,
    borderRadius: SIZES.radius,
    alignItems: 'center',
    backgroundColor: COLORS.primary,
  },
  footer: {marginTop: SIZES.padding, alignItems: 'center'},
  footerText: {color: COLORS.darkGray, ...FONTS.body3},
});

export default OtpComponent