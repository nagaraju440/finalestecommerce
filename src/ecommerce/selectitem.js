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
   class Selectitem extends React.Component{
       constructor(props){
           super(props);
           this.state={
               x:null
           }
           store1.subscribe(()=>{
               this.setState({x:store1.getState()})
              
            })
       }
       componentDidMount=()=>{
        //    setTimeout(()=>{
        //     console.log(store1.getState().selecteditem,"hloooo")

        //    },1000)
       }
       shopselect=(k)=>{
                 this.props.shopselecting(k)
       }
       addtocart=()=>{

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
    <div className="login"><NavLink to="/"  className="NavLink">Home</NavLink></div></div>:<div className="pakka"><div className="login"><NavLink to="/yourcart" className="NavLink">My Cart</NavLink> </div>
    {/* <div className="login"><NavLink to="/forshoplogin"  className="NavLink">Login for shop</NavLink></div> */}
    </div>
}
                </div>
                <h1>product details are..</h1>
                <div className="container secen">
                    <div>{
                        <img src={store1.getState().selecteditem.image}></img>
                    }</div>
                    <h1>{store1.getState().selecteditem.itemname}</h1>
                    <h1>{store1.getState().selecteditem.cost}  Rs</h1>
                    <NavLink to="/shop " onClick={()=>{this.shopselect(store1.getState().selecteditem.shopname)}}><h1>{store1.getState().selecteditem.shopname}</h1></NavLink>
                   <div>
                   <Button variant="contained" color="primary" onClick={this.props.addtocart} >Add to cart</Button> 
                   <Button variant="contained" color="primary">Buy Now</Button>
                   </div>
                </div>
               </div>
           )
       }
   }
   const mapDispatchToProps=(dispatch)=>{
    return({
        shopselecting:(l)=>{dispatch({type:"shopsel",payload:l})},
        addtocart:()=>{dispatch({type:"addingtocart",payload:store1.getState().selecteditem})}
    })
}
   export default connect(null,mapDispatchToProps)(Selectitem);