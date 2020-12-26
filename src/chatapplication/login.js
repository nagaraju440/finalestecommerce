import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router, 
    Route,Link,
    NavLink,Switch
}from 'react-router-dom';
import './styling.css'
import axios from 'axios'
import io from 'socket.io-client';
import img from './ima.png' 
import insertfire from './insertfire';
import * as firebase from 'firebase';
import TextField from '@material-ui/core/TextField';
import Home from './home'
import Button from '@material-ui/core/Button';
import Peer from 'simple-peer';
var peer=require('simple-peer')

var FormData = require('form-data');
var xyz,socket;
// var peer1 = new Peer({ initiator: true,trickle: false })
// var peer1 = new Peer({ initiator: true })
// var peer2 = new Peer() 
// peer1.on('signal', data => {
//   // when peer1 has signaling data, give it to peer2 somehow
//   peer1.signal(data)
//   console.log("dat is ",data)
// })
// peer1.on('connect', () => {
//     console.log("sucsess")
//     peer1.send('hey peer/2, how is it going?')
 
// })
// peer1.on("data",data=>{
//     // var string = new TextDecoder("utf-8").decode(data)
//     console.log(data,"it is from 2")
// })
 
// peer2.on('data', data => {
//   // got a data channel message
//   console.log('got a message from peer1: ' + data)
// })
// peer2.on('connect',()=>{
//     console.log("sucsess1");
//     peer2.send("hey from peer 2")
// })
// peer1.on("data",data=>{
//     var string = new TextDecoder("utf-8").decode(data)
//     console.log(data,string,"it is from 2")
// })

// var peer=new Peer('hlo',{ host: 'localhost', port: 4000, path: '/peerjs/myapp' })

//    peer.on('coonection',(conn)=>{
// conn.send("hehehehhehe")

//     conn.on('open',()=>{
//         conn.send("hlooo perrrr")
//     })
//     conn.on('data',l=>{
//         console.log("l isss ",l)
//         alert("hlooo")
//     })
//    })
// var conn = peer.connect('hlo');
  
// import img as './'
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            x:0,
            y:0,
            file:null,
        }
    }
    componentWillMount=async ()=>{

        // socket=io.connect('http://localhost:4000')
        this.state.y=0;
        this.setState({x:0,y:this.state.y})
        console.log(this.state.y,"y isssssssssssssssssss")
    }
    loginclick=()=>{
        this.setState({x:1})
    }
    signupclick=()=>{
        this.setState({x:0})
    }

    login=()=>{
        const email=document.getElementById("email").value;
        const pass=document.getElementById("password").value;
        insertfire.auth().signInWithEmailAndPassword(email,pass).then((u)=>{
            console.log("sucsessfull logged")
            this.setState({y:1})
        })
    }
    signup=()=>{
        const name=document.getElementById("name").value;
        const email1=document.getElementById("email").value;
        const pass=document.getElementById("password").value;
        insertfire.auth().createUserWithEmailAndPassword(email1,pass).then((u)=>{
            console.log("succ signed up")
        })
        const data={
            Name:name,email:email1,password:pass,
        }
        console.log(data)
        axios.post('http://localhost:4000/signup',data)
        .then(res=>{
            // console.log(res)
            console.log(res.data)
        })
        
    }
    filech=(e)=>{
          console.log(e.target.files,"file isss")
          this.state.file=e.target.files[0];
          this.setState({file:this.state.file})
    }
    click=()=>{
        const formData = new FormData();
        formData.append('myImage',this.state.file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        var fileReader = new FileReader(), 
        slice = this.state.file.slice(0, 100000); 
    
    fileReader.readAsArrayBuffer(slice); 
    fileReader.onload = (evt) => {
        var arrayBuffer = fileReader.result; 
        const bytes = new Uint8Array(arrayBuffer);
        console.log(arrayBuffer,bytes)
        socket.emit('upload',bytes); 
    //    fileReader.readAsDataURL(this.state.file);
        console.log("upload sucsessfully")
    }
    //     console.log(this.state.file[0].name)
    //    var  m=this.state.file
    //    console.log("m is ",Object.keys(m),m,typeof m)
        // Object.keys(m).map(k=>{
        //     console.log(m.k,k,"hloo")
        // })
        // var m=JSON.parse(this.state.file[0].File)
        // console.log(m)
        // console.log(formData,"file is")
        // formData.forEach((value, key) => {
        //     console.log("key %s: value %s", key, value);
        //     })
        // axios.post('http://localhost:4000/fileupload',{"hii":formData},config)
        // .then(res=>{
        //     console.log("res is ",res)
        // })
        // .catch(error => console.log(error));
    }
    render(){
        return(
            <div>
                {/* <input type="file" onChange={this.filech} multiple></input>
                <button onClick={this.click}>submit</button> */}
         <Router>
                   <div> {
                        this.state.y===1?<Route path="/"><Home/></Route>:<div>  <div className="background">
                        <div class="container">
                        <div class="row">
                          <div class="col-1"></div>
                          <div class="col-2 mt-4 chattext">Let's chat</div>
                          <div class="col-6"></div>
              <div class="col-3 mt-5">
                  {
                      this.state.y===0?<div>{this.state.x===0?<a href="#" onClick={this.loginclick} className="log">Log in</a>:
                      <a href="#" onClick={this.signupclick} className="log">Sign up</a>}</div>:""
                  }
              </div>
                          </div>
                        </div>
                      </div><div className="total">
                        <img src={img} className="rem"  ></img>
                       <div>
                           {
                               this.state.x===0?<div>
                                    <div className="bord">
                        <h1 className="up">Sign Up</h1>
                        <form action="/signup" method="POST">
                            <div className="up1" > <TextField  label="Name" className="wid" name="Name" id="name" /> </div>
                        <div  className="up1" > <TextField label="Email" className="wid" id="email" name="email" /> </div>
                        <div className="up1" > <TextField label="Password" className="wid" id="password" name="password"/> </div>
                        <div className="up1"> <Button variant="contained" color="primary" onClick={this.signup}>Sign up</Button></div>
                        </form>
                        <div className="up1"><span>Already a member?</span><span><Button  color="primary" onClick={this.loginclick}>Log in</Button></span></div>
                        </div>
                               </div>:<div> <div className="bord">
                        <h1 className="up">Log in</h1>
                        <div  className="up1" > <TextField label="Email" className="wid" id="email" /> </div>
                        <div className="up1" > <TextField label="Password" className="wid" id="password"/> </div>
                        <div className="up2"><NavLink to="/"><Button variant="contained" color="primary" onClick={this.login}>Log in</Button></NavLink></div>
                        </div></div>
                           }
                       </div>
                         </div>
                         </div> 
                    }</div>
      </Router>  

            </div>
        )
    }
}
export default Login;