//Detalhe do conteúdo selecionado 
import React, { Component } from 'react';
import FitImage from 'react-native-fit-image';
import {
  AppRegistry,
  TouchableOpacity,
  Text,
  Image,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';

import axios from 'axios';
import BarraNavegacao from './BarraNavegacao';

//Get screen width using Dimensions component 
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class ContentDetail extends Component {

  render() {
    return (

      <View style={styles.container}>

        <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo='rgb(224,0,0)' />

        <ScrollView style={{ padding: 5 }}>

          <FitImage
              source={{ uri: this.props.dados.imagem }}
              style={styles.fitImage}
          />

        </ScrollView>

      </View>



    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },

  image:{
    left: 70, 
    //top: 50,
    width: width * 0.53,
    height: height * 0.53,
  },

  fitImage: {
    borderRadius: 0,
  },
  fitImageWithSize: {
    height: 100,
    width: 30,
  },

});
