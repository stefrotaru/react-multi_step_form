// import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { updateStep } from "../../store/reducers/stepsProgressReducer";
import { addAddon, removeAddon } from "../../store/reducers/formAddonsReducer";

import addonsJSON from "../../data/addonsPrices.json";

const Addons = (isVisible) => {  
  const formAddons = useSelector((state) => state.formAddons);
  const formPlan = useSelector((state) => state.formPlan);
  const addonsList = Object.keys(addonsJSON);
  const dispatch = useDispatch();

  const addAddonHandler = (e) => {
    const addonName = e.target.attributes.name.value;

    if (e.target.checked) {
        dispatch(
            addAddon({
                addonName: addonName,
                addonPrice: addonsJSON[addonName.toLowerCase().replace(" ", "")][formPlan.subscriptionRenewalIntervalUnit],
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
                    id={addonsJSON[addon].title.toLowerCase().replace(" ", "_") + "-input"}
                    name={addonsJSON[addon].title}
                    className="form_container__form__addon-list__addon__checkbox__input"
                    onClick={addAddonHandler}
                    defaultChecked={checkIfAddonIsInForm(addonsJSON[addon].title)}
                  />
                  <label htmlFor={addonsJSON[addon].title.toLowerCase().replace(" ", "_") + "-input"}></label>
                </div>
                <div className="form_container__form__addon-list__addon__description">
                  <div className="form_container__form__addon-list__addon__description__text">
                    <span className="form_container__form__addon-list__addon__description__text__title">
                      {addonsJSON[addon].title}
                    </span>
                    <span className="form_container__form__addon-list__addon__description__text__description">
                      {addonsJSON[addon].description}
                    </span>
                  </div>
                  <div className="form_container__form__addon-list__addon__description__price">
                    +${addonsJSON[addon][formPlan.subscriptionRenewalIntervalUnit]}/{formPlan.subscriptionRenewalIntervalUnit === "Monthly" ? "mo" : "yr"}
                  </div>
                </div>
              </div>
            );
          })}

        </div>

        <div className="form_container__select__submit_container">
          <button type="" className="back" onClick={goBackHandler}>
            Go back
          </button>
          <button type="submit" className="next" onClick={submitHandler}>
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default Addons;
