import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#F0F0F0',
  },
  complaintList: {
    paddingHorizontal: 24,
    marginTop: 10,
    marginBottom: '25%'
  },
  complaint: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#b4c4d4',
    marginBottom: 16,
  },
  complaintProperty: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold'
  },
  complaintValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 15,
    color: '#303036'
  },
  infoButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  infoButtonText: {
    color: '#004384',
    fontSize: 15,
    fontWeight: 'bold'
  },
  btnLogoutContainer: {
   alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    bottom: 20,
    width: '100%',
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
    marginLeft: 8,
    color: '#FFF',
    fontSize: 18
  },
  insideBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  disabledBox: {
    backgroundColor: '#5C6366'
  },
  disabledText: {
    color: '#FFF'
  },
  disabledButton: {
    color: '#35AAFF'
  },
  solvedBox: {
    borderColor: '#004384',
    borderWidth: 3, 
    overflow: 'hidden',
  }
});