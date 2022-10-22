import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "@components/BackOfficer/Header";
import { homeRoutes } from "@routes/Home";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  return (
    <>
      <Header />
      <Routes>
        {homeRoutes.map(({ path, component: SubPage, type }) => {
          return (
            <Route
              key={uuidv4()}
              path={path}
              element={<SubPage />}
              type={type}
            />
          );
        })}
      </Routes>
    </>
  );
};

export default Home;
