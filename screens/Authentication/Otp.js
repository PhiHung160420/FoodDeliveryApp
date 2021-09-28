import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {COLORS, constants, FONTS, icons, images, SIZES} from '../../constants';
import AuthLayout from './AuthLayout';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {TextButton} from '../../components';

const Otp = () => {
  const [timer, setTimer] = useState(60);

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
      <View style={{flex: 1, marginTop: SIZES.padding * 2}}>
        <OTPInputView
          pinCount={4}
          style={{width: '100%', height: 50}}
          codeInputFieldStyle={{
            width: 65,
            height: 65,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
            color: COLORS.black,
            ...FONTS.h3,
          }}
          onCodeFilled={code => console.log(code)}
          autoFocusOnLoad
          codeInputHighlightStyle={{borderColor: COLORS.primary}}
        />

        {/* Countdown timer */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: SIZES.padding,
          }}>
          <Text style={{color: COLORS.darkGray}}>Didn't receive code?</Text>
          <TextButton
            label={`Resend (${timer}s)`}
            labelStyle={{color: COLORS.primary, ...FONTS.h3}}
            buttonContainerStyle={{
              marginLeft: SIZES.base,
              backgroundColor: null,
            }}
            onPress={() => setTimer(60)}
          />
        </View>
      </View>

      {/* Footer */}
      <View>
        <TextButton
          label="Continue"
          buttonContainerStyle={{
            height: 50,
            borderRadius: SIZES.radius,
            alignItems: 'center',
            backgroundColor: COLORS.primary,
          }}
          labelStyle={{color: COLORS.white, ...FONTS.body2}}
          onPress={() => console.log('continue')}
        />
        <View style={{marginTop: SIZES.padding, alignItems: 'center'}}>
          <Text style={{color: COLORS.darkGray, ...FONTS.body3}}>
            By Signing up, you agree to our
          </Text>
          <TextButton
            label="Terms and Conditions"
            buttonContainerStyle={{backgroundColor: null}}
            labelStyle={{color: COLORS.primary, ...FONTS.body4}}
            onPress={() => console.log('continue')}
          />
        </View>
      </View>
    </AuthLayout>
  );
};

export default Otp;
