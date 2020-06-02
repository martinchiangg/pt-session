import React from "react";

import "./homepage.styles.scss";

const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">PT sessions</h1>
          <span className="subtitle">Schedule NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Nutrition sessions</h1>
          <span className="subtitle">Schedule NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Metabolic sessions</h1>
          <span className="subtitle">Schedule NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Assessments</h1>
          <span className="subtitle">Schedule NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Pilates sessions</h1>
          <span className="subtitle">Schedule NOW</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
