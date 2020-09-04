import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  header: {
    paddingTop: 10,
    paddingLeft: 20,
    flexDirection: 'row',
    alignContent: 'center',
    paddingTop: Constants.statusBarHeight + 5,
  },
  title: {
    fontSize: 25,
    marginBottom: 16,
    color: '#004384',
    fontWeight: 'bold'
  }
});