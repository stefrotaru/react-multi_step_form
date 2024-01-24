// import React from 'react';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateFormUser } from "../../store/reducers/formUserReducer";
import { updateStep } from "../../store/reducers/stepsProgressReducer";

const UserInfo = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhoneNum, setUserPhoneNum] = useState("");
  const [fieldErrors, setFieldErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const dispatch = useDispatch();

  const nameInputHandler = (e) => {
    setUserName(e.target.value);
  };
  const emailInputHandler = (e) => {
    setUserEmail(e.target.value);
  };
  const phoneNumInputHandler = (e) => {
    setUserPhoneNum(e.target.value);
  };

  // Validation
  const checkNameInput = (e) => {
    if (userName.length < 3) {
      e.target.classList.add("error");

      setFieldErrors({ ...fieldErrors, name: "Name must be at least 3 characters long" });
    } else {
      e.target.classList.remove("error");
      e.target.classList.add("valid");

      setFieldErrors({ ...fieldErrors, name: "" });
    }
  };
  const checkEmailInput = (e) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userEmail)) {
      e.target.classList.add("error");

      setFieldErrors({ ...fieldErrors, email: "Invalid email format" });
    } else {
      e.target.classList.remove("error");
      e.target.classList.add("valid");

      setFieldErrors({ ...fieldErrors, email: "" });
    }
  };
  const checkPhoneNumInput = (e) => {
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(userPhoneNum)) {
      e.target.classList.add("error");

      setFieldErrors({ ...fieldErrors, phone: "Invalid phone number format" });
    } else {
      e.target.classList.remove("error");
      e.target.classList.add("valid");

      setFieldErrors({ ...fieldErrors, phone: "" });

      return true;
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log("Fields valid? ", fieldErrors);

    if (
      (fieldErrors.name === '' && userName !== '') && 
      (fieldErrors.email === '' && userEmail !== '') &&
      (fieldErrors.phone === '' && userPhoneNum !== '') 
      ) {
      dispatch(
        updateFormUser({
          name: userName,
          email: userEmail,
          phone: userPhoneNum,
        })
      );
      dispatch(updateStep({
        step: "userInfo",
        value: true,
      }));
    } 
    else {
      if (!fieldErrors.name && userName === '') {
        document.querySelector("#user_name").classList.add("error");
        // setFieldErrors({ ...fieldErrors, name: "Name must be at least 3 characters long" });
      }
      if (!fieldErrors.email && userEmail === '') {
        document.querySelector("#user_email").classList.add("error");
        // setFieldErrors({ ...fieldErrors, email: "Invalid email format" });
      }
      if (!fieldErrors.phone && userPhoneNum === '') {
        document.querySelector("#user_phone").classList.add("error");
        // setFieldErrors({ ...fieldErrors, phone: "Invalid phone number format" });
      }
    }
  };

  return (
    <>
      <form className="user-form">
        <div className="user-form__input_container">
          <div className="user-form__input_container__label">
            <label htmlFor="name">Name</label>
            {fieldErrors.name && <span className="error">{fieldErrors.name}</span>}
          </div>
          <input
            type="text"
            name="name"
            placeholder="e.g. Stephen King"
            autoComplete="name"
            value={userName}
            onChange={nameInputHandler}
            onBlur={checkNameInput}
            className=""
            id="user_name"
          />
        </div>

        <div className="user-form__input_container">
          <div className="user-form__input_container__label">
            <label htmlFor="email">Email Address</label>
            {fieldErrors.email && <span className="error">{fieldErrors.email}</span>}
          </div>
          <input
            type="email"
            name="email"
            placeholder="e.g. stephenking@lorem.com"
            autoComplete="email"
            value={userEmail}
            onChange={emailInputHandler}
            onBlur={checkEmailInput}
            className=""
            id="user_email"
          />
        </div>

        <div className="user-form__input_container">
          <div className="user-form__input_container__label">
            <label htmlFor="phone">Phone Number</label>
            {fieldErrors.phone && <span className="error">{fieldErrors.phone}</span>}
          </div>
          <input
            type="phone"
            name="phone"
            placeholder="e.g +1 234 567 890"
            autoComplete="phone"
            value={userPhoneNum}
            onChange={phoneNumInputHandler}
            onBlur={checkPhoneNumInput}
            className=""
            id="user_phone"
          />
        </div>
        <button type="submit" onClick={submitHandler}>
          Next Step
        </button>
      </form>
    </>
  );
};

export default UserInfo;
