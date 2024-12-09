import React, { useState } from 'react';

import "./style.css";

import pwdViewIcon from "../../assets/Images/pwdview.png"
import pwdHideIcon from "../../assets/Images/Pwdhide.png"
import googleIcon from "../../assets/Images/googleIcon.svg";
import facebookIcon from "../../assets/Images/facebookIcon.svg";
import appleIcon from "../../assets/Images/apple-logoIcon.svg";



import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import { BlackBtn, OutLineBtn } from "../../Components/Tools"


export default function LogIn({ navItem, setNavItem }) {
  const [logPage, setlogPage] = useState(true)
  const [pwdView, setPwdView] = useState(false)


  return (
    <>
      <NavBar navItem={navItem} setNavItem={setNavItem} />
      <div className="postReviewPage authPage">
        {
          logPage ?
            //signIn
            <div className="reviewPageBox">
              <p className='logHeader'>Welcome back!</p>
              <p className="subLogHeader">Log in or sign up to get the most out of your CommercialGuru experience.</p>
              <div className="LogInputBox">
                <p className='inputLabel'>Email Address :</p>
                <input type="text" placeholder='Enter your Email' />
              </div>
              <div className="LogInputBox">
                <p className='inputLabel'>Password :</p>
                <input type={pwdView ? "text" : "password"} placeholder='Enter your Password' />
                <img src={pwdView ? pwdViewIcon : pwdHideIcon} className='pwdIcon' onClick={() => setPwdView(!pwdView)} />
              </div>

              <div className="kpfpwd">
                <div className="keepLog">
                  <input type="checkBox" />
                  <p>Keep me signed in</p>
                </div>
                <p className="forgotPwd">Forgot Password?</p>
              </div>
              <div className="centerBtnBox">
                <BlackBtn btnText="Sign In" height="40px" />
              </div>
              <div className="orHrLine">
                <p>OR</p>
              </div>

              <div className="signUpBox">
                <OutLineBtn btnText="Sign Up With" icon={googleIcon} height="50px" />
                <OutLineBtn btnText="Sign Up With" icon={facebookIcon} height="50px" />
                <OutLineBtn btnText="Sign Up With" icon={appleIcon} height="50px" />
              </div>
              <p className="slLinkText">Are you an agent? <span onClick={() => setlogPage(false)}>Log In to Agent Account</span></p>
            </div> :

            // signup 
            <div className="reviewPageBox signIn">
              <p className='logHeader'>Create Account</p>
              <p className="subLogHeader">Please create an account to check your application status, manage in-progress applications and quickly apply to future jobs.</p>
              <div className="LogInputBox">
                <p className='inputLabel'>Email Address :</p>
                <input type="text" placeholder='Enter your Email' />
              </div>

              <div className="LogInputBox">
                <p className='inputLabel'>Password :</p>
                <input type={pwdView ? "text" : "password"} placeholder='Enter your Password' />
                <img src={pwdView ? pwdViewIcon : pwdHideIcon} className='pwdIcon' onClick={() => setPwdView(!pwdView)} />
                <p className='worningText'>Password Requirements : A special character</p>
              </div>
              <div className="LogInputBox">
                <p className='inputLabel'>Verify New Password</p>
                <input type="text" />
              </div>

              <div className="kpfpwd supCheck">
                <input type="checkBox" />
                <p>I agree to
                  <p className="forgotPwd"> T&C, Privacy Policy</p>
                  , &
                  <p className="forgotPwd">  Cookie Policy</p>
                </p>
              </div>

              <div className="supBottomBox">
                <BlackBtn btnText="Create Account" height="40px" />
                <p className="slLinkText">Already have an account? <span onClick={() => setlogPage(true)}>Sign In</span></p>
              </div>

            </div>
        }
      </div>
      <Footer />
    </>
  )
}
