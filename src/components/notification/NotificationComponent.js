import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import { SIZES, COLORS } from '../../constants';
import { NotificationCard } from '../common';

const NotificationItem = ({notification}) => {
  return (
    <View style={styles.notiItemContainer}>
      <Text style={styles.notiTitle}>{notification?.title || ''}</Text>

      <FlatList 
        data={notification?.data}
        keyExtractor={item => `NotificationItem-${item.id}`}
        scrollEnabled={false}
        renderItem={({item, index}) => {
          return (
            <NotificationCard 
              item={item}
            />
          )
        }}
      />
    </View>
  )
}

const NotificationComponent = ({notifications}) => {
  return (
    <View style={styles.container}>
      <FlatList 
        data={notifications}
        keyExtractor={item => `notification-${item.id}`}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatlist}
        renderItem={({item, index}) => (
          <NotificationItem notification={item}/>
        )}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.padding
  },
  notiItemContainer: {
    marginTop: SIZES.padding
  },
  notiTitle: {
    fontSize: 18,
    color: COLORS.gray
  },
  flatlist: {
    paddingBottom: 240
  }
});

export default NotificationComponent;