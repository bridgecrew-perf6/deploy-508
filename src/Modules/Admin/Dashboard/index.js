import React from "react";
import UserInfor from "./UserInfo/UserInfor";

export default function AdminDashboard({setToken}) {
  return (
    <div className="adminDashboard">
      <UserInfor tag="Admin in Ecopark BikeRenting" setToken={setToken} ></UserInfor>
    </div>
  )
}
