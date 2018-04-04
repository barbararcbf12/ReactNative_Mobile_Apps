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

const detalheServico = require('../imgs/detalhe_servico.png');

export default class CenaServicos extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>

          <StatusBar 

          backgroundColor='#19D1C8'

          />

          <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo='#19D1C8' />

          <View style={styles.cabecalho}>
            <Image source = {detalheServico} />
            <Text style={styles.txtTitulo}>Serviços</Text>
          </View>

          <View style={styles.detalheServico}>
            <Text style={styles.txtDetalheServico}>- Consultoria</Text>
            <Text style={styles.txtDetalheServico}>- Processos</Text>
            <Text style={styles.txtDetalheServico}>- Acompanhamento de Projetos</Text>
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
    color: '#19D1C8',
    marginLeft: 10,
    marginTop: 25,
  },

  detalheServico: {
    padding: 20,
    marginTop: 10,
  },

  txtDetalheServico: {
    fontSize: 18,
    marginLeft: 10,
  },

});
