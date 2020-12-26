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


class Cart extends React.Component{
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
            <div>
                <div className="top">
                    <div className="sline">ShopOline</div>
                    <div className="search"> <SearchBar placeholder="Search here for shops or items"
onChange={(newValue) => this.setState({ value: newValue })}
onRequestSearch={() => {
    // this.gosearch(this.state.value)
}}/></div>{
    store1.getState().y===1?<div className="pakka"><div className="login"><NavLink to="/yourshop" className="NavLink">Yourshop</NavLink> </div>
    <div className="login"><NavLink to="/"  className="NavLink">Home</NavLink></div></div>:<div className="pakka"><div className="login"><NavLink to="/" className="NavLink">Home</NavLink> </div>
    {/* <div className="login"><NavLink to="/forshoplogin"  className="NavLink">Login for shop</NavLink></div> */}
    </div>
}
                </div>
<div className="container"> {store1.getState().cartitems.length==0?<h1> Looks like your cart is empty  ,Goto Home and buy items </h1>:<div><div className="container1">
            <h1>Your Cart items are</h1>
       <div>{
           store1.getState().cartitems.map(k=>{
            return(
             <div className="overall1">
                     <div className="overall3">
                 <div className="forcard10">
  <div class="card" >
<img class="card-img-top" src={k.image} alt="Card image" className="forcardimage10"></img>
<div class="card-body" className="forcardbody">
<h4 class="card-title">{k.itemname}</h4>
<h4 class="card-title">{k.cost}  Rs</h4>
<h4 class="card-title">{k.shopname}</h4>
<button onClick={()=>{this.props.delete(k)}}>delete</button>
            {/* <p class="card- text">Shop:{k.shopname}</p> */}
</div>
</div>
  </div>
                 </div>
             </div>
            )
        
      })
        }</div>
</div>
       <div className="pricebox">
                   <h1>PRICE DETAILS ARE</h1>
                   <hr></hr>
    <h2>Total items:{store1.getState().cartitems.length}</h2>
    <hr></hr>
    <h2>Total Price:{store1.getState().price}</h2>
    <hr></hr>
    <NavLink to="/buying">
    <Button variant="contained" color="primary">place order</Button>
    </NavLink>

       </div>
</div>
           

    }</div>
            </div>
        )
    }
}
const mapDispatchToProps=(dispatch)=>{
    return({
        // shopselecting:(l)=>{dispatch({type:"shopsel",payload:l})},
        // addtocart:()=>{dispatch({type:"addingtocart",payload:store1.getState().selecteditem})}
        delete:(k)=>{dispatch({type:"justdelete",payload:k})}
    })
}
export default connect(null,mapDispatchToProps)(Cart);