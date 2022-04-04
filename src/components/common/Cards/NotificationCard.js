import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import { COLORS, SIZES, images, FONTS, icons } from '../../../constants';

const NotificationCard = ({item, containerStyle}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.flexRow}>
        <Image source={item?.avatar} style={styles.logo} resizeMode="contain"/>

        <View style={styles.content}>
          <Text style={styles.name}>{item?.name || ''}</Text>

          <Text style={styles.message}>{item?.message || ''}</Text>

          <Text style={styles.createAt}>{item?.created_at || ''}</Text>
        </View>

        <Image source={icons.more} style={styles.icon}/>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightGray2,
    borderRadius: SIZES.radius,
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginTop: SIZES.radius
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  logo: {
    width: 60,
    height: 60
  },
  content: {
    flex: 1,
    marginLeft: 20
  },
  name: {
    ...FONTS.h3
  },
  message: {
    fontSize: 16,
    color: COLORS.gray,
    marginVertical: 5
  },
  createAt: {
    fontSize: 16,
    color: COLORS.black
  },
  icon: {
    width: 25,  
    height: 25,
    marginLeft: 5
  }
});

export default NotificationCard