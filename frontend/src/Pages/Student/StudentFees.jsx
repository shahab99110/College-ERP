import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStudentFees } from "../../redux/action/studentAction";
import HomeHelper from "../../Components/HomeHelper";
import { useNavigate } from "react-router-dom";

const StudentFees = () => {
  const store = useSelector(store => store);
  console.log("studentfees page me aya before store wala");
  console.log(store.student.fees);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStudentFees());
  }, []);
  
  return (
    <>
      {store.student.isAuthenticated ? (
        <>
        {/* <HomeHelper /> */}
          <div className="container">
            <div className="row mt-5">
              <div className="col-md-6 m-auto">
                <table className="table border">
                  <thead>
                    <tr>
                      <th scope="col">Semister</th>
                      <th scope="col">Fees Status</th>
                      <th scope="col">Payment Id</th>
                    </tr>
                  </thead>
                  <tbody>
                    {store.student.fees.map((res, index) => (
                      <tr key={index}>
                        <td>{res.sem}</td>
                        <td>{res.isPaid}</td>
                        <td>{res.payId}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <a
            className="fees-btn"
            href="https://rzp.io/l/seesLjfB"
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

export default StudentFees;
