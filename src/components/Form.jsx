// import React from 'react';
import UserInfo from "./form_components/UserInfo";
import SelectPlan from "./form_components/SelectPlan";
import Addons from "./form_components/Addons";
import Summary from "./form_components/Summary";
import ThankYou from "./form_components/ThankYou";

import { useSelector } from "react-redux";

const Form = () => {
  const stepsProgress = useSelector((state) => state.stepsProgress);

  return (
    <>
      <UserInfo isVisible={!stepsProgress.userInfo} />
      <SelectPlan isVisible={stepsProgress.userInfo && !stepsProgress.selectPlan} />
      <Addons isVisible={stepsProgress.selectPlan && !stepsProgress.selectAddons} />
      <Summary isVisible={stepsProgress.selectAddons && !stepsProgress.summary} />
      <ThankYou isVisible={stepsProgress.summary} />
    </>
  );
};

export default Form;
