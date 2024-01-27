// import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { updateStep } from "../../store/reducers/stepsProgressReducer";
import { updatePeriodUnit, updatePlanType } from "../../store/reducers/formPlanReducer";

import plansPrices from "../../data/plansPrices.js";

import {ReactComponent as IconArcade} from "../../assets/icon-arcade.svg";
import {ReactComponent as IconAdvanced} from "../../assets/icon-advanced.svg";
import {ReactComponent as IconPro} from "../../assets/icon-pro.svg";

const SelectPlan = (isVisible) => {
  // const stepsProgress = useSelector((state) => state.stepsProgress);
  const formPlan = useSelector((state) => state.formPlan);
  const dispatch = useDispatch();

  const periodToggleHandler = (e) => {
    // Monthly = false | Yearly = true
    dispatch(
      updatePeriodUnit({
        step: "selectPlan",
        subscriptionPrice: plansPrices[formPlan.subscriptionType?.toLowerCase()][e.target.checked ? "Yearly" : "Monthly"],
        subscriptionRenewalIntervalUnit: e.target.checked ? "Yearly" : "Monthly",
      })
    );
  };

  const arcadePlanHandler = () => {
    dispatch(
      updatePlanType({
        step: "selectPlan",
        subscriptionType: "Arcade",
        subscriptionPrice:
          plansPrices["arcade"][
            formPlan.subscriptionRenewalIntervalUnit === ""
              ? "Monthly"
              : formPlan.subscriptionRenewalIntervalUnit
          ],
      })
    );
  };

  const advancedPlanHandler = () => {
    dispatch(
      updatePlanType({
        step: "selectPlan",
        subscriptionType: "Advanced",
        subscriptionPrice:
          plansPrices["advanced"][
            formPlan.subscriptionRenewalIntervalUnit === ""
              ? "Monthly"
              : formPlan.subscriptionRenewalIntervalUnit
          ],
      })
    );
  };

  const proPlanHandler = () => {
    dispatch(
      updatePlanType({
        step: "selectPlan",
        subscriptionType: "Pro",
        subscriptionPrice:
          plansPrices["pro"][
            formPlan.subscriptionRenewalIntervalUnit === ""
              ? "Monthly"
              : formPlan.subscriptionRenewalIntervalUnit
          ],
      })
    );
  };

  const checkIfBillingPeriod = () => {
    if (formPlan.subscriptionRenewalIntervalUnit === "Yearly") {
      return true;
    } else {
      return false;
    }
  };

  const goBackHandler = () => {
    dispatch(
      updateStep({
        step: "userInfo",
        value: false,
      })
    );
  };

  const submitHandler = () => {
    dispatch(
      updateStep({
        step: "selectPlan",
        value: true,
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
            You have the option of Monthly or Yearly billing.
          </p>
        </div>

        <div className="form_container__select">
          <div className="form_container__select__options">

            <div className={"form_container__select__options__card " + (formPlan.subscriptionType === "Arcade" ? "selected" : "")} id="arcade_plan" onClick={arcadePlanHandler}>
              <div className="form_container__select__options__card__icon">
                <IconArcade />
              </div>
              <div className="form_container__select__options__card__text">
                <div className="form_container__select__options__card__text__title">
                  Arcade
                </div>
                <div className="form_container__select__options__card__text__price">
                  ${plansPrices.arcade[formPlan.subscriptionRenewalIntervalUnit === "" ? "Monthly" : formPlan.subscriptionRenewalIntervalUnit]}
                  /
                  {formPlan.subscriptionRenewalIntervalUnit === "Yearly" ? "yr" : "mo"}
                </div>
                <div className={"form_container__select__options__card__text__period " + (formPlan.subscriptionRenewalIntervalUnit === "Yearly" ? "" : "hide")}>
                  2 months free
                </div>
              </div>
            </div>

            <div className={"form_container__select__options__card " + (formPlan.subscriptionType === "Advanced" ? "selected" : "")} id="advanced_plan" onClick={advancedPlanHandler}>
              <div className="form_container__select__options__card__icon">
                <IconAdvanced />
              </div>
              <div className="form_container__select__options__card__text">
                <div className="form_container__select__options__card__text__title">
                  Advanced
                </div>
                <div className="form_container__select__options__card__text__price">
                  ${plansPrices.advanced[formPlan.subscriptionRenewalIntervalUnit === "" ? "Monthly" : formPlan.subscriptionRenewalIntervalUnit]}
                  /
                  {formPlan.subscriptionRenewalIntervalUnit === "Yearly" ? "yr" : "mo"}
                </div>
                <div className={"form_container__select__options__card__text__period " + (formPlan.subscriptionRenewalIntervalUnit === "Yearly" ? "" : "hide")}>
                  2 months free
                </div>
              </div>
            </div>

            <div className={"form_container__select__options__card " + (formPlan.subscriptionType === "Pro" ? "selected" : "")} id="pro_plan" onClick={proPlanHandler}>
              <div className="form_container__select__options__card__icon">
                <IconPro />
              </div>
              <div className="form_container__select__options__card__text">
                <div className="form_container__select__options__card__text__title">
                  Pro
                </div>
                <div className="form_container__select__options__card__text__price">
                  ${plansPrices.pro[formPlan.subscriptionRenewalIntervalUnit === "" ? "Monthly" : formPlan.subscriptionRenewalIntervalUnit]}
                  /
                  {formPlan.subscriptionRenewalIntervalUnit === "Yearly" ? "yr" : "mo"}
                </div>
                <div className={"form_container__select__options__card__text__period " + (formPlan.subscriptionRenewalIntervalUnit === "Yearly" ? "" : "hide")}>
                  2 months free
                </div>
              </div>
            </div>
          </div>

          <div className="form_container__select__period">
            <div className={"form_container__select__period__switch " + (formPlan.subscriptionRenewalIntervalUnit === "Yearly" ? "" : "selected")}>
              Monthly
            </div>
            <div className="form_container__select__period__toggle-view">
              <input type="checkbox" id="switch" onClick={periodToggleHandler} defaultChecked={checkIfBillingPeriod()}/>
              <label htmlFor="switch">Toggle</label>
            </div>
            <div className={"form_container__select__period__switch " + (formPlan.subscriptionRenewalIntervalUnit === "Yearly" ? "selected" : "")}>
              Yearly
            </div>
          </div>
        </div>

        <div className="form_container__back-next_container">
          <button type="" className="back" onClick={goBackHandler}>
            Go back
          </button>
          <button type="submit" className="next" onClick={submitHandler}>
            Next Step
          </button>
        </div>
      </div>
    </>
  );
};

export default SelectPlan;
