import React, {useContext, useEffect, useState} from 'react';
import { Animated, View, FlatList, Text, TouchableOpacity, AsyncStorage, Image } from 'react-native';
import AuthContext from '../../provider/AuthProvider';
import { Feather } from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';
import {useNavigation} from '@react-navigation/native'

import styles from './styles';
import api from '../../services/api';

export default function ComplaintList(){
  const navigation = useNavigation();
  const [complaints, setComplaints] = useState([]);
  const [name, setName] = useState(null);
  const auth = useContext(AuthContext);

  const [offset] = useState(new Animated.ValueXY({x: 0, y:95}));
  const [opacity] = useState(new Animated.Value(0));

  async function loadComplaints(){
    const res = await api.get('/complaint/findUnsolved');
    setComplaints(res.data)
  }
  async function getEmployeerName(){
    const employeer = await AsyncStorage.getItem('@SAAEapi:user');
    const jsonEmployeer = JSON.parse(employeer);
    setName(jsonEmployeer.name);
  }

  useEffect(()=> {
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
    getEmployeerName();
  }, [])

  useEffect(()=> {
   loadComplaints()
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
          <Feather name = "log-out" size ={24} color = '#004384'/>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Bem-Vindo, {name}!</Text>
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

          <Text style={styles.complaintProperty}>Estado da Reclamação</Text>
          {complaint.complaint_state_id === 2 
          ? (
          <Text style={[styles.complaintValue, styles.newComplaint]}>NOVA</Text> 
          )
          : complaint.complaint_state_id === 3 
          ? (
          <Text style={styles.complaintValue}>EM ATENDIMENTO</Text> 
          )
          : null
          }

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