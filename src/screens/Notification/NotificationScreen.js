import React, {useState} from 'react';
import {View, Text} from 'react-native';
import { NotificationComponent } from '../../components';
import { data } from '../../constants';

const NotificationScreen = () => {
  const [notifications, setNotifications] = useState(data.notifications);
  
  return (
   <NotificationComponent notifications={notifications}/>
  )
}

export default NotificationScreen;