import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons'
import { 
  KeyboardAvoidingView,
  View, 
  TextInput, 
  TouchableOpacity, 
  Text, 
  Animated,
  Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import styles from './styles'

export default function Register() {
  const [name, setName] = useState('');
  const [idElet, setIdElet] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');


  const navigation = useNavigation();

  function navigateToLogin(){
    navigation.navigate('Login')
  }
  function navigateToRegisterInfo(){
    navigation.navigate('RegisterInfo')
  }
  const [offset] = useState(new Animated.ValueXY({x: 0, y:95}));
  const [opacity] = useState(new Animated.Value(0));

  useEffect(()=>{
    
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
    // try{
    //   const res =  api.post('/users/login',  {
    //     name: name,
    //     idElet: idElet,
    //     password: password,
    //     email: email;
    //   });
    //   const { user, token } = res.data;
  
    //   await AsyncStorage.multiSet([
    //     ['@SAAEapi:token', token],
    //     ['@SAAEapi:user', JSON.stringify(user)]
    //   ]);
    //    const token = await AsyncStorage.getItem('@SAAEapi:token');
    //    auth.setToken(token);
    //    auth.setSigned(true);
    // }catch(err){
    //   Alert.alert('Ops!', 'Ouve um erro em seu cadastro revise as informações e tente novamente')
    // }
  }


  return(
    <KeyboardAvoidingView style = {styles.background}>
      
      <View style = {styles.header}>
        <View style = {styles.headerBtn}>
        <TouchableOpacity onPress = { navigateToLogin}>
          <Feather name = "arrow-left" size ={24} color = '#35AAFF'/>
        </TouchableOpacity>
        </View>
        <View style = {styles.viewHT}>
        </View>
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
        <Text style = {styles.submitText}>Insira Seu Nome</Text>
        <TextInput
        style = {styles.input}
        placeholder = "Nome"
        autoCorrect = { true}
        value = {name}
        onChangeText = { setName }
        />
       <View style = { styles.subWithInfo}> 
        <Text style = {styles.submitText}>Insira seu Id Eletrônico </Text>
        <TouchableOpacity onPress = { navigateToRegisterInfo }>
          <Feather name = "info" size = {18} color= "#35AAFF" />
        </TouchableOpacity>
      </View> 
        <TextInput
        style = {styles.input}
        placeholder = "Id Eletrônico"
        autoCorrect = { false }
        autoCapitalize = "none"
        value = {idElet}
        onChangeText = { setIdElet }
        />

      <Text style = {styles.submitText}>Insira sua Senha</Text>
        <TextInput
        style = {styles.input}
        placeholder = "Senha"
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
        autoCorrect = { false }
        value = {email}
        onChangeText = { setEmail }
        keyboardType = 'email-address'
        />

        <TouchableOpacity  style = {styles.btnSubmit} onClick = {_register}> 
          <Text  style = {styles.submitText}>Criar Conta</Text>
        </TouchableOpacity>


      </Animated.View>
    </KeyboardAvoidingView>

  )
}