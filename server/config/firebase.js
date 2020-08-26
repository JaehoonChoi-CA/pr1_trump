const app = require('firebase/app');
require('firebase/firestore');

const firebaseConfig = require('./firebaseConfig');

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.db = app.firestore();
  }
}

const firebase = new Firebase();

module.exports = firebase;
