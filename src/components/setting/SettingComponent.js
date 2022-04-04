import React from 'react'
import {View, StyleSheet, FlatList, ScrollView, TouchableOpacity, Image, Text} from 'react-native'
import {COLORS, SIZES, icons, constants} from '../../constants';
import {Header, TextButton, LineDivider} from '../../components/common';
import { useNavigation } from '@react-navigation/native';

const SettingItem = ({item}) => {
  return (
    <TouchableOpacity>
      <View style={styles.settingButton}>
        <Image source={item?.icon} style={styles.icon}/>
        <Text style={styles.titleButton}>{item?.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const SettingComponent = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header
        title="SETTINGS"
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
      />
      <View style={styles.contentContainer}>
        <ScrollView>
          {constants.settings.map((item, index) => {
          return (
            <View key={index}>
              <SettingItem item={item} key={index}/>
              {index !== constants.settings.length - 1 && <LineDivider lineStyle={styles.line}/>}
            </View>
          )
          })}
        </ScrollView>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.radius
  },
  headerContainer: {
    height: 50,
    marginTop: 50,
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
  contentContainer: {
    backgroundColor: COLORS.lightGray2,
    borderRadius: 15,
    paddingHorizontal: 25,
    marginVertical: SIZES.radius,
  },
  settingButton: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
  },
  icon: {
    width: 25,
    height: 25,
    tintColor: COLORS.primary
  },
  titleButton: {
    marginLeft: 20,
    fontSize: 18
  },
  line: {
    height: 1,
    backgroundColor: COLORS.gray2
  }
});

export default SettingComponent