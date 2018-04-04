/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  StyleSheet,
  Text
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalheEmpresa = require('../imgs/detalhe_empresa.png');

export default class CenaEmpresa extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>

          <StatusBar 

          backgroundColor='#EC7148'

          />

          <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo='#EC7148' />

          <View style={styles.cabecalho}>
            <Image source = {detalheEmpresa} />
            <Text style={styles.txtTitulo}>A Empresa</Text>
          </View>

          <View style={styles.detalheEmpresa}>
            <Text style={styles.txtDetalheEmpresa}>A ATM Consultoria está no mercado a mais de 20 anos no mercado de consultoria empresarial.</Text>
          </View>

      </View>
    );
  }
}

const styles = StyleSheet.create ({
  cabecalho: {
    flexDirection: 'row',
    marginTop: 20,
  },

  txtTitulo: {
    fontSize: 30,
    color: '#EC7148',
    marginLeft: 10,
    marginTop: 25,
  },

  detalheEmpresa: {
    padding: 20,
    marginTop: 10,
  },

  txtDetalheEmpresa: {
    fontSize: 18,
    marginLeft: 10,
  },

});
