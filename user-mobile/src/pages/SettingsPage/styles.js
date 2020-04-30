import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#22262e',
  },
  text:{
    color: '#FFF',
  },
  btnLogout: {
    backgroundColor: '#ff0000',
    width: '45%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginTop: 20,
  },
  submitText: {
    color: '#FFF',
    fontSize: 18
  },
  insideBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});