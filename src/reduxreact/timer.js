import React from  "react"
import store from "../red1"
import {connect} from 'react-redux'
var x
// store.subscribe(()=>{
//     // console.log(store.getState());
//     //  window.x=JSON.stringify(store.getState().city)
//     // console.log(window.x,typeof x)
//     console.log("hiiii")
// });
class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            y:"hiii",
        }
    
    store.subscribe(()=>{
        // console.log("hii")
            this.setState({y:store.getState()})
    })
}
    //  st=()=>{
    //      this.props.start("hi")
    //  }
        render(){
            // console.log("s isss",window.x)
            return(
                <div>
                    <div>hello world</div>  
            <div>{JSON.stringify(store.getState().city)}</div>
            <div>{store.getState().time.hh}:{store.getState().time.mm}:{store.getState().time.ss}</div>
            <button onClick={this.props.start}>start</button><button onClick={this.props.stop}>stop</button>
                </div>
            )
        }
}
 function mapStateToProps(state){
    // window.x=JSON.stringify(state.city);
    // this.state.y=window.x;
    x=state;
    return({
        // console.log("state is ")
        
    })
}
var mapDispatchToProps;
mapDispatchToProps=dispatch=>{
    var id;
    setTimeout(()=>{
        dispatch({type:"set1",payload:"bhimavaram"})
    //    mapStateToProps(store.getState())
       },2000)
       
      return({
           start : ()=>{
               console.log("click")
               id=setInterval(()=>{ dispatch({type:"start"})},1000)
           },
           stop : ()=>{
            console.log("stop")
            clearInterval(id)
        }    
        })
}
// setTimeout(
//     // ()=>{
 
// ,1000
// )
export default connect(mapStateToProps,mapDispatchToProps)(Timer);