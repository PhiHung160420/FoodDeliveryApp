import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

const Section = ({title, onPress, children}) => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>

        <TouchableOpacity onPress={onPress}>
          <Text style={styles.button}>Show All</Text>
        </TouchableOpacity>
      </View>

      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: SIZES.padding,
    marginTop: 30,
    marginBottom: 20,
  },
  title: {
    flex: 1, 
    ...FONTS.h3
  },
  button: {
    color: COLORS.primary,
    ...FONTS.body3
  }
});

export default Section;
