import React from 'react';

// import {
//     BrowserRouter as Router,

 
//     Route,
//     Link
// }from 'react-router-dom';
// import './routers.css';
const x=0;
class Alaram extends React.Component{
     constructor(props){
         super(props);
        this.state={
            f:1,
            hour:x,
            min:x,
            settime:"Set time",
            setalaram:"Set alaram",
            time: new Date().toLocaleTimeString,
            play:false,
            pause:true,
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
   update3=()=>{
       this.setState({
           settime:"",
           setalaram:""
       })
      
       this.intervalID = setInterval(
        () => this.tick(),
        1000
      )}
    
   tick=function(){
  this.setState({
    time:new Date().toLocaleTimeString(),
  })
       if(this.state.time.getHours===this.state.hour && this.state.time.getMinutes===this.state.min){
           this.setState({play:true,pause:false})

        this.audio.play();
       }else{
          console.log(this.state.time.getMinutes)
       }
   }
   

    render(){
             return(
                     <div>
                         <div className="container black1">
                            
                             <div className="centeralaram">
                             
                                 <div>Alram</div>
                                 <div className="small">
                                 {
                                     this.state.settime==="Set time"
                                     ? 'Set time'
                                     : ""
                                 }
                                 </div>
                               

                                 <input type="number" className="alnum" onChange={this.update1}></input>
                                 <input type="number" className="alnum" onChange={this.update2}></input>
                                  <select className="select">
                                  <option>AM</option>
                                  <option>PM</option>
                                      </select>  
                                      <button type="button" onClick={this.update3} className="setalaram">
                                          {
                                              this.state.setalaram==="Set alaram"
                                              ? "Setalaram"
                                              :""
                                          }
                                      </button>
                                      <div className="on">
                                          {
                                              this.state.setalaram===""
                                              ?"your alaram is on"
                                                  : ""
                                          }

                                      </div>

              {/* <Router>
                  <Link to="/al" className="link2">
             <div className="alaramtime1">{this.state.time}</div>
                  </Link>
                  <Route path="/al">
                      <Alaramtime/>
                      
                       
                  </Route>
              </Router> */}

  
                         </div>
                     </div>
                     </div>
                 )
    }
}


export default Alaram;
 
// class Alaramtime extends React.Component{
//     render(){
//         return(
//             <div className="settime">hello</div>
//         )
//         }
// }
