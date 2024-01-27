// import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { restartSteps } from "../../store/reducers/stepsProgressReducer";
import { restartAddonsArray } from "../../store/reducers/formAddonsReducer";
import { restartFormUser } from "../../store/reducers/formUserReducer";
import { restartFormPlan } from "../../store/reducers/formPlanReducer";
import { restartTotalPrice } from "../../store/reducers/formTotalPriceReducer";

import { ReactComponent as Checkmark } from "../../assets/icon-thank-you.svg";

const ThankYou = (isVisible) => {
  const stepsProgress = useSelector((state) => state.stepsProgress);
  const dispatch = useDispatch();

  useEffect(() => {
    if (stepsProgress.summary) {
        setTimeout(() => {
            document.querySelector(".form_container__restart-btn").classList.add("show");
        }, 2000);
    }
  }, [stepsProgress]);

  const restartHandler = () => {
    dispatch(
      restartSteps(),
    );
    dispatch(
      restartAddonsArray(),
    );
    dispatch(
      restartFormUser(),
    );
    dispatch(
      restartFormPlan(),
    );
    dispatch(
      restartTotalPrice(),
    );
  };

  if (!isVisible.isVisible) {
    return null;
  }

  return (
    <div className="form_container">
      <div className="form_container__thank-you">
        <Checkmark />
        <h1>Thank You!</h1>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
      
      <div className="form_container__restart-btn">
        <button className="restart" onClick={restartHandler}>Restart</button>
      </div>
    </div>
  );
};

export default ThankYou;
