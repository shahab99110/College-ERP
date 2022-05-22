import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSubjects } from "../../redux/action/studentAction";
import HomeHelper from "../../Components/HomeHelper";
import { useNavigate } from "react-router-dom";

const StudentSubjectList = () => {  
  const store = useSelector((store) => store);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllSubjects());
  }, []);
  return (
    <>
      {store.student.isAuthenticated ? (
        <>
          <a className="fees-btn" onClick={showRazorpay} target="_blank" rel="noopener noreferrer">
            Donate
          </a>
        </>
      ) : (
        navigate("/")
      )}
    </>
  );
};

export default StudentSubjectList;
