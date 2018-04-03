// Import
import React, { Component } from 'react'; //metodo padrao de importacao do ES6
import { Text, View, Button, AppRegistry, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native'; //metodo padrao de importacao do ES6
import Topo from './src/components/topo.js';
import Icone from './src/components/icone.js';

class App extends Component{

  constructor(props){
    super(props);
    this.state = { escolhaUsuario: '', escolhaPc: '', resultado: '' }
  }
  
  jokenpo(escolhaUsuario) {
    // gerar numero aleatorio (0, 1, 2)
    const numAleatorio = Math.floor(Math.random() * 3);

    let escolhaPc = '';

    switch (numAleatorio) {
      case 0: escolhaPc = 'pedra'; break;
      case 1: escolhaPc = 'papel'; break;
      case 2: escolhaPc = 'tesoura'; break;
      default: escolhaPc = '';
    }

    let resultado = '';

    if (escolhaPc === 'pedra') {
      if (escolhaUsuario === 'pedra') {
            resultado = "It's a tie!";
      }
      if (escolhaUsuario === 'papel') {
            resultado = 'You won!';
      }
      if (escolhaUsuario === 'tesoura') {
            resultado = 'You lost!';
      }
    }

    if (escolhaPc === 'papel') {
      if (escolhaUsuario === 'pedra') {
            resultado = 'You lost!';
      }
      if (escolhaUsuario === 'papel') {
            resultado = "It's a tie!";
      }
      if (escolhaUsuario === 'tesoura') {
            resultado = 'You won!';
      }
    }

    if (escolhaPc === 'tesoura') {
      if (escolhaUsuario === 'pedra') {
            resultado = 'You won!';
      }
      if (escolhaUsuario === 'papel') {
            resultado = 'You lost!';
      }
      if (escolhaUsuario === 'tesoura') {
            resultado = "It's a tie!";
      }
    }

    this.setState({ escolhaUsuario, escolhaPc, resultado });
  }

  render() {
    return (
      <View>
        <Topo />

        <View style={styles.painelAcoes}>
          <View style={styles.btnEscolha}>
            <Button title="rock" onPress={() => { this.jokenpo('pedra'); }} /> 
          </View>

          <View style={styles.btnEscolha}>
            <Button title="paper" onPress={() => { this.jokenpo('papel'); }} />
          </View>

          <View style={styles.btnEscolha}>
            <Button title="scissors" onPress={() => { this.jokenpo('tesoura'); }} />
          </View>

        </View>

        <View style={styles.palco}>
          
          <Text style={styles.txtResultado}>{this.state.resultado}</Text>

          <Icone escolha={this.state.escolhaPc} jogador='Computer' />
          <Icone escolha={this.state.escolhaUsuario} jogador='You' />

        </View>
        
      </View>
    );
  }
}


const styles = StyleSheet.create({
  btnEscolha: {
    width: 90,
    backgroundColor: '#CCCCCC',
  },

  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },

  palco: {
    alignItems: 'center',
  },

  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60,
  },

  fitImage: {
    borderRadius: 0,
  },
  fitImageWithSize: {
    height: 100,
    width: 30,
  },

});

// Renderizar o app
AppRegistry.registerComponent('app1', () => App);
