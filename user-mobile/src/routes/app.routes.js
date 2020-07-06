import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Feather } from '@expo/vector-icons';

const AppTab = createBottomTabNavigator();

import SAAEweb from '../pages/SAAEweb';
import ProfilePage from '../pages/ProfilePage';
import ComplaintRoutes from './complaint.routes';


export default function AppRoutes(){
  const icons = {
    Complaint: {
      lib: Feather,
      name: 'edit-3'
    },
    SAAEweb: {
      lib: Feather,
      name: 'file-plus'
    },
    ProfilePage: {
      lib: Feather,
      name: 'user'
    }
  }

  return(
    <AppTab.Navigator
      screenOptions = {({ route })=> ({
        tabBarIcon: ({color, size}) => {
           const { lib: Icon, name } = icons[route.name];
           return <Icon name={name} size = {size} color ={color}/>;  
        },
      })}
      tabBarOptions = {{
        style: {
          backgroundColor: '#004384',
          borderTopColor: 'rgba(255,255,255, 0.2)'
          
        },
        activeTintColor: '#FFF',
        inactiveTintColor: '#92929c'
      }}
    >
      <AppTab.Screen 
        name = "Complaint" 
        component = {ComplaintRoutes} 
        options={{title:"Reclamações"}}/>
      <AppTab.Screen 
        name = "SAAEweb" 
        component = {SAAEweb} 
        options={{title: "2ª Via"}}/>
        <AppTab.Screen 
        name = "ProfilePage" 
        component = {ProfilePage} 
        options={{title: "Perfil"}}/>
    </AppTab.Navigator>
  )
}