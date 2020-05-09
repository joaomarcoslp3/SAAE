import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#22262e',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 55,
    width: '100%',
    paddingBottom: 50
  },
  pageName: {
    color: '#FFF',
    paddingBottom: 10
  },
  mapViewButton: {
    flexDirection: 'row',
    width: '90%',
    // minHeight: '20%',
    // maxHeight: '20%',
    height: '35%',
    maxHeight: '35%',
    minHeight: '30%',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    borderRadius: 7,
  },
  mapTextView: {
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
    width: '65%',
    justifyContent: 'center',
    backgroundColor: '#2e3542'
  },
  mapTitle: {
    paddingTop: 2,
    paddingLeft: 20,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFF'
  },
  mapSubtitle: {
    paddingTop: 5,
    paddingLeft: 32,
    fontSize: 16,
    color: '#FFF'
  },
  mapInfo: {
    // paddingBottom: 5,
    fontSize: 14,
    paddingLeft: 45,
    color: '#FFF'
  },
  mapButtonView: {
    width: '35%',
    backgroundColor: '#b4c4d4',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
  },
  btnView:{
    paddingTop: 10,
    alignItems: 'center',
    width: '90%'
  },
  btnSubmit: {
    backgroundColor: '#004384',
    width: '95%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },
  submitText: {
    color: '#FFF',
    fontSize: 16
  },
  input: {
    backgroundColor: '#FFF',
    width: '91%',
    height: '8%',
    minHeight: '10%',
    maxHeight: '15%',
    marginTop: 15,
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10
  },
  submitText: {
    color: '#FFF',
    fontSize: 18
  },
});