import React, {useContext, useEffect, useState} from 'react';
import { Animated, View, FlatList, Text, TouchableOpacity, AsyncStorage, Image } from 'react-native';
import AuthContext from '../../provider/AuthProvider';
import { Feather } from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';
import * as Location from 'expo-location';
import {useNavigation} from '@react-navigation/native'

import styles from './styles';
import api from '../../services/api';

export default function ComplaintList(){
  const navigation = useNavigation();
  const [complaints, setComplaints] = useState([]);
  const auth = useContext(AuthContext);

  const [offset] = useState(new Animated.ValueXY({x: 0, y:95}));
  const [opacity] = useState(new Animated.Value(0));

  async function loadComplaints(){
    const res = await api.get('/complaint/findUnsolved');
    setComplaints(res.data)
  }

  useEffect(()=> {
   loadComplaints()
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20
      }),
      Animated.timing(opacity,{ 
        toValue: 1,
        duration: 200,
      })
    ]).start();

  }, [complaints])

  function navigateToInfo(complaint){
    navigation.navigate('ComplaintInfo', {complaint})
  }
  async function _logout (){
    await AsyncStorage.removeItem('@SAAEapi:token');
    auth.setSigned(false);
  }

  return(
    <LinearGradient
    colors={['#F0F0F0', '#ededed']}
    style={styles.container}
  >
      <View style={styles.header}>
        <Image source = {require('../../assets/logo.png')} style={styles.headerImg}/>
        <TouchableOpacity style={styles.logoutBtn} onPress={_logout}>
          <Feather name = "power" size ={24} color = '#004384'/>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Bem-Vindo!</Text>
      <Text style={styles.description}>Escolha abaixo um dos problemas em nossas instalações e melhore a experiência dos nossos clientes.</Text>

      <Animated.FlatList
        data={complaints}
        style={[styles.complaintList, {
          opacity: opacity,
                transform: [
                  { translateY: offset.y}
                ]
        }]}
        keyExtractor ={complaint => String(complaint.id)}
        showsVerticalScrollIndicator = {false}
        renderItem = {({ item: complaint })=> (
        <View style={styles.complaint}>
          <Text style={styles.complaintProperty}>Motivo da Reclamação:</Text>
          <Text style={styles.complaintValue}>{complaint.complaint_text}</Text>

          <TouchableOpacity style={styles.infoButton} onPress={() => navigateToInfo(complaint)}>
            <Text style={styles.infoButtonText}>Ver mais detalhes</Text>
            <Feather name ="arrow-right" size ={17} color="#004384"/>
          </TouchableOpacity>
        </View> 
        )}
      />      
    </LinearGradient>
  )
}