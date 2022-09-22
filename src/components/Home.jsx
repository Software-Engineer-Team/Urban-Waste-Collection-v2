import { Route, Routes } from "react-router-dom";
import AssignTasks from "./AssignTasks/AssignTasks";
import BackOfficer from "./BackOfficer/BackOfficer";
import Header from "./BackOfficer/Header";
import MemberDetail from "./Staff/MemberDetail";
import Staffs from "./Staff/Staffs";

const Home = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/backofficer" element={<BackOfficer />}></Route>
        <Route path="/assign-tasks" element={<AssignTasks />}></Route>
        <Route
          path="/list-staffs/collectors"
          element={<Staffs type="Collectors Information" />}
        />
        <Route
          path="/list-staffs/janitors"
          element={<Staffs type="Janitors Information" />}
        />
        <Route path="/staff-details/:id" element={<MemberDetail />} />
      </Routes>
    </>
  );
};

export default Home;
