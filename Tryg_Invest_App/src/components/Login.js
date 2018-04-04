import React, { Component } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Navigator,
  StatusBar,
  StyleSheet,
  Image,
} from 'react-native';

//import styles from './styles';
import { firebaseApp } from './authentication';
import BarraNavegacao from './BarraNavegacao';

//export class Login extends Component {
export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '', //props.email
      password: '', //props.password
      toast: '',
      authUser: {}
    };

    const usuario = firebaseApp.auth();
    usuario.signOut();
  }

  componentDidMount() {

    const usuario = firebaseApp.auth();

    usuario.onAuthStateChanged(

      firebaseUser => {
      if (firebaseUser) {
        this.setState({
          authUser: firebaseUser
        });
        this.setState({
          toast: `Logged in as ${this.state.authUser.email}`
        });
      } else {
        usuario.signOut()
        this.setState({
          toast: ''
        });
      }
    });

  }

  signIn() {
    let { email, password } = this.state;

    firebaseApp.auth().signInWithEmailAndPassword(
      email, 
      password
      )
      .then(user => this.props.navigator.push({ id: 'usercontent' }))
      .catch(error => {
        this.setState({
        toast: error.message
      });
    });
  }

  verificarUsuarioLogado() {

    const usuario = firebaseApp.auth();

    usuario.onAuthStateChanged( //adicionando listerner ao objeto usuario

      (usuarioAtual) => {

        if(usuarioAtual){

          alert("User logged in.");

        } else{
          alert("User not logged in.");
        }
      }
    );
  }

  render() {
    return ( 

      < View style = { styles.container } >

        <StatusBar 
          backgroundColor='rgb(224,0,0)'
          barStyle="light-content"
        />

        <BarraNavegacao usuario={this.state.email} navigator={this.props.navigator} corDeFundo='rgb(224,0,0)' />

        <View style={styles.conteudoMeio}>

          <View style={styles.logo}>

            <Image 
              source={require('../images/logo.fw.png')} 
            />

          </View>

          <View  style={styles.loginElements}>

              < TextInput 
                autoFocus = {true}
                style = { styles.estiloBox }
                value = { this.state.email }
                onChangeText = {
                  (text) => this.setState({
                    email: text
                  })
                }
                placeholder = "Email" 
              / >

              <TextInput
                style={styles.estiloBox}
                secureTextEntry={true}
                value={this.state.password}
                onChangeText={(text) => this.setState({password: text})}
                placeholder="Password"
              / >

              <TouchableOpacity 
                style={styles.botao}
                onPress={ ()=> { this.signIn(); } }
                //onPress={() => { this.props.navigator.push({ id: 'usercontent' }); }}
              >
                  <Text style={styles.textoBotao}>Sign in</Text>

              </TouchableOpacity>

          </View >

          <View style = { styles.errorBox }>

            < Text 
              style = { styles.error } > 
              { this.state.toast } 
            < /Text>

          </View >

        </View >

      </View >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'rgb(239,238,244)',
    backgroundColor: '#FFFFFF',
    height: 460,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexDirection: 'column'
  },

  estiloTop: {
    flex: 2,
    //backgroundColor: 'rgb(224,0,0)',
    paddingTop: 25,
    paddingBottom: 10,
  },

  textTop: {
    fontSize: 15,
    color: '#ffffff',
    textAlign: 'center',
    //shadowColor: '#000',
    //shadowOffset: {width: 0, height: 2},
    //shadowOpacity: 0.4,
    //shadowRadius: 5,
    //fontStyle: 'italic',
    //fontWeight: 'bold', //from 100 to 900
    //textDecorationLine: 'underline line-through'
  },

  conteudoMeio: {
    flex: 1,
    //alignItems: 'stretch',
    justifyContent: 'space-between',
    //justifyContent: 'flex-end',
    //justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
  },

  logo: {
    flex: 1,
    alignSelf: 'center',
    width: 120,
    height: 50,
  },

  loginElements: {
    flex: 2,
  },

  errorBox: {
    flex: 1.5,
    //backgroundColor: 'rgb(224,0,0)',
    //height: 60,
    paddingTop: 10,
    paddingBottom: 15,
    width: 250,
    alignItems: 'center',
    //justifyContent: 'flex-end'
  },

  error: {
    fontSize: 14,
    color: '#FF0000',
    textAlign: 'center',
    alignItems: 'center',
    //justifyContent: 'flex-end'
  },

  estiloBox: {
    height: 50, 
    padding: 6, 
    fontSize: 16, 
    borderColor: 'lightblue', 
    borderWidth: 1, 
    margin: 10, 
    borderRadius: 4,
    width: 250,
    alignSelf: 'center',
  },

  botao: {
    backgroundColor: 'rgb(223,223,223)',
    padding: 10,
    width: 250,
    borderRadius: 5,
    alignSelf: 'center',
  },

  textoBotao: {
    color: '#000000',
    fontSize: 16,
    //fontWeight: 'bold',
    alignSelf: 'center',
  },

  toast: {
    fontSize: 14,
    color: '#FF0000',
    textAlign: 'center',
    alignItems: 'center',
  },

});
