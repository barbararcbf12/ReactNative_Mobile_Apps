//Lista de conteúdos referentes ao usuário
import React, { Component } from 'react';
import {
  AppRegistry,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';
import ListaItens from './ListaItens';

export default class UserContent extends Component {
  render() {
    return (

      <View style={ styles.container }>

        <BarraNavegacao logout navigator={this.props.navigator} corDeFundo='rgb(224,0,0)' />

        <ListaItens navigator={this.props.navigator} /> 

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },

});