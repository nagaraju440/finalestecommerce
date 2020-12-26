import React from 'react'
import store1 from './redux'
import axios from 'axios'
import {
  BrowserRouter as Router, 
  Route,Link,
  NavLink,Switch
}from 'react-router-dom';
import SearchBar from "material-ui-search-bar";
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux' 
import Button from '@material-ui/core/Button';

class Buying extends React.Component{
    constructor(props){
        super(props);
        this.state={
            x:null,
            y:1,
            z:0,
            m:0,
            n:0
        }
        store1.subscribe(()=>{
            this.setState({x:store1.getState()})
           
         })
    }
    but1=()=>{
          this.setState({y:0})
    }
    but2=()=>{
        this.setState({y:1,n:0})
    }
    but3=()=>{
        this.setState({n:1})
    }
    but4=()=>{
        this.setState({n:0})
    }
    but5=()=>{
        this.setState({m:1})
    }
    render(){
        return(
            <div>
                 <div className="top">
                    <div className="sline">ShopOline</div>
                    <div className="search">    </div>{
    store1.getState().y===1?<div className="pakka"><div className="login"><NavLink to="/yourshop" className="NavLink">Yourshop</NavLink> </div>
    <div className="login"><NavLink to="/"  className="NavLink">Home</NavLink></div></div>:<div className="pakka"><div className="login"><NavLink to="/" className="NavLink">Home</NavLink> </div>
    </div>
}
                </div>
                <div className="container">
         <div>{this.state.m===1?<div>
             <h1>YOUR PAYMENT HAS BEEN SUCSESSFUL.YOUR ORDER IS PLACED.HAPPY SHOPOLINE.</h1>
         </div>:<div>
            <div className="box1">
                        <div className="blue"><div className="d">DELIVERY ADRESS  <span>
                            {this.state.y===0?<span className="rig"><button onClick={this.but2}>Change Adress</button></span>:""}
                        </span></div>
                        
                        </div>
                       <div>
                           {
                               this.state.y===1? <div className="blue1">
                               <div className="up2" > <TextField  label="village" className="wid" name="Name" id="shopname" /> </div>
                                   <div  className="up2" > <TextField label="district" className="wid" id="shopcertificateid" name="email" /> </div>
                                   <div  className="up2" > <TextField label="doorno" className="wid" id="email" name="email" /> </div>
                               <div className="up2" > <TextField label="pincode" className="wid" id="password" name="password"/> </div>
                               <br></br>
                               <br></br>
                               <Button variant="contained" color="primary" className="topo1" onClick={this.but1}>save and deliver here</Button>
                               </div>:""
                           }
                       </div>
                    </div>

                    <div className="box1">
                        <div className="blue2">
                                 <div>ORDER SUMMARY    <span>
                            {this.state.n===1?<span className="rig"><button onClick={this.but4}>See Order</button></span>:""}
                        </span></div>
                                    <div>
                        {this.state.y===0?<div>{
                            this.state.n===0?<div className="blue1">
                            <h1>PRICE DETAILS ARE</h1>
                            <hr></hr>
             <h2>Total items:{store1.getState().cartitems.length}</h2>
             <hr></hr>
             <h2>Total Price:{store1.getState().price}</h2>
             <hr></hr>
                                     <Button variant="contained" color="primary" className="topo" onClick={this.but3}>goto payment options</Button>
                                     </div>:""
                            }

                        </div>:""}
                                    </div>
                        </div>
                    </div>
                    {/* <div>hhehheheheh</div> */}
                    <div className="box1">
                        <div className="blue"><div>PAYMENT OPTIONS</div></div>
                        <div>{this.state.n===1?<div>
                            <div className="blue3">
                       <h1>Total Cost:{store1.getState().price}</h1>
                       <div>click pay to proceed to buy</div>
                        <Button variant="contained" color="primary" className="topo" onClick={this.but5}>PAY</Button>
                        </div>
                        </div>:""
                            }</div>
                    </div>
             </div>}</div>
                </div>
            </div>
        )
    }
}
export default Buying;