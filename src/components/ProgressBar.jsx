// import React from 'react';
import { useSelector } from "react-redux";

const ProgressBar = () => {
  const stepsProgress = useSelector((state) => state.stepsProgress);

  return (
    <div className="progress-bar">
      <div
        className={
          "progress-bar__step " + (!stepsProgress.userInfo ? "active" : "")
        }
      >
        <span className="progress-bar__step__number">1</span>
        <div className="progress-bar__step__text">
          <span className="progress-bar__step__text__title">Step 1</span>
          <span className="progress-bar__step__text__description">
            Your info
          </span>
        </div>
      </div>
      <div
        className={
          "progress-bar__step " +
          (stepsProgress.userInfo && !stepsProgress.selectPlan ? "active" : "")
        }
      >
        <span className="progress-bar__step__number">2</span>
        <div className="progress-bar__step__text">
          <span className="progress-bar__step__text__title">Step 2</span>
          <span className="progress-bar__step__text__description">
            Select plan
          </span>
        </div>
      </div>
      <div
        className={
          "progress-bar__step " +
          (stepsProgress.selectPlan && !stepsProgress.selectAddons ? "active" : "")
        }
      >
        <span className="progress-bar__step__number">3</span>
        <div className="progress-bar__step__text">
          <span className="progress-bar__step__text__title">Step 3</span>
          <span className="progress-bar__step__text__description">Add-ons</span>
        </div>
      </div>
      <div
        className={
          "progress-bar__step " +
          (stepsProgress.selectAddons && !stepsProgress.summary ? "active" : "")
        }
      >
        <span className="progress-bar__step__number">4</span>
        <div className="progress-bar__step__text">
          <span className="progress-bar__step__text__title">Step 4</span>
          <span className="progress-bar__step__text__description">Summary</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
