import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  Navigate
} from "react-router-dom";

import FacultyHomeHelper from "../../Components/FacultyHomeHelper";

import AttendenceFaculty from "./AttendenceFaculty";
import FacultyHome from "./FacultyHome";
import FacultyUpdatePassword from "./FacultyUpdatePassword";
import FacultyUpdateProfile from "./FacultyUpdateProfile";
import FacultyUploadMarks from "./FacultyUploadMarks";
import NotFound from "../../Components/NotFound";

const FacultyRoutes = () => {
  const store = useSelector((store) => store);

  const navigate = useNavigate();
  return (
    <div>
      {store.faculty.isAuthenticated ? (
        <>
          <FacultyHomeHelper />
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
            <Route path="/attendenceFaculty" element={<AttendenceFaculty />} />
            <Route path="/*" element={<Navigate replace to="/faculty" />} />
          </Routes>
        </>
      ) : (
        navigate("/")
      )}
    </div>
  );
};

export default FacultyRoutes;
