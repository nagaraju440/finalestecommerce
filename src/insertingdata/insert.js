import React from 'react'
import * as firebase from 'firebase'
import fireinsert from './insert1'
class Data extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            email:"",
        }
        this.go=function(){
          console.log("sucsessfully submitted")
        }
        this.update=(e)=>{
            this.setState({name:e.target.value})
            // console.log(this.state.name)
        }
        this.update1=(e)=>{
            this.setState({email:e.target.value})
            // console.log(this.state.email)
        }
        this.adduser=(e)=>{
               e.preventDefault();
               const db=firebase.firestore();
               const userRef = db.collection("users").add({
                name: this.state.name,
                email: this.state.email
              }); 
              this.setState({
                  name:"",
                  email:""
              })
        }
    }
    render(){
        return(
              <div>
                  <form onSubmit={this.adduser}>
                  <input type="text"  onChange={this.update}></input><br></br>
                 <input type="text" onChange={this.update1}></input>
                 <button onClick={this.go}>submit</button>
                 </form>
              
</div>
            )
    }
}
export default Data;