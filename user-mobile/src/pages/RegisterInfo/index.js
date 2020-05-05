import React, { useState, useEffect } from 'react';
import { 
  View, 
  Image, 
  Alert
} from 'react-native';
import {showMessage, hideMessage} from 'react-native-flash-message'



import styles from './styles'

export default function RegisterInfo() {
  useEffect(()=>{
    // Alert.alert('INFO'  ,'Id Eletrônico se encontra em uma conta do SAAE na área destacada na imagem.')
    showMessage({
      message: 'INFO',
      description: 'Id Eletrônico se encontra em uma conta do SAAE na área destacada em vermelho na imagem.',
      type: 'info',
      titleStyle: { fontWeight: 'bold', fontSize: 20},
      textStyle: {fontSize: 15},
      backgroundColor: '#22262e',
      color: '#FFF',
      duration: 2500
    });
  }, [])

  return(
    <View style= {styles.background}>
      <Image source = {require('../../assets/CONTA.png')}/>
    </View>

  )
}