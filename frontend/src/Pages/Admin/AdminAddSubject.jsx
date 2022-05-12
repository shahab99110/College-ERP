import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import classnames from "classnames";
import { adminAddSubject } from "../../redux/action/adminAction";
// import AdminHomeHelper from "../../Components/AdminHomeHelper";
import styled from "styled-components";
// import { Wrapper } from "./AdminStyles";

const AdminAddSubject = () => {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [subjectName, setSubjectName] = useState("");
  const [subjectCode, setSubjectCode] = useState("");
  const [totalLectures, setTotalLectures] = useState("");
  const [department, setDepartment] = useState("");
  //const [year, setYear] = useState("");
  const [semister, setSemister] = useState("");
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (store.error) {
      setError(store.error);
    }
  }, [store.error]);
  const formHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    dispatch(
      adminAddSubject({
        subjectCode,
        subjectName,
        totalLectures,
        department,
        semister
      })
    );
  };

  useEffect(() => {
    if (store.admin.adminAddSubjectFlag) {
      setError({});
    }
  }, [store.admin.adminAddSubjectFlag]);

  useEffect(() => {
    if (store.error || store.admin.adminAddSubjectFlag) {
      setIsLoading(false);
    }
  }, [store.error, store.admin.adminAddSubjectFlag]);

  return (
    <Wrapper>
      {store.admin.isAuthenticated ? (
        <>
          {/* <AdminHomeHelper /> */}
          <div className="container my-3 p-3">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="d-flex justify-content-center ">
                  <form noValidate onSubmit={formHandler}>
                    <div className="form-group">
                      <label htmlFor="snameId">Subject Name</label>
                      <input
                        onChange={(e) => setSubjectName(e.target.value)}
                        type="text"
                        className={classnames("form-control", {
                          "is-invalid": error.subjectName
                        })}
                        id="snameId"
                      />
                      {error.subjectName && (
                        <div className="invalid-feedback">
                          {error.subjectName}
                        </div>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="scodeId">Subject Code</label>
                      <input
                        onChange={(e) => setSubjectCode(e.target.value)}
                        type="text"
                        className={classnames("form-control", {
                          "is-invalid": error.subjectCode
                        })}
                        id="scodeId"
                      />
                      {error.subjectCode && (
                        <div className="invalid-feedback">
                          {error.subjectCode}
                        </div>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="totalLectures">Total Lectures</label>
                      <input
                        onChange={(e) => setTotalLectures(e.target.value)}
                        type="number"
                        className={classnames("form-control", {
                          "is-invalid": error.totalLectures
                        })}
                        id="totalLectures"
                      />
                      {error.totalLectures && (
                        <div className="invalid-feedback">
                          {error.totalLectures}
                        </div>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="departmentId">Department</label>
                      <select
                        onChange={(e) => setDepartment(e.target.value)}
                        className={classnames("form-control", {
                          "is-invalid": error.department
                        })}
                        id="departmentId">
                        <option>Select</option>
                        <option value="E.C.E">E.C.E</option>
                        <option value="C.S.E">C.S.E</option>                       
                      </select>
                      {error.department && (
                        <div className="invalid-feedback">
                          {error.department}
                        </div>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="yearId">Semister</label>
                      <select
                        onChange={(e) => setSemister(e.target.value)}
                        className={classnames("form-control", {
                          "is-invalid": error.semister
                        })}
                        id="yearId">
                        <option>Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                      </select>

                      {error.semister && (
                        <div className="invalid-feedback">{error.semister}</div>
                      )}
                    </div>
                    <div className="row justify-content-center">
                      <div>
                        {isLoading && (
                          <div
                            className="spinner-border text-primary"
                            role="status">
                            <span className="sr-only">Loading...</span>
                          </div>
                        )}
                      </div>
                    </div>
                    {!isLoading && (
                      <button type="submit" className="btn btn-info  ">
                        Add Subject
                      </button>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        navigate("/")
      )}
    </Wrapper>
  );
};

export default AdminAddSubject;

const Wrapper = styled.div`
  form {
    background: lightblue;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
      rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
      rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
    width: 100%;
    padding: 40px 30px;
  }
`;
