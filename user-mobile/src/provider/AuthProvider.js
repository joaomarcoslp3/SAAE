import React, {useState} from 'react';

const AuthContext = React.createContext();

const AuthProvider = (props) => {
  const [signed, setSigned] = useState(false);
  const [token, setToken] = useState('');


    return(
      <AuthContext.Provider
        value = {{
          token,
          setToken,
          signed,
          setSigned
        }}
      >
        {props.children}
      </AuthContext.Provider>
    )
  }


export {AuthProvider, AuthContext};