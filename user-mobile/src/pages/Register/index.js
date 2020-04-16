import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons'
import { 
  KeyboardAvoidingView,
  View, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  Text, 
  Animated,
  Keyboard
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles'

export default function Register() {
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


  return(
    <KeyboardAvoidingView style = {styles.background}>
      
      <View style = {styles.header}>
        <TouchableOpacity onPress = { navigateToLogin}>
          <Feather name = "arrow-left" size ={27} color = '#005db8'/>
        </TouchableOpacity>
        <Text style ={ styles.headerText}>Crie sua conta</Text>
        
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
        onChangeText = { ()=> {}}
        />
       <View style = { styles.subWithInfo}> 
        <Text style = {styles.submitText}>Insira seu Id Eletrônico </Text>
        <TouchableOpacity onPress = { navigateToRegisterInfo }>
          <Feather name = "info" size = {18} color= "#005db8" />
        </TouchableOpacity>
      </View> 
        <TextInput
        style = {styles.input}
        placeholder = "Id Eletrônico"
        autoCorrect = { false }
        onChangeText = { ()=> {}}
        />

      <Text style = {styles.submitText}>Insira sua Senha</Text>
        <TextInput
        style = {styles.input}
        placeholder = "Senha"
        autoCorrect = { false }
        onChangeText = { ()=> {}}
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
        onChangeText = { ()=> {}}
        keyboardType = 'email-address'
        />

        <TouchableOpacity  style = {styles.btnSubmit}> 
          <Text  style = {styles.submitText}>Criar Conta</Text>
        </TouchableOpacity>


      </Animated.View>
    </KeyboardAvoidingView>

  )
}