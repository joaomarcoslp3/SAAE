import React, {useState, useEffect} from 'react';
import { ActivityIndicator, AsyncStorage } from 'react-native';
import { WebView } from 'react-native-webview';

export default function SAAEweb() {
  const [userId, setUserId] = useState('');
  const [loading, setLoading] = useState(true);
  const renderLoading = () => {
    <ActivityIndicator style= {{flex: 1}} animating color = "#004384" size = "large"/>
  }
  useEffect(()=> {
    async function getUserId(){
    const user = await AsyncStorage.getItem('@SAAEapi:user');
    const jsonUser = JSON.parse(user);
    setUserId(jsonUser.idElet)  
    }
    getUserId()
  }, []);
  const jsCode = `document.getElementById('txtcod').value='${userId}'
   document.querySelectorAll("input[name=Acessar]")[0].click();
  `

  return (
    <WebView
    startInLoadingState = { true }
    renderLoading = { renderLoading } 
    scalesPageToFit= {false}
    javaScriptEnabled={true}
    injectedJavaScript={jsCode}
    source={{uri: 'http://autoatendimento.prosanearinfo.com.br/v5.0/index.php?id=A3AQ33E'}}
  />
  );
}
