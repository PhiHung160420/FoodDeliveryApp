import React, {useRef, useState, useEffect} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity, Platform} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps"
import LinearGradient from 'react-native-linear-gradient';
import {IconButton, TextButton} from '../../components/common';
import {COLORS, FONTS, images, SIZES, data, constants, icons} from '../../constants'
import MapViewDirections from 'react-native-maps-directions';
import {formats} from '../../utils';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const MapComponent = () => {
  const mapView = useRef();
  const [region, setRegion] = useState(null);
  const [toLoc, setToLoc] = useState(null);
  const [fromLoc, setFromLoc] = useState(null);
  const [angle, setAngle] = useState(0);

  const [isReady, setIsReady] = useState(false);
  const [duration, setDuration] = useState("15");

  useEffect(() => {
    let initialRegion ={ 
      latitude: 10.762622,
      longitude: 106.660172,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0426,
    };

    let destination = {
      latitude: 10.76937,
      longitude: 106.63593,
    };

    let origin = {
      latitude: 10.753353,
      longitude: 106.661198,
    };

    setToLoc(destination);
    setFromLoc(origin);
    setRegion(initialRegion);
  }, []);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <MapView 
        ref={mapView} 
        style={styles.map} 
        provider={PROVIDER_GOOGLE} 
        initialRegion={region}
      >
        {fromLoc && 
          <Marker 
            key={'fromLoc'}
            coordinate={fromLoc}
            tracksViewChanges={false}
            icon={icons.navigator}
            rotation={angle}
            anchor={{x: 0.05, y: 0.05}}
            
          />}

        {toLoc && 
        <Marker 
          key={'ToLoc'}
          coordinate={toLoc}
          tracksViewChanges={false}
          icon={icons.location}
          
          anchor={{x: 0.5, y: 0.5}}
        />}

        <MapViewDirections
          origin={fromLoc}
          destination={toLoc}
          apikey={constants.GOOGLE_MAP_API_KEY}
          strokeWidth={5}
          strokeColor={COLORS.primary}
          optimizeWaypoints={true}
          onReady={result => {
            console.log('result: ', result);
            setDuration(Math.ceil(result.duration));

            if(!isReady) {
              // fit the map based on the route
              mapView.current.fitToCoordinates(result.coordinate, {
                edgePadding: {
                  right: SIZES.width * 0.1,
                  bottom: 400,
                  left: SIZES.width * 0.1,
                  top: SIZES.height * 0.1
                }
              })

              // Responsition the navigator
              if(result.coordinate.length > 2) {
                let angle = formats.calculateAngle(result.coordinate);
                setAngle(angle);
              }

              setIsReady(true);
            }
          }}
        />
      </MapView>

      <>
        <IconButton 
          icon={icons.back}
          containerStyle={styles.backButton}
          iconStyle={styles.backIcon}
          onPress={() => navigation.goBack()}
        />

        <View style={styles.rightContainer}>
          <IconButton 
            icon={icons.globe}
            containerStyle={styles.buttonStyle}
            iconStyle={styles.backIcon}
          />

          <IconButton 
            icon={icons.focus}
            containerStyle={styles.focusButton}
            iconStyle={styles.backIcon}
          />
        </View>
      </>

      <View style={styles.footerContainer}>
        <LinearGradient 
          start={{x: 0, y: 0}} 
          end={{x: 0, y: 1}} 
          colors={[COLORS.transparent, COLORS.lightGray1]}
          style={styles.linearGradient}
        />
        

        <View style={styles.footerInfo}>
            <View style={styles.flexRow}>
              <Image source={icons.clock} style={styles.clockIcon}/>

              <View style={{marginLeft: SIZES.padding}}>
                <Text style={styles.footerText_1}>Your Delivery Time</Text>
                <Text style={styles.footerText_2}>{duration} minutes</Text>
              </View>
            </View>

            <View style={[styles.flexRow, {marginTop: SIZES.radius}]}>
              <Image source={icons.focus} style={styles.clockIcon}/>

              <View style={{marginLeft: SIZES.padding}}>
                <Text style={styles.footerText_1}>Your Address</Text>
                <Text style={styles.footerText_2}>District 12, HCM city</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.deliveryButton}>
              <View style={{flexDirection: 'row'}}>
                <Image source={images.delivery_man} style={styles.profileImage}/>

                <View style={{marginLeft: SIZES.radius}}>
                  <Text style={styles.deliveryButtonLabel}>Phan Phi Hung</Text>
                  <Text style={[styles.footerText_2, {color: COLORS.white}]}>Delivery Man</Text>
                </View>
              </View>

              <View style={styles.detailContainer}>
                <Image source={icons.call} style={styles.callIcon}/>
              </View>
            </TouchableOpacity>
        </View>
      </View>
   </View>
  )
};

const styles = StyleSheet.create({
  container: {
   flex: 1
  },
  map: {
    flex: 1
  },
  backButton: {
    position: 'absolute',
    top: SIZES.padding * 2,
    left: SIZES.padding,
    width: 40,
    height: 40,
    borderRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.white,
    backgroundColor: COLORS.white2
  },
  buttonStyle: {
    width: 40,
    height: 40,
    borderRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.white,
    backgroundColor: COLORS.white2
  },
  backIcon: {
    width: 20,
    height: 20,
    tintColor: COLORS.gray2
  },
  rightContainer: {
    position: 'absolute',
    top: SIZES.padding * 2,
    right: SIZES.padding
  },
  focusButton: {
    width: 40,
    height: 40,
    borderRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.white,
    backgroundColor: COLORS.white2,
    marginTop: SIZES.radius
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  footerInfo: {
    padding: SIZES.padding,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: COLORS.white
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  clockIcon: {
    width: 40,
    height: 40,
    tintColor: COLORS.black
  },
  footerText_1: {
    color: COLORS.gray,
    ...FONTS.body4
  },
  footerText_2: {
    ...FONTS.h4
  },
  deliveryButton: {
    flexDirection: 'row',
    height: 70,
    marginTop: SIZES.padding,
    borderRadius: SIZES.radius,
    paddingHorizontal: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.primary
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 5,
  },
  deliveryButtonLabel: {
    color: COLORS.white,
    ...FONTS.h3
  },
  detailContainer: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.white,
    backgroundColor: COLORS.transparentPrimray
  },
  callIcon: {
    width: 30,
    height: 30
  },
  linearGradient: {
    position: 'absolute',
    top: -20,
    left: 0,
    right: 0,
    height: Platform.OS === 'ios' ? 200 : 50
  }
 });

export default MapComponent