import Login from "./Login";
import RegistrationForm from "./Register";

import { Route, Routes } from "react-router-dom";
import Tournament from "./Tournament";
import Table from "./TimeTable";
import Staff from "./Staff";
import Home from "./Home";
import ForgotPassword from "./ResetPass";

function Auth() {
  return (
    <div>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/reset-password" element={<ForgotPassword />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tournament" element={<Tournament />} />
        <Route path="/timetable" element={<Table />} />
        <Route path="/staff-details" element={<Staff />} />
      </Routes>
    </div>
  );
}

export default Auth;
