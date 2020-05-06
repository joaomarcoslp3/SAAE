import React, {useContext, useState, useEffect} from 'react';
import { KeyboardAvoidingView, View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import {showMessage} from 'react-native-flash-message';
import LocationContext from '../../provider/LocationProvider'

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
      <TouchableOpacity onPress ={navigateToMap}>
        <Text>Navegar para Mapa</Text>
      </TouchableOpacity>

      <TextInput
        style = {styles.input}
        placeholder = "Latitude"
        autoCorrect = { false }
        autoCapitalize = "none"
        value = {latitudeC}
        onChangeText = { setLatitudeC }
        />

        <TextInput
        style = {styles.input}
        placeholder = "Longitude"
        autoCorrect = { false }
        value = {longitudeC}
        onChangeText = { setLongitudeC }
        />
        
      <TouchableOpacity onPress = {RegisterComplaint}>
        <Text>Cadastrar Reclamação</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
    
  )
}