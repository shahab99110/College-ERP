import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  Navigate
} from "react-router-dom";

import HomeHelper from "../../Components/HomeHelper";

import StudentAttendencePage from "./StudentAttendencePage";
import StudentUpdatePassword from "./StudentUpdatePassword";
//import Chat from "./Chat";
import RecieverUserDetails from "./RecieverUserDetails";
import StudentUpdateProfile from "./StudentUpdateProfile";
import StudentDetails from "./StudentDetails";
import StudentHome from "./StudentHome";
import StudentSubjectList from "./StudentSubjectList";
import StudentTestPerformace from "./StudentTestPerformance";

const StudentRoutes = () => {
  const store = useSelector((store) => store);

  const navigate = useNavigate();
  return (
    <div>
      {store.student.isAuthenticated ? (
        <>
          <HomeHelper />
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

            <Route path="/chat/:room" element={<Chat />} />
            <Route
              path="/student/:registrationNumber"
              element={<RecieverUserDetails />}
            />
            <Route path="/*" element={<Navigate replace to="/student" />} />
          </Routes>
        </>
      ) : (
        navigate("/")
      )}
    </div>
  );
};

export default StudentRoutes;
