import React from 'react';
// import './routers.css';
const f=0;
class Stopwatch extends React.Component{
    constructor(props){
        super(props)
        this.state={
            
            hour:f,
            min:f,
            sec:f,
            milli:f,
            start:"start"
        }

    }
 
    update=()=>{
        this.in= setInterval(
             () => this.tick(),
             10    
           )
         
     }
     tick =function(){
         this.setState({
             milli:this.state.milli+1,
         })
         if(this.state.milli==60){
             this.setState({
                 sec:this.state.sec+1,
                 milli:0,
             })
             }
             if(this.state.sec==60){
                 this.setState({
                     min:this.state.min+1,
                     sec:0,
                 })
             }
     }      
     update1=()=>{
         this.setState({

             start:"continue",
         })
         clearInterval(this.in)
     }
     update2=()=>{
         this.setState({
             start:"start",
             hour:f,
             min:f,
             sec:f,
             milli:f,
         })

     }
    render(){
             return(
                <div>
                <div className="container black1">
                <div className="centeralaram">Stopwatch</div>
                <div className="stopcenter">
                 <div>{this.state.hour}:  {this.state.min}:  {this.state.sec}:  {this.state.milli} </div>
                 <div>
                 
             <button type="button" className="buttoncenter1" onClick={this.update}>{this.state.start}</button>
             <button type="button" className="buttoncenter1" onClick={this.update1}>stop</button>
                 </div>
                 <button type="button" className="buttoncenter1" onClick={this.update2}>reset</button>

                </div>
                </div>
            </div>
             )
    }
}

export default Stopwatch;