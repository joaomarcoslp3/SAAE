import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {showMessage} from 'react-native-flash-message'


import styles from './styles';

export default function ComplaintInfo(){
  const navigation = useNavigation();

  function navigateBack(){
    navigation.goBack()
  }

  function sendToMaps(){
    //to-do
  }

  function changeToSolved(){
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
  }

  return(
    <View style ={styles.container}>
      <View style={styles.header}>
        <Image source = {require('../../assets/logo.png')} style={styles.headerImg}/>
        <TouchableOpacity style={styles.logoutBtn} onPress={navigateBack}>
          <Feather name = "arrow-left" size ={28} color = '#35AAFF'/>
        </TouchableOpacity>
      </View>

      <View style={styles.complaint}>
          <Text style={[styles.complaintProperty, {marginTop: 0}]}>Motivo da Reclamação:</Text>
          <Text style={styles.complaintValue}>teste de link</Text>

          <Text style={styles.complaintProperty}>Local da Reclamação:</Text>
          <Text style={styles.complaintValue}>Rua Antônio José Barbosa, 330</Text>
        </View> 

        <View style ={styles.mapBox}>
          <Text style ={styles.boxTitle}>Vamos lá.</Text>
          <Text style = {styles.boxDescription}>Clique no botão abaixo e iremos te direcionar ao mapa com a localização dessa reclamação.</Text>
          
          <View style={styles.actions}>
            <TouchableOpacity style = {styles.action} onPress ={()=>{}}>
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
    </View>
  )
}