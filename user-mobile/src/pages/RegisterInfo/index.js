import React, { useState, useEffect } from 'react';
import { 
  View, 
  Image, 
  Alert
} from 'react-native';



import styles from './styles'

export default function RegisterInfo() {
  useEffect(()=>{
    Alert.alert('INFO'  ,'Id Eletrônico se encontra em uma conta do SAAE na área destacada na imagem.')
  }, [])

  return(
    <View style= {styles.background}>
      <Image  source = {require('../../assets/CONTA.png')}/>
    </View>

  )
}