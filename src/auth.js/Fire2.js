import React from 'react';
import fire from './fire1';
import * as firebase from 'firebase';
const auth=firebase.auth();
var login,signup;
class Login extends React.Component{
    login=function(){
        const email=document.getElementById("email").value
        const password=document.getElementById("pass").value;
const user={email,password}

        fire.auth().signInWithEmailAndPassword(email,password).then((u)=>{
            console.log("alert-success")
            alert("hii")
        })
    }
    signup=function(){
        const email=document.getElementById("email").value
        const password=document.getElementById("pass").value;
        fire.auth().createUserWithEmailAndPassword(email,password).then((u)=>{
            console.log("succ signed up")
        })
    }
  render(){
      return(
          <div>
              <input type="email" id="email"></input>
              <input type="password" id="pass"></input>
              <br></br>
              <button onClick={login}>Login</button>
              <button onClick={signup}>signup</button>
          </div>
      )
  }
}
export default Login;