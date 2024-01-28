// import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { updateStep } from "../../store/reducers/stepsProgressReducer";
import { addAddon, removeAddon } from "../../store/reducers/formAddonsReducer";

import addonsData from "../../data/addonsData.json";
import { useEffect } from "react";

const Addons = (isVisible) => {  
  const formAddons = useSelector((state) => state.formAddons);
  const formPlan = useSelector((state) => state.formPlan);
  const addonsList = Object.keys(addonsData);
  const dispatch = useDispatch();

  const addAddonHandler = (e) => {
    const addonName = e.target.attributes.name.value;

    if (e.target.checked) {
        dispatch(
            addAddon({
                addonName: addonName,
                addonPrice: addonsData[addonName.toLowerCase().replace(" ", "")][formPlan.subscriptionRenewalIntervalUnit],
                addonRenewalInterval: formPlan.subscriptionRenewalIntervalUnit,
            })
        );
    } else {
        dispatch(
            removeAddon({
                addonName: addonName,
            })
        );
    }
  };

  const checkIfAddonIsInForm = (addonName) => {
    if (formAddons.map((key) => key.addonName).includes(addonName)) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    if (formAddons.length > 0) {
      if (formAddons[0].addonRenewalInterval !== formPlan.subscriptionRenewalIntervalUnit) {
        formAddons.forEach((addon) => {
          dispatch(
            removeAddon({
              addonName: addon.addonName,
            })
          );
        });
      }
    }
  }, [formPlan, dispatch, formAddons]);

  const goBackHandler = () => {
    dispatch(
      updateStep({
        step: "selectPlan",
        value: false,
      })
    );
  };

  const submitHandler = () => {
    dispatch(
      updateStep({
        step: "selectAddons",
        value: true,
      })
    );
  };

  if (!isVisible.isVisible) {
    return null;
  }

  return (
    <div className="form_container">
      <div className="form_container__header">
        <h1 className="form_container__header__title">Pick add-ons</h1>
        <p className="form_container__header__description">
          Add-ons help enhance your gaming experience.
        </p>
      </div>
      <div className="form_container__form">
        <div className="form_container__form__addon-list">

          {addonsList.map((addon, i) => {
            return (
              <div key={i} className="form_container__form__addon-list__addon">
                <div className="form_container__form__addon-list__addon__checkbox">
                  <input
                    type="checkbox"
                    id={addonsData[addon].title.toLowerCase().replace(" ", "_") + "-input"}
                    name={addonsData[addon].title}
                    className="form_container__form__addon-list__addon__checkbox__input"
                    onClick={addAddonHandler}
                    defaultChecked={checkIfAddonIsInForm(addonsData[addon].title)}
                  />
                  <label htmlFor={addonsData[addon].title.toLowerCase().replace(" ", "_") + "-input"}></label>
                </div>
                <div className="form_container__form__addon-list__addon__description">
                  <div className="form_container__form__addon-list__addon__description__text">
                    <span className="form_container__form__addon-list__addon__description__text__title">
                      {addonsData[addon].title}
                    </span>
                    <span className="form_container__form__addon-list__addon__description__text__description">
                      {addonsData[addon].description}
                    </span>
                  </div>
                  <div className="form_container__form__addon-list__addon__description__price">
                    +${addonsData[addon][formPlan.subscriptionRenewalIntervalUnit]}/{formPlan.subscriptionRenewalIntervalUnit === "Monthly" ? "mo" : "yr"}
                  </div>
                </div>
              </div>
            );
          })}

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
  );
};

export default Addons;
