import React from "react";
import Header from "../sharedComponents/Header";
import Sidebar from "../sharedComponents/Sidebar";

const Campaign = () => {
  return (
    <>
      <div className="main_container">
        <div className="side_bar_container">
          <Sidebar />
        </div>
        <div className="content_container">
          <Header />
          <div className="content_background">
            <h4>Welcome To Campaigns, Campaigns will be ready Later</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Campaign;
