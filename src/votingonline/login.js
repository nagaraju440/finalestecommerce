import React from 'react'
import {
    BrowserRouter as Router,

 
    Route,
    NavLink,Switch
}from 'react-router-dom';
import fireinsert from './fireinsert'

import * as firebase from 'firebase';

import Home from './home';
import './online.css'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import FacebookLogin from 'react-facebook-login';
const auth=firebase.auth();
// var login,signup,go
var y=0;

class Loginvote extends React.Component{

    constructor(props){
        super(props);
         this.state={
             x:0,
             e:"null",
             val:0,
             email:null,
             name:null,
             picture:null,
         }
        this.login=this.login.bind(this)
        this.signup=this.signup.bind(this)
    }
       login=function(){
                const email=document.getElementById("email").value;
                const pass=document.getElementById("password").value;
                this.setState({e:email})
                 

                fireinsert.auth().signInWithEmailAndPassword(email,pass).then((u)=>{
                 console.log("succsessfull login")
                 this.setState({x:1})
                 console.log("x is",this.state.e)
         
                        const db=firebase.firestore();
                        db.collection("users").doc(this.state.e).set({
                            email:this.state.e
                            
                        })
                })
                
        }
 
      signup=function(){
            const email=document.getElementById("email").value;
            const pass=document.getElementById("password").value;
            fireinsert.auth().createUserWithEmailAndPassword(email,pass).then((u)=>{
                console.log("succ signed up")
            })
        }
        responseFacebook = (response) => {
            console.log(response);
            this.setState({x:1,name:response.name,email:response.email,picture:response.picture})
            console.log(this.state.name,this.state.email,this.state.picture)
            const db=firebase.firestore();
            db.collection("users").doc(this.state.name).set({
                email:this.state.name,
                
            })
          }
          facebook=()=>{
            var provider = new firebase.auth.FacebookAuthProvider();
            firebase.auth().signInWithPopup(provider).then(function(result) {
                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                console.log(user)
                // ...
              }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
              });
             
          }
          google=()=>{
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider).then(function(result) {
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                console.log(user)
                // ...
              }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
              });
          }
      componentClicked=()=>{
          console.log("clicw")
      }
    render(){
        return(
           <div>
               <Router>

<div >
    <div id="center">
        <h1> ONLINE VOTING </h1>
        
<p>{
this.state.x===1?<Switch><Route exact path="/home"><Home pro={this.state.e}  /></Route></Switch>:<form>
<TextField id="email" label="Email" variant="outlined" /><br></br><br></br>
<TextField id="password" label="Password" variant="outlined" /><br></br><br></br>
    <NavLink to="/home">
<Button variant="contained" color="primary" onClick={this.login}>Login</Button>
<FacebookLogin
    appId="812221039585907"
    autoLoad={false}
    fields="name,email,picture"
    // onClick={componentClicked}
    callback={this.responseFacebook} />
    <Button variant="contained" color="primary" style={{margin:"10px"}} onClick={this.facebook}>facebook</Button>
    <Button variant="contained" color="primary" style={{margin:"10px"}} onClick={this.google}>google</Button>
    </NavLink>
    <Button variant="contained" color="primary" style={{margin:"10px"}} onClick={this.signup}>Signup</Button>
   
</form>

}</p>
    </div>
</div>
               </Router>
        

                          </div>

             )
    }
}


export default Loginvote;



    