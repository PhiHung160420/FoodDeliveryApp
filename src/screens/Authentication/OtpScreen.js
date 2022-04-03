import React, {useEffect, useState} from 'react';
import { OtpComponent } from '../../components';

const OtpScreen = () => {
  const [timer, setTimer] = useState(60);

  return (
    <OtpComponent timer={timer} setTimer={setTimer}/>
  );
};



export default OtpScreen;
