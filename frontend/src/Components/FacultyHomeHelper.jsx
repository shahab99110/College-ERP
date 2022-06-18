import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
// import styled from "styled-components";
import { Cont, Line } from './HeaderStyles';

import { useDispatch, useSelector } from 'react-redux';
import { facultyLogout } from '../redux/action/facultyAction';

const Home = () => {
  const store = useSelector(store => store);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  useEffect(() => {
    if (store.faculty.faculty.faculty.name) {
      setName(store.faculty.faculty.faculty.name);
    }
  }, [store.faculty.faculty.faculty.name]);
  const logoutHandler = () => {
    dispatch(facultyLogout());
    navigate('/');
  };
  return (
    <Cont>
      <div className=''>
        <div className=''>
          <nav className='navbar navbar-expand-lg navbar-light'>
            <h4 className='navbar-brand mt-1 logo' href=''>
              JH
            </h4>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNav'>
              <ul className='navbar-nav'>
                <li className='nav-item active'>
                  <Link to='/faculty'>
                    <button type='button' className='btn'>
                      <li>{name.toUpperCase()}</li>
                      <Line
                        width={`${pathname === '/faculty' ? '100%' : '0%'}`}
                      />
                    </button>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/faculty/updateProfile'>
                    <button type='button' className='btn'>
                      <li>UPDATE PROFILE</li>
                      <Line
                        width={`${
                          pathname === '/faculty/updateProfile' ? '100%' : '0%'
                        }`}
                      />
                    </button>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/attendenceFaculty'>
                    <button type='button' className='btn'>
                      <li>MARK ATTENDANCE</li>
                      <Line
                        width={`${
                          pathname === '/attendenceFaculty' ? '100%' : '0%'
                        }`}
                      />
                    </button>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/faculty/uploadMarks'>
                    <button type='button' className='btn'>
                      <li>UPLOAD MARKS</li>
                      <Line
                        width={`${
                          pathname === '/faculty/uploadMarks' ? '100%' : '0%'
                        }`}
                      />
                    </button>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/faculty/updatePassword'>
                    <button type='button' className='btn'>
                      <li>UPDATE PASSWORD</li>
                      <Line
                        width={`${
                          pathname === '/faculty/updatePassword' ? '100%' : '0%'
                        }`}
                      />
                    </button>
                  </Link>
                </li>
                <li className='nav-item'>
                  <button
                    style={{ listStyle: 'None' }}
                    onClick={logoutHandler}
                    type='button'
                    className='btn logoutBtn'>
                    <li>LOGOUT</li>
                  </button>
                </li>
              </ul>
            </div>
            <div>
              {/* <button
                style={{ listStyle: "None" }}
                onClick={logoutHandler}
                type="button"
                className="btn">
                <li>LOGOUT</li>
              </button> */}
            </div>
          </nav>
        </div>
      </div>
    </Cont>
  );
};

export default Home;

// export const Cont = styled.div`
// .overflow-hidden{
//   overflow-x:hidden;
// }
//   h4.logo {
//     color: #ebeef2;
//     transform: scale(1.08)
//   }

//   .navbar {

//     background-color: #00adb5 !important;
//     /* background:Red; */
//     display:flex;
//     justify-content:space-between;

//   }

//   li.nav-item  {
//     font-weight: bold;
//     display:flex;
//     justify-content: center;
//     a button{
//       color: #ebeef2 ;
//       /* border-bottom: 5px solid #00adb5;; */
//       font-weight: 600;
//       transition: all .2s ease-in-out;
//       margin: 2px;;
//       &:hover{
//         transform: scale(1.05);
//         color: #fff;
//         /* border-bottom: 5px solid #fff; */
//       }
//     }
//   }
//   .logoutBtn{
//       font-weight: 600;
//     color: #ebeef2;
//     border: 2px solid #ebeef2;
//     &:hover{
//         transform: scale(1.05);
//         background:rgba(0,0,0, 0.2);
//     }
//   }

//   }
// `;
