import React, {useContext} from 'react';
import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import AuthContext from '../../provider/AuthProvider'
import styles from './styles';


export default function Complaint() {
  return(
    <View style = {styles.background}>
      <Text style= {styles.pageName}>Complaint Page</Text>
    </View>
    
  )
}