import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import googleLogo from "../images/google_logo.svg";
import microsoftLogo from "../images/microsoft_logo.svg";
import { ErrorMessage } from "@hookform/error-message";
import "./components-styles/styles-login-page.scss";
import CustomCheckbox from "./custom-checkbox";
import invalidHandler from "./utils/invalid-handler";

const LoginPage = () => {
  const [checked, setChecked] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    formState,
    reset,
    control,
    setValue
  } = useForm();

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ keepIsSubmitted: false });
      setChecked(false);
    }
    invalidHandler(formState);
  }, [isSubmitSuccessful, reset, formState]);
  return (
    <div id="login-page">
      <div className="container">
        <h1>Log in</h1>
        <div className="h-centered">
          <p>Don't have an account?</p>
          <div className="button button--custom">Sign up</div>
        </div>
        <div className="button button--custom-bordered">
          <img src={googleLogo} alt="google logo" />
          Continue with Google
        </div>
        <div className="button button--custom-bordered">
          <img src={microsoftLogo} alt="microsoft logo" />
          Continue with Microsoft
        </div>
        <div className="divider">
          <div className="strike"></div> or <div className="strike"></div>
        </div>
        <form onSubmit={handleSubmit(() => {})}>
          <div className="form-group">
            <input
              id="email"
              className="input-field"
              placeholder="Email"
              name="email"
              {...register("email", {
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Not valid e-mail"
                }
              })}
            />
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => <p>{message}</p>}
            />
          </div>
          <div className="form-group">
            <input
              id="password"
              className="input-field"
              type="password"
              placeholder="Password"
              name="password"
              {...register("password", {
                required: {
                  value: true,
                  message: "The password is required"
                }
              })}
            />
            <ErrorMessage
              errors={errors}
              name="password"
              render={({ message }) => <p>{message}</p>}
            />
          </div>
          <div className="h-centered">
            <div className="button button--custom">Forgot password?</div>
          </div>
          <div>
            <Controller
              name="remember"
              defaultValue={false}
              control={control}
              render={() => (
                <CustomCheckbox
                  setValue={setValue}
                  checked={checked}
                  setChecked={setChecked}
                />
              )}
            />
          </div>
          <button type="submit">Continue</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
