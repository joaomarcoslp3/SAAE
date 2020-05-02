import React from 'react';

import { View, Text } from 'react-native';

import styles from './styles'

export default function MapScreen() {

    return(
      <View style = {styles.background}>
        <Text style ={styles.pageName}>Map Screen</Text>
      </View>
    ) ;
}
