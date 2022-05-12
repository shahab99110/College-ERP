import React, { useState, useEffect } from "react";
// import styled from "styled-components";
import { Cont, Line } from "./HeaderStyles";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { adminLogout } from "../redux/action/adminAction";

const Home = () => {
  const { pathname } = useLocation();
  const store = useSelector((store) => store);
  const [name, setName] = useState("");

  useEffect(() => {
    if (store.admin.admin.name) {
      setName(store.admin.admin.name);
    }
  }, [store.admin.admin.name]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(adminLogout());
    navigate("/");
  };

  return (
    <Cont>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link to="/admin">
            <h4 className="navbar-brand mt-1 logo">JH</h4>
          </Link>
          <button
            className="navbar-toggler "
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item ">
                <Link to="/admin">
                  <button type="button" className="btn">
                    <li>{name.toUpperCase()}</li>
                    <Line width={`${pathname === "/admin" ? "100%" : "0%"}`} />
                  </button>
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/admin/addFaculty">
                  <button type="button" className="btn">
                    <li>ADD FACULTY</li>
                    <Line
                      width={`${
                        pathname === "/admin/addFaculty" ? "100%" : "0%"
                      }`}
                    />
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/admin/addStudent">
                  <button type="button" className="btn">
                    <li>ADD STUDENT</li>
                    <Line
                      width={`${
                        pathname === "/admin/addStudent" ? "100%" : "0%"
                      }`}
                    />
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/admin/addSubject">
                  <button type="button" className="btn">
                    <li>ADD SUBJECT</li>
                    <Line
                      width={`${
                        pathname === "/admin/addSubject" ? "100%" : "0%"
                      }`}
                    />
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/admin/addAdmin">
                  <button type="button" className="btn">
                    <li>ADD ADMIN</li>
                    <Line
                      width={`${
                        pathname === "/admin/addAdmin" ? "100%" : "0%"
                      }`}
                    />
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/admin/allFaculties">
                  <button type="button" className="btn">
                    <li>OUR FACULTIES</li>
                    <Line
                      width={`${
                        pathname === "/admin/allFaculties" ? "100%" : "0%"
                      }`}
                    />
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/admin/allStudents">
                  <button type="button" className="btn">
                    <li>OUR STUDENTS</li>
                    <Line
                      width={`${
                        pathname === "/admin/allStudents" ? "100%" : "0%"
                      }`}
                    />
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/admin/allSubjects">
                  <button type="button" className="btn">
                    <li>SUBJECTS</li>
                    <Line
                      width={`${
                        pathname === "/admin/allSubjects" ? "100%" : "0%"
                      }`}
                    />
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <button
                  style={{ listStyle: "None" }}
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
              style={{ listStyle: "None" }}
              onClick={logoutHandler}
              type="button"
              className="btn logoutBtn">
              <li>LOGOUT</li>
            </button> */}
          </div>
        </nav>
      </div>
    </Cont>
  );
};

export default Home;

// export const Cont = styled.div`
//   overflow-x:hidden;
//   h4.logo {
//     color: #ebeef2;
//     transform: scale(1.08)
//   }

//   .navbar {
//     background-color: #00adb5;
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
