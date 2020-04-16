import { StyleSheet } from 'react-native';
import Contants from 'expo-constants';

export default StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ebebeb',
    paddingTop: Contants.statusBarHeight + 20,
  },
  image: {
    flex: 1,
    alignItems: 'center'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'flex-end'
  },
  headerText: {
    fontSize: 15,
    color: '#000'
  }
})