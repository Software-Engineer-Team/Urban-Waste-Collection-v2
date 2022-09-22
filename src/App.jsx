import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/auth/login" />}></Route>
        <Route path="/auth/login" element={<Login />}></Route>
        <Route path="/home/*" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
