import React, {useEffect} from 'react';
import {View, BackHandler, Image, Text, StyleSheet} from 'react-native';
import {TextButton} from '../../components';
import {COLORS, FONTS, icons, images, SIZES} from '../../constants';

const Success = ({navigation}) => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        return true;
      },
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={images.success}
          style={styles.images}
          resizeMode="contain"
        />
        <Text style={styles.contentText}>Congratulation!</Text>
        <Text style={styles.contentSubText}>
          Payment was successfully made!
        </Text>
      </View>
      <TextButton
        label="Done"
        buttonContainerStyle={styles.buttonContainer}
        onPress={() => navigation.navigate('DeliveryStatus')}
        labelStyle={styles.buttonLabel}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    backgroundColor: COLORS.white,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  images: {width: 150, height: 150},
  contentText: {marginTop: SIZES.padding, ...FONTS.h1},
  contentSubText: {
    textAlign: 'center',
    color: COLORS.darkGray,
    ...FONTS.body3,
    marginTop: SIZES.base,
  },
  buttonContainer: {
    height: 55,
    marginBottom: SIZES.padding,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.primary,
  },
  buttonLabel: {...FONTS.body2, color: COLORS.white},
});

export default Success;
