import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Image, FlatList, Text} from 'react-native';
import { COLORS, SIZES, icons, data, constants } from '../../constants';
import {TextButton, Header, OrderCard} from '../../components/common';
import { useNavigation } from '@react-navigation/native';

const OrderHistoryItem = ({order}) => {
  return (
    <View style={styles.orderHistoryItem}>
      <Text style={styles.orderItemTitle}>{order?.title}</Text>

      <FlatList 
        data={order.data}
        keyExtractor={item => `order_item-${item?.id}`}
        scrollEnabled={false}
        renderItem={({item, index}) => (
          <OrderCard item={item}/>
        )}
      />
    </View>
  )
}

const OrderHistoryComponent = () => {
  const navigation = useNavigation();
  const [tabSelected, setTabSelected] = useState(0);

  const renderHeaderComponent = () => {
    return (
      <View style={styles.tabsContainer}>
        {constants.order_history_tabs.map((item, index) => (
          <TextButton
            key={index} 
            label={item?.name}
            buttonContainerStyle={[styles.tabButton, {
              backgroundColor: tabSelected == item?.id ? COLORS.primary : COLORS.lightOrange2
            }]}
            labelStyle={[styles.tabButtonLabel, {
              color: tabSelected == item?.id ? COLORS.white : COLORS.primary
            }]}
            onPress={() => setTabSelected(item?.id)}
          />
        ))}
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Header
        title="MY ORDERS"
        containerStyle={styles.headerContainer}
        leftComponent={
          <TextButton
            icon={icons.back}
            iconStyle={styles.iconBack}
            buttonContainerStyle={styles.btnBack}
            onPress={() => {
              navigation.goBack();
            }}
          />
        }
        rightComponent={
          <TouchableOpacity style={styles.rightComponent} onPress={() => navigation.openDrawer()}>
            <Image source={data?.myProfile?.profile_image} style={styles.rightImage}/>
          </TouchableOpacity>}
      />

      <View style={styles.contentContainer}>
        <FlatList 
          data={tabSelected === 0 ? data?.orders_history : data?.orders_upcoming}
          keyExtractor={item => `orderHistory_${item?.id}`}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flatlist}
          ListHeaderComponent={renderHeaderComponent()}
          renderItem={({item, index}) => (
            <OrderHistoryItem order={item}/>
          )}
        />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    backgroundColor: COLORS.white
  },
  headerContainer: {
    height: 50,
    marginTop: 50,
  },
  contentContainer: {
    marginTop: SIZES.padding
  },
  btnBack: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.radius,
    borderWidth: 1,
    borderColor: COLORS.gray2,
  },
  rightComponent: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.primary,
  },
  rightImage: {
    height: 25, 
    width: 25
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tabButton: {
    width: 160,
    height: 50,
    borderRadius: SIZES.radius
  },
  tabButtonLabel: {
    fontSize: 16
  },
  orderHistoryItem: {
    marginTop: SIZES.padding
  },
  orderItemTitle: {
    fontSize: 16,
    color: COLORS.gray,
  },
  flatlist: {
    paddingBottom: 150
  }
});

export default OrderHistoryComponent