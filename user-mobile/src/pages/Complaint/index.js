import React, {useContext, useState, useEffect} from 'react';
import { 
   KeyboardAvoidingView,
   View,
   Text, 
   TouchableOpacity, 
   TextInput,
   Image, 
   Animated} from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import {showMessage} from 'react-native-flash-message';
import LocationContext from '../../provider/LocationProvider'
import {Feather} from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


export default function Complaint() {
  //navegação
  const navigation = useNavigation();
  //dados
  const [text, setText] = useState('');
  const [latitudeC, setLatitudeC] = useState('');
  const [longitudeC, setLongitudeC] = useState('');
  const { latitude,longitude, setLatitude, setLongitude } = useContext(LocationContext);
  const [image, setImage] = useState(null) 
  //animação
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

    setLatitudeC(JSON.stringify(latitude));
    setLongitudeC(JSON.stringify(longitude));
    if(latitude === ''){
      setLatitudeC(null);
      setLongitudeC(null)
    }
  })

  function navigateToMap(){
    navigation.navigate('MapScreen')
  }

  function RegisterComplaint(){
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
    setImage(null)
  }

  async function handleChoosePhoto(){
    const status = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    console.log(status);
    if(status.granted === true){
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      quality: 1,
    });
    if(!result.cancelled)
    setImage(result.uri)

    console.log(result);
  }else{
    alert('É necessário permissão para termos acesso a galeria')
  }
  }

  return(
    <KeyboardAvoidingView keyboardVerticalOffset={550} style = {styles.background}>  
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
        autoCorrect = { true }
        value = {text}
        onChangeText = { setText }
        />
        <TouchableOpacity onPress ={handleChoosePhoto}>
          <Text>Escolher uma foto</Text>
        </TouchableOpacity>
        {image && (
          <Image 
            source={{uri: image.uri}}
            style ={{width: 100, height: 100}}
          />
        )}
        <TouchableOpacity>
          <Text>Tirar uma foto</Text>
        </TouchableOpacity>
      <View style={styles.mapViewButton}>
        <View style ={styles.mapTextView}>
          <Text style = {styles.mapTitle} >Localização</Text>
          <Text style = {styles.mapSubtitle}>Latitude:</Text>
          <Text style = {styles.mapInfo}> {latitudeC}</Text>
          <Text style={styles.mapSubtitle}>Longitude:</Text>
          <Text style = {styles.mapInfo}>{longitudeC}</Text>
        </View>
        <View style ={styles.mapButtonView}>
          <TouchableOpacity onPress = {navigateToMap}>
            <Feather name = 'map-pin' size={70}  color = '#004384'/>
          </TouchableOpacity>
        </View>
      </View>
        
      <View style = {styles.btnView}>
        <TouchableOpacity style = {styles.btnSubmit}onPress = {RegisterComplaint}>
          <Text style ={styles.submitText}>Cadastrar Reclamação</Text>
        </TouchableOpacity>
      </View>
      </Animated.View>

    </KeyboardAvoidingView>
    
  )
}