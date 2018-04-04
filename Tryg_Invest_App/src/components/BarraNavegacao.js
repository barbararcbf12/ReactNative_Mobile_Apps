import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Image,
} from 'react-native';

import { firebaseApp } from './authentication';

const btnVoltar = require('../images/btn_voltar2.png');
const btnLogOut = require('../images/btn_logout2.png');


export default class BarraNavegacao extends Component {

  deslogarUsuario(){

    const usuario = firebaseApp.auth();
    usuario.signOut();
    this.props.navigator.push({
          id: 'login'
        });

  }

  render() {

      if(this.props.voltar){
        return (
          <View style={styles.barraTitulo}>

            <TouchableHighlight 
              activeOpacity={0.3}

              onPress={() => {
                this.props.navigator.pop();
              }}
            >
              <Image source={btnVoltar} />
            </TouchableHighlight>

            <Text style={styles.titulo}>Tryg Group Investment</Text> 

            <TouchableHighlight 
              activeOpacity={0.3}
              onPress={ ()=> { 
                this.deslogarUsuario(); 
                () => { this.props.navigator.push({ id: 'login' }); };
              } }
            >
              <Image source={btnLogOut} />
            </TouchableHighlight>


          </View>

          );
        }

      if(this.props.logout){
        return (
          <View style={styles.barraTitulo}>

            <Text style={styles.titulo}>Tryg Group Investment</Text>

            <TouchableHighlight 
              activeOpacity={0.3}
              onPress={ ()=> { 
                this.deslogarUsuario(); 
              } }
            >
              <Image source={btnLogOut} />
            </TouchableHighlight>


          </View>
          );
        }

      else {
        return (
          <View style={styles.barraTitulo}>
            <Text style={styles.titulo}>Tryg Group Investment</Text>
          </View>

        );
      }
  }
}

const styles = StyleSheet.create({
  /*barraTitulo: {
    backgroundColor: 'rgb(224,0,0)',
    height: 60,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoTitulo: {
    color: '#ffffff',
    marginTop: 20,
    fontSize: 18,
  },

  barraTitulo: {
    flex: 2,
    backgroundColor: 'rgb(224,0,0)',
    paddingTop: 25,
    paddingBottom: 10,
  },

  textoTitulo: {
    fontSize: 15,
    color: '#ffffff',
    textAlign: 'center'
    //shadowColor: '#000',
    //shadowOffset: {width: 0, height: 2},
    //shadowOpacity: 0.4,
    //shadowRadius: 5,
    //fontStyle: 'italic',
    //fontWeight: 'bold', //from 100 to 900
    //textDecorationLine: 'underline line-through'
  },*/

  barraTitulo: {
    backgroundColor: 'rgb(224,0,0)',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 30,
    height: 70,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#FFF'
  },

  titulo: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    color: '#FFF',
  },

});
