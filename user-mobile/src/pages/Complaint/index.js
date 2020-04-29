import React, {useContext} from 'react';
import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import AuthContext from '../../provider/AuthProvider'
import styles from './styles';


export default function Complaint() {
  const auth = useContext(AuthContext);
  async function _logout (){
    await AsyncStorage.removeItem('@SAAEapi:token');
    auth.setSigned(false);
  }

  return(
    <View style = {styles.background}>
      <TouchableOpacity onPress = {_logout}><Text style ={{ color: '#FFF'}}>Logout</Text></TouchableOpacity>
    </View>
    
  )
}