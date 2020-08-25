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
  actionText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: 10
  },
  solvedView: {
    alignItems: 'flex-end',
    bottom: 30,
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },  
  solvedBtn: {
    borderRadius: 10,
    flexDirection: 'row',
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#228B22',
    color: '#FFF',
  },
  checkButton: {
    height: 50,
    backgroundColor: '#FF0000',
    borderRadius: 10,
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  disabledButton: {
    backgroundColor: '#5C6366'
  },
  infoBox: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#b4c4d4',
    marginBottom: 15,
    borderColor: '#004384',
    borderWidth: 3, 
    overflow: 'hidden',
  },
  infoBoxTittle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#13131a',
    lineHeight: 30
  },
  infoBoxDescription: {
    fontSize: 15,
    color: '#303036',
    marginTop: 16
  }
});