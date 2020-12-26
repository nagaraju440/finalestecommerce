import React from 'react';
var id;
class High extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[
                {
                    id:1,
                    name:"nagraju",
                },
                {
                    id:2,
                    name:"hanuma",
                },
                {
                    id:3,
                    name:"suresh",
                }
            ],
            f:1,
            x:0,
           
           
        }
    }
    // update=(e)=> {
       
    //     this.setState({ x:this.state.x+1,data:this.state.x});
    //     // console.log(this.state.x)
    // }
    // componentDidMount(){
    //     setTimeout(()=>{
    //         clearInterval(id);
    //     },3000)
    //      id=setInterval(()=>{
    //         this.setState({x:this.state.x+1})
    //     },1000)
        
    // }
   
    render(){
        return(
            <div>
        {/* <h1>hello {this.state.data}</h1> */}
        <table>
       
            
              {/* <th>{this.state.data[this.state.x].id}</th>
              <th>{this.state.data[this.state.x].name}</th> */}
              {this.state.data.map((key,value)=>{
                  console.log(key,value)
                  return  <tr><th>{this.state.data[value].id}</th>
                  <th>{this.state.data[value].name}</th>
                  </tr>
              })}
            
              
        </table>
       
        </div>
        )
    }
}
export default High;