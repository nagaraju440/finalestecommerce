import * as firebase from 'firebase';
var firebaseConfig = {
  apiKey: "AIzaSyDTLX-DHl_RjvCOBYFJTSwTAgFDK3KYggo",
  authDomain: "bala-nagaraju.firebaseapp.com",
  databaseURL: "https://bala-nagaraju.firebaseio.com",
  projectId: "bala-nagaraju",
  storageBucket: "bala-nagaraju.appspot.com",
  messagingSenderId: "623307988919",
  appId: "1:623307988919:web:29b54191d4d65c727a1232",
  measurementId: "G-6L6X2PWXTP"
};
 const fire=firebase.initializeApp(firebaseConfig);
 export default fire