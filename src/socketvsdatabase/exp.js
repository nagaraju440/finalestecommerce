import React from 'react'
import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAPH79I_xKjX-rOBDPTu7Uo7Fpz03s2iO0",
    authDomain: "exampleanta.firebaseapp.com",
    databaseURL: "https://exampleanta.firebaseio.com",
    projectId: "exampleanta",
    storageBucket: "exampleanta.appspot.com",
    messagingSenderId: "51472678440",
    appId: "1:51472678440:web:d5d513ef3898b58f597f1d",
    measurementId: "G-XBSKMQ06GP"
  };

  firebase.initializeApp(firebaseConfig);
  var db=firebase.firestore();
// import fire from 'fire.js'
class Exp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            x:[],
            y:0,
            m:[],
        }
    }
    componentDidMount=()=>{        
    }
    click=()=>{
        // this.state.x=this.state.x.concat(this.state.y)
        // this.setState({x:this.state.x})
        // db.collection("sample").doc("sample1").set({
        //     number:this.state.x
        // })
        this.setState({y:this.state.y+1})
        // console.log(this.state.x)
        db.collection("sample").get().then((snap)=>{
            snap.forEach(doc=>{
                // console.log(doc.data(),"doc is")
                var z=doc.data()
                Object.keys(z).map(k=>{
                    // console.log(z[k])
                    // this.setState({m:[0]})
                    z[k].map(l=>{
                    // console.log(l)
                    this.state.m=this.state.m.concat(l)
                    this.setState({m:this.state.m})
                    })
                    console.log(this.state.m)
                })
            })
        })
    }
            render(){
                return(
                    <div><div>hello</div>
                    <button onClick={this.click}>clickme</button>
                <div>{this.state.m.map(k=>{
                    return(<div>{k}</div>)
                })}</div>
                    </div>

                )
            }
}
export default Exp;