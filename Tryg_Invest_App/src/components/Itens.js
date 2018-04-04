import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import Login from './Login';

const iconItem = require('../images/kredit.png');
import ContentDetail from './ContentDetail';

export default class Itens extends Component {

	constructor(props) {
		super(props);
		
		this.state = { imagem: this.props.item.image, data: this.props.item.data_portfolio };
	}

	seeDetail(){
		//this.setState({ imagem: this.props.item.image, data: this.props.item.data_portfolio });
		this.props.navigator.push({ 
			id: 'contentdetail',
			dados:  { imagem: this.state.imagem, data: this.state.data }
		});
	}



	render() {

		return (
			<View style={styles.item}>

				<View style={styles.foto}>
					<Image style={{ height: 70, width: 70 }} source={iconItem} />
				</View>

				<View style={styles.detalhesItens}>

					<Text style={styles.txtTitulo}>Status in: {this.props.item.data_portfolio}</Text>

					<TouchableOpacity 
			            style={styles.botao}
			            onPress={() => { 
			            	this.seeDetail() 
			            }}
			          >
			          <Text style={styles.textoBotao}>Open</Text>
	        		</TouchableOpacity>

				</View>

			</View>
		);
	}
}

const styles = StyleSheet.create({

  	item: {
  		borderWidth: 0.5,
		borderColor: '#999999',
		margin: 5,
		padding: 10,
		flexDirection: 'row',
		backgroundColor: '#FFF',
	    borderRadius: 5,
    	justifyContent: 'space-between',
	},

	foto: {
		width: 72,
		height: 72,
		flex: 1,
	},

	detalhesItens: {
		marginLeft: 20,
		flex: 3, //para o texto ficar contido dentro do espaço da tela
		flexDirection: 'column',
	},

	botao: {
	    backgroundColor: 'rgb(223,223,223)',
	    padding: 5,
	    height: 30,
	    width: 80,
	    borderRadius: 5,
	},

  	textoBotao: {
		color: '#000000',
		fontSize: 12,
		//fontWeight: 'bold',
		alignSelf: 'center',
	},

	txtTitulo: {
		fontSize: 14,
		color: '#FF0000',
		marginBottom: 5,
		fontWeight: 'bold',

	},

	txtValor: {
		fontSize: 16,
		color: '#999999',
		fontWeight: 'bold',
		marginBottom: 5,
	},

	txtDetalhes: {
		fontSize: 12,
	},

});
