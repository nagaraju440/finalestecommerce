import React from 'react'
import {
    BrowserRouter as Router, 
    Route,Link,
    NavLink,Switch
}from 'react-router-dom';
import SearchBar from "material-ui-search-bar";
import axios from 'axios';
import io from 'socket.io-client';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import * as firebase from 'firebase';
import firebaseinserting from "./firebaseinserting";
import img from '../chatapplication/ima.png'
import store1 from './redux'
import {connect} from 'react-redux'
class Forshop extends React.Component{
    constructor(props){
        super(props);
        this.state={
            x:0,
            y:0,
            y1:0
        }
        store1.subscribe(()=>{
            // console.log("hiiiiiii")
            // console.log(store1.getState(),"hloooooooo")
            this.setState({y1:store1.getState()})
        })
    }
    loginclick=()=>{
        this.setState({x:1})
    }
    signup=()=>{
        const sn=document.getElementById("shopname").value;
        const email1=document.getElementById("email").value;
        const pass=document.getElementById("password").value;
        firebaseinserting.auth().createUserWithEmailAndPassword(email1,pass).then((u)=>{
            console.log("succ signed up")
        })
        var data={shopname:sn,email:email1,password:pass}
        axios.post('http://localhost:5000/signup',data)
        .then(res=>{
            // console.log(res)
        })
          
    }
    login=()=>{
        const email=document.getElementById("email").value;
        const pass=document.getElementById("password").value;
        firebaseinserting.auth().signInWithEmailAndPassword(email,pass).then((u)=>{
            console.log("sucsessfull logged")
            this.setState({y:1});
            this.props.loginsucsess()
            this.props.shopuseremail(email)
        })
    }
   
  componentDidMount=()=>{
    //   alert("hii")
    console.log("hloooooooo")
  }
  
    render(){
        return(
            <div>
                <div className="top">
                    <div className="sline">ShopOline</div>
                    <div className="search"> <SearchBar placeholder="Search here for shops or items"
onChange={(newValue) => this.setState({ value: newValue })}
onRequestSearch={() => {
    // this.gosearch(this.state.value)
}}/></div>{
    store1.getState().y===1?<div className="pakka"><div className="login"><NavLink to="/yourshop" className="NavLink">Yourshop</NavLink> </div>
    <div className="login"><NavLink to="/"  className="NavLink">Home</NavLink></div></div>:<div className="pakka"><div className="login"><NavLink to="/login" className="NavLink">Login for User</NavLink> </div>
    <div className="login"><NavLink to="/forshoplogin"  className="NavLink">Login for shop</NavLink></div></div>
}
                </div>
                <div className="total"> 
                       <div>
                           {
                               this.state.x===0?<div>
                                    <div className="bord">
                        <h1 className="up">Sign Up for a shop</h1>
                        <form action="/signup" method="POST">
                            <div className="up1" > <TextField  label="Shop Name" className="wid" name="Name" id="shopname" /> </div>
                            <div  className="up1" > <TextField label="Shop certificate  id" className="wid" id="shopcertificateid" name="email" /> </div>
                            <div  className="up1" > <TextField label="email" className="wid" id="email" name="email" /> </div>
                        <div className="up1" > <TextField label="Password" className="wid" id="password" name="password"/> </div>
                        <div className="up1"> <Button variant="contained" color="primary" onClick={this.signup}>Sign up</Button></div>
                        </form>
                        <div className="up1"><span>Already a member?</span><span><Button  color="primary" onClick={this.loginclick}>Log in</Button></span></div>
                        </div>
                               </div>:<div> <div className="bord">
                        <h1 className="up">Log in</h1>
                        <div  className="up1" > <TextField label="email" className="wid" id="email" /> </div>
                        <div className="up1" > <TextField label="Password" className="wid" id="password"/> </div>
                        <div className="up2"><NavLink to="/yourshop"><Button variant="contained" color="primary" onClick={this.login}>Log in</Button></NavLink></div>
                        </div></div>
                           }
                       </div>
                         </div>
                         
            {/* <NavLink to="/forshop/product">products</NavLink>
            <NavLink to="/forshop/details">details</NavLink>  */}
            </div>
        )
    }
}

store1.subscribe(()=>{
    // console.log(store1.getState())
})
function mapStateToProps(state){
    // window.x=JSON.stringify(state.city);
    // this.state.y=window.x;
    // x=state;
    return(
        console.log("hii")
        
    )
}
var mapDispatchToProps=(dispatch)=>{
    // store1.dispatch({type:"set",payload:"hys"})
    return({
        loginsucsess:()=>{dispatch({type:"ls",payload:1})},
        shopuseremail:(l)=>{dispatch({type:"email",payload:l})}
    })
}
export default connect(mapStateToProps,mapDispatchToProps)(Forshop);