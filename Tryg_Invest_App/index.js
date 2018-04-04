import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  Router,
} from 'react-native';

import Login from './src/components/Login.js';
import UserContent from './src/components/UserContent';
import ContentDetail from './src/components/ContentDetail';


export default class giapp extends Component {
  render() {
    return (

      <Navigator 
        initialRoute={ { id: 'login'} } /*objeto route = cena inicial renderizada*/
        renderScene={(route, navigator) => {
          /*definir a cena com base na rota*/
          switch(route.id){
            case 'login':
              return(<Login navigator={navigator} />);

            case 'usercontent':
              return(<UserContent navigator={navigator} />);

            case 'contentdetail':
              return(<ContentDetail navigator={navigator} dados={route.dados} />);

            default:
              return false;
          }
        }}
      />
    );
  }
}

AppRegistry.registerComponent('giapp', () => giapp);
