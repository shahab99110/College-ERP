import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSubjects } from "../../redux/action/studentAction";
import HomeHelper from "../../Components/HomeHelper";
import { useNavigate } from "react-router-dom";

const StudentSubjectList = () => {
  const store = useSelector((store) => store);
  console.log("this is store "+store);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllSubjects());
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
                      <th scope="col">S.No</th>
                      <th scope="col">Subject Code</th>
                      <th scope="col">Subject Name</th>
                      <th scope="col">Semister</th>
                      <th scope="col">Total Lectures</th>
                    </tr>
                  </thead>
                  <tbody>
                    {store.student.allSubjects.map((res, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{res.subjectCode}</td>
                        <td>{res.subjectName}</td>
                        <td>{res.semister}</td>
                        <td>{res.totalLectures}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      ) : (
        navigate("/")
      )}
    </>
  );
};

export default StudentSubjectList;
