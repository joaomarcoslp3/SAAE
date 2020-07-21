import React, {useEffect, useState} from 'react';
import { View, Text, TouchableOpacity, Image, Picker } from 'react-native';
import { Feather } from '@expo/vector-icons';
import {useNavigation, useRoute} from '@react-navigation/native';
import {showMessage} from 'react-native-flash-message';
import { showLocation } from 'react-native-map-link';
import * as Location from 'expo-location';
import api from '../../services/api'
import {LinearGradient} from 'expo-linear-gradient';


import styles from './styles';

export default function ComplaintInfo(){
  const navigation = useNavigation();
  const route = useRoute();
  const [adress, setAdress] = useState('');
  const [adressNumber, setAdressNumber] = useState('');
  const [selectedValue, setSelectedValue] = useState(null);
  const complaint = route.params.complaint;
  const complaintState = [
    {label: "NOVA", value: 1},
    {label: "EM ATENDIMENTO", value: 2},
    {label: "RESOLVIDA", value: 3}
  ]

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
    ReverseGeocode();
  }, []);
  useEffect(() => {
    setSelectedValue(complaint.complaint_state_id);
  }, [])

  function navigateBack(){
    navigation.navigate('ComplaintList')
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
    if(selectedValue === complaint.complaint_state_id){
      showMessage({
        message: 'Ops!',
        description: 'Você não pode marcar que a reclamação se encontra no mesmo encontrado no nosso sistema.',
        backgroundColor: '#FF0000',
        titleStyle: { fontWeight: 'bold', fontSize: 20},
        textStyle: {fontSize: 15},
        color: '#FFF',
        floating: true,
        duration: 2000
      })
    }else{
      api.put(`/complaint/${complaint.id}`, {
        "complaint_state_id": selectedValue
      }).then(res => {
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
          }).catch((err) => {
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
        })
    }
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
          <View style={styles.picker}>
            <Picker
            iosHeader="Selecione o estado dessa reclamação"
            selectedValue={selectedValue}
            style={styles.solvedBtn}
            mode={"dropdown"}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
              {complaintState.map(state => (
                <Picker.Item key={state.value} label={state.label} value={state.value} />
                ))}
          </Picker>
        </View>
        <TouchableOpacity style={styles.checkButton} onPress={changeToSolved}>
          <Feather name="check-circle" size ={20} color='#FFF'/>
        </TouchableOpacity>
        </View>
    </LinearGradient>
  )
}