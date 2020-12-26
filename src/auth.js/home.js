import React from 'react'
import fire from './fire1'
class Home extends React.Component{
    render(){
        return(
              <div>
                  <h1>youu are loggedin</h1>
                  <button onClick={this.logout}>logout</button>
              </div>
        )
    }
}
export default Home;