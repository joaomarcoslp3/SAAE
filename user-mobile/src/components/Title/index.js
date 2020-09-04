import React from 'react';
import {Text, View} from 'react-native'

import styles from './styles';

export default function Title(props) {
  return(
    <View style={styles.header}>
        <Text style={styles.title}>{props.name}</Text>
      </View>
  )
}