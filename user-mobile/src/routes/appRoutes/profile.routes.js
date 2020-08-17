import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProfilePage from '../../pages/ProfilePage';
import userComplaintInfo from '../../pages/userComplaintInfo';

const ProfileStack = createStackNavigator();

export default function ProfileRoutes(){
  return (
    <ProfileStack.Navigator screenOptions = {{headerShown: false}}> 
      <ProfileStack.Screen name = "Complaint" component = {ProfilePage}/>
      <ProfileStack.Screen name = "userComplaintInfo" component = {userComplaintInfo}/>
    </ProfileStack.Navigator>
)
}