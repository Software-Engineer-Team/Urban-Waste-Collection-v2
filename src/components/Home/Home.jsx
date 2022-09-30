import { Route, Routes } from "react-router-dom";
import Header from "@components/BackOfficer/Header";
import { homeRoutes } from "@routes/Home";

const Home = () => {
  return (
    <>
      <Header />
      <Routes>
        {homeRoutes.map(({ path, component: SubPage, type }) => {
          return <Route path={path} element={<SubPage />} type={type} />;
        })}
      </Routes>
    </>
  );
};

export default Home;
