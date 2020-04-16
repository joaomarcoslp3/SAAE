import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

export default StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#22262e',
    paddingTop: Constants.statusBarHeight + 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'flex-end'
  },
  headerText: {
    fontSize: 20,
    color: '#FFF'
  },
  headerBtn: {
    alignItems: 'flex-start'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 55,
    width: '90%',
    paddingBottom: 50
  },
  input: {
    backgroundColor: '#FFF',
    width: '90%',
    marginTop: 15,
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10
  },
  btnSubmit: {
    backgroundColor: '#35AAFF',
    width: '90%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginTop: 20
  },
  submitText: {
    color: '#FFF',
    fontSize: 18
  },
  btnRegister: {
    marginTop: 10,
  },
  registerText: { 
    color: '#FFF'
  },
  submitInfo: {
    fontSize: 15,
    color: '#737380'
  },
  subWithInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});