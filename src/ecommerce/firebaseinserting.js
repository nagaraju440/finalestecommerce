import * as firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDxP8ysltmIOTzRqZ4IL9mWLiAZTZ6lABE",
    authDomain: "ecommerce-ab8f5.firebaseapp.com",
    databaseURL: "https://ecommerce-ab8f5.firebaseio.com",
    projectId: "ecommerce-ab8f5",
    storageBucket: "ecommerce-ab8f5.appspot.com",
    messagingSenderId: "498910275400",
    appId: "1:498910275400:web:5a45b94a55609f2a9ef57d",
    measurementId: "G-B8N3ZVSSP5"
  };
  // Initialize Firebase
  var firebaseinserting=firebase.initializeApp(firebaseConfig);
  export default firebaseinserting;