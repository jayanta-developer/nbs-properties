import React from 'react';
import "./style.css"


import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import { RatingBox } from "../../Components/Tools"

export default function PostReview({ navItem, setNavItem }) {
  return (
    <>
      <NavBar navItem={navItem} setNavItem={setNavItem} />
      <div className="postReviewPage">
        <div className="reviewPageBox">
          <p className="reviewPHeader">Post your Review</p>
          <p className="reviewPSubHeader">Share your Experience for this property for Community</p>
          <div className="repRatBox">
            <div className="repRatColBox" style={{ width: "60%" }}>
              <div className="ratingItemRP">
                <p>Interior / Units</p>
                <RatingBox rating="4" height="30px" />
              </div>
              <div className="ratingItemRP">
                <p>Condo Facilities</p>
                <RatingBox rating="0" height="30px" />
              </div>
              <div className="ratingItemRP">
                <p>Nearby Amenities</p>
                <RatingBox rating="0" height="30px" />
              </div>

            </div>


            <div className="repRatColBox" style={{ width: "40%" }}>
              <div className="ratingItemRP">
                <p>Common Areas</p>
                <RatingBox rating="4" height="30px" />
              </div>
              <div className="ratingItemRP">
                <p>Transport Links</p>
                <RatingBox rating="0" height="30px" />
              </div>
              <div className="ratingItemRP">
                <p>Management</p>
                <RatingBox rating="0" height="30px" />
              </div>
            </div>

          </div>

        </div>

      </div>
      <Footer />
    </>


  )
}
