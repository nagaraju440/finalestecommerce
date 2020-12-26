    import { object } from "prop-types";
import React from "react"
     class Testing extends React.Component{
         constructor(props){
             super(props);
             this.state={
                 te:null,
                 da:[1,2],
                 x:0,
             }
         }
         componentDidMount=()=>{
             fetch("http://dummy.restapiexample.com/api/v1/employees")
             .then(res=>res.text())
             .then(res=>{
                const pai=JSON.parse(res);
                this.state.te=pai;
                console.log(this.state.te)
                this.setState({te:this.state.te,x:1})
            console.log(this.state.te.data.map(k=>{
                console.log(k.id)
            }))
                // this.state.te.map(k=>{
                //     console.log()
                // })
                // console.log(typeof this.state.te)
                // this.state.da.push(5)
                // this.setState({da:this.state.da})
               
            
                // pai.data.map(k=>{
                //     this.state.da.push(k)
                //     console.log(this.state.da)
                //     // this.setState({da:this.state.da})
                           
                // })
                // console.log(pai.status)
                // console.log("hii",pai.data[0])
             }) 
             
         }
         render(){
             return(
                 <div>
                     <div>hello world
                    
                     </div>
                     <div>{
                         
                         this.state.x===0?"hii":<div>
                             <div>hello</div>
                     {
                         Object.values(this.state.te.data).map(k=>{
                         return(<div>{k.id}</div>)
                        })
                     }
                         </div>
                         }</div>
                 </div>

             )
         }
     }
     export default Testing;