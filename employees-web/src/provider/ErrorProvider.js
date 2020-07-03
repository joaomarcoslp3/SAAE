import React, {useState} from 'react';

const ErrorContext = React.createContext();

export const ErrorProvider = ({children}) => {
  const [codError, setCodError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);


    return(
      <ErrorContext.Provider
        value = {{
          codError, 
          setCodError,
          passwordError, 
          setPasswordError
        }}
      >
        {children}
      </ErrorContext.Provider>
    )
  }


  export default ErrorContext;