import Login from "./Login";
import RegistrationForm from "./Register";

import { Route, Routes } from "react-router-dom";
import Tournament from "./Tournament";
import Table from "./TimeTable";
import Staff from "./Staff";
import Home from "./Home";
import ForgotPassword from "./ResetPass";
import { ToastContainer } from "react-toastify";
import TournamentList from "./TournamentCard";
import StaffList from "./StaffCard";
import PrivateRoute from "./PrivateRoute";

function Auth() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/reset-password" element={<ForgotPassword />} />
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/tournament" element={<Tournament />} />
          <Route path="/timetable" element={<Table />} />
          <Route path="/card" element={<TournamentList />} />
          <Route path="/staff-data" element={<StaffList />} />
          <Route path="/staff-details" element={<Staff />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default Auth;
