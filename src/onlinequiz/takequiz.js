import React from 'react'
import './online.css'
import Button from '@material-ui/core/Button';
import Loginquiz from './login'
import * as firebase from 'firebase';
import fireinserting from './fireinserting'
import {
    BrowserRouter as Router,

 
    Route,
    NavLink,Switch
}from 'react-router-dom';
const a=[1,2,3,4]
var j=0;
class Takequiz extends React.Component{
    constructor(props){
            super(props)
        this.state={
            array:[
                {
                    qn:"1+1=?",
                    ans:["2","3","4","5"],
                    correct:"2",
                    qnno:"1"
                },
                {
                    qn:"2+2=?",
                    ans:["4","5","2","3",],
                    correct:"4",
                    qnno:"2"
                },
                 {
                    qn:"1+2=?",
                    ans:["3","4","2","5"],
                    correct:"3",
                    qnno:"3"
                },
                 {
                    qn:"1+4=?",
                    ans:["5","2","3","4",],
                    correct:"5",
                    qnno:"4"
                },
                 {
                    qn:"1+3=?",
                    ans:["2","5","4","3"],
                    correct:"4",
                    qnno:"5"
                }
            ],
            i:0,
           score:0,
           c:0
        }
    }
    componentDidMount=()=>{
        const db=firebase.firestore();
        db.collection("sample").doc("sample1").set({
            number:1,
            email:"hloo",
        })
        .then(function() {
            console.log("Document successfully written!");

        })
        .catch(function(error) {
            console.error("Error writing document: ");
        });
    }
    login=(k)=>{
      if(k===this.state.array[this.state.i].correct){
          this.setState({score:this.state.score+1})
          
      }
        this.setState({i:this.state.i+1})
    }
    changepath=()=>{
        this.setState({c:1})
    }
    render(){
        return(
        <div>{
            this.state.c===0?  <div className="centerquiz">
            <h1>QUIZ</h1>
        <h1>{
            this.state.i!==5 ? <div> <h1>{this.state.array[this.state.i].qnno}</h1>
            <div className="qnsize">{this.state.array[this.state.i].qn}</div>
           <div> {
               this.state.array[this.state.i].ans.map(k=>{
                   return (    <li>
                   <Button variant="contained"  onClick={()=>{this.login(k)}}>{k}</Button></li>                        
                   )
               })
            }</div> </div>:<div>
                <div>your score is    {this.state.score}</div>
              <div>you want to play more quizes then plz login</div> 
                   <Router>
                   <NavLink to="/login"><Button variant="contained" color="primary" onClick={this.changepath}>Login</Button>    </NavLink>
                   
                   </Router>
            </div>
            }</h1>
       
        </div>:<Router>
            <Route path="/login"><Loginquiz/></Route>
        </Router>
            }</div>
        )
    }
}
export default Takequiz;