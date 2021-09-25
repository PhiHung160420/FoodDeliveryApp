import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import CustomDrawer from './navigations/CustomDrawer';
import {MainLayout, Onboarding, SignIn} from './screens';
import store from './redux/stores/store';
import {Provider} from 'react-redux';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={'Home'}>
          <Stack.Screen name="Home" component={CustomDrawer} />
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
