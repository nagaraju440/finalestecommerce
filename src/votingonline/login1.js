import React from 'react'
import {
    BrowserRouter as Router,

 
    Route,
    NavLink,Switch
}from 'react-router-dom';
import Loginvote from './login'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import './online.css'
class Login1 extends React.Component{
      render(){
          return(
                
          <div>
              <Router>
              
                <h1 id="ce">ONLINEVOTING</h1>
                <div id="ce">
                <NavLink to="/login">
                    <Button variant="contained" color="primary">Signin</Button>

                        </NavLink>
                        <Switch>
                        <Route path="/login" exact><Loginvote/></Route>

                        </Switch>
                </div>
            
              </Router>
          </div>
          )
      }
    
}

export default Login1;