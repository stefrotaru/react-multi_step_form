// import React from 'react';
import { useDispatch } from "react-redux";
import { updateStep } from "../../store/reducers/stepsProgressReducer";

const SelectPlan = (isVisible) => {
  console.log("from selectPlan component: ", isVisible.isVisible);
  const dispatch = useDispatch();

  const goBackHandler = () => {
    dispatch(
      updateStep({
        step: "userInfo",
        value: false,
      })
    );
  };

  if (!isVisible.isVisible) {
    return null;
  }

  return (
    <>
      <div className="form_container">
        <div className="form_container__header">
          <h1 className="form_container__header__title">Select your plan</h1>
          <p className="form_container__header__description">
            You have the option of monthly or yearly billing.
          </p>
        </div>

        <div className="form_container__select">
          <div className="form_container__select__options">
            <div className="form_container__select__options__card">Arcade</div>
            <div className="form_container__select__options__card">
              Advanced
            </div>
            <div className="form_container__select__options__card">Pro</div>
          </div>

          <div className="form_container__select__period">
            <div className="form_container__select__period__switch">
              Monthly
            </div>
            <div className="form_container__select__period__toggle-view">
              -----
            </div>
            <div className="form_container__select__period__switch">Yearly</div>
          </div>

          <div className="form_container__select__submit_container">
            <button type="" className="back" onClick={goBackHandler}>
              Go back
            </button>
            <button type="submit" className="next">
              Next Step
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectPlan;
