import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
      flex: 1,
      paddingHorizontal: 24,
      paddingTop: Constants.statusBarHeight + 15,
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
  complaint: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#b4c4d4',
    marginBottom: 16,
    marginTop: 48 
  },
  complaintProperty: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    marginTop: 24
  },
  complaintValue: {
    marginTop: 8,
    fontSize: 16,
    color: '#303036'
  },
  mapBox: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#b4c4d4',
    marginBottom: 16,
  },
  boxTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#13131a',
    lineHeight: 30
  },
  boxDescription:{
    fontSize: 15,
    color: '#303036',
    marginTop: 16
  },
  actions: {
    marginTop: 16
  },  
  action: {
    backgroundColor: '#004384',
    borderRadius: 8,
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  actionText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold'
  },
  solvedView: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },  
  solvedBtn: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#004384',
    color: '#FFF',
  },
  picker: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#bdc3c7', 
    overflow: 'hidden',
    width: '82%'
  },
  checkButton: {
    height: 50,
    backgroundColor: '#228B22',
    borderRadius: 10,
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});