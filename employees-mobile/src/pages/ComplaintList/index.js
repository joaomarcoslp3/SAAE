import React, {useContext, useEffect, useState} from 'react';
import { Animated, View, FlatList, Text, TouchableOpacity, AsyncStorage, Image } from 'react-native';
import AuthContext from '../../provider/AuthProvider';
import { Feather } from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient'
import {useNavigation} from '@react-navigation/native'

import styles from './styles';

export default function ComplaintList(){
  const navigation = useNavigation();
  const auth = useContext(AuthContext);

  const [offset] = useState(new Animated.ValueXY({x: 0, y:95}));
  const [opacity] = useState(new Animated.Value(0));

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

  }, [])

  function navigateToInfo(){
    navigation.navigate('ComplaintInfo')
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
        data={[1,2,3,4]}
        style={[styles.complaintList, {
          opacity: opacity,
                transform: [
                  { translateY: offset.y}
                ]
        }]}
        keyExtractor ={complaint => String(complaint)}
        showsVerticalScrollIndicator = {false}
        renderItem = {()=> (
        <View style={styles.complaint}>
          <Text style={styles.complaintProperty}>Motivo da Reclamação:</Text>
          <Text style={styles.complaintValue}>teste de link</Text>

          <Text style={styles.complaintProperty}>Local da Reclamação:</Text>
          <Text style={styles.complaintValue}>Rua Antônio José Barbosa, 330</Text>

          <TouchableOpacity style={styles.infoButton} onPress={navigateToInfo}>
            <Text style={styles.infoButtonText}>Ver mais detalhes</Text>
            <Feather name ="arrow-right" size ={17} color="#004384"/>
          </TouchableOpacity>
        </View> 
        )}
      />      
    </LinearGradient>
  )
}