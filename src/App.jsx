import "./App.css";
import { Routes, Route } from "react-router-dom";
import { appRoutes } from "@routes/App";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { LoaderWrap } from "@components/index";

function App() {
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    const onPageLoad = () => {
      setTimeout(() => {
        setIsPageLoading(false);
      }, 1000);
    };

    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);

      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);
  return (
    <>
      <LoaderWrap isPageLoading={isPageLoading} />
      <Routes>
        {appRoutes.map(({ path, component: Page }) => {
          if (path === "/") {
            return (
              <Route
                key={uuidv4()}
                path={path}
                element={<Page to="/auth/login" />}
              />
            );
          }
          return <Route key={uuidv4()} path={path} element={<Page />} />;
        })}
      </Routes>
    </>
  );
}

export default App;
