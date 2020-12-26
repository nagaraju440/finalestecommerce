import React from 'react'
import fireinserting from './fireinserting'
import img from './user1.png'
import * as firebase from 'firebase';
import './online.css'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import {
    BrowserRouter as Router,

 
    Route,
    NavLink,Switch
}from 'react-router-dom';
import './online.css'
var array4=[];
class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state={
                  x:0,
                  y:0,
                  z:0,
        }
    }
      componentDidMount=()=>{
          this.setState({x:0,y:0,z:0})
            const db=firebase.firestore();
           console.log("amm choodu",this.props.go)
            db.collection("users").doc(this.props.go).set({
                email:this.props.go,
                html:"html amma"
            })
            .then(function() {
                console.log("Document successfully written!");

            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });
       }
       createquiz=()=>{
               this.setState({
                   x:1,z:1
               })
       }
       openquiz=()=>{
           this.setState({
               y:1,z:1
           })
       }
        
    
    render(){
        return(
        <div>
           <Router>
        <div>{
            this.state.z===1?<div>{this.state.x===1 && this.state.y==0? <Createingquiz ve={this.props.go}/>:<div>
                {
                    this.state.y===1 && this.state.x===0?<Openquiz ve={this.props.go}/>:""
                }
                </div>}</div>:<div> <div class="row">
            {/* <div class="col-2 name">User  :</div>
        <div class="col-2 name">{this.props.go}</div> */}
        <img src={img} className="userimage"></img><span className="sizeuser1">{this.props.go}</span>
             </div>
                <Button variant="contained" color="primary" onClick={this.createquiz}>Create your own quiz</Button>
        <Button variant="contained" color="primary" onClick={this.openquiz}>Open my quizes</Button>
             </div>
            }</div> 
           {/* <div>{
            this.state.y===1?<Openquiz ve={this.props.go}/>:<div>hello</div>   
            }</div> */}
            </Router>
        </div>
        )
    }
}
export default Profile;


class Createingquiz extends React.Component{
    constructor(props){
        super(props);
        this.state={
            nex:1,
            x:"hi",
            ab:0,
            value:null,
            array1:[
                {
                 qn:null,
                 ans:[null,null,null,null],
                 correct:null,
                 qnno:null
             },
             {
                 qn:null,
                 ans:[null,null,null,null],
                 correct:null,
                 qnno:null
             },
              {
                 qn:null,
                 ans:[null,null,null,null],
                 correct:null,
                 qnno:null
             },
              {
                 qn:null,
                 ans:[null,null,null,null],
                 correct:null,
                 qnno:null
             },
              {
                 qn:null,
                 ans:[null,null,null,null],
                 correct:null,
                 qnno:null
             },
         {
             user:this.props.ve
         }
         ],
        }

    }
    componentDidMount=()=>{
        console.log(this.props.ve)
      { this.state.array1=[
            {
             qn:null,
             ans:[null,null,null,null],
             correct:null,
             qnno:null
         },
         {
             qn:null,
             ans:[null,null,null,null],
             correct:null,
             qnno:null
         },
          {
             qn:null,
             ans:[null,null,null,null],
             correct:null,
             qnno:null
         },
          {
             qn:null,
             ans:[null,null,null,null],
             correct:null,
             qnno:null
         },
          {
             qn:null,
             ans:[null,null,null,null],
             correct:null,
             qnno:null
         },
     {
         user:this.props.ve
     }
     ]  }
        // this.state.array1=null,
        this.setState({array1:this.state.array1})
    }
    next=()=>{
        this.setState({
            nex:this.state.nex+1,
        })
        document.getElementById("1").value=null;
        document.getElementById("2").value=null;
        document.getElementById("3").value=null;
        document.getElementById("4").value=null;
        document.getElementById("5").value=null;
        document.getElementById("6").value=null;
    }
        submit=()=>{
            this.setState({
                ab:1,
            })
            array4.length=0;
            array4.push(this.state.array1)
            console.log(array4)
            console.log(this.state.value)
                     const db=firebase.firestore();
             db.collection("users").doc(this.props.ve).collection(this.state.value).add({...array4}).then(function(){
                console.log("Document successfully written!");

            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            }); 
           
             db.collection(this.state.value).doc().set({...array4})  

        }
      qnch=(e)=>{
        this.state.array1[this.state.nex-1].qn=e.target.value;
       
    
    } 
      opch1=(e)=>{
        this.state.array1[this.state.nex-1].ans[0]=e.target.value;     
    } 
      opch2=(e)=>{
       this.state.array1[this.state.nex-1].ans[1]=e.target.value;     
          
    }  
     opch3=(e)=>{
       this.state.array1[this.state.nex-1].ans[2]=e.target.value;     
          
    }
       opch4=(e)=>{
       this.state.array1[this.state.nex-1].ans[3]=e.target.value;     
          
    } 
    correct=(e)=>{
        this.state.array1[this.state.nex-1].correct=e.target.value;
    }
    chan=(e)=>{
            // console.log(e.target.value)
            if(e.target.value===10){
                this.setState({value:"html"})
            }else if(e.target.value===20){
                this.setState({value:"css"})
            }else{
                      this.setState({value:"js"})   
            }
    }
    render(){
        return(
            <div>
                {this.state.ab===0 ?<div className="rect">
                        <h1 className="cen">creating a quiz</h1>
                      <div className="cen"> 
                      <InputLabel id="demo-simple-select-label">Topic</InputLabel> <Select onChange={this.chan}>
          <MenuItem value={10}>html</MenuItem>
          <MenuItem value={20}>css</MenuItem>
          <MenuItem value={30}>js</MenuItem>
        </Select> </div>
                        <div>
                      <span> ({this.state.nex})</span> <TextField  label="Quoestion" onChange={this.qnch} id="1" />
                       <div className="size">(1)<TextField className="size" onChange={this.opch1}  id="2"/></div>
                       <div className="size">(2)<TextField className="size" onChange={this.opch2} id="3" /></div>
                       <div className="size">(3)<TextField className="size" onChange={this.opch3} id="4" /></div>
                       <div className="size">(4)<TextField className="size" onChange={this.opch4} id="5" /></div>
                       correct:<input className="ip " type="text" onChange={this.correct} id="6"></input>
                        </div>
                     <div className="cen">
                     <Button variant="contained" color="primary" onClick={this.next} >Next</Button>
                        <Button variant="contained" color="primary" onClick={this.submit} >Submit</Button>
                     </div>
                </div>:<Profile go={this.props.ve}/>}
        
        
            </div>
        )
    }
}
var k=-1;

