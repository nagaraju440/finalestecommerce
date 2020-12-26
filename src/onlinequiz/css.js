import  React from 'react';
import fireinserting from './fireinserting'

import * as firebase from 'firebase';
var z;
class Css extends React.Component{
    constructor(props){
        super(props);
        this.state={
            array2:[
                {
                    qn:null,
                    ans:[null,null,null,null],
                    correct:null,
                    qnno:null
                },
                {
                    qn:null,
                    ans:[null,null,null,null],
                    correct:null,
                    qnno:null
                },
                 {
                    qn:null,
                    ans:[null,null,null,null],
                    correct:null,
                    qnno:null
                },
                 {
                    qn:null,
                    ans:[null,null,null,null],
                    correct:null,
                    qnno:null
                },
                 {
                    qn:null,
                    ans:[null,null,null,null],
                    correct:null,
                    qnno:null
                }
            ],
            i:"hello"
        }
    }
    componentDidMount=()=>{
        const db=firebase.firestore();
        // db.collection("css").get().then(function(S){
        //     S.forEach(function(doc) {
        //         console.log(doc.id, " => ", doc.data());
        //     });
        // });
           var het=db.collection("html").doc("hi");  
             het.get().then((doc)=> {
                if (doc.exists) {
                    // console.log("Document data:", doc.data());
                       z=doc.data()
                      for(const p in z){
                          console.log(z[p][5].user)
                          for(var m=0;m<z[p].length;m++){
                              console.log(z[0][m].qn)
                          }
                      }
                    //    this.setState({i:z})
           console.log("i is",this.state.i)

                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });
          

    }
        render(){
            return(
                <div>
         <div>
         {this.state.i}

         </div>
         <div>hiiii</div>
                </div>
            )
        }
}
export default Css;