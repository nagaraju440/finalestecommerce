import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBrTNutlicetVlzdkw74cwtcBdeWtwr3L8",
    authDomain: "inserting-data-example.firebaseapp.com",
    databaseURL: "https://inserting-data-example.firebaseio.com",
    projectId: "inserting-data-example",
    storageBucket: "inserting-data-example.appspot.com",
    messagingSenderId: "615565794477",
    appId: "1:615565794477:web:5901ac05428efe1030ba24",
    measurementId: "G-6VML6ED6G2"
  };
  const fireinsert=firebase.initializeApp(firebaseConfig);
  export default fireinsert;