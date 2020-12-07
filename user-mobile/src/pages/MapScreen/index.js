import React, {useEffect, useState, useContext} from 'react';
import { View, ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync,  } from 'expo-location';
import { useNavigation } from '@react-navigation/native';
import LocationContext from '../../provider/LocationProvider';
import {MaterialIcons} from '@expo/vector-icons';

import styles from './styles';

export default function MapScreen() {
  const navigation = useNavigation();
  const [currentRegion, setCurrentRegion] = useState(null);
  const location = useContext(LocationContext);

  useEffect(()=>{
    async function loadInitialPosition(){
      const { granted } = await requestPermissionsAsync();
      if (granted){
        const {coords} = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });
        const {latitude, longitude} = coords;
        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        })
      }

    }
    loadInitialPosition();
  }, [])

  async function centerMap(){
    const {coords} = await getCurrentPositionAsync({
      enableHighAccuracy: true,
    });
    const {latitude, longitude} = coords;
     setCurrentRegion({
      latitude,
      longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01
    });
    
  }

  if(!currentRegion){
    return (
      <View style ={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#004384'}}>
        <ActivityIndicator size='large' color="#FFF"/>
      </View>
    )
  }
  function sendLocation(){
    location.setLatitude(currentRegion.latitude);
    location.setLongitude(currentRegion.longitude)

    navigation.navigate('Complaint');
  }
  function handleRegionChange(region){
    setCurrentRegion(region)
  }

    return(
      <>
        <MapView 
          initialRegion = {currentRegion} 
          ref={(map) => { this.map = map; }}
          region = {currentRegion}
          style ={styles.map}
          onRegionChangeComplete= {handleRegionChange}
          showsUserLocation = {true}
          ref={c => globalThis.mapView = c}
        >
          <Marker 
            coordinate = {currentRegion}
          />

        </MapView>
        <View style = {styles.ButtonView}>
        <TouchableOpacity onPress ={sendLocation} style ={styles.confirmLocation}>
            <MaterialIcons name ="check" size ={20} color = "#FFF"/>
          </TouchableOpacity>
          <TouchableOpacity onPress ={centerMap} style ={styles.currentPositionButton}>
            <MaterialIcons name ="my-location" size ={20} color = "#FFF"/>
          </TouchableOpacity>
        </View>
      </>
    ) ;
}
