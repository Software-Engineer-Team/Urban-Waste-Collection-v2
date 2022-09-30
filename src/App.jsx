import "./App.css";
import { Routes, Route } from "react-router-dom";
import { appRoutes } from "@routes/App";

function App() {
  return (
    <>
      <Routes>
        {appRoutes.map(({ path, component: Page }) => {
          if (path === "/") {
            return <Route path={path} element={<Page to="/auth/login" />} />;
          }
          return <Route path={path} element={<Page />} />;
        })}
      </Routes>
    </>
  );
}

export default App;
