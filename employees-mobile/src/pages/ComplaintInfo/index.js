import React, {useEffect, useState} from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import {useNavigation, useRoute} from '@react-navigation/native';
import {showMessage} from 'react-native-flash-message';
import { showLocation } from 'react-native-map-link';
import * as Location from 'expo-location';
import api from '../../services/api'
import {LinearGradient} from 'expo-linear-gradient'


import styles from './styles';

export default function ComplaintInfo(){
  const navigation = useNavigation();
  const route = useRoute();
  const [adress, setAdress] = useState('');
  const [adressNumber, setAdressNumber] = useState('');

  const complaint = route.params.complaint

  useEffect(()=> {
    const coords = {latitude: Number(complaint.complaint_latitude), longitude: Number(complaint.complaint_longitude)}
    async function ReverseGeocode(){
      const { granted } = await Location.requestPermissionsAsync();
      if(granted){
      Location.getPermissionsAsync();
        let result = await Location.reverseGeocodeAsync(coords);
        setAdress(result[0].street)
        setAdressNumber(result[0].name)
      }
    }
    ReverseGeocode()
  }, [])

  function navigateBack(){
    navigation.goBack()
  }

  function sendToMaps(){
    const latlong = {latitude: complaint.complaint_latitude, longitude: complaint.complaint_longitude}
    showLocation({
      ...latlong,
      alwaysIncludeGoogle: true, 
      appsWhiteList: ['google-maps'],
    })
  }

  function changeToSolved(){
    api.put(`/complaint/${complaint.id}`, {
      "complaint_state": true
    }).then(res => {
      if(res.status ===400){
        showMessage({
          message: 'Ops!',
          description: 'Houve um erro em nossos servidores, tente novamente mais tarde.',
          backgroundColor: '#FF0000',
          titleStyle: { fontWeight: 'bold', fontSize: 20},
          textStyle: {fontSize: 15},
          color: '#FFF',
          floating: true,
          duration: 2000
        })
      }else{
      showMessage({
        message: 'Sucesso',
        description: 'Essa reclamação está marcada como resolvida',
        backgroundColor: '#228B22',
        titleStyle: { fontWeight: 'bold', fontSize: 20},
        textStyle: {fontSize: 15},
        color: '#FFF',
        floating: true,
        duration: 2000
      })
    }})
  }


  return(
    <LinearGradient
    colors={['#F0F0F0', '#ededed']}
    style={styles.container}
    >
      <View style={styles.header}>
        <Image source = {require('../../assets/logo.png')} style={styles.headerImg}/>
        <TouchableOpacity style={styles.logoutBtn} onPress={navigateBack}>
          <Feather name = "arrow-left" size ={28} color = '#004384'/>
        </TouchableOpacity>
      </View>

      <View style={styles.complaint}>
          <Text style={[styles.complaintProperty, {marginTop: 0}]}>Motivo da Reclamação:</Text>
          <Text style={styles.complaintValue}>{complaint.complaint_text}</Text>

          <Text style={styles.complaintProperty}>Local da Reclamação:</Text>
          <Text style={styles.complaintValue}>{adress}, {adressNumber}</Text>
        </View> 

        <View style ={styles.mapBox}>
          <Text style ={styles.boxTitle}>Vamos lá.</Text>
          <Text style = {styles.boxDescription}>Clique no botão abaixo e iremos te direcionar ao mapa com a localização dessa reclamação.</Text>
          
          <View style={styles.actions}>
            <TouchableOpacity style = {styles.action} onPress ={sendToMaps}>
              <Text style={styles.actionText}>Navegar para o Mapa</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.solvedView}>
          <TouchableOpacity style={styles.solvedBtn} onPress ={changeToSolved}>
            <Feather name="check-circle" size ={20} color='#FFF'/>
            <Text style={styles.actionText}>   Marcar como resolvido</Text>
          </TouchableOpacity>
        </View>
    </LinearGradient>
  )
}