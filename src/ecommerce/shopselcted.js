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
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux' 
class Shopselected extends React.Component{
    constructor(props){
        
        super(props);
        this.state={
            x:null
        }
        store1.subscribe(()=>{
            this.setState({x:store1.getState()})
         })
         axios.get('http://localhost:5000/'+store1.getState().shopselectedbyuser)
         .then(res=>{
             this.props.shopitems(res.data)
         })
    }
    click=(k)=>{
        // console.log("clicked",k)
        this.props.selecteditem(k)
    }
    render(){
        return(
            <div><div className="top">
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
        <div className="container">
<h1 style={{textAlign:"center",fontSize:"70px"}}>{store1.getState().shopselectedbyuser}</h1>
<SearchBar placeholder={"Search here for "+store1.getState().shopselectedbyuser+" Shop items"}
onChange={(newValue) => this.setState({ value: newValue })}
onRequestSearch={() => {
// this.gosearch(this.state.value)
}}/>
        <div>{
            store1.getState().shopselectedbyuseritems.map(k=>{
                return(
                    <div className="overall1">
                    <div className="overall2">
                <div className="forcard">
 <div class="card" >
<div className="forcardimage1">
<NavLink to="/selecteditem" onClick={()=>{this.click(k)}}><img class="card-img-top" src={k.image} alt="Card image" className="forcardimage"></img> </NavLink>

</div>
<div class="card-body" className="forcardbody">
<h4 class="card-title">{k.itemname}</h4>
<h4 class="card-title">{k.cost}  Rs</h4>
<h4 class="card-title">{k.shopname}</h4>
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
        </div>
        )
    }
}
const mapDispatchToProps=(dispatch)=>{
    return({
        shopitems:(l)=>{dispatch({type:"items",payload:l})},
        selecteditem:(k)=>{dispatch({type:"select",payload:k})},
    })
}

export default connect(null,mapDispatchToProps)(Shopselected);