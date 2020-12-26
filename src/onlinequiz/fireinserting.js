import * as firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyCGALFmYj5OQO3VEn691ix8LfWrf-3cCjw",
    authDomain: "onlinequiz-f0c40.firebaseapp.com",
    databaseURL: "https://onlinequiz-f0c40.firebaseio.com",
    projectId: "onlinequiz-f0c40",
    storageBucket: "onlinequiz-f0c40.appspot.com",
    messagingSenderId: "41379177983",
    appId: "1:41379177983:web:3588b07a9201935ea0b3ca",
    measurementId: "G-GZLZ02K7PC"
  };
  
  var fireinserting=firebase.initializeApp(firebaseConfig);
  export default fireinserting;