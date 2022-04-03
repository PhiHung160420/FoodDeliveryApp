import React from 'react'
import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {COLORS, data, FONTS, icons, SIZES} from 'constants';

const SearchInput = ({setShowFilterModal}) => {
  return (
    <View style={styles.searchContaner}>
      {/* Icon */}
      <Image source={icons.search} style={styles.iconSearch} />

      {/* Input */}
      <TextInput style={styles.searchInput} placeholder="Search Food ..." />

      {/* Filter Button */}
      <TouchableOpacity onPress={setShowFilterModal}>
        <Image source={icons.filter} style={styles.iconSearch} />
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  searchContaner: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    marginHorizontal: SIZES.padding,
    paddingHorizontal: SIZES.radius,
    marginVertical: SIZES.base,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightGray2,
  },
  iconSearch: {
    width: 20, 
    height: 20, 
    tintColor: COLORS.black
  },
  searchInput: {
    flex: 1, 
    marginLeft: SIZES.radius, 
    ...FONTS.h4
  },
});

export default SearchInput