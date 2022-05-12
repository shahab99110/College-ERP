import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  Navigate
} from "react-router-dom";

import AdminHomeHelper from "../../Components/AdminHomeHelper";

import AdminHome from "./AdminHome";
import AdminAddAdmin from "./AdminAddAdmin";
import AdminAddFaculty from "./AdminAddFaculty";
import AdminAddStudent from "./AdminAddStudent";
import AdminAddSubject from "./AdminAddSubject";
import AdminGetAllFaculties from "./AdminGetAllFaculties";
import AdminGetAllStudents from "./AdminGetAllStudents";
import AdminGetAllSubjects from "./AdminGetAllSubjects";

const AdminRoutes = () => {
  const store = useSelector((store) => store);

  const navigate = useNavigate();
  return (
    <div>
      {store.admin.isAuthenticated ? (
        <>
          <AdminHomeHelper />
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
        </>
      ) : (
        navigate("/adminLogin")
      )}
    </div>
  );
};

export default AdminRoutes;
