import React, {useState} from 'react';
import { SignUpComponent } from '../../components';

const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SignUpComponent 
      email={email}
      userName={userName}
      password={password}
      setEmail={setEmail}
      setUserName={setUserName}
      setPassword={setPassword}
    /> 
  );
};



export default SignUpScreen;
