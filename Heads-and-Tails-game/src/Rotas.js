import React from 'react';
import { Router, Scene } from 'react-native-router-flux';


import CenaPrincipal from './components/CenaPrincipal.js';
import SobreJogo from './components/SobreJogo.js';
import OutrosJogos from './components/OutrosJogos.js';
import Resultado from './components/Resultado.js';

const Rotas = () => (
	<Router sceneStyle={{ paddingTop: 60 }} >
		<Scene key='cenaprincipal' component={CenaPrincipal} initial title='Cara ou Coroa' />
		<Scene key='sobrejogo' component={SobreJogo} title='Sobre o Jogo' />
		<Scene key='outrosjogos' component={OutrosJogos} title='Outros Jogos' />
		<Scene key='resultado' component={Resultado} title='Resultado' />
	</Router>
);

export default Rotas;