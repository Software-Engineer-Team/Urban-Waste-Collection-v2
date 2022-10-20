import React from "react";
import GeneralHeader from "@utils/GeneralHeader";
import { AssignTasksHeader } from "./AssignTasks.styled";
import AssignTasksDetails from "@components/AssignTasks/AssignTasksDetails";

const AssignTasks = () => {
  return (
    <div style={{ overflow: "scroll", height: "100vh" }}>
      <GeneralHeader type="Assign Tasks" />
      <AssignTasksHeader>
        <div className="container">
          <div className="row">
            <h2>Are you Interested in a Pickup?</h2>
            <p>
              Get tips and info on how to manage waste effectively and reduce
              environmental impact.
              <br /> Need more info? <a href="">Call +1- (246) 333-0088</a> to
              speak with a Wostin expert.
            </p>
          </div>
        </div>
      </AssignTasksHeader>
      <AssignTasksDetails></AssignTasksDetails>
    </div>
  );
};

export default AssignTasks;
