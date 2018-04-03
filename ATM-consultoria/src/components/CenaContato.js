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

const detalheContatos = require('../imgs/detalhe_contato.png');

export default class CenaContato extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>

          <StatusBar 

            backgroundColor='#61BD8C'

          />

          <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo='#61BD8C' />

          <View style={styles.cabecalho}>
            <Image source = {detalheContatos} />
            <Text style={styles.txtTitulo}>Contato</Text>
          </View>

          <View style={styles.detalheContato}>
            <Text style={styles.txtDetalheContato}>TEL: +55 11 1234-1234</Text>
            <Text style={styles.txtDetalheContato}>CEL: +55 11 91234-1234</Text>
            <Text style={styles.txtDetalheContato}>EMAIL: contatoatmconsultoria.com</Text>
          </View>

      </View>
    );
  }
}

const styles = StyleSheet.create ({
  cabecalho: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 10,
  },

  txtTitulo: {
    fontSize: 30,
    color: '#61BD8C',
    marginLeft: 10,
    marginTop: 25,
  },

  detalheContato: {
    padding: 20,
    marginTop: 20,
  },

  txtDetalheContato: {
    fontSize: 18,
    marginLeft: 10,
  },

});
