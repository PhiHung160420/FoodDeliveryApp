import React from 'react';
import store from 'stores/store';
import {Provider} from 'react-redux';
import AppNavigator from './src/navigations';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
