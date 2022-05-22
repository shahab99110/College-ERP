import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Tilt from "react-tilt";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { facultyLogin } from "../redux/action/facultyAction";
import { studentLogin } from "../redux/action/studentAction";
// import classnames from 'classnames';

import Img from "../assets/images/img-01.png";
const Form = () => {
  const store = useSelector(state => state);
  const dispatch = useDispatch();
  // const [facultyRegNum, setFacultyRegNum] = useState('');
  // const [facultyPassword, setFacultyPassword] = useState('');
  // const [studentRegNum, setStudentRegNum] = useState('');
  // const [studentPassword, setStudentPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [errorsHelper, setErrorsHelper] = useState({});
  // const [isFacultyLoading, setIsFacultyLoading] = useState(false);
  // const [isStudentLoading, setIsStudentLoading] = useState(false);

  const [userId, setUserId] = useState("");
  const [paSSword, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [userIdValid, setuserIdValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (store.admin.isAuthenticated) {
      setIsLoading(false);
      navigate("/admin");
    } else {
      setIsLoading(true);
    }
  }, [store.admin.isAuthenticated, navigate]);

  useEffect(() => {
    if (store.faculty.isAuthenticated) {
      setIsLoading(false);
      navigate("/faculty");
    } else {
      setIsLoading(true);
    }
  }, [store.faculty.isAuthenticated, navigate]);
  useEffect(() => {
    if (store.student.isAuthenticated) {
      setIsLoading(false);

      navigate("/student");
    } else {
      setIsLoading(true);
    }
  }, [store.student.isAuthenticated, navigate]);
  useEffect(() => {
    if (store.error) {
      setErrors(store.error);
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [store.error]);

  useEffect(() => {
    if (store.errorHelper) {
      setErrorsHelper(store.errorHelper);
    }
  }, [store.errorHelper]);

  const submitHandler = e => {
    e.preventDefault();
    setIsLoading(true);

    if (paSSword === "") {
      setPasswordValid(false);
      setIsLoading(false);

      console.log("first", passwordValid);
      if (userId.slice(0, 3) !== "STU" || userId.slice(0, 3) !== "FAC") {
        setuserIdValid(false);
      }
      if (userId.slice(0, 3) === "STU" || userId.slice(0, 3) === "FAC") {
        setuserIdValid(true);
      }
      return;
    }
    if (userId.slice(0, 3) === "STU" && passwordValid) {
      console.log("STU", userId, paSSword, passwordValid);
      dispatch(
        studentLogin({
          registrationNumber: userId,
          password: paSSword,
        })
      );
    }
    if (userId.slice(0, 3) === "FAC" && passwordValid) {
      console.log("FAC", userId, paSSword, passwordValid);
      dispatch(
        facultyLogin({
          registrationNumber: userId,
          password: paSSword,
        })
      );
    } else {
      console.log("No way man");
      setuserIdValid(false);
      setIsLoading(false);
    }
  };

  return (
    <FormCont className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <div className="login100-pic">
            <Tilt
              className="Tilt"
              options={{
                max: 35,
                transition: true,
                perspective: 400,
                scale: 1.1,
                speed: 900,
                easing: "cubic-bezier(.03,.28,.52,.99)",
              }}>
              <img className="Tilt-inner" src={Img} alt="IMG" />
            </Tilt>
          </div>

          <form
            className="login100-form validate-form"
            onSubmit={submitHandler}>
            <span className="login100-form-title">Faculty/Student Login</span>
            <div
              className="text-center p-t-12"
              style={{ marginBottom: "54px" }}>
              <span className="txt1">Click Here to</span>
              <Link to="/adminLogin" className="txt2">
                Login as Admin
              </Link>
            </div>
            <div
              className={
                userIdValid
                  ? "wrap-input100 validate-input"
                  : "wrap-input100 validate-input alert-validate"
              }
              onFocus={e => setuserIdValid(true)}
              data-validate="Valid ID is required: STU../FAC..">
              <input
                className="input100"
                type="text"
                placeholder="User ID"
                value={userId}
                onChange={e => setUserId(e.target.value)}
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </span>
            </div>

            <div
              className={
                passwordValid
                  ? "wrap-input100 validate-input"
                  : "wrap-input100 validate-input alert-validate"
              }
              onFocus={e => setPasswordValid(true)}
              data-validate="Password is required">
              <input
                className="input100"
                type="password"
                value={paSSword}
                onChange={e => setPassword(e.target.value)}
                placeholder="Password"
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true"></i>
              </span>
            </div>

            <div className="container-login100-form-btn">
              <>
                {isLoading && (
                  <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                )}
              </>
              {!isLoading && (
                <button className="login100-form-btn">Login</button>
              )}
            </div>

            <div className="text-center p-t-12">
              <span className="txt1">Forgot</span>
              <a className="txt2" href="/forgotPassword/faculty">
                Username / Password?
              </a>
            </div>

            {/* <div className='text-center p-t-136'>
              <a className='txt2' href='/'>
                Create your Account
                <i
                  className='fa fa-long-arrow-right m-l-5'
                  aria-hidden='true'></i>
              </a>
            </div> */}
          </form>
        </div>
      </div>
    </FormCont>
  );
};
export default Form;

export const FormCont = styled.div`
  height: 100%;
  font-family: "Inter", sans-serif;

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  .limiter {
    width: 100%;
    margin: 0 auto;
  }

  .container-login100 {
    width: 100vw;
    min-height: 100vh;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background: #9053c7;
    background: -webkit-linear-gradient(-135deg, #c850c0, #4158d0);
    background: -o-linear-gradient(-135deg, #c850c0, #4158d0);
    background: -moz-linear-gradient(-135deg, #c850c0, #4158d0);
    background: linear-gradient(-135deg, #c850c0, #4158d0);
  }

  .wrap-login100 {
    width: 960px;
    height: 100%;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;

    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 80px 50px;
  }

  .login100-pic {
    /* width: 316px; */
    width: 40%;
  }

  .login100-pic img {
    max-width: 100%;
  }

  .login100-form {
    /* width: 290px; */
    width: 50%;
  }
  .login100-form-title {
    font-size: 24px;
    color: #333333;
    line-height: 1.2;
    text-align: center;
    width: 100%;
    display: block;
    /* margin-bottom: 54px; */
  }

  .wrap-input100 {
    position: relative;
    width: 100%;
    z-index: 1;
    margin-bottom: 10px;
  }

  .input100 {
    font-size: 15px;
    line-height: 1.5;
    color: #666666;

    display: block;
    width: 100%;
    background: #e6e6e6;
    height: 50px;
    border-radius: 25px;
    padding: 0 30px 0 68px;
  }

  .focus-input100 {
    display: block;
    position: absolute;
    border-radius: 25px;
    bottom: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 0px 0px;
    color: rgba(87, 184, 70, 0.8);
  }

  .input100:focus + .focus-input100 {
    -webkit-animation: anim-shadow 0.5s ease-in-out forwards;
    animation: anim-shadow 0.5s ease-in-out forwards;
  }

  a {
    font-size: 14px;
    line-height: 1.7;
    color: #666666;
    margin: 0px;
    transition: all 0.4s;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
  }

  a:focus {
    outline: none !important;
  }

  a:hover {
    text-decoration: none;
    color: #57b846;
  }

  input,
  textarea {
    outline: none;
    border: none;
  }

  textarea:focus,
  input:focus {
    border-color: transparent !important;
  }

  input:focus::-webkit-input-placeholder,
  input:focus:-moz-placeholder,
  input:focus::-moz-placeholder,
  input:focus:-ms-input-placeholder,
  textarea:focus::-webkit-input-placeholder,
  textarea:focus:-moz-placeholder,
  textarea:focus::-moz-placeholder,
  textarea:focus:-ms-input-placeholder {
    color: transparent;
  }
  input::-webkit-input-placeholder,
  input:-moz-placeholder,
  input::-moz-placeholder,
  input:-ms-input-placeholder,
  textarea::-webkit-input-placeholder,
  textarea:-moz-placeholder,
  textarea::-moz-placeholder,
  textarea:-ms-input-placeholder {
    color: #999999;
  }

  button {
    outline: none !important;
    border: none;
    background: transparent;
  }

  button:hover {
    cursor: pointer;
  }

  iframe {
    border: none !important;
  }

  .m-l-5 {
    margin-left: 5px;
  }
  .p-t-136 {
    padding-top: 80px;
  }
  .p-t-12 {
    padding-top: 12px;
  }
  .text-center {
    text-align: center;
  }

  .txt1 {
    font-size: 13px;
    line-height: 1.5;
    color: #999999;
  }

  .txt2 {
    font-size: 13px;
    line-height: 1.5;
    color: #666666;
    margin-left: 5px;
  }

  @-webkit-keyframes anim-shadow {
    to {
      box-shadow: 0px 0px 70px 25px;
      opacity: 0;
    }
  }

  @keyframes anim-shadow {
    to {
      box-shadow: 0px 0px 70px 25px;
      opacity: 0;
    }
  }

  .symbol-input100 {
    font-size: 15px;

    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    position: absolute;
    border-radius: 25px;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-left: 35px;
    pointer-events: none;
    color: #666666;

    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
  }

  .input100:focus + .focus-input100 + .symbol-input100 {
    color: #57b846;
    padding-left: 28px;
  }

  .container-login100-form-btn {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 20px;
  }

  .login100-form-btn {
    /* font-family: Montserrat-Bold; */
    font-size: 15px;
    line-height: 1.5;
    color: #fff;
    text-transform: uppercase;

    width: 100%;
    height: 50px;
    border-radius: 25px;
    background: #57b846;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 25px;

    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
  }

  .login100-form-btn:hover {
    background: #333333;
  }

  @media (max-width: 992px) {
    .wrap-login100 {
      padding: 80px 40px 80px 40px;
    }

    .login100-pic {
      width: 40%;
    }

    .login100-form {
      width: 55%;
    }
  }

  @media (max-width: 768px) {
    .wrap-login100 {
      padding: 60px 30px;
    }

    .login100-pic {
      display: none;
    }

    .login100-form {
      width: 100%;
    }
  }

  @media (max-width: 576px) {
    .wrap-login100 {
      padding: 40px 20px;
    }
  }

  .validate-input {
    position: relative;
  }

  .alert-validate::before {
    content: attr(data-validate);
    position: absolute;
    max-width: 70%;
    background-color: white;
    border: 1px solid #c80000;
    border-radius: 13px;
    padding: 4px 25px 4px 10px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    right: 8px;
    pointer-events: none;

    color: #c80000;
    font-size: 13px;
    line-height: 1.4;
    text-align: left;

    visibility: hidden;
    opacity: 0;

    -webkit-transition: opacity 0.4s;
    -o-transition: opacity 0.4s;
    -moz-transition: opacity 0.4s;
    transition: opacity 0.4s;
  }

  .alert-validate::after {
    content: "\f06a";
    font-family: FontAwesome;
    display: block;
    position: absolute;
    color: #c80000;
    font-size: 15px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    right: 13px;
  }

  .alert-validate:hover:before {
    visibility: visible;
    opacity: 1;
  }

  @media (max-width: 992px) {
    .alert-validate::before {
      visibility: visible;
      opacity: 1;
    }
  }
`;
