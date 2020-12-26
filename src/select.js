import React from 'react';

class Select extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:"",
           
           
        }
    }
    update=(e)=> {
        this.setState({data:e.target.value,});
    }
    
    render(){
        return(
            <div>
        <h1>hello {this.state.data}</h1>
        <input type="text"  onChange={this.update}   ></input>
              {/* <button type="button" onClick={this.update}>onchange</button> */}
        </div>
        )
    }
}
export default Select;