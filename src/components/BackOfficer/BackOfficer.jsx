import Header from "./Header";
import Body from "./Body";
import Features from "./Features";
import AssignTasks from "../AssignTasks/AssignTasks";
/* import Body from "./Body"; */
/* import Features from "./Features"; */
const BackOfficer = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Header></Header>
      <AssignTasks></AssignTasks>
      {/* <Body></Body> */}
      {/* <Features></Features> */}
    </div>
  );
};

export default BackOfficer;
