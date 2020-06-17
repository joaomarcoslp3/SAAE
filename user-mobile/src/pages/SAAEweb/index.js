import React, {useState, useEffect, useRef} from 'react';
import { ActivityIndicator, AsyncStorage, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function SAAEweb() {
  const [userId, setUserId] = useState('');
  const [script, setScript] = useState('') 
  const [loading, setLoading] = useState(true);
  const wvRef = useRef();
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
    const jsCode = `document.getElementById('txtcod').value='${userId}'
   document.querySelectorAll("input[name=Acessar]")[0].click();
  `
    setScript(jsCode)
  }, []);


  return (
    <>
      {loading ? (
      <View style ={{flex: 1, justifyContent: 'flex-end', alignItems: 'center', backgroundColor: '#FFF'}}>
        <ActivityIndicator size='large' color="#004384"/>
      </View>
      )
        :
        <></>  
    }

      <WebView
      ref={wvRef}
      style = {loading ? {flex:0} : {flex:1}}
      renderLoading = { renderLoading } 
      scalesPageToFit= {false}
      javaScriptEnabled={true}
      onNavigationStateChange={navState => {
        if(navState.url !== 'http://autoatendimento.prosanearinfo.com.br/v5.0/debitos.php'){
          setLoading(false);
        }else if(navState.url==='http://autoatendimento.prosanearinfo.com.br/v5.0/principal.php'){
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
  </>
  );
}
