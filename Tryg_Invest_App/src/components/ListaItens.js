import React, { Component } from 'react';
import {
  ScrollView,
} from 'react-native';

import axios from 'axios';
import Itens from './Itens';

export default class ListaItens extends Component {

	constructor(props) {
		super(props);
		this.state = { listaItens: [] };
	}

	componentWillMount() {
		//requiição HTTP
		axios.get('http://www.portalsantateresa.com.br/tryg/portfolio1.html')
			.then(response => { this.setState({ listaItens: response.data }); })
			.catch(() => { console.log('Error while trying to retrieve data.'); });
	}

  render() {
    return (
		<ScrollView style={{ backgroundColor: '#fff' }}>
			{ this.state.listaItens.map( item => (
				<Itens key={item.id_pc} item={item} navigator={this.props.navigator} /> 
				)
			) }
		</ScrollView>
    );
  }
}