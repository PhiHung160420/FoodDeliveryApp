import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {
  OnboardingScreen,
  SignInScreen,
  SignUpScreen,
  ForgotPasswordScreen,
  OtpScreen,
  FoodDetailScreen,
  CheckoutScreen,
  MyCartScreen,
  SuccessScreen,
  AddCardScreen,
  MyCardScreen,
  DeliveryStatusScreen,
  MapScreen,
  OrderHistoryScreen,
  SettingScreen
} from 'screens';
import CustomDrawer from '../drawer/CustomDrawer';

const Stack = createStackNavigator();

export const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={CustomDrawer} />

      <Stack.Screen name="Onboarding" component={OnboardingScreen} /> 

      <Stack.Screen name="SignIn" component={SignInScreen} />

      <Stack.Screen name="SignUp" component={SignUpScreen} />

      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />

      <Stack.Screen name="Otp" component={OtpScreen} />

      <Stack.Screen name="FoodDetail" component={FoodDetailScreen} />

      <Stack.Screen name="Checkout" component={CheckoutScreen} />

      <Stack.Screen name="MyCart" component={MyCartScreen} />

      <Stack.Screen name="Success" component={SuccessScreen} options={{gestureEnabled: false}} />

      <Stack.Screen name="AddCard" component={AddCardScreen} />

      <Stack.Screen name="MyCard" component={MyCardScreen} />

      <Stack.Screen name="DeliveryStatus" component={DeliveryStatusScreen} options={{gestureEnabled: false}}/>

      <Stack.Screen name="Map" component={MapScreen} />

      <Stack.Screen name="OrderHistory" component={OrderHistoryScreen} />

      <Stack.Screen name="Setting" component={SettingScreen} />
    </Stack.Navigator>
  );
};
