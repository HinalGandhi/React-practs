import * as React from "react";
import recordSlice from "../records/recordSlice";
import "./UserProfileCard.css";

function UserProfileCard(props: any): JSX.Element {
  return (
    <>
      {props.user !== null && (
        <div className="userProfileCard">
          <img
            src={props.user.avatar}
            alt="user_avatar"
          />
          <p className="cardUserName p-0 m-0">
            {props.user.first_name} {props.user.last_name}
            <span className="userDot">&#729;</span>
          </p>
          <p className="cardUserEmail m-0">{props.user.email}</p>
          <p className="cardUserPlan m-0">Your Plan: Standard</p>
          <button>Active User</button>
          <label className="cardUserPlanUsage p-0 mb-0">Plan Uses</label>
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
      )}
    </>
  );
}

export default UserProfileCard;
