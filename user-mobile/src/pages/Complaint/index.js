import React from 'react';
import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import styles from './styles';


export default function Complaint() {
  async function _logout (){
    await AsyncStorage.clear();
  }

  return(
    <View style = {styles.background}>
      <TouchableOpacity onPress = {_logout}><Text style ={{ color: '#FFF'}}>Logout</Text></TouchableOpacity>
    </View>
    
  )
}