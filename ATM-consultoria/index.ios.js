/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Navigator,
  AppRegistry
} from 'react-native';

import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';
import CenaContato from './src/components/CenaContato';
import CenaEmpresa from './src/components/CenaEmpresa';
import CenaServicos from './src/components/CenaServicos';

export default class app5 extends Component {
  render() {
    return (
      //<CenaPrincipal />
      <Navigator 
        initialRoute={ { id: 'principal'} } /*objeto route = cena inicial renderizada*/
        renderScene={(route, navigator) => {
          /*definir a cena com base na rota*/
          switch(route.id){
            case 'principal':
              return(<CenaPrincipal navigator={navigator} />);

            case 'clientes':
              return(<CenaClientes navigator={navigator} />);

            case 'contato':
              return(<CenaContato navigator={navigator} />);

            case 'empresa':
              return(<CenaEmpresa navigator={navigator} />);

            case 'servicos':
              return(<CenaServicos navigator={navigator} />);

            default:
              return false;
          }
        }}
      />
    );
  }
}

AppRegistry.registerComponent('app5', () => app5);
