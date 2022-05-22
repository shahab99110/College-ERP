import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStudentFees } from "../../redux/action/studentAction";
import HomeHelper from "../../Components/HomeHelper";
import { useNavigate } from "react-router-dom";

function loadScript(src) {
  return new Promise(resolve => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const __DEV__ = document.domain === "localhost";

const StudentSubjectList = () => {
  const store = useSelector(store => store);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStudentFees());
  }, []);
  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const data = await fetch("http://localhost:5000/api/student/razorpay", {
      method: "POST",
    }).then(t => t.json());

    console.log("this is data" + data);

    const options = {
      key: __DEV__ ? "rzp_test_EdJHMj2g68n6on" : "PRODUCTION_KEY",
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.id,
      name: "Jamia Hamdard Fees Portal",
      description: "Thank you for nothing. Please give us some money",
      //image:"",
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }
  return (
    <>
      {store.student.isAuthenticated ? (
        <>
          <a
            className="fees-btn"
            onClick={displayRazorpay}
            target="_blank"
            rel="noopener noreferrer">
            Pay College Fees
          </a>
        </>
      ) : (
        navigate("/")
      )}
    </>
  );
};

export default StudentSubjectList;
