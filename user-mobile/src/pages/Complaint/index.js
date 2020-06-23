import React, {useContext, useState, useEffect} from 'react';
import { 
   KeyboardAvoidingView,
   View,
   Text, 
   TouchableOpacity, 
   TextInput,
   Image, 
   AsyncStorage,
   Animated} from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import {showMessage} from 'react-native-flash-message';
import LocationContext from '../../provider/LocationProvider'
import {Feather} from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import api from '../../services/api';
import {reverseGeocodeAsync} from 'expo-location';
import {LinearGradient} from 'expo-linear-gradient'



export default function Complaint() {
  //navegação
  const navigation = useNavigation();
  //dados
  const [text, setText] = useState('');
  const { latitude, longitude, setLatitude, setLongitude } = useContext(LocationContext);
  const [image, setImage] = useState(null);
  const [adress, setAdress] = useState('');
  const [adressNumber, setAdressNumber] = useState('')
  //animação
  const [offset] = useState(new Animated.ValueXY({x: 0, y:95}));
  const [opacity] = useState(new Animated.Value(0));

  useEffect(()=> {
    const coords = {latitude, longitude}
   
    async function ReverseGeocode(){
      if (latitude){
        const result = await reverseGeocodeAsync(coords)
        setAdress(result[0].street)
        setAdressNumber(result[0].name)
      }
    }

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

    ReverseGeocode()
  })

  function navigateToMap(){
    navigation.navigate('MapScreen')
  }

  async function RegisterComplaint(){
    const user = await AsyncStorage.getItem('@SAAEapi:user');
    const jsonUser = JSON.parse(user);
    if(text !== '' && latitude!==0){
      api.post(`/users/${jsonUser.id}/complaint/`, {
        complaint_text: text,
        complaint_picture: image,
        complaint_latitude: latitude,
        complaint_longitude: longitude
      })
      showMessage({
        message: 'Sucesso!',
        description: 'Sua reclamação foi realizada com sucesso e já se encontra com nossos funcionários para solucioná-la.',
        type: 'success',
        floating: 'true',
        duration: 2000,
        titleStyle: { fontWeight: 'bold', fontSize: 20},
        textStyle: {fontSize: 15}
      })
      setLatitude('');
      setLongitude('');
      setText('');
      setImage(null);
      setAdress('Clique ao lado para definir no mapa')
      setAdressNumber('')
    }else{
      showMessage({
        message: 'ERRO!',
        description: 'Ouve um problema no cadastro de sua reclamação, tente novamente mais tarde',
        type: 'danger',
        floating: 'true',
        duration: 2000,
        titleStyle: { fontWeight: 'bold', fontSize: 20},
        textStyle: {fontSize: 15}
      })
    };
  }

  async function handleChoosePhoto(){
    const status = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if(status.granted === true){
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      quality: 1,
    });
    if(!result.cancelled)
    setImage(result.uri)
  }else{
    alert('É necessário permissão para termos acesso a galeria')
  }
  }

  async function handleTakePhoto(){
    const status = await Permissions.askAsync(Permissions.CAMERA);
    if(status.granted === true){
      let result = await ImagePicker.launchCameraAsync({
        allowsEditing: false,
        quality: 1,
        mediaTypes: ImagePicker.MediaTypeOptions.All,
      });
      if(!result.cancelled)
      setImage(result.uri);
    }else{
      alert('É necessário permissão para termos acessoa a câmera')
    }
  }

  return(
    <LinearGradient
        colors={['#F0F0F0', '#ededed']}
        style={styles.background}
    >  
      <Animated.View 
        style = {[
          styles.container,
          {
            opacity: opacity,
            transform: [
              { translateY: offset.y}
            ]
          }
        ]}
      >
        <Text style = {styles.submitText}>Insira os dados de sua reclamação</Text>
        <TextInput
        style = {styles.input}
        placeholder = "Insira aqui o motivo de sua reclamação"
        placeholderTextColor = '#A0A0B2'
        autoCorrect = { true }
        value = {text}
        onChangeText = { setText }
        />
        <View style ={styles.photoAreaButton}>
          <View style = {styles.photoButtonsView}>
            <TouchableOpacity style ={styles.photoButtonTop}onPress ={handleChoosePhoto}>
              <Text style ={{color: '#FFF'}}>Escolher uma foto</Text>
            </TouchableOpacity>
            <TouchableOpacity style ={styles.photoButtonBottom} onPress = {handleTakePhoto}>
              <Text style ={{color: '#FFF'}}>Tirar uma foto</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.photoImageView}>
          {image ? (
            <Image 
            source={{uri: image}}
            style ={{width: '100%', height: '100%'}}
            />
          ) : (
            <Feather  name ="camera" size ={70} color='#004384'/>
          )}
        </View>
        </View>
      <View style={styles.mapViewButton}>
        <View style ={styles.mapTextView}>
          <Text style = {styles.mapTitle} >Localização</Text>
          {adress ?
           <Text style = {styles.mapSubtitle}>{adress}, {adressNumber}</Text>
          : 
          <Text style = {styles.mapSubtitle}>Clique ao lado para definir no mapa</Text>  
        }
          
        </View>
        <View style ={styles.mapButtonView}>
          <TouchableOpacity onPress = {navigateToMap}>
            <Feather name = 'map-pin' size={70}  color = '#004384'/>
          </TouchableOpacity>
        </View>
      </View>
        
      <View style = {styles.btnView}>
        <TouchableOpacity style = {styles.btnSubmit}onPress = {RegisterComplaint}>
          <Text style ={{color: '#FFF', fontSize: 16}}>Cadastrar Reclamação</Text>
        </TouchableOpacity>
      </View>
      </Animated.View>

    </LinearGradient>
    
  )
}