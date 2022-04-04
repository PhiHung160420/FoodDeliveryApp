import React, {useState} from 'react';
import { DeliveryStatusComponent } from '../../components';

const DeliveryStatusScreen = () => {
  const [currentStep, setCurrentStep] = useState(2);

  return (
    <DeliveryStatusComponent currentStep={currentStep}/>
  );
};

export default DeliveryStatusScreen;
