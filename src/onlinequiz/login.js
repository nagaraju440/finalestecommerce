import React from 'react'
import {
    BrowserRouter as Router,

 
    Route,
    NavLink,Switch
}from 'react-router-dom';
import fireinserting from './fireinserting'

import * as firebase from 'firebase';

import Home from './home';
import './online.css'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import FacebookLogin from 'react-facebook-login';
const auth=firebase.auth();
// var login,signup,go
var y=0;
class Loginquiz extends React.Component{

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
    componentDidMount=()=>{
        this.setState({x:0})
    }
 
       login=function(){
                const email=document.getElementById("email").value;
                const pass=document.getElementById("password").value;
                this.setState({e:email})
                 

                fireinserting.auth().signInWithEmailAndPassword(email,pass).then((u)=>{
                 console.log("succsessfull login")
                 this.setState({x:1})
                 console.log("x is",this.state.e)
         
                        const db=firebase.firestore();
                        // db.collection("users").doc(this.state.e).set({
                        //     email:this.state.e
                            
                        // })
                          var user = firebase.auth().currentUser;
                        if(user!=null){
                            // console.log("hjwwksdbnbvgfrhsdkjhdsjnjxdbskfhdsnbhsb")
                        }
                })
                
        }
 
      signup=function(){
            const email=document.getElementById("email").value;
            const pass=document.getElementById("password").value;
            fireinserting.auth().createUserWithEmailAndPassword(email,pass).then((u)=>{
                console.log("succ signed up")
            })
        }
     
        
         
       
     
    render(){
        return(
           <div>
               <Router>

        
<p>{
this.state.x===1?<Switch><Route exact path="/home"><Home pro={this.state.e}/></Route></Switch>:

<div >
    <div id="center">
        <h1> ONLINE QUIZ </h1><form>
<TextField id="email" label="Email" variant="outlined"/><br></br><br></br>
<TextField id="password" label="Password" variant="outlined" /><br></br><br></br>
    <NavLink to="/home">
<Button variant="contained" color="primary" onClick={this.login}>Login</Button>

    </NavLink>
    <Button variant="contained" color="primary" style={{margin:"10px"}} onClick={this.signup}>Signup</Button>
   
</form> </div>
</div>

}</p>
   
               </Router>
        

                          </div>

             )
    }
}


export default Loginquiz;



    