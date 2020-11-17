import axios from 'axios';

const instance = axios.create({ // THE API (CLOUD FUNCTION IN FIREBASE) URL Minuto 6:34:00 e minuto 7:04:00
	baseURL: 'http://localhost:5001/clone-7ba4b/us-central1/api', // API del backend di firebase, guarda in 'functions/index.js'
});

export default instance;
