import * as firebase from 'firebase';

const config = {
	
	apiKey: "",
	authDomain: "XXX.firebaseapp.com",
	databaseURL: "https://XXX.firebaseio.com",
	storageBucket: "XXX.appspot.com",
	messagingSenderId: "XXX"

  };

export const firebaseApp = firebase.initializeApp(config);
