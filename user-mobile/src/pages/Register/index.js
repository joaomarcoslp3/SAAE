import React, { useState, useEffect, useContext } from 'react';
import { Feather } from '@expo/vector-icons'
import { 
  KeyboardAvoidingView,
  View, 
  TextInput, 
  TouchableOpacity, 
  Text, 
  Animated,
  AsyncStorage,
  Keyboard
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AuthContext from '../../provider/AuthProvider';
import {LinearGradient} from 'expo-linear-gradient'
import {showMessage} from 'react-native-flash-message'


import api from '../../services/api';
import styles from './styles'
import Title from '../../components/Title';

export default function Register() {
  const [name, setName] = useState('');
  const [idElet, setIdElet] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [header, setHeader] = useState(true);
  const auth = useContext(AuthContext);

  const [offset] = useState(new Animated.ValueXY({x: 0, y:95}));
  const [opacity] = useState(new Animated.Value(0));

  const navigation = useNavigation();

  function keyboardDidShow() {
    setHeader(false)
  }

  function keyboardDidHide() {
    setHeader(true)
  }

  function navigateToLogin(){
    navigation.navigate('Login')
  }
  function navigateToRegisterInfo(){
    navigation.navigate('RegisterInfo')
  }
  

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

  async function _register(){
      api.post('/users/create',  {
        name: name,
        idElet: idElet,
        password: password,
        email: email
      }).then(res => {
        const { user, token } = res.data;
     
        AsyncStorage.multiSet([
          ['@SAAEapi:token', token],
          ['@SAAEapi:user', JSON.stringify(user)]
        ]);
         
         auth.setToken(token);
         auth.setSigned(true);
          showMessage({
                message: 'Sucesso!',
                description: 'Cadastro realizado com sucesso.',
                backgroundColor: '#228B22',
                titleStyle: { fontWeight: 'bold', fontSize: 20 },
                textStyle: { fontSize: 15 },
                color: '#FFF',
                floating: true,
                duration: 2000
              })
        }).catch((err) => {
          if(err.response){
            if(err.response.status === 406){
              showMessage({
                message: 'Ops!',
                description: 'Id Eletrônico já cadastrado, tente fazer login.',
                type: 'danger',
                duration: 3000,
                titleStyle: { fontWeight: 'bold', fontSize: 20},
                textStyle: {fontSize: 15} 
              })
            }else if (err.response.status === 422){
              showMessage({
                message: 'Ops!',
                description: 'Id Eletrônico inválido',
                type: 'danger',
                duration: 2000,
                titleStyle: { fontWeight: 'bold', fontSize: 20},
                textStyle: {fontSize: 15} 
              })
            }else{
              showMessage({
                message: 'Ops!',
                description: 'Ouve um erro em seu cadastro revise as informações e tente novamente.',
                type: 'danger',
                duration: 2000,
                titleStyle: { fontWeight: 'bold', fontSize: 20},
                textStyle: {fontSize: 15} 
              })
            }
          }
    })
  }
  return(
    <LinearGradient
        colors={['#F0F0F0', '#ededed']}
        style={styles.background}
    >  
    {header ? <Title name="Cadastro"/> : <></>}
     
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
        <Text style = {styles.submitText}>Insira Seu Nome</Text>
        <TextInput
        style = {styles.input}
        placeholder = "Nome"
        placeholderTextColor = '#A0A0B2'
        autoCorrect = { true}
        value = {name}
        onChangeText = { setName }
        />
       <View style = { styles.subWithInfo}> 
        <Text style = {styles.submitText}>Insira seu Id Eletrônico </Text>
        <TouchableOpacity onPress = { navigateToRegisterInfo }>
          <Feather name = "help-circle" size = {18} color= "#004384" />
        </TouchableOpacity>
      </View> 
        <TextInput
        style = {styles.input}
        placeholder = "Id Eletrônico"
        placeholderTextColor = '#A0A0B2'
        autoCorrect = { false }
        autoCapitalize = "none"
        value = {idElet}
        onChangeText = { setIdElet }
        />

      <Text style = {styles.submitText}>Insira sua Senha</Text>
        <TextInput
        style = {styles.input}
        placeholder = "Senha"
        placeholderTextColor = '#A0A0B2'
        autoCorrect = { false }
        value = {password}
        onChangeText = { setPassword }
        secureTextEntry={true}
        />
        <View style = { styles.subWithInfo}>
          <Text style = {styles.submitText}>Insira seu E-mail </Text> 
          <Text style = { styles.submitInfo}>(Opcional)</Text>
        </View>
        <TextInput
        style = {styles.input}
        placeholder = "E-mail"
        placeholderTextColor = '#A0A0B2'
        autoCorrect = { false }
        value = {email}
        onChangeText = { setEmail }
        keyboardType = 'email-address'
        />

        <TouchableOpacity  style = {styles.btnSubmit} onPress = {_register}> 
          <Text  style = {styles.registerText}>Criar Conta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.backButton} onPress={navigateToLogin}>
          <Text style={styles.backButtonText}>Já tem conta? Faça login.</Text>
        </TouchableOpacity>
      </Animated.View>
    </LinearGradient>

  )
}
