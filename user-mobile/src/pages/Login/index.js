import React, { useState, useEffect, useContext } from 'react';
import { 
  View, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  Text, 
  Animated,
  Keyboard,
  AsyncStorage
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AuthContext from '../../provider/AuthProvider';
import {LinearGradient} from 'expo-linear-gradient'
import api from '../../services/api'

import styles from './styles';

export default function Login() {
  const [idElet, setIdElet] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);
  const auth = useContext(AuthContext);

  const navigation = useNavigation();

  function navigateToRegister(){
    navigation.navigate('Register')
  }

  const [offset] = useState(new Animated.ValueXY({x: 0, y:95}));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({x:130, y: 155}));

  useEffect(()=>{
    keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

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

  }, []);

  function keyboardDidShow(){
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 70,
        duration: 100
      }),
      Animated.timing(logo.y, {
        toValue: 100,
        duration: 100
      }),
    ]).start();
  };
  function keyboardDidHide(){
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 130,
        duration: 100
      }),
      Animated.timing(logo.y, {
        toValue: 155,
        duration: 100
      }),   
    ]).start();
  };
  async function _login (){
     api.post('/users/login',  {
        idElet: idElet,
        password: password
      }).then(res => {
        const { user, token } = res.data;

        AsyncStorage.multiSet([
          ['@SAAEapi:token', token],
          ['@SAAEapi:user', JSON.stringify(user)]
        ]);
         auth.setToken(token);
      }).catch((err) => {
        if(err.response){
          if(err.response.status === 404){
            setErrorMsg('Id Eletrônico inexistente ou incorreto!')
          }else{
            setErrorMsg('Senha incorreta!')
          }
        }
      })
  }

  return(  
    <LinearGradient
        colors={['#F0F0F0', '#ededed']}
        style={styles.background}
    >
      <View style = {styles.containerLogo}>
        <Animated.Image
          style = {{
            width: logo.x,
            height: logo.y,
          }}
          source = {require('../../assets/logo.png')}
        />
      </View>

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
        <Text style ={styles.errorMsg}>{errorMsg}</Text>
        <TextInput
        style = {styles.input}
        placeholder = "Id Eletrônico"
        placeholderTextColor = '#A0A0B2'
        autoCorrect = { false }
        autoCapitalize = "none"
        value = {idElet}
        onChangeText = { setIdElet }
        />

        <TextInput
        style = {styles.input}
        placeholder = "Senha"
        placeholderTextColor = '#A0A0B2'
        autoCorrect = { false }
        value = {password}
        onChangeText = { setPassword }
        secureTextEntry={true}
        />

        <TouchableOpacity  style = {styles.btnSubmit} onPress ={ _login }> 
          <Text  style = {styles.submitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity  style = {styles.btnRegister} onPress = { navigateToRegister}> 
          <Text style = {styles.registerText}>Criar Conta</Text>
        </TouchableOpacity>

      </Animated.View>
      </LinearGradient>
    
  )
}