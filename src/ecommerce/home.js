import React from 'react'
import {
    BrowserRouter as Router, 
    Route,Link,
    NavLink,Switch
}from 'react-router-dom';
import SearchBar from "material-ui-search-bar";
import './stylings.scss'
import * as firebase from 'firebase';
import axios from 'axios'
import io from 'socket.io-client';
import store1 from './redux'
import {connect} from 'react-redux'
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            m:null,
            value:null,
        }
        store1.subscribe(()=>{
            // console.log(store.getState().y," issssssss")
            this.setState({m:store1.getState()})
        })
    }
    componentDidMount=()=>{
        // var socket=io.connect('http://localhost:5000')
      axios.get('http://localhost:5000/wholeitems')
      .then(res=>{
        //   console.log(res.data)
          this.props.wholeitems(res.data)
      })
      
    }
    click=(k)=>{
        // console.log("clicked",k)
        this.props.selecteditem(k)
    }
    shopselect=(k)=>{
        this.props.shopselecting(k)
        // console.log(k,"k isss")
}        
       gosearch=(m)=>{
           if(m!=null){
            document.getElementById('cli').click();
            console.log(m)
            this.shopselect(m)
           }
            //   <Route path="/shop"></Route>
       }
       clii=()=>{
           console.log("clcikedd")
       }
    render(){
        return(
            <div>
                <NavLink to="/shop" id="cli" onClick={this.clii}></NavLink>
                {/* <NavLink to="/forshop">shop</NavLink> */}
                <div className="top">
                    <div className="sline">ShopOline</div>
                    <div className="search"> <SearchBar placeholder="Search here for shops or items"
onChange={(newValue) => this.setState({ value: newValue })}
onRequestSearch={() => {
    this.gosearch(this.state.value)
  
}}
     
/></div>{
    store1.getState().y===1?<div className="pakka"><div className="login"><NavLink to="/yourshop" className="NavLink">Yourshop</NavLink> </div>
    <div className="login"><NavLink to="/"  className="NavLink">Home</NavLink></div></div>:<div className="pakka"><div className="login"><NavLink to="/login" className="NavLink">Login for User</NavLink> </div>
    <div className="login"><NavLink to="/forshoplogin"  className="NavLink">Login for shop</NavLink></div></div>
}
                </div>
            <div className="container">
                {
                    store1.getState().wholeitems.map(k=>{
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
       <NavLink to="/shop" onClick={()=>{this.shopselect(k.shopname)}}><h4 class="card-title">{k.shopname}</h4></NavLink>
                       {/* <p class="card- text">Shop:{k.shopname}</p> */}
       </div>
     </div>
             </div>
                            </div>
                         </div>
                        )
                    })
                }
            </div>
                </div>

        )
    }
}
function mapStateToProps(state){

    return(
        console.log("")   
    )
}
var mapDispatchToProps=(dispatch)=>{
        return({
            wholeitems:(l)=>{dispatch({type:"whole",payload:l})},
            selecteditem:(k)=>{dispatch({type:"select",payload:k})},
            shopselecting:(l)=>{dispatch({type:"shopsel",payload:l})}
        })
}

   
export default  connect(mapStateToProps,mapDispatchToProps)(Home);