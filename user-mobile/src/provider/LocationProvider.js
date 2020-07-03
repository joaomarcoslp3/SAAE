import React, {useState} from 'react';

const LocationContext = React.createContext();

export const LocationProvider = ({children}) => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);


    return(
      <LocationContext.Provider
        value = {{
          latitude, 
          setLatitude,
          longitude, 
          setLongitude
        }}
      >
        {children}
      </LocationContext.Provider>
    )
  }


  export default LocationContext;