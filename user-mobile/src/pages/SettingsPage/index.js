import React, {useContext, useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import AuthContext from '../../provider/AuthProvider';
import styles from './styles';

import { Feather } from '@expo/vector-icons'

export default function SettingsPage() {

  const auth = useContext(AuthContext);
  async function _logout (){
    await AsyncStorage.removeItem('@SAAEapi:token');
    auth.setSigned(false);
  }
  
  return (
    <LinearGradient
    colors={['#F0F0F0', '#ededed']}
    style={styles.background}
>
     <Text style = {styles.text}>Settings Page</Text>
      <TouchableOpacity onPress = {_logout} style={styles.btnLogout}>
        <View style = {styles.insideBtn}>
            <Feather name = "log-out" size ={22} color = '#FFF'/>
            <Text style ={styles.submitText}>Logout</Text>
          </View>
        </TouchableOpacity>
   </LinearGradient>
  );
}
