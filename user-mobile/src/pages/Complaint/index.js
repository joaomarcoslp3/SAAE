import React, {useContext} from 'react';
import { KeyboardAvoidingView ,View, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import {showMessage} from 'react-native-flash-message'

export default function Complaint() {
  const navigation = useNavigation();

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
  }

  return(
    <KeyboardAvoidingView style = {styles.background}>
      <Text style= {styles.pageName}>Complaint Page</Text>
      <TouchableOpacity onPress ={navigateToMap}>
        <Text>Navegar para Mapa</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress = {RegisterComplaint}>
        <Text>Cadastrar Reclamação</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
    
  )
}