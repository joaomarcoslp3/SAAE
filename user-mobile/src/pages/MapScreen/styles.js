import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  map: {
    flex: 1
  },
  ButtonView: {
    flexDirection: 'column',
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    zIndex: 5,
    alignItems: 'flex-end',
    justifyContent: 'center', 
  },
  currentPositionButton: {
    width: 50,
    height: 50,
    backgroundColor: '#004384',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  confirmLocation: {
    marginBottom: 10,
    width: 50,
    height: 50,
    backgroundColor: '#008000',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  }
});