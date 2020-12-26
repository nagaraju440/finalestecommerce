import React from 'react'
import {
    BrowserRouter as Router, 
    Route,Link,
    NavLink,Switch
}from 'react-router-dom';
import Home from './home'
import store1 from './redux'
import Yourshop from './yourshop'
import Forshop from './forshop'
import Selectitem from './selectitem'
import Buying from "./buyinganitems";
import Cart from "./yourcart";
import store from '../red1';
import Shopselected from './shopselcted'
class Allrouters extends React.Component{
    constructor(props){
        super(props);
        this.state={
            x:null
        }
        store1.subscribe(()=>{
            this.setState({x:store1.getState()})
        })
    }
      render(){
          return(
            //   <Router>
            //       <Route path="/" exact><Home/></Route>
            //       <Route path="/forshop" ><Forshop/></Route>
            //       <Route path="/forshop/product" exact ><div>hiiandiiiiii</div></Route>
            // <Route path="/forshop/details" exact><div>details
            //     <div><NavLink to="/hello">helllo</NavLink></div></div></Route>
            //       <Route path="/hello" exact><div>checking</div></Route>
            //   </Router>
            <Router>
                <Route path="/" exact ><Home/></Route>
                <Route path="/forshoplogin" exact><Forshop/></Route>
           {
               store1.getState().y===1?<Route path="/yourshop"><Yourshop/></Route>:""
           }
           <Route path="/selecteditem"><Selectitem/></Route>
           <Route path="/shop"><Shopselected/></Route>
           <Route path="/yourcart"><Cart/></Route>
           <Route path="/buying"><Buying/></Route>
            </Router>
          )
      }
}

export default Allrouters;