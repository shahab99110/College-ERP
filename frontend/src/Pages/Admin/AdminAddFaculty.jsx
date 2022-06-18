import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import classnames from 'classnames';
import styled from 'styled-components';

import { adminAddFaculty } from '../../redux/action/adminAction';
// import AdminHomeHelper from "../../Components/AdminHomeHelper";
// import { Wrapper } from "./AdminStyles";

const AdminAddFaculty = () => {
  const store = useSelector(state => state);
  const dispatch = useDispatch();
  const navigatae = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');
  const [designation, setDesignation] = useState('');
  const [facultyMobileNUmber, setFacultyMobileNumber] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [aadharCard, setAadharCard] = useState('');
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (store.error) {
      setError(store.error);
    }
  }, [store.error]);

  const formHandler = e => {
    e.preventDefault();
    setIsLoading(true);
    dispatch(
      adminAddFaculty({
        name,
        email,
        designation,
        facultyMobileNUmber,
        department,
        aadharCard,
        gender,
        dob: dob.split('-').reverse().join('-'),
      })
    );
    setIsLoading(false);
  };

  useEffect(() => {
    if (store.admin.adminAddFacultyFlag) {
      setError({});
    }
  }, [store.admin.adminAddFacultyFlag]);

  useEffect(() => {
    if (store.error || store.admin.adminAddFacultyFlag) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [store.error, store.admin.adminAddFacultyFlag]);
  return (
    <Wrapper>
      {store.admin.isAuthenticated ? (
        <>
          {/* <AdminHomeHelper /> */}
          <div className='container my-5 p-5'>
            <div className='row '>
              <div className='col'>
                <form noValidate onSubmit={formHandler}>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <label htmlFor='nameId'>Faculty Name</label>
                        <input
                          onChange={e => setName(e.target.value)}
                          type='text'
                          className={classnames('form-control', {
                            'is-invalid': error.name,
                          })}
                          id='nameId'
                        />
                        {error.name && (
                          <div className='invalid-feedback'>{error.name}</div>
                        )}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='emailId'>Email</label>
                        <input
                          onChange={e => setEmail(e.target.value)}
                          type='email'
                          className={classnames('form-control', {
                            'is-invalid': error.email,
                          })}
                          id='emailId'
                        />
                        {error.email && (
                          <div className='invalid-feedback'>{error.email}</div>
                        )}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='designationId'>Designation</label>
                        <select
                          onChange={e => setDesignation(e.target.value)}
                          className={classnames('form-control', {
                            'is-invalid': error.designation,
                          })}
                          id='designationId'>
                          <option>Select</option>
                          <option value='Assistant Professor'>
                            Assistant Professor
                          </option>
                          <option value='Senior Professer'>
                            Senior Professer
                          </option>
                        </select>
                        {error.designation && (
                          <div className='invalid-feedback'>
                            {error.designation}
                          </div>
                        )}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='departmentId'>Department</label>
                        <select
                          onChange={e => setDepartment(e.target.value)}
                          className={classnames('form-control', {
                            'is-invalid': error.department,
                          })}
                          id='departmentId'>
                          <option>Select</option>
                          <option value='E.C.E'>E.C.E</option>
                          <option value='C.S.E'>C.S.E</option>
                          <option value='E.E.E'>E.E.E</option>
                          <option value='I.T'>I.T</option>
                          <option value='Mechanical'>Mechanical</option>
                          <option value='Civil'>Civil</option>
                        </select>
                        {error.department && (
                          <div className='invalid-feedback'>
                            {error.department}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <label htmlFor='dobId'>DOB</label>
                        <input
                          onChange={e => setDob(e.target.value)}
                          type='date'
                          className={classnames('form-control', {
                            'is-invalid': error.dob,
                          })}
                          id='dobId'
                        />
                        {error.dob && (
                          <div className='invalid-feedback'>{error.dob}</div>
                        )}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='genderId'>Gender</label>
                        <select
                          onChange={e => setGender(e.target.value)}
                          className='form-control'
                          id='genderId'>
                          <option>Select</option>
                          <option value='Male'>Male</option>
                          <option value='Female'>Female</option>
                          <option value='Other'>Other</option>
                        </select>
                      </div>
                      <div className='form-group'>
                        <label htmlFor='numberId'>Contact Number</label>
                        <input
                          onChange={e => setFacultyMobileNumber(e.target.value)}
                          type='number'
                          className='form-control'
                          id='numberId'
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='aadharId'>Aadhar Card Number</label>
                        <input
                          onChange={e => setAadharCard(e.target.value)}
                          type='number'
                          className='form-control'
                          id='aadharId'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='row justify-content-center'>
                    <div className='col-md-1'>
                      {isLoading && (
                        <div
                          className='spinner-border text-primary'
                          role='status'>
                          <span className='sr-only'>Loading...</span>
                        </div>
                      )}
                    </div>
                  </div>
                  {!isLoading && (
                    <button type='submit' className='btn btn-info'>
                      Add Faculty
                    </button>
                  )}
                </form>
              </div>
            </div>
          </div>
        </>
      ) : (
        navigatae('/')
      )}
    </Wrapper>
  );
};

export default AdminAddFaculty;

const Wrapper = styled.div`
  .container {
    background: lightblue;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
      rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
      rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  }
`;
