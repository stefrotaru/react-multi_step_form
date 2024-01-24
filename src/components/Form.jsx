// import React from 'react';
import UserInfo from "./form_components/UserInfo";
import SelectPlan from "./form_components/SelectPlan";
import { useSelector } from "react-redux";

const Form = () => {
  const stepsProgress = useSelector((state) => state.stepsProgress);

  return (
    <>
      <UserInfo isVisible={!stepsProgress.userInfo} />
      <SelectPlan isVisible={stepsProgress.userInfo} />
    </>
  );
};

export default Form;
