import React from "react";
import "../css/UserProfile.css"

const UserProfile = ({ pen }) => {
  return (
    <div className="header">
      <div className="user-info">
        <img
          className="profile"
          src="data:image/png;base64,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"
          alt="Profile"
        />
        <div className="user-details">
          <p>Jimmy Sullivan</p>
        </div>
        <img className="pen" src={pen} alt="" />
      </div>
    </div>
  );
};

export default UserProfile;
