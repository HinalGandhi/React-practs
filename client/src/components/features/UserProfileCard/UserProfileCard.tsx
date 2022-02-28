import * as React from "react";
import recordSlice from "../records/recordSlice";
import "./UserProfileCard.css";

function UserProfileCard(): JSX.Element {
  return (
    <>
      <div className="userProfileCard">
        <img src={"https://reqres.in/img/faces/7-image.jpg"} alt="user_avatar" />
        <p className="cardUserName">
          {"Jana Strassman"}
          <span className="userDot">&#729;</span>
        </p>
        <p className="cardUserEmail">{"Jana Strassman"}</p>
        <p className="cardUserPlan">Your Plan: Standard</p>
        <button>Active User</button>
        <label className="cardUserPlanUsage">Plan Uses</label>
        <div className="totalPlanUsage">
          <div className="currentPlanUsage"></div>
        </div>
        <div className="clicksNumWrapper">
          <div className="clicksReviewed">
            <div className="clicksNum1">2,450</div>
            <div className="clicksNumText1">clicks reviewed</div>
          </div>
          <div className="clicksVerticleLine"></div>
          <div className="monthlyClicks">
            <div className="clicksNum2">5000</div>
            <div className="clicksNumText2">Monthly clicks</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfileCard;
