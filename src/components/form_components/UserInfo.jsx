// import React from 'react';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateFormUser } from "../../store/reducers/formUserReducer";
import { updateStep } from "../../store/reducers/stepsProgressReducer";

const UserInfo = (isVisible) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhoneNum, setUserPhoneNum] = useState("");
  const [fieldErrors, setFieldErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    // handles form autofill
    if (userName.length > 3 && userEmail.length > 0 && userPhoneNum.length === 10) {
      setFieldErrors({ name: "", email: "", phone: "" });
    }
  }, [userName, userEmail, userPhoneNum]);

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

      setFieldErrors({...fieldErrors, name: "This field is required"});
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

      setFieldErrors({ ...fieldErrors, email: "This field is required" });
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

      setFieldErrors({ ...fieldErrors, phone: "This field is required" });
    } else {
      e.target.classList.remove("error");
      e.target.classList.add("valid");

      setFieldErrors({ ...fieldErrors, phone: "" });

      return true;
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (
      fieldErrors.name === "" &&
      userName !== "" &&
      fieldErrors.email === "" &&
      userEmail !== "" &&
      fieldErrors.phone === "" &&
      userPhoneNum !== ""
    ) {
      dispatch(
        updateFormUser({
          name: userName,
          email: userEmail,
          phone: userPhoneNum,
        })
      );
      dispatch(
        updateStep({
          step: "userInfo",
          value: true,
        })
      );
    } else {
      if (fieldErrors.name === "" &&
          userName === "" &&
          fieldErrors.email === "" &&
          userEmail === "" &&
          fieldErrors.phone === "" &&
          userPhoneNum === "") {
        setFieldErrors({name: "This field is required", email: "This field is required", phone: "This field is required"});
        document.querySelector("#user_name").classList.add("error");
        document.querySelector("#user_email").classList.add("error");
        document.querySelector("#user_phone").classList.add("error");
        return;
      }
      if (fieldErrors.email === "" &&
          userEmail === "" &&
          fieldErrors.phone === "" &&
          userPhoneNum === "") {
        setFieldErrors({name: fieldErrors.name, email: "This field is required", phone: "This field is required"});
        document.querySelector("#user_email").classList.add("error");
        document.querySelector("#user_phone").classList.add("error");
        return;
      }
      if (fieldErrors.name === "" &&
          userName === "" &&
          fieldErrors.email === "" &&
          userEmail === "") {
        setFieldErrors({name: "This field is required", email: "This field is required", phone: fieldErrors.phone});
        document.querySelector("#user_name").classList.add("error");
        document.querySelector("#user_email").classList.add("error");
        return;
      }
      if (fieldErrors.name === "" &&
          userName === "" &&
          fieldErrors.phone === "" &&
          userPhoneNum === "") {
        setFieldErrors({name: "This field is required", email: fieldErrors.email, phone: "This field is required"});
        document.querySelector("#user_name").classList.add("error");
        document.querySelector("#user_phone").classList.add("error");
        return;
      }
      if (!fieldErrors.name && userName === "") {
        setFieldErrors({ name: "This field is required", email: fieldErrors.email, phone: fieldErrors.phone});
        document.querySelector("#user_name").classList.add("error");
      }
      if (!fieldErrors.email && userEmail === "") {
        setFieldErrors({ name: fieldErrors.name , email: "This field is required", phone: fieldErrors.phone });
        document.querySelector("#user_email").classList.add("error");
      }
      if (!fieldErrors.phone && userPhoneNum === "") {
        setFieldErrors({ name: fieldErrors.name, email: fieldErrors.email , phone: "This field is required" });
        document.querySelector("#user_phone").classList.add("error");
      }
    }
  };

  if (!isVisible.isVisible) {
    return null;
  }

  return (
    <>
      <div className="form_container">
        <div className="form_container__header">
          <h1 className="form_container__header__title">Personal info</h1>
          <p className="form_container__header__description">
            Please provide your name, email address, and phone number.
          </p>
        </div>

        <form className="form_container__form">
          <div className="form_container__form-input">
            <div className="form_container__form-input__group">
              <div className="form_container__form-input__group__label">
                <label htmlFor="name">Name</label>
                {fieldErrors.name && (
                  <span className="error">{fieldErrors.name}</span>
                )}
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

            <div className="form_container__form-input__group">
              <div className="form_container__form-input__group__label">
                <label htmlFor="email">Email Address</label>
                {fieldErrors.email && (
                  <span className="error">{fieldErrors.email}</span>
                )}
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

            <div className="form_container__form-input__group">
              <div className="form_container__form-input__group__label">
                <label htmlFor="phone">Phone Number</label>
                {fieldErrors.phone && (
                  <span className="error">{fieldErrors.phone}</span>
                )}
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
          </div>

          <div className="form_container__form__submit_container">
            <button type="submit" onClick={submitHandler}>
              Next Step
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserInfo;
