import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./redux/utils/setAuthToken";
import store from "./redux/store";

import { setFacultyUser, facultyLogout } from "./redux/action/facultyAction";

import {
  setAdminUser,
  adminLogout,
  adminGetAllStudent,
} from "./redux/action/adminAction";

import { setStudentUser, studentLogout } from "./redux/action/studentAction";

// import AdminLoginPage from "./Pages/AdminLoginPage";
import AdminLogin from "./Pages/AdminLogin";

import AdminHome from "./Pages/Admin/AdminHome";
import AdminAddAdmin from "./Pages/Admin/AdminAddAdmin";
import AdminAddFaculty from "./Pages/Admin/AdminAddFaculty";
import AdminAddStudent from "./Pages/Admin/AdminAddStudent";
import AdminAddSubject from "./Pages/Admin/AdminAddSubject";
import AdminGetAllFaculties from "./Pages/Admin/AdminGetAllFaculties";
import AdminGetAllStudents from "./Pages/Admin/AdminGetAllStudents";
import AdminGetAllSubjects from "./Pages/Admin/AdminGetAllSubjects";

// import AdminRoutes from "./Pages/Admin/AdminRoutes";
// import FacultyRoutes from "./Pages/Faculty/FacultyRoutes";
// import StudentRoutes from "./Pages/Student/StudentRoutes";
// import AdminHomeHelper from "./Components/AdminHomeHelper";
// import FacultyHomeHelper from "./Components/FacultyHomeHelper";
// import HomeHelper from "./Components/HomeHelper";

import AdminSidebar from "./Components/AdminSidebar";
import FacultySidebar from "./Components/FacultySidebar";
import StudentSidebar from "./Components/StudentSidebar";

import FacultyHome from "./Pages/Faculty/FacultyHome";
import AttendenceFaculty from "./Pages/Faculty/AttendenceFaculty";
import FacultyUpdatePassword from "./Pages/Faculty/FacultyUpdatePassword";
import FacultyUpdateProfile from "./Pages/Faculty/FacultyUpdateProfile";
import FacultyUploadMarks from "./Pages/Faculty/FacultyUploadMarks";

// import FacultyStudentLoginPage from "./Pages/FacultyStudentLoginPage";
import FacultyStudentLogin from "./Pages/FacultyStudentLogin";
import FormTest from "./Pages/FormTest";

import StudentAttendencePage from "./Pages/Student/StudentAttendencePage";
import StudentUpdatePassword from "./Pages/Student/StudentUpdatePassword";
import StudentDetails from "./Pages/Student/StudentDetails";
import StudentHome from "./Pages/Student/StudentHome";
import Chat from "./Pages/Student/Chat";
import RecieverUserDetails from "./Pages/Student/RecieverUserDetails";
import StudentUpdateProfile from "./Pages/Student/StudentUpdateProfile";
import StudentSubjectList from "./Pages/Student/StudentSubjectList";
import StudentFees from "./Pages/Student/StudentFees";

import StudentTestPerformace from "./Pages/Student/StudentTestPerformance";

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
  const store = useSelector(store => store);
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route exact path="/" element={<FacultyStudentLoginPage />} /> */}
          <Route exact path="/" element={<FacultyStudentLogin />} />
          <Route exact path="/form" element={<FormTest />} />
          {/* <Route path="/adminLogin" element={<AdminLoginPage />} /> */}
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/forgotPassword/:user" element={<ForgotPassword />} />
          {/* <Route path="/*" element={<NotFound />} /> */}
          {/* <Route
            path="/*"
            element={<Navigate replace to={`${checkLoggedIn()}`} />}
          /> */}
        </Routes>
        {store.admin.isAuthenticated && (
          <div className="AppGlass">
            <AdminSidebar />
            <div className="MainDash">
              {/* <AdminHomeHelper /> */}
              <Routes>
                <Route path="/admin" element={<AdminHome />} />
                <Route path="/admin/addStudent" element={<AdminAddStudent />} />
                <Route path="/admin/addFaculty" element={<AdminAddFaculty />} />
                <Route path="/admin/addSubject" element={<AdminAddSubject />} />
                <Route path="/admin/addAdmin" element={<AdminAddAdmin />} />
                <Route
                  path="/admin/allFaculties"
                  element={<AdminGetAllFaculties />}
                />
                <Route
                  path="/admin/allStudents"
                  element={<AdminGetAllStudents />}
                />
                <Route
                  path="/admin/allSubjects"
                  element={<AdminGetAllSubjects />}
                />
                <Route path="/*" element={<Navigate replace to="/admin" />} />
              </Routes>
            </div>
          </div>
        )}
        {store.faculty.isAuthenticated && (
          <div className="AppGlass">
            <FacultySidebar />

            <div className="MainDash">
              {/* <FacultyHomeHelper /> */}
              <Routes>
                <Route path="/faculty" element={<FacultyHome />} />
                <Route
                  path="/faculty/updatePassword"
                  element={<FacultyUpdatePassword />}
                />
                <Route
                  path="/faculty/uploadMarks"
                  element={<FacultyUploadMarks />}
                />
                <Route
                  path="/faculty/updateProfile"
                  element={<FacultyUpdateProfile />}
                />
                <Route
                  path="/attendenceFaculty"
                  element={<AttendenceFaculty />}
                />
                <Route path="/*" element={<Navigate replace to="/faculty" />} />
              </Routes>
            </div>
          </div>
        )}
        {store.student.isAuthenticated && (
          <div className="AppGlass">
            <StudentSidebar />

            <div className="MainDash">
              {/* <HomeHelper /> */}
              <Routes>
                <Route path="/student" element={<StudentHome />} />
                <Route
                  path="/student/updateProfile"
                  element={<StudentUpdateProfile />}
                />
                <Route path="/studentDetails" element={<StudentDetails />} />
                <Route
                  path="/student/attendence"
                  element={<StudentAttendencePage />}
                />
                <Route
                  path="/student/updatePassword"
                  element={<StudentUpdatePassword />}
                />
                <Route
                  path="/student/testPerformance"
                  element={<StudentTestPerformace />}
                />
                <Route
                  path="/student/getAllSubjects"
                  element={<StudentSubjectList />}
                />
                <Route
                  path="/student/getStudentFees"
                  element={<StudentFees />}
                />

                <Route path="/chat/:room" element={<Chat />} />
                <Route
                  path="/student/:registrationNumber"
                  element={<RecieverUserDetails />}
                />
                <Route path="/*" element={<Navigate replace to="/student" />} />
              </Routes>
            </div>
          </div>
        )}
      </Router>
    </div>
  );
}

export default App;
