import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login/Login";
import BackOfficer from "./components/BackOfficer/BackOfficer";
import Staffs from "./components/Staff/Staffs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth/login" />}></Route>
      <Route path="/auth/login" element={<Login />}></Route>
      <Route path="/home/backofficer" element={<BackOfficer />}></Route>
      <Route path="/home/list-staffs" element={<Staffs />} />
    </Routes>
  );
}

export default App;
