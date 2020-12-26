import React from 'react'
import './online.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import fireinserting from './fireinserting';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import * as firebase from 'firebase';
import {
    BrowserRouter as Router,

 
    Route,
    NavLink,Switch
}from 'react-router-dom';
import Takingquiz from "./takingquiz"
import Profile from './profile'
import Score from './score'
import img from "./user1.png";
 class Home extends React.Component{
     constructor(props){
         super(props);
         this.state={
             topic:"html",
         }
     }
     know=(am)=>{
         console.log(am)
         this.setState({topic:am})
     }
     render(){
         return(
             <div > 
              <div className="top">
                  <Router>
                 <div class="row">
                     <div class="col-1"></div>
                     <div class="col-7 clr" >
                         <span className="foro">O</span>NLINE <span className="forq">Q</span>UIZ
                     </div>
                     <div class="col-1 ps">
                     <NavLink to="/home/profile" className=" Link1 " activeClassName="navbar__link--active">Profile</NavLink>
                     </div>
                     <div class="col-1 ps">
                     <NavLink to="/home/score" className=" Link1 " activeClassName="navbar__link--active">Score</NavLink>
                     </div>
                 </div>
                 <div class="row">
                       <div class="col-2 se">
                       <div className="three"> 
                     <NavLink to="/home" className=" Link1 " activeClassName="navbar__link--active" onClick={()=>{this.know("html")}}>Html</NavLink>

                    </div>    <div className="three">
                     <NavLink to="/home/css" className=" Link1 " activeClassName="navbar__link--active" onClick={()=>{this.know("css")}}>Css</NavLink>

                    </div>    <div className="three">
                     <NavLink to="/home/js" className=" Link1 " activeClassName="navbar__link--active" onClick={()=>{this.know("js")}}>Java Script</NavLink>

                    </div>
                                      
                       </div>
                     <div class="col-8 ">
                     <Route path="/home" exact><Html po={[this.props.pro,this.state.topic]}/></Route>
                     <Route path="/home/css" exact><Html po={[this.props.pro,this.state.topic]}/></Route>
                     <Route path="/home/js" exact><Html po={[this.props.pro,this.state.topic]}/></Route>
                         <Route path="/home/profile" exact><Profile go={this.props.pro}/></Route>
                     </div>
                 </div>
                 </Router>
              </div>
             </div>
         )
     }
 }
 export default Home;
 class Html extends React.Component{
     constructor(props){
         super(props)
         this.state={
             no:-1 ,
             path:null,
           
         size1:[[],[]],
         o:0,
         l:0,
         }
     }
     componentDidMount=()=>{
         this.setState({no:-1,o:0,l:0})
         this.setState({path:null})
         if(this.props.po[1]==="html"){
             this.setState({path:"/home/takingquiz"})
         }
         if(this.props.po[1]==="css"){
            this.setState({path:"/home/css/takingquiz"})
        } 
         if(this.props.po[1]==="js"){
            this.setState({path:"/home/js/takingquiz"})
        }

         const db=firebase.firestore();
         db.collection(this.props.po[1]).get().then((snap)=>{
                         snap.forEach((doc)=>{
                            //  console.log(doc.id,doc.data())
                             var z=doc.data();
                             this.state.no=this.state.no+1;
                             this.setState({no:this.state.no})
                             this.state.size1[0].push(this.state.no)
                             this.state.size1[1].push(z[0][5].user)
                             this.setState({size1:[this.state.size1[0],this.state.size1[1]]})
                         })
         })
        } 
        click=(k)=>{
            this.setState({o:1})
            console.log(k)
         this.setState({l:k})
        }         
    render(){
         return(
             <div>
                 <Router>
                 <div className="you">Quizes For You </div>
           <div>
               {
                   this.state.o===0?<div>
                             <div>{this.state.size1[0].length}</div>
                  {
                      this.state.size1[0].map((k)=>{
                          return(
                              
                          <div>
                        
                          {/* <div>{this.props.po[0]}</div> */} 
                              {
                             
                              this.state.size1[1][k]===this.props.po[0]?"":  <div className="box">
                              <div ><img src={img} className="userimage"></img>:<span className="sizeuser">{this.state.size1[1][k]}</span><span className="but">
                                    <NavLink to={{pathname:this.state.path}}>
                              <Button  color="primary" onClick={()=>{this.click(k)}} >take quiz</Button>    
                                    </NavLink>
                              </span><span>{k}</span></div>
                               
                                </div>
                             }</div>
                          )
                      })
                  }  
                   </div>:<Route path={this.state.path}><Takingquiz get={[this.state.l,this.props.po[1]]}/></Route> 
               }
               </div> 
                   
                  </Router>    
             </div>
         )
     }
 }

