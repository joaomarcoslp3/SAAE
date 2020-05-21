import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 15,
    backgroundColor: '#22262e' 
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerImg: {
    width: 75,
    height: 75
  },
  title: {
    fontSize: 25,
    marginBottom: 16,
    marginTop: 35,
    color: '#B2BABB',
    fontWeight: 'bold'
  },
  description: {
    fontSize: 15,
    lineHeight: 24,
    color: '#D0D3D4'
  },
  complaintList: {
    marginTop: 32,
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
    marginBottom: 24,
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
  }
});