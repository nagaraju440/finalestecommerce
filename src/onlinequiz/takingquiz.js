import React from "react"
import * as firebase from 'firebase';
import fireinserting from './fireinserting';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
class Takingquiz extends React.Component{
    constructor(props){
        super(props)
        this.state={
            opt:null,
            array8:[
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
                 user:null,
             }
           ],
           val:null,
           m:0,
           score:0,
           s:0,
           arr:["1","2","3","4","5"]
        }
    }
   
    componentDidMount=()=>{
        this.state.array8=[
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
             user:null,
         }
       ]
       this.setState({array8:this.state.array8,m:0,s:0})
        console.log(this.props.get)
        const db=firebase.firestore();
        db.collection(this.props.get[1]).get().then((snap)=>{
            snap.forEach((doc)=>{   
              if(this.state.m===this.props.get[0]){
                const z=doc.data();
                console.log(z,"hiii")

                  console.log(this.state.array8)
                    for(var i=0;i<5;i++){
                       this.state.array8[i].qn=z[0][i].qn;
                       this.state.array8[i].correct=z[0][i].correct;
                       for(var j=0;j<4;j++){
                           this.state.array8[i].ans[j]=z[0][i].ans[j];
                       }
                    }
                    this.state.array8[5].user=z[0][5].user;     
                    
            }
            this.setState({m:this.state.m+1})
            })
    })
    }
    change=(k,e)=>{
        console.log(e.target.value,k)
        
          this.setState({val:e.target.value})
          if(e.target.value===this.state.array8[k-1].correct){
              this.state.score=this.state.score+1;
                 this.setState({score:this.state.score})
                 console.log(this.state.score)
          }
    }
    submit=()=>{
        this.setState({s:1})
    }
  
    render(){
        return(
          <div>
            <div>{this.state.array8[5].user}'s quiz</div>
            {
                this.state.s===0?<div>
                    <div className="box1">
             {
                 this.state.arr.map(k=>{
                     return(
                         <div className="pakkaki">
                     <h5><span>{k})</span>{this.state.array8[k-1].qn}</h5>
                     <div className="pa">
                     
                         
                     <form onChange={(e)=>{this.change(k,e)}}> {
                           this.state.array8[k-1].ans.map(l=>{
                             return(
                                 <div>
                                
                                       <input type="radio" name={k} value={l}></input>
                           <label for={l}>{l}</label><br></br>
                                 </div>
                             )
                           })
                       
                             }
                                 </form>
                   

                     </div>
                    </div>
                     )
                 })
             }
             <div><Button variant="contained" color="primary" onClick={this.submit} >Submit</Button></div>
             </div>
            </div>:<div>congrats you scored {this.state.score} out of 5</div>
            }
              </div>            
        )
    }
}
export default Takingquiz;