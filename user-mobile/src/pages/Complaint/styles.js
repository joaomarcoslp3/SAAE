import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F0F0',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 55,
    width: '100%',
    paddingBottom: 50
  },

  //input
  input: {
    backgroundColor: '#FFF',
    width: '91%',
    height: 50,
    marginTop: 15,
    marginBottom: 15,
    color: '#6C6C80',
    fontSize: 17,
    borderRadius: 7,
    padding: 10
  },

  //PhotoArea
  photoAreaButton: {
    flexDirection: 'row',
    width: '90%',
    height: 120,
    backgroundColor: '#000',
    alignItems: 'stretch',
    borderRadius: 7,
    marginBottom: 15
  },
  photoButtonsView: {
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
    width: '65%',
    backgroundColor: '#2e3542',
    marginTop: 0
  },
  photoButtonTop: {
    marginTop: 0,
    backgroundColor: '#004384',
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 7,
    borderBottomColor: '#000',
    borderBottomWidth: 1
  },
  photoButtonBottom: {
    marginTop: 0,
    backgroundColor: '#004384',
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 7,
  }, 
  photoImageView: {
    width: '35%',
    height: '100%',
    backgroundColor: '#b4c4d4',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
  },

  //Map Area
  mapViewButton: {
    flexDirection: 'row',
    width: '90%',
    height: 130,
    backgroundColor: '#22262e',
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
    paddingLeft: 15,
    fontWeight: 'bold',
    fontSize: 17,
    color: '#FFF'
  },
  mapSubtitle: {
    paddingTop: 5,
    paddingLeft: 20,
    paddingRight: 10,
    fontSize: 16,
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

  //Submit Button
  btnSubmit: {
    backgroundColor: '#004384',
    width: '95%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },
  submitText: {
    color: '#000',
    fontSize: 18
  },
});