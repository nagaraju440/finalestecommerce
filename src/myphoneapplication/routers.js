import React from 'react';

import {
    BrowserRouter as Router,

 
    Route,
    NavLink
}from 'react-router-dom';
import './routers.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alaram from './alaram';
import Clock from './clock';
import Stopwatch from './stopwatch';
import Timer from './timer';
import 'font-awesome/css/font-awesome.min.css';
class Routers extends React.Component{
    constructor(props){
        super(props);
        this.state={
            m:"ab",
        }
    }
    render(){
        return(
            
            <Router >
              <div>
            <div className="container black">
           <div className="row">
           <div className="col-3 center " >
               
           <NavLink to="/a" className=" Link1 " activeClassName="navbar__link--active">Alaram</NavLink>
                     </div>
           <div className="col-3 center">
           <NavLink to="/clock" className="Link1" activeClassName="navbar__link--active">Clock</NavLink>
           </div>
           <div className="col-3 center ">
           <NavLink to="/timer" className="Link1" activeClassName="navbar__link--active">Timer</NavLink>
           </div>
           <div className="col-3 center">
           <NavLink to="/stopwatch" className="Link1" activeClassName="navbar__link--active">StopWatch</NavLink>
           </div>
           </div>
          
</div>

<Route exact path="/a"> <Alaram/>
</Route>
<Route exact path="/clock" >
    <Clock/>
</Route>
<Route exact path="/timer" >
    <Timer/>
</Route>
<Route exact path="/stopwatch" >
    <Stopwatch/>
</Route>
        </div>
</Router>

        )
    }
}
export default Routers;   
// npm install --save-dev @iconify/react @iconify/icons-ion


