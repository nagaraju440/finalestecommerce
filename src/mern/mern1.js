import React from 'react';

  import axios from 'axios'
class Mern1 extends React.Component{
    constructor(props){
        super(props);
        this.state={
          data1:{},
        }
    }
    componentDidMount=()=>{
        axios.get("http://localhost:4000/api")
        // .then(res=>res.text())
        .then(res=>{
            this.state.data1=res.data;
            this.setState({data1:this.state.data1})
            console.log( typeof this.state.data1,"response is")
        })
        .then(res=>{
            console.log("fetched sucseessfully")
        })
        axios.post("http://localhost:4000/api1",{name:"nagaraju"})
        .then(res=>{
            console.log(res)
        })
    }

    render(){
        return(
         <div>
        {/* <div>{
            Object.keys(this.state.data1).map(k=>{
            return(<div>{this.state.data1[k]}</div>)
            })
            }</div> */}
      <div>hello world</div>
         </div>
             )
    }
}

export default Mern1;