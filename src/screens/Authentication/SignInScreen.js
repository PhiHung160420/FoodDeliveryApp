import React, {useState} from 'react';
import { SignInComponent } from '../../components';

const SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [saveMe, setSaveMe] = useState(false);

  return (
    <SignInComponent 
      email={email}
      password={password}
      saveMe={saveMe}
      setEmail={setEmail}
      setPassword={setPassword}
      setSaveMe={setSaveMe}
    />
  );
};



export default SignInScreen;
