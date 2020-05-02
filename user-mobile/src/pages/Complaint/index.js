import React, {useContext} from 'react';
import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';


export default function Complaint() {
  const navigation = useNavigation();

  function navigateToMap(){
    navigation.navigate('MapScreen')
  }
  return(
    <View style = {styles.background}>
      <Text style= {styles.pageName}>Complaint Page</Text>
      <TouchableOpacity onPress ={navigateToMap}>
        <Text>Navegar para Mapa</Text>
      </TouchableOpacity>
    </View>
    
  )
}