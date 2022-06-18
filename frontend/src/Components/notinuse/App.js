import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./redux/utils/setAuthToken";
import store from "./redux/store";

import { setFacultyUser, facultyLogout } from "./redux/action/facultyAction";

import {
  setAdminUser,
  adminLogout,
  adminGetAllStudent
} from "./redux/action/adminAction";

import { setStudentUser, studentLogout } from "./redux/action/studentAction";

import AdminLoginPage from "./Pages/AdminLoginPage";

import AdminRoutes from "./Pages/Admin/AdminRoutes";
import FacultyRoutes from "./Pages/Faculty/FacultyRoutes";
import StudentRoutes from "./Pages/Student/StudentRoutes";

import FacultyStudentLoginPage from "./Pages/FacultyStudentLoginPage";
import ForgotPassword from "./Pages/ForgotPassword";

import NotFound from "./Components/NotFound";

if (window.localStorage.facultyJwtToken) {
  setAuthToken(localStorage.facultyJwtToken);
  const decoded = jwt_decode(localStorage.facultyJwtToken);

  store.dispatch(setFacultyUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(facultyLogout());
    window.location.href = "/";
  }
} else if (window.localStorage.studentJwtToken) {
  setAuthToken(localStorage.studentJwtToken);
  const decoded = jwt_decode(localStorage.studentJwtToken);

  store.dispatch(setStudentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(studentLogout());
    window.location.href = "/";
  }
} else if (window.localStorage.adminJwtToken) {
  setAuthToken(localStorage.adminJwtToken);
  const decoded = jwt_decode(localStorage.adminJwtToken);

  store.dispatch(setAdminUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(adminLogout());
    window.location.href = "/";
  }
}

function App() {
  const store = useSelector((store) => store);
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<FacultyStudentLoginPage />} />
          <Route path="/adminLogin" element={<AdminLoginPage />} />
          <Route path="/forgotPassword/:user" element={<ForgotPassword />} />

          {/* <Route path='/*' element={(!store.admin.isAuthenticated &&
            !store.faculty.isAuthenticated &&
            !store.student.isAuthenticated)? <NotFound/> : <Navigate to='/' />}  */}

          {/* <Route
            path="/*"
            element={
              <Navigate
                replace
                to={
                  !store.admin.isAuthenticated &&
                  store.faculty.isAuthenticated &&
                  store.student.isAuthenticated
                    ? "/"
                    : "/notfound"
                }
              />
            }
          /> */}
        </Routes>
        {store.admin.isAuthenticated && <AdminRoutes />}
        {store.faculty.isAuthenticated && <FacultyRoutes />}
        {store.student.isAuthenticated && <StudentRoutes />}
      </Router>
    </div>
  );
}
// "react-router-dom": "^5.2.0",
export default App;
