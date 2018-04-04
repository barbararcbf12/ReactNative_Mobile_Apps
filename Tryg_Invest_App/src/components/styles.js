import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'rgb(239,238,244)',
    backgroundColor: '#FFFFFF',
    height: 460,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexDirection: 'column'
  },

  estiloTop: {
    flex: 2,
    //backgroundColor: 'rgb(224,0,0)',
    paddingTop: 25,
    paddingBottom: 10,
  },

  textTop: {
    fontSize: 15,
    color: '#ffffff',
    textAlign: 'center',
    //shadowColor: '#000',
    //shadowOffset: {width: 0, height: 2},
    //shadowOpacity: 0.4,
    //shadowRadius: 5,
    //fontStyle: 'italic',
    //fontWeight: 'bold', //from 100 to 900
    //textDecorationLine: 'underline line-through'
  },

  conteudoMeio: {
    flex: 1,
    //alignItems: 'stretch',
    justifyContent: 'space-between',
    //justifyContent: 'flex-end',
    //justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
  },

  logo: {
    flex: 1,
    alignSelf: 'center',
    width: 120,
    height: 50,
  },

  loginElements: {
    flex: 2,
  },

  estiloBottom: {
    flex: 1.5,
    backgroundColor: 'rgb(224,0,0)',
    //height: 60,
    paddingTop: 10,
    paddingBottom: 15,
    //justifyContent: 'flex-end'
  },

  textBottom: {
    fontSize: 16,
    textAlign: 'center',
    color: '#ffffff',
    //justifyContent: 'flex-end'
  },

  estiloBox: {
    height: 50, 
    padding: 6, 
    fontSize: 16, 
    borderColor: 'lightblue', 
    borderWidth: 1, 
    margin: 10, 
    borderRadius: 4,
    width: 250,
    alignSelf: 'center',
  },

  botao: {
    backgroundColor: 'rgb(223,223,223)',
    padding: 10,
    width: 250,
    borderRadius: 5,
    alignSelf: 'center',
  },

  textoBotao: {
    color: '#000000',
    fontSize: 16,
    //fontWeight: 'bold',
    alignSelf: 'center',
  },

  link: {

  },

  linkPadding: {

  },

  label: {

  },


});

