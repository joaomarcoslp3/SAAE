import React, {useState, useEffect, useRef} from 'react';
import { ActivityIndicator, AsyncStorage, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function SAAEweb() {
  const [userId, setUserId] = useState('');
  const [script, setScript] = useState('') 
  const wvRef = useRef();

  useEffect(()=> {
    async function getUserId(){
      const user = await AsyncStorage.getItem('@SAAEapi:user');
      const jsonUser = JSON.parse(user);
      setUserId(jsonUser.idElet)  
    }
    getUserId()
    const jsCode = `document.getElementById('txtcod').value='${userId}'
    document.querySelectorAll("input[name=Acessar]")[0].click();
   `
     setScript(jsCode)
   }, []);
  
  return (
      <WebView
       ref={wvRef}
       startInLoadingState = { true } 
       scalesPageToFit= {false}
       javaScriptEnabled={true}
       onNavigationStateChange={navState => {
         if(navState.url==='http://autoatendimento.prosanearinfo.com.br/v5.0/principal.php'){
           setScript(`
             document.querySelectorAll("li[class=debitos]")[0].click()
           `)
         }else{
           const jsCode = `document.getElementById('txtcod').value='${userId}'
             document.querySelectorAll("input[name=Acessar]")[0].click();
           `
           setScript(jsCode)
         }
       }}
       injectedJavaScript={script}
       source={{uri: 'http://autoatendimento.prosanearinfo.com.br/v5.0/index.php?id=A3AQ33E'}}
  />
  );
}
