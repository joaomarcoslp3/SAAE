import React, {useState} from 'react';

const AuthContext = React.createContext();

function AuthProvider ({children}) {
  const [signed, setSigned] = useState(false);
  const [loading, setLoading] = useState(true)

  React.useEffect(()=> {
    async function loadStorageData(){
     const token = await localStorage.getItem('emptoken')
     if(token){
      setSigned(true);
     }
    setLoading(false)
  }
  loadStorageData()
  });


    return(
      <AuthContext.Provider
        value = {{
          signed,
          setSigned,
          loading,
        }}
      >
        {children}
      </AuthContext.Provider>
    )
  }


  export {AuthContext, AuthProvider};