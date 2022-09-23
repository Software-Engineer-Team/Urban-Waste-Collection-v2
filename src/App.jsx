import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home";
import ChatRoom from "./components/Chat/ChatRoom/ChatRoom.jsx";
import SideBar from "./components/Chat/SideBar/SideBar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/auth/login" />}></Route>
        <Route path="/auth/login" element={<Login />}></Route>
        <Route path="/home/*" element={<Home />}></Route>
        <Route path="/chat-room" element={<ChatRoom />} />
        <Route path="/chat" element={<SideBar />} />
      </Routes>
    </>
  );
}

export default App;
