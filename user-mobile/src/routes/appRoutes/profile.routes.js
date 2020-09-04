import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProfilePage from '../../pages/ProfilePage';
import userComplaintInfo from '../../pages/userComplaintInfo';

const ProfileStack = createStackNavigator();

export default function ProfileRoutes(){
  return (
    <ProfileStack.Navigator screenOptions={{headerStyle:{backgroundColor: '#F0F0F0'}, headerTintColor: '#004384', title: 'SAAE Digital'}}> 
      <ProfileStack.Screen name = "Profile" component = {ProfilePage}/>
      <ProfileStack.Screen name = "userComplaintInfo" component = {userComplaintInfo}/>
    </ProfileStack.Navigator>
)
}