class Openquiz extends React.Component{
    constructor(props){
        super(props);
        this.state={    
            x:0,
            m:0,
            n:0,
            no:0,
            h:0,
            c:0,
            y:0,
            js:0,
            se:null,
            o:0,
            mn:0,
            size:[],
            size1:[],
            array7:[
                {
                 qn:null,
                 ans:[null,null,null,null],
                 correct:null,
                 qnno:null
             },
             {
                 qn:null,
                 ans:[null,null,null,null],
                 correct:null,
                 qnno:null
             },
              {
                 qn:null,
                 ans:[null,null,null,null],
                 correct:null,
                 qnno:null
             },
              {
                 qn:null,
                 ans:[null,null,null,null],
                 correct:null,
                 qnno:null
             },
              {
                 qn:null,
                 ans:[null,null,null,null],
                 correct:null,
                 qnno:null
             },
         {
             user:this.props.ve
         }
         ],
        }
        this.cli=this.cli.bind(this)
    }
    componentDidMount=()=>{
        this.setState({y:0})
    }
    go=()=>{
        console.log(this.state.se,this.state.mn)
         this.setState({no:0})
         this.state.size.length=0;
            const db=firebase.firestore();
            db.collection("users").doc(this.props.ve).collection(this.state.se).get().then((snap)=>{
                    snap.forEach((doc)=>{                       
                        this.setState({no:this.state.no+1}) 
                         this.state.size.push(this.state.no)
                        this.setState({size:this.state.size})
                        // console.log(this.state.no,this.state.size) 
                        })
            })

            
    }
    html=()=>{
        this.setState({h:1,se:"html",mn:0,y:1})
        this.state.h=1;
        this.state.se="html";
        this.state.mn=0;
        this.go();
    }
    css=()=>{
        this.setState({c:1,se:"css",mn:1,y:1})
        this.state.c=1;
        this.state.se="css";
        this.state.mn=1;
        this.go();
    }
    js=()=>{
        this.setState({js:1,se:"js",mn:2,y:1})
        this.state.js=1;
        this.state.se="js";
        this.state.mn=2;
        this.go()
    }
    goprofile=()=>{
        this.setState({x:1})
    }
    next=()=>{
        
if(this.state.m<4){
    this.setState({m:this.state.m+1})
}else{
    this.setState({m:4})

}}
    pre=()=>{
        this.setState({m:this.state.m-1})
        if(this.state.m==0){
            this.setState({m:0})
        }
    }
    velli=(k)=>{
        console.log("vellindiroooooo",k)
    }
    cli=(k)=>{
             k=k-1
             var l=-1;
            // this.state.array7=null, 
            this.setState({o:1,m:0,c:k})
            
              const db=firebase.firestore();
            db.collection("users").doc(this.props.ve).collection(this.state.se).get().then((snap)=>{
                snap.forEach((doc)=>{
                    l=l+1;
                   const z=doc.data();
                   console.log(this.state.c,l,"c,l")
                  if(l===this.state.c){
                    for(k in z){
                        console.log("k is",k,z[k])
                        for(var i=0;i<5;i++){
                           this.state.array7[i].qn=z[k][i].qn;
                           this.state.array7[i].correct=z[k][i].correct;
                           for(var j=0;j<4;j++){
                               this.state.array7[i].ans[j]=z[k][i].ans[j];
                           }
                        }
                    }
                }
                })
        })
            console.log(k,"Clicked")
    }
    render(){
        return(
            <div>
          <div>{
              this.state.x===1?<Profile go={this.props.ve}/>:<div>

<Button variant="contained" color="primary" onClick={this.html} >html</Button>
<Button variant="contained" color="primary" onClick={this.css} >css</Button>
<Button variant="contained" color="primary" onClick={this.js} >js</Button>
         <div>{this.state.y===1?<div><h1>in {this.state.se} you created {this.state.no} quizes</h1><div>
                           {
                               this.state.size.map(k=>{
                                  
                                 return (
                                    
                                       
                               <Button  variant="contained" onClick={()=>{this.cli(k)}} >{k}</Button>
                            
                                   )
                                
                                   
                               })
                           }
                       </div></div>:""}</div>
                       <div>{this.state.o===1?<div> <div className="qnsize">{this.state.array7[this.state.m].qn}</div>
         
         <div> {
 this.state.array7[this.state.m].ans.map(v=>{
 return (    <li>{v}</li>                        
     )
 })
}</div><div>correct:{this.state.array7[this.state.m].correct}</div>
<Button variant="contained" color="primary" onClick={this.pre} >pre</Button><Button variant="contained" color="primary" onClick={this.next} >next</Button></div>
                        :""}</div>                        
                      


<Button variant="contained" color="primary" onClick={this.goprofile} >go to profile</Button>
                    
              </div>
              }</div>
            </div>
        )
    }
}