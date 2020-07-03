import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F0F0',
  },
  text:{
    color: '#000',
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