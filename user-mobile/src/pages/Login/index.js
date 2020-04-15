import React, { useState, useEffect } from 'react';
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

import styles from './styles'

export default function Login() {
  const [offset] = useState(new Animated.ValueXY({x: 0, y:95}));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({x:130, y: 155}));

  useEffect(()=>{
    keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    keyboardDiHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);


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
        toValue: 55,
        duration: 100
      }),
      Animated.timing(logo.y, {
        toValue: 65,
        duration: 100
      }),
      
    ])
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
      
    ])
  };

  return(
    <KeyboardAvoidingView style = {styles.background}>
      <View style = {styles.containerLogo}>
        <Animated.Image
          style = {{
            width: logo.x,
            height: logo.y 
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
        <TextInput
        style = {styles.input}
        placeholder = "Id Eletrônico"
        autoCorrect = { false }
        onChangeText = { ()=> {}}
        />

        <TextInput
        style = {styles.input}
        placeholder = "Senha"
        autoCorrect = { false }
        onChangeText = { ()=> {}}
        />

        <TouchableOpacity  style = {styles.btnSubmit}> 
          <Text  style = {styles.submitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity  style = {styles.btnRegister}> 
          <Text style = {styles.registerText}>Criar Conta</Text>
        </TouchableOpacity>

      </Animated.View>
    </KeyboardAvoidingView>

  )
}