import "./App.css";
import { Routes, Route } from "react-router-dom";
import { appRoutes } from "@routes/App";
import { v4 as uuidv4 } from "uuid";

function App() {
  return (
    <>
      <Routes>
        {appRoutes.map(({ path, component: Page }) => {
          if (path === "/") {
            return <Route key={uuidv4()} path={path} element={<Page to="/auth/login" />} />;
          }
          return <Route key={uuidv4()} path={path} element={<Page />} />;
        })}
      </Routes>
    </>
  );
}

export default App;
