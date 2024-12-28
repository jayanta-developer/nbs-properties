import React from 'react';
import "./style.css";

//images
import callicon from "../../assets/Images/callIcon.svg"
import mailIcon from "../../assets/Images/mailIcon.svg"
import mapImg from "../../assets/Images/map.png"

import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import { BlackBtn } from "../../Components/Tools"

export default function ContactUs() {
  return (
    <>
      <NavBar />
      <div className="contactPage">
        <div className="contact_InputBox">
          <div className="contactTextBox">
            <h3 className='contactHeader'>Ask Us Any Questions About Any Properties</h3>
            <p className='contSubText'>Lorem ipsum dolor sit amet consectetur. Diam scelerisque duis nisi mollis volutpat arcu. Venenatis nec varius eu sed malesuada lectus. Magna dignissim ut lacus sed adipiscing massa semper tempor amet. Rhoncus et tristique amet nisl. Convallis sem nulla lobortis lectus. Maecenas varius neque orci purus velit nulla cursus quis. Morbi suspendisse sit ultricies sit fames. </p>
            <div className="hrLine"></div>

            <div className="contactInfoBox">
              <div className="contactItemBox">
                <img src={callicon} />
                <p>(+91) 80-37880011</p>
              </div>
              <div className="contactItemBox">
                <img src={callicon} />
                <p>+00 9876543210</p>
              </div>
              <div className="contactItemBox">
                <img src={mailIcon} />
                <p>support@ddproperty.com</p>
              </div>
              <div className="contactItemBox">
                <img src={mailIcon} />
                <p>customercare@iproperty.com.my</p>
              </div>

            </div>
          </div>


          <div className="contactInputBox">
            <p className='contInputHeader'>We’re Here To Help You!</p>

            <div className="inputBox">
              <p>Full Name *</p>
              <input type="text" />
            </div>
            <div className="inputBox">
              <p>Phone *</p>
              <input type="text" />
            </div>
            <div className="inputBox">
              <p>Email Address *</p>
              <input type="text" />
            </div>
            <div className="inputBox">
              <p>Message *</p>
              <textarea type="text" />
            </div>

            <BlackBtn btnText="SUBMIT" height="40px" />

          </div>

        </div>

        <div className="mapBox">
          <img src={mapImg} alt="" />
        </div>

      </div>
      <Footer />
    </>
  )
}
