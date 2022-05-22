import React, { useState, useEffect } from "react";
// import styled from "styled-components";
import { Cont, Line } from "./HeaderStyles";

import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  studentLogout,
  newerChats,
  previousChats
} from "../redux/action/studentAction";

const Home = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const store = useSelector((store) => store);
  const [name, setName] = useState("");

  useEffect(() => {
    if (store.student.student.student.name) {
      setName(store.student.student.student.name);
    }
  }, [store.student.student.student.name]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(newerChats(store.student.student.student.name));
    dispatch(previousChats(store.student.student.student.name));
  }, [store.student.newerChats.length]);

  const logoutHandler = () => {
    dispatch(studentLogout());
    navigate("/");
  };

  return (
    <Cont>
      <div className="">
        <div className="">
          <nav className="navbar navbar-expand-lg navbar-light">
            <h4 className="navbar-brand mt-1 logo" href="">
              JH
            </h4>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/student">
                    <button type="button" className="btn">
                      <li>{name.toUpperCase()}</li>
                      <Line
                        width={`${pathname === "/student" ? "100%" : "0%"}`}
                      />
                    </button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/student/updateProfile">
                    <button type="button" className="btn">
                      <li>UPDATE PROFILE</li>
                      <Line
                        width={`${
                          pathname === "/student/updateProfile" ? "100%" : "0%"
                        }`}
                      />
                    </button>
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    ACADEMIC
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown">
                    <Link
                      className="dropdown-item"
                      to="/student/testPerformance">
                      Test Performance
                    </Link>
                    <Link className="dropdown-item" to="/student/attendence">
                      Attendance
                    </Link>
                    <Link
                      className="dropdown-item"
                      to="/student/getAllSubjects">
                      Student Subject List
                    </Link>
                  </div>
                </li>
                <li className="nav-item">
                  <Link to="/studentDetails">
                    <button type="button" className="btn">
                      <li>STUDENTS</li>
                      <Line
                        width={`${
                          pathname === "/studentDetails" ? "100%" : "0%"
                        }`}
                      />
                    </button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/studentDetails">
                    <button type="button" className="btn">
                      <li>
                        NEW CONVERSATION ({store.student.newerChats.length})
                      </li>
                      <Line
                        width={`${
                          pathname === "/studentDetails" ? "100%" : "0%"
                        }`}
                      />
                    </button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/student/updatePassword">
                    <button type="button" className="btn">
                      <li>UPDATE PASSWORD</li>
                      <Line
                        width={`${
                          pathname === "/student/updatePassword" ? "100%" : "0%"
                        }`}
                      />
                    </button>
                  </Link>
                </li>
                <li className="nav-item">
                  <button
                    style={{ listStyle: "none" }}
                    onClick={logoutHandler}
                    type="button"
                    className="btn logoutBtn">
                    <li>LOGOUT</li>
                  </button>
                </li>
              </ul>
            </div>
            <div>
              {/* <button
                style={{ listStyle: "none" }}
                onClick={logoutHandler}
                type="button"
                className="btn logoutBtn">
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
//   /* overflow-x:hidden; */
//   h4.logo {
//     color: #ebeef2;
//     transform: scale(1.08)
//   }

//   .navbar {
//     background-color: #00adb5;
//     display:flex;
//     justify-content:space-between;

//   }
// .nav-link.dropdown-toggle{
//   color: #ebeef2 ;
//       font-weight: 600;
//       transition: all .2s ease-in-out;
//       margin: 2px;;
//       &:hover{
//         transform: scale(1.05);
//         color: #fff;
//       }
//       .nav-link.dropdown-toggle:active{
//         color:pink;
//       }

// }
// .dropdown .dropdown-menu{
//   background:lightblue;
// }
//   li.nav-item  {
//     font-weight: bold;
//     display:flex;
//     justify-content: center;
//     a button{
//       color: #ebeef2 ;
//       font-weight: 600;
//       transition: all .2s ease-in-out;
//       margin: 2px;;
//       &:hover{
//         transform: scale(1.05);
//         color: #fff;
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
