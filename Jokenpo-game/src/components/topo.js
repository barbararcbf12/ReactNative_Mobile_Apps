// Import
import React, { Component } from 'react'; //metodo padrao de importacao do ES6
import FitImage from 'react-native-fit-image';
import { View, Image, StyleSheet } from 'react-native'; //metodo padrao de importacao do ES6

const img = require('../imgs/jokenpo.png');

class Topo extends Component {
  render() {
      return (

		<View>
          
          <Image 
            source={img} 
            style={styles.logo} 
          />
        
    </View>
      );
    }
}

const styles = StyleSheet.create({

  logo: {
    borderRadius: 0,
    marginTop: 20,
  },

});

export default Topo;
