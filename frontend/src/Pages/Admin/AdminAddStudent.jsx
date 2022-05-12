import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import classnames from "classnames";
import { adminAddStudent } from "../../redux/action/adminAction";
// import AdminHomeHelper from "../../Components/AdminHomeHelper";
import styled from "styled-components";
// import { Wrapper } from "./AdminStyles";

const AdminAddStudent = () => {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
 // const [year, setYear] = useState("");
  const [semister, setSemister] = useState("");
  const [section, setSection] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [studentMobileNumber, setContactNumber] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [fatherMobileNumber, setFatherContactNumber] = useState("");
  const [aadharCard, setAadharCard] = useState("");
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
      adminAddStudent({
        name,
        email,
        semister,
        department,
        fatherName,
        aadharCard,
        gender,
        section: section.toUpperCase(),
        dob: dob.split("-").reverse().join("-"),
        studentMobileNumber,
        fatherMobileNumber
      })
    );
  };
  useEffect(() => {
    if (store.admin.adminAddStudentFlag) {
      setError({});
    }
  }, [store.admin.adminAddStudentFlag]);

  useEffect(() => {
    if (store.error || store.admin.adminAddStudentFlag) {
      setIsLoading(false);
    }
  }, [store.error, store.admin.adminAddStudentFlag]);
  return (
    <Wrapper>
      {store.admin.isAuthenticated ? (
        <>
          {/* <AdminHomeHelper /> */}
          <div className="container my-5 p-5">
            <div className="row ">
              <div className="col">
                <form noValidate onSubmit={formHandler}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="nameId">Student Name</label>
                        <input
                          onChange={(e) => setName(e.target.value)}
                          type="text"
                          className={classnames("form-control", {
                            "is-invalid": error.name
                          })}
                          id="nameId"
                        />
                        {error.name && (
                          <div className="invalid-feedback">{error.name}</div>
                        )}
                      </div>
                      <div className="form-group">
                        <label htmlFor="emailId">Email</label>
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          className={classnames("form-control", {
                            "is-invalid": error.email
                          })}
                          id="emailId"
                        />
                        {error.email && (
                          <div className="invalid-feedback">{error.email}</div>
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

                      <div className="form-group">
                        <label htmlFor="sectionId">Section</label>
                        <input
                          onChange={(e) => setSection(e.target.value)}
                          type="text"
                          className={classnames("form-control", {
                            "is-invalid": error.section
                          })}
                          id="sectionId"
                        />
                        {error.section && (
                          <div className="invalid-feedback">
                            {error.section}
                          </div>
                        )}
                      </div>
                      <div className="form-group">
                        <label htmlFor="dobId">DOB</label>
                        <input
                          onChange={(e) => setDob(e.target.value)}
                          type="date"
                          className={classnames("form-control", {
                            "is-invalid": error.dob
                          })}
                          id="dobId"
                        />
                        {error.dob && (
                          <div className="invalid-feedback">{error.dob}</div>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="genderId">Gender</label>
                        <select
                          onChange={(e) => setGender(e.target.value)}
                          className="form-control"
                          id="genderId">
                          <option>Select</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="numberId">Contact Number</label>
                        <input
                          onChange={(e) => setContactNumber(e.target.value)}
                          required
                          type="number"
                          className="form-control"
                          id="numberId"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="fatherId">Father Name</label>
                        <input
                          onChange={(e) => setFatherName(e.target.value)}
                          type="text"
                          className="form-control"
                          id="fatherId"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="fathercnId">
                          Father Contact Number
                        </label>
                        <input
                          onChange={(e) =>
                            setFatherContactNumber(e.target.value)
                          }
                          type="number"
                          className="form-control"
                          id="fathercnId"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="aadharId">Aadhar Card Number</label>
                        <input
                          onChange={(e) => setAadharCard(e.target.value)}
                          type="number"
                          className="form-control"
                          id="aadharId"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-md-1">
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
                      Add Student
                    </button>
                  )}
                </form>
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

export default AdminAddStudent;

const Wrapper = styled.div`
  .container {
    background: lightblue;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
      rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
      rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  }
`;
