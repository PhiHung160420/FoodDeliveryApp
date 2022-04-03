import React, {useEffect} from 'react';
import {BackHandler} from 'react-native';
import {SuccessComponent} from 'components';

const SuccessScreen = () => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        return true;
      },
    );

    return () => backHandler.remove();
  }, []);

  return (
    <SuccessComponent />
  );
};

export default SuccessScreen;
