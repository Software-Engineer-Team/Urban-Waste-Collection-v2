import { ChatRoom, Login } from "@pages/App";
import Home from "@components/Home/Home";
import { Navigate } from "react-router-dom";

export const appRoutes = [
  { path: "/", component: Navigate },
  { path: "/auth/login", component: Login },
  { path: "chat-room", component: ChatRoom },
  { path: "/home/*", component: Home },
];
