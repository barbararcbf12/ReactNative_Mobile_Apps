import * as firebase from 'firebase';

const config = {
	
	apiKey: "AIzaSyBd6qjW9QG4cU0kQEiEgZHq61ikVzp21yI",
	authDomain: "udemycourse-6c3c7.firebaseapp.com",
	databaseURL: "https://udemycourse-6c3c7.firebaseio.com",
	storageBucket: "udemycourse-6c3c7.appspot.com",
	messagingSenderId: "1027316711290"

  };

export const firebaseApp = firebase.initializeApp(config);