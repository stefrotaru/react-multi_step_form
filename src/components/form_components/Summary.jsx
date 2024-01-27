// import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { updateStep } from "../../store/reducers/stepsProgressReducer"; 
import { setPrice } from "../../store/reducers/formTotalPriceReducer";
import { useEffect } from "react";

const Summary = (isVisible) => {
  const stepsProgress = useSelector((state) => state.stepsProgress);
  const formPlan = useSelector((state) => state.formPlan);
  const formAddons = useSelector((state) => state.formAddons);
  const totalPrice = useSelector((state) => state.formTotalPrice.totalPrice);
  const addonsList = [];
  const dispatch = useDispatch();

  formAddons.forEach((addon) => {
    addonsList.push(addon.addonName);
  });

  useEffect(() => {
    if (stepsProgress.userInfo && stepsProgress.selectPlan && stepsProgress.selectAddons) {
      const total = formPlan.subscriptionPrice + formAddons.reduce((a, b) => a + b.addonPrice, 0);
    
      dispatch(
        setPrice(total),
      );
    }

  }, [stepsProgress, formAddons, formPlan, dispatch]);

  const changePlanHandler = () => {
    dispatch(
      updateStep({
        step: "selectAddons",
        value: false,
      }),
    );
    dispatch(
      updateStep({
        step: "selectPlan",
        value: false,
      }),
    );

  };

  const goBackHandler = () => {
    dispatch(
      updateStep({
        step: "selectAddons",
        value: false,
      })
    );
  };

  const submitHandler = () => {
    dispatch(
      updateStep({
        step: "summary",
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
        <h1 className="form_container__header__title">Finishing up</h1>
        <p className="form_container__header__description">
          Double-check everything looks OK before confirming.
        </p>
      </div>

      <div className="form_container__summary">
        <div className="form_container__summary__box">
          <div className="form_container__summary__box__content">

            <div className="form_container__summary__box__content__title">
              <div className="form_container__summary__box__content__title__option-display">
                <div>
                  {formPlan.subscriptionType}
                  <span>{" (" + formPlan.subscriptionRenewalIntervalUnit + ")"}</span>
                </div>
                <button onClick={changePlanHandler}>
                  Change
                </button>
              </div>

              <div className="form_container__summary__box__content__title__price-display">
               ${formPlan.subscriptionPrice}/{formPlan.subscriptionRenewalIntervalUnit === 'Yearly' ? 'yr' : 'mo'}
              </div>
            </div>


            { formAddons.length > 0 && (
              <>
                <hr />
                {addonsList.map((addon, i) => (
                  <div key={addon} className="form_container__summary__box__content__addon">
                    <div className="form_container__summary__box__content__addon__title">
                      {addon}
                    </div>
                    <div className="form_container__summary__box__content__addon__price">
                      +${formAddons[i].addonPrice}/{formPlan.subscriptionRenewalIntervalUnit === 'Yearly' ? 'yr' : 'mo'}
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>

          <div className="form_container__summary__total">
            <div className="form_container__summary__total__title">
              Total {formPlan.subscriptionRenewalIntervalUnit === 'Yearly' ? '(per year)' : '(per month)'} 
            </div>
            <div className="form_container__summary__total__price">
            ${totalPrice}/{formPlan.subscriptionRenewalIntervalUnit === 'Yearly' ? 'yr' : 'mo'}
            </div>
          </div>
        
      </div>

      <div className="form_container__back-next_container">
        <button type="" className="back" onClick={goBackHandler}>
          Go back
        </button>
        <button type="submit" className="confirm" onClick={submitHandler}>
          Confirm
        </button>
      </div>

    </div>
  );
};

export default Summary;
