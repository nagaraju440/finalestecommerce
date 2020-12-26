import React from 'react'
import cbn from './cbn.png'
import jagan from './jagan.png'
import pk from './pk.png'
import './online.css'
import fireinsert from './fireinsert'
import * as firebase from 'firebase';
const db=firebase.firestore();
class Home extends React.Component{
constructor(props){
    super(props);
    this.state={
        x:0,
        v:null
    }
    
}

thanks1=()=>{
     console.log(this.props.pro)
    this.setState({x:1})
      
    db.collection("users").doc(this.props.pro).set({
        email:this.props.pro,
        vote:"chandrababu",
    })
    
}
thanks2=()=>{
     
    this.setState({x:1})
    
    db.collection("users").doc(this.props.pro).set({
        email:this.props.pro,
        vote:"jagan",
    })
    
}
thanks3=()=>{
     
    this.setState({x:1})
   
    db.collection("users").doc(this.props.pro).set({
        email:this.props.pro,
        vote:"pawankalyan",
    })
   
    
}

    render(){
        return(
          <div id="ce">
              <p>{
                  this.state.x===1?"THANKS FOR VOTE your response has been recorded":<div><img src={cbn} width="150px" height="250px" id="gap" onClick={this.thanks1}></img>
                  <img src={jagan}  width="150px" height="250px" id="gap" onClick={this.thanks2}></img>
                  <img src={pk}  width="150px" height="250px" id="gap" onClick={this.thanks3}></img></div>
    }</p>
    <div>{this.state.x+this.state.v}</div>
          </div>
        )
    }
}
export default Home;