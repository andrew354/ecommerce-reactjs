import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyAqbrrxOB_QxdxZp-hdQlVC6C1bjs9FodQ',
	authDomain: 'clone-7ba4b.firebaseapp.com',
	databaseURL: 'https://clone-7ba4b.firebaseio.com',
	projectId: 'clone-7ba4b',
	storageBucket: 'clone-7ba4b.appspot.com',
	messagingSenderId: '625201569060',
	appId: '1:625201569060:web:86af1492fbd10e441b27b1',
	measurementId: 'G-KYJVP4RHGN',
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

// const googleAuthProvider = new firebase.auth.googleAuthProvider();
// const facebookAuthProvider = new firebase.auth.facebookAuthProvider(); 
// const twitterAuthProvider = new firebase.auth.twitterAuthProvider();

export { db, auth };
