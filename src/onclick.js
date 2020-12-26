import React from 'react';
class Inc extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:"",
            f:1,
            x:1,
           
           
        }
    }
    update=(e)=> {
       
        this.setState({ x:this.state.x+1,data:this.state.x});
        // console.log(this.state.x)
    }
    
    render(){
        return(
            <div>
        <h1>hello {this.state.data}</h1>
        {/* <input type="text"  onChange={this.update}   ></input> */}
        <button type="button" onClick={this.update}>onchange</button>
        </div>
        )
    }
}
export default Inc;