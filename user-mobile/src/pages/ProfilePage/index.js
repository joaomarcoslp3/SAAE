import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, AsyncStorage, Animated, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import AuthContext from '../../provider/AuthProvider';
import styles from './styles';
import api from '../../services/api'

export default function ProfilePage() {
  const navigation = useNavigation();
  const [complaints, setComplaints] = useState([]);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true)
  const auth = useContext(AuthContext);

  const [offset] = useState(new Animated.ValueXY({x: 0, y:95}));
  const [opacity] = useState(new Animated.Value(0));

  async function loadComplaints(){
    const res = await api.get(`/users/${userId}/complaint/findOne`);
    
    setComplaints(res.data);
    setLoading(false)
  }
  async function getUserId(){
    const user = await AsyncStorage.getItem('@SAAEapi:user');
    const jsonUser = JSON.parse(user);
    setUserId(jsonUser.id);
    setLoading(false)  
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
    
  }, [])

  useFocusEffect(
    React.useCallback(() => {
      loadComplaints();
    }, [loading])
  )

  useEffect(()=> {
    getUserId()
   }, []);

  function navigateToInfo(complaint){
    navigation.navigate('userComplaintInfo', {complaint})
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
        <Text style={styles.title}>Suas Reclamações</Text>
      </View>
      {
        loading ?  
        <View style ={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
          <ActivityIndicator size='large' color="#004384"/>
        </View>
        :
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
          <View style={[styles.complaint, complaint.complaint_state_id === 4 ? styles.disabledBox : complaint.complaint_state_id === 1 ? styles.solvedBox : null ]}>
            <Text style={[styles.complaintProperty, complaint.complaint_state_id === 4 ? styles.disabledText : null ]}>Motivo da Reclamação:</Text>
            <Text style={[styles.complaintValue, complaint.complaint_state_id === 4 ? styles.disabledText : null ]}>{complaint.complaint_text}</Text>
  
            <TouchableOpacity style={styles.infoButton} onPress={() => navigateToInfo(complaint)}>
              <Text style={[styles.infoButtonText, , complaint.complaint_state_id === 4 ? styles.disabledButton : null ]}>Ver mais detalhes</Text>
              <Feather name ="arrow-right" size ={17} color={complaint.complaint_state_id === 4 ? '#35AAFF' : '#004384'}/>
            </TouchableOpacity>
          </View> 
          )}
        />  
      }

      <View style={styles.btnLogoutContainer}>
        <TouchableOpacity onPress={_logout} style={styles.btnLogout}>
          <View style={styles.insideBtn}>
            <Feather name="log-out" size={22} color='#FFF' />
            <Text style={styles.submitText}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}
