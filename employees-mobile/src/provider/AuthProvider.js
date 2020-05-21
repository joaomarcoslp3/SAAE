import React, {useState} from 'react';
import {AsyncStorage} from 'react-native';

const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
  const [signed, setSigned] = useState(false);
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(true);

  React.useEffect(()=> {
    async function loadStorageData(){
     const token = await AsyncStorage.getItem('@SAAEapi:token')
      if(token){
        setSigned(true);
        setToken(token);
        setLoading(false)
     }else{
       setLoading(false)
     }
  }
  loadStorageData()
  });


    return(
      <AuthContext.Provider
        value = {{
          token,
          setToken,
          signed,
          setSigned,
          loading
        }}
      >
        {children}
      </AuthContext.Provider>
    )
  }


  export default AuthContext;