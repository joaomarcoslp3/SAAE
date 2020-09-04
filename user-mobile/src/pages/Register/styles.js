import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

export default StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F0F0F0',
    paddingTop: Constants.statusBarHeight + 5,
  },
  viewHT: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingBottom: 50
  },
  input: {
    backgroundColor: '#FFF',
    width: '90%',
    marginTop: 15,
    marginBottom: 15,
    color: '#373740',
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
    color: '#000',
    fontSize: 18,
    alignSelf: "flex-start",
    paddingLeft: 22 
  },
  btnRegister: {
    marginTop: 10,
  },
  registerText: { 
    color: '#FFF',
    fontSize: 18
  },
  submitInfo: {
    fontSize: 15,
    color: '#808080'
  },
  subWithInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'flex-start'
  },
  backButton: {
    marginTop: 10,
  },
  backButtonText: { 
    color: '#004384',
    fontWeight: "bold",
    fontSize: 15
  }
});