import React from 'react'
import * as firebase from 'firebase'
import axios from 'axios'
import {
    BrowserRouter as Router, 
    Route,Link,
    NavLink,Switch
}from 'react-router-dom';
import {connect} from 'react-redux' 
import store1 from './redux'
import io from 'socket.io-client';
import TextField from '@material-ui/core/TextField';
import SearchBar from "material-ui-search-bar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
var socket;
class Yourshop extends React.Component{
    constructor(props){
        super(props);
        this.state={
            l:null,
            modal:false,
            file:null
        }
        store1.subscribe(()=>{
            this.setState({l:store1.getState()})
            // console.log(store1.getState())
        })
    }
    toggle=()=>{
        this.setState({
            modal: !this.state.modal
          });
    }
    submit=()=>{
        this.setState({modal: !this.state.modal})
        const  itemname=document.getElementById("itemname").value;
        const cost=document.getElementById("cost").value;
        var reader = new FileReader();
        reader.onload = function(evt){
            var msg ={};
        
            // msg.username = username;
            msg.file = evt.target.result;
            console.log("msg is",msg)
            // msg.fileName = data.name;
            socket.emit('shopitems',[msg.file,itemname,cost,store1.getState().shopuserdetails.shopname]);
        };
        reader.readAsDataURL(this.state.file);
    }
    imagechange=(e)=>{
        this.state.file=e.target.files[0];
        this.setState({file:this.state.file})         
    }
    componentDidMount=()=>{
        socket=io.connect('http://localhost:5000')  
        // var h=firebase.auth().currentUser
        // console.log("hisssss",store1.getState().shopuseremail)
        axios.get("http://localhost:5000/shopusers")
        .then(res=>{
            Object.keys(res.data).map(k=>{
                if(store1.getState().shopuseremail===res.data[k].email){
                      this.props.currentshopuser(res.data[k])
                      socket.emit("join",res.data[k].shopname)
                }
            })
        })
        socket.on("itemslist",l=>{
            axios.get('http://localhost:5000/'+l[3])
            .then(res=>{
                // console.log(res.data)
                this.props.savingitemstostate(res.data)
            })
            axios.get('http://localhost:5000/wholeitems')
            .then(res=>{
                // console.log(res.data)
                this.props.wholeitems(res.data)
            })
        })
       setTimeout(()=>{
        axios.get('http://localhost:5000/'+store1.getState().shopuserdetails.shopname)
        .then(res=>{
            // console.log(res.data,"hiii andiii")
            this.props.savingitemstostate(res.data)
        
        }
        )
    // console.log("shopname isss noww",store1.getState().shopuserdetails.shopname)

       },100)
    //    alert("hii")
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
                 <div className="container">
                      <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css'
        />
                 <h2 className="center">shopname:{store1.getState().shopuserdetails.shopname}</h2>
                 <div className="center">upload your items here<button onClick={this.toggle}>upload</button></div>
                 <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>uploading your item</ModalHeader>
          <ModalBody>
        <div>
                          <input type="file" onChange={this.imagechange}></input>
                       <div>   
                          itemname:  <TextField id="itemname" />
                           </div> 
                         <div>
                          cost:  <TextField id="cost" />
                             
                             </div> 
            <Button color='secondary' onClick={this.submit}>submit</Button>

                   
        </div>
          </ModalBody>
        </Modal>
          <h2>your shop items are:</h2>
          
         <div className="overall1">
         {
              store1.getState().shopuseritems.map(k=>{
                    return(
                         <div className="overall">
                         <div className="forcard">
          <div class="card" >
    <img class="card-img-top" src={k.image} alt="Card image" className="forcardimage"></img>
    <div class="card-body" className="forcardbody">
    <h4 class="card-title">{k.itemname}</h4>
    <h4 class="card-title">{k.cost}  Rs</h4>
    <h4 class="card-title">{k.shopname}</h4>
                    {/* <p class="card- text">Shop:{k.shopname}</p> */}
    </div>
  </div>
          </div>
                         </div>
                    )
                
              })
          }
         </div>
                 </div>
                 </div>
                 )
             }

}
const mapDispatchToProps=(dispatch)=>{
    return({
        currentshopuser:(m)=>{dispatch({type:"shopuser",payload:m})},
        savingitemstostate:(l)=>{dispatch({type:"shopitems",payload:l})},
        wholeitems:(l)=>{dispatch({type:"whole",payload:l})}
    })
}
export default connect(null,mapDispatchToProps)(Yourshop);
