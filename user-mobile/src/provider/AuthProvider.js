import React, {useState} from 'react';
import {AsyncStorage} from 'react-native'

const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
  const [signed, setSigned] = useState(false);
  const [token, setToken] = useState('');

  // React.useEffect(()=> {
  //   const token = AsyncStorage.getItem('@SAAEapi:token')
  //   if(token){
  //     setSigned(true)
  //     setToken(token)
  //   }
  // });


    return(
      <AuthContext.Provider
        value = {{
          token,
          setToken,
          signed,
          setSigned
        }}
      >
        {children}
      </AuthContext.Provider>
    )
  }


export default AuthContext;