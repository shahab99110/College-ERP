import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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

// import AdminHome from "./Pages/Admin/AdminHome";
// import AdminAddAdmin from "./Pages/Admin/AdminAddAdmin";
// import AdminAddFaculty from "./Pages/Admin/AdminAddFaculty";
// import AdminAddStudent from "./Pages/Admin/AdminAddStudent";
// import AdminAddSubject from "./Pages/Admin/AdminAddSubject";
// import AdminGetAllFaculties from "./Pages/Admin/AdminGetAllFaculties";
// import AdminGetAllStudents from "./Pages/Admin/AdminGetAllStudents";
// import AdminGetAllSubjects from "./Pages/Admin/AdminGetAllSubjects";

import AdminRoutes from "./Pages/Admin/AdminRoutes";
import FacultyRoutes from "./Pages/Faculty/FacultyRoutes";
import StudentRoutes from "./Pages/Student/StudentRoutes";

// import AttendenceFaculty from "./Pages/Faculty/AttendenceFaculty";
// import facultyInterface from "./Pages/Faculty/FacultyInterface";
// import FacultyUpdatePassword from "./Pages/Faculty/FacultyUpdatePassword";
// import FacultyUpdateProfile from "./Pages/Faculty/FacultyUpdateProfile";
// import FacultyUploadMarks from "./Pages/Faculty/FacultyUploadMarks";

import FacultyStudentLoginPage from "./Pages/FacultyStudentLoginPage";

// import StudentAttendencePage from "./Pages/Student/StudentAttendencePage";
// import StudentUpdatePassword from "./Pages/Student/StudentUpdatePassword";
// import StudentDetails from "./Pages/StudentDetails";

import ForgotPassword from "./Pages/ForgotPassword";

import NotFound from "./Components/NotFound";

// import StudentHome from "./Pages/Student/StudentHome";
// import Chat from "./Pages/Student/Chat";
// import RecieverUserDetails from "./Pages/Student/RecieverUserDetails";
// import StudentUpdateProfile from "./Pages/Student/StudentUpdateProfile";
// import StudentSubjectList from "./Pages/Student/StudentSubjectList";
// import StudentTestPerformace from "./Pages/Student/StudentTestPerformance";

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
        <Switch>
          <Route exact path="/" component={FacultyStudentLoginPage} />
          <Route exact path="/adminLogin" component={AdminLoginPage} />

          {/* <Route exact path="/home" component={StudentHome} /> */}

          {/* <Route exact path="/faculty" component={facultyInterface} />
          <Route
            exact
            path="/faculty/updatePassword"
            component={FacultyUpdatePassword}
          />
          <Route
            exact
            path="/faculty/uploadMarks"
            component={FacultyUploadMarks}
          />
          <Route
            exact
            path="/faculty/updateProfile"
            component={FacultyUpdateProfile}
          />
          <Route
            exact
            path="/attendenceFaculty"
            component={AttendenceFaculty}
          /> */}

          {/* <Route exact path="/admin" component={AdminHome} />
          <Route exact path="/admin/addStudent" component={AdminAddStudent} />
          <Route exact path="/admin/addFaculty" component={AdminAddFaculty} />
          <Route exact path="/admin/addSubject" component={AdminAddSubject} />
          <Route exact path="/admin/addAdmin" component={AdminAddAdmin} />
          <Route
            exact
            path="/admin/allFaculties"
            component={AdminGetAllFaculties}
          />
          <Route
            exact
            path="/admin/allStudents"
            component={AdminGetAllStudents}
          />
          <Route
            exact
            path="/admin/allSubjects"
            component={AdminGetAllSubjects}
          /> */}

          {/* <Route
            exact
            path="/student/updateProfile"
            component={StudentUpdateProfile}
          />
          <Route exact path="/studentDetails" component={StudentDetails} />

          <Route
            exact
            path="/student/attendence"
            component={StudentAttendencePage}
          />
          <Route
            exact
            path="/student/updatePassword"
            component={StudentUpdatePassword}
          />
          <Route
            exact
            path="/student/testPerformance"
            component={StudentTestPerformace}
          />

          <Route
            exact
            path="/student/getAllSubjects"
            component={StudentSubjectList}
          />
          <Route exact path="/chat/:room" component={Chat} />
          <Route
            exact
            path="/student/:registrationNumber"
            component={RecieverUserDetails}
          /> */}

          <Route
            exact
            path="/forgotPassword/:user"
            component={ForgotPassword}
          />
        </Switch>
        {store.admin.isAuthenticated && <AdminRoutes />}
        {store.faculty.isAuthenticated && <FacultyRoutes />}
        {store.student.isAuthenticated && <StudentRoutes />}
      </Router>
    </div>
  );
}

export default App;
