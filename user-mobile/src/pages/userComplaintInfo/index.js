import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';
import * as Location from 'expo-location';
import { LinearGradient } from 'expo-linear-gradient';

import api from '../../services/api'
import styles from './styles';

export default function userComplaintInfo() {
  const navigation = useNavigation();
  const route = useRoute();
  const [adress, setAdress] = useState('');
  const [adressNumber, setAdressNumber] = useState('');
  const complaint = route.params.complaint;

  useEffect(() => {
    const coords = { latitude: Number(complaint.complaint_latitude), longitude: Number(complaint.complaint_longitude) }
    async function ReverseGeocode() {
      const { granted } = await Location.requestPermissionsAsync();
      if (granted) {
        Location.getPermissionsAsync();
        let result = await Location.reverseGeocodeAsync(coords);
        setAdress(result[0].street)
        setAdressNumber(result[0].name)
      }
    }
    ReverseGeocode();
  }, []);

  function navigateBack() {
    navigation.goBack()
  }

  function changeToSolved() {
    api.put(`/complaint/${complaint.id}`, {
      "complaint_state_id": 4
    }).then(res => {
      showMessage({
        message: 'Sucesso',
        description: 'Essa reclamação está resolvida, obrigado pelo feedback.',
        backgroundColor: '#228B22',
        titleStyle: { fontWeight: 'bold', fontSize: 20 },
        textStyle: { fontSize: 15 },
        color: '#FFF',
        floating: true,
        duration: 2000
      })
    }).catch((err) => {
      showMessage({
        message: 'Ops!',
        description: 'Houve um erro em nossos servidores, tente novamente mais tarde.',
        backgroundColor: '#FF0000',
        titleStyle: { fontWeight: 'bold', fontSize: 20 },
        textStyle: { fontSize: 15 },
        color: '#FFF',
        floating: true,
        duration: 2000
      })
    })

    setTimeout(() => {
      navigation.goBack()
    }, 2000)
  }

  function changeToUnsolved() {
    api.put(`/complaint/${complaint.id}`, {
      "complaint_state_id": 1
    }).then(res => {
      showMessage({
        message: 'Ok',
        description: 'Essa reclamação irá voltar para o nosso sistema e iremos resolvê-la o mais rápido possível.',
        backgroundColor: '#5C6366',
        titleStyle: { fontWeight: 'bold', fontSize: 20 },
        textStyle: { fontSize: 15 },
        color: '#FFF',
        floating: true,
        duration: 2000
      })
    }).catch((err) => {
      showMessage({
        message: 'Ops!',
        description: 'Houve um erro em nossos servidores, tente novamente mais tarde.',
        backgroundColor: '#FF0000',
        titleStyle: { fontWeight: 'bold', fontSize: 20 },
        textStyle: { fontSize: 15 },
        color: '#FFF',
        floating: true,
        duration: 2000
      })
    })

    setTimeout(() => {
      navigation.goBack()
    }, 2000)
  }

  function disabledButton() {
    showMessage({
      message: 'Ops!',
      description: 'Você ainda não pode fazer isso, pois ainda não resolvemos sua reclamação.',
      backgroundColor: '#5C6366',
      titleStyle: { fontWeight: 'bold', fontSize: 20 },
      textStyle: { fontSize: 15 },
      color: '#FFF',
      floating: true,
      duration: 2000
    })
  }

  return (
    <LinearGradient
      colors={['#F0F0F0', '#ededed']}
      style={styles.container}
    >
      <View style={styles.header}>
        <Image source={require('../../assets/logo.png')} style={styles.headerImg} />
        <TouchableOpacity style={styles.logoutBtn} onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color='#004384' />
        </TouchableOpacity>
      </View>

      <View style={styles.complaint}>
        <Text style={[styles.complaintProperty, { marginTop: 0 }]}>Motivo da Reclamação:</Text>
        <Text style={styles.complaintValue}>{complaint.complaint_text}</Text>

        <Text style={styles.complaintProperty}>Local da Reclamação:</Text>
        <Text style={styles.complaintValue}>{adress}, {adressNumber}</Text>
      </View>

      {complaint.complaint_state_id === 4 ?
        <View style={styles.solvedBtn}>
          <Text style={styles.actionText}>Reclamação já resolvida</Text>
        </View>
        :
        complaint.complaint_state_id === 1 ?
          <View style={styles.infoBox}>
            <Text style={styles.infoBoxTittle}>Aviso.</Text>
            <Text style={styles.infoBoxDescription}>Nossos funcionários já solucionaram sua reclamação, se tal solução não resolveu seu problema, aperte no X, se sim marque-a como resolvida.</Text>
          </View>
          :
          null
      }

      {complaint.complaint_state_id !== 4 ?
        <View style={styles.solvedView}>
          <View style={styles.picker}>
            <TouchableOpacity style={[styles.solvedBtn, complaint.complaint_state_id !== 1 ? styles.disabledButton : null]} onPress={complaint.complaint_state_id === 1 ? changeToSolved : disabledButton}>
              <Feather name="check-circle" size={20} color='#FFF' />
              <Text style={styles.actionText}>Marcar como resolvido</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={[styles.checkButton, complaint.complaint_state_id !== 1 ? styles.disabledButton : null]} onPress={complaint.complaint_state_id === 1 ? changeToUnsolved : disabledButton}>
            <Feather name="x-circle" size={20} color='#FFF' />
          </TouchableOpacity>
        </View>
        :
        null
      }


    </LinearGradient>
  )
}