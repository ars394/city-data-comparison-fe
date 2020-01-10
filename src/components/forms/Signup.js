import React from 'react'; 

//images
import google from '../../assets/logos/google.svg'; 
import facebook from '../../assets/logos/facebook.svg';

//illustrations
import girl from '../../assets/illustrations/girl_signup.svg'

//styling
import './forms.scss'; 

const Signup = props => {
    return(
        <div className='signup'>
            <div className="form-container">
                <div className="inner-form">
                    <div className="form">
                        <h2>Create Your Account</h2>

                        <div className="auth">
                            <button id="signup-button" className="google"> <img className="google" src={google} alt="google logo"/>Sign up with Google</button>
                            <button id="signup-button" className="facebook"><img className="fb" src={facebook} alt="facebook logo"/>Sign up with Facebook</button>
                        </div>
                        
                        <div className="center-text">
                            <div> </div><p>or with email</p><div></div>
                        </div>
                        <div className="fields">
                            <input className="email" type='text' name='email' placeholder="Email"/>
                            <input className="password" type='text' name='password' placeholder="Password"/>
                            
                            <div className="tos">
                                <input className="checkbox" type="checkbox" name="tos"></input>
                                <p>Accept terms of service</p>
                            </div>
                            <div className="signup-button">Start exploring cities</div>
                            <p class='question'>Have an account? <span>Sign in</span> to explore cities</p>
                        </div>
                    </div>
                    <div className="photo">
                        {/*photo*/}

                        <img className="girl" src={girl} alt="girl illustration" />

                        
                    </div>
                </div>
                
            </div>
           
        </div>
    )
}

export default Signup; 