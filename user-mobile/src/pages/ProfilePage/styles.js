import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 15,
    backgroundColor: '#F0F0F0',
  },
  title: {
    fontSize: 25,
    marginBottom: 16,
    color: '#004384',
    fontWeight: 'bold'
  },
  complaintList: {
    marginTop: 10,
    marginBottom: '25%'
  },
  complaint: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#b4c4d4',
    marginBottom: 16
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
    color: '#FFF',
    fontSize: 18
  },
  insideBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});