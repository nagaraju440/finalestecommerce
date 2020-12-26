import React from 'react';
import './facebook.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import im from './facebook.png';
// import img from 'facebook.png';
class Facebook extends React.Component{
    render(){
        return (
           <div>
             <div className="a">
               <div class="row ">
               <div class="col-2"></div>

               <h1 class="col-4 " id="facebook" >facebook</h1>
               <div class="col-1  "></div>
               <div class="col-1.5">
                 <div className="Email">Email or phone</div>
                 <input className="emailinput mt-1" ></input>
               </div>
               <div class="col-1.5">
               <div className="Email">Password</div>
                 <input className="emailinput mt-1" type="text"></input>
                 
                 <div className="forgetten">Forgotten account?</div>
               </div>
            <div class="col-1.5">
            <button className="login">Log in</button>
            </div>
            <div class="col-0.5"></div>
               </div>
             </div>
                 <div className="whitesmoke">
                   <div class="row">
                     <div class="col-2"></div>
                   <div class="col-5">
                     <h2 class="sm-view helps">Facebook helps you connect and share with the<br></br>
                        people in your life.</h2>
                        <div class="img">
                        <img src={im}  class="image" ></img>

                        </div>

                   </div>
                 <div class="col-5">
                   <h1 class="mt-4">Create an account</h1>
                   <h5>It's quick and easy.</h5>
                   <input class="ta" placeholder="First name"></input>
                   <input class="tc" placeholder="Last name "></input><br></br>
                   <input class="mt-3 tb" placeholder="Mobile number or enail adress"></input><br></br>
                   <input class="mt-3 tb" placeholder="New password"></input>
                   <div class="dob  mt-3">Date of birth</div>
                   <input  type="number"  class="dobin"></input>
                   <input type="number" class="dobin"></input>
                   <input type="number" class="dobin"></input>
                   <div class="dob  mt-3">Gender</div>
                   <input type="radio" class="radioin"></input><strong>Female</strong>
                   <input type="radio" class="radioin"></input><strong>Male</strong>
                   <input type="radio" class="radioin"  ></input><strong>Custom</strong>
                  <p class="mt-2">By clicking Sign Up, you agree to our <a href="#">Terms, Data Policy</a>
                   and<br></br> <a href="#">Cookie Policy</a>. You may receive SMS notifications from us and<br></br> can opt out at any time.</p>
                  <input type="submit" value="sign Up" class="signup"></input>
                 </div>

                 </div>
                 </div>
           </div>
        );
        
    }
}
export default Facebook;

