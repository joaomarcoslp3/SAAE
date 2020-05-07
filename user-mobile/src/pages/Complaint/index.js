import React, {useContext, useState, useEffect} from 'react';
import { KeyboardAvoidingView, View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import {showMessage} from 'react-native-flash-message';
import LocationContext from '../../provider/LocationProvider'
import {Feather} from '@expo/vector-icons'

export default function Complaint() {
  const navigation = useNavigation();
  const [latitudeC, setLatitudeC] = useState('');
  const [longitudeC, setLongitudeC] = useState('');
  const { latitude, longitude, setLatitude, setLongitude } = useContext(LocationContext);

  useEffect(()=> {
    setLatitudeC(JSON.stringify(latitude));
    setLongitudeC(JSON.stringify(longitude));
    if(latitude === ''){
      setLatitudeC(null);
      setLongitudeC(null)
    }
  })

  function navigateToMap(){
    navigation.navigate('MapScreen')
  }

  function RegisterComplaint(){
    showMessage({
      message: 'Sucesso!',
      description: 'Sua reclamação foi realizada com sucesso e já se encontra com nossos funcionários para solucioná-la.',
      type: 'success',
      floating: 'true',
      duration: 2000,
      titleStyle: { fontWeight: 'bold', fontSize: 20},
      textStyle: {fontSize: 15}
    })
    setLatitude('');
    setLongitude('')
  }

  return(
    <KeyboardAvoidingView style = {styles.background}>
        <Text style= {styles.pageName}>Complaint Page</Text>
    
      <View style={styles.mapViewButton}>
        <View style ={styles.mapTextView}>
          <Text style = {styles.mapTitle} >Localização</Text>
          <Text style = {styles.mapSubtitle}>Latitude:</Text>
          <Text style = {styles.mapInfo}> {latitudeC}</Text>
          <Text style={styles.mapSubtitle}>Longitude:</Text>
          <Text style = {styles.mapInfo}>{longitudeC}</Text>
        </View>
        <View style ={styles.mapButtonView}>
          <TouchableOpacity onPress = {navigateToMap}>
            <Feather name = 'map-pin' size={70}  color = '#004384'/>
          </TouchableOpacity>
        </View>
      </View>

      <View style = {styles.btnView}>
        <TouchableOpacity style = {styles.btnSubmit}onPress = {RegisterComplaint}>
          <Text style ={styles.submitText}>Cadastrar Reclamação</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
    
  )
}