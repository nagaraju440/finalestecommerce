import React from 'react';
// import './routers.css';

class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            hour:"",
            min:"",
            sec:"",
            f:'',
            play:false,
            pause:true,
            stopsound:"stopsound",
            x:"",
            here:'your timer is ended😉if you here any sound then click stop sound button',
            
        }
        this.url = "https://www.fesliyanstudios.com/play-mp3/4386";
        this.audio = new Audio(this.url);
    }
    
    update1=(e)=>{
              this.setState({
                  hour:e.target.value,
              })
    }
    update2=(e)=>{
        this.setState({
            min:e.target.value,
        })
}
update3=(e)=>{
    this.setState({
        sec:e.target.value,
    })
}
    update=()=>{
       this.in= setInterval(
            () => this.tick(),
            1000
          )
          setInterval(
            () => this.tick1(),
            60000
          )
    }
    stopsound=()=>{
        // this.setState({ play: false, pause: true });
    this.audio.pause();
    this.setState({stopsound:"",here:"",})
    }
    tick=function(){
        this.setState({
            sec:this.state.sec-1,
            f:"1",
            x:"a",
        });
        if(this.state.sec<=0 && this.state.min>0){
            this.setState({sec:60,min:this.state.min-1})
        }
        if(this.state.sec<=0 && this.state.min<=0){
            this.setState({sec:"00",min:"00",hour:"00",play:true})
            this.audio.play();
               clearInterval(this.in)

        }
    }
  
    tick1=function(){
        this.setState({
            min:this.state.min-1,
            
        });
        if(this.state.min<0){
            this.setState({min:"00"})
        }
    }
    render(){
             return(
                <div>
                <div className="container black1">
                <div className="centeralaram">Timer</div>
                <div className="timermid">
                    {/* <input type="time" step="2" onChange={this.update1}></input><br></br> */}
                    <input type="number" className="inputwidth" onChange={this.update1}></input>
                    <input type="number" className="inputwidth" onChange={this.update2}></input>
                    <input type="number" className="inputwidth" onChange={this.update3}></input>
             <div>{this.state.hour}h:{this.state.min}m:{this.state.sec}s</div>
             <button type="button" className="buttoncenter" onClick={this.update}>Start</button><br></br>
             <button className="buttoncenter" type="button" onClick={this.stopsound}>
        {
            this.state.sec<=0 && this.state.min<=0 && this.state.x!=""
            ? this.state.stopsound
            :""

        }
    </button>
              <p>
    {
        this.state.sec===""
        ? 'please input your time limit🙂'
        : this.state.f===""
        ? 'click start to start your timer🙂'
        : this.state.sec==="00"
        ? this.state.here
        : 'your timer is running🥵 '
    }
    </p>
   
                </div>
                
                </div>
            </div>
            
             )
            
    }
}

export default Timer;

