import {
  PageHeader,
  PageHeaderBg,
  PageHeaderContainer,
  AssignTasksHeader,
} from "./AssignTasks.styled";
import AssignTasksDetails from "./AssignTasksDetails";

const AssignTasks = () => {
  return (
    <div style={{ overflow: "scroll", height: "100vh" }}>
      <PageHeader>
        <PageHeaderBg></PageHeaderBg>
        <PageHeaderContainer>
          <h2>Assign Tasks</h2>
          <div>
            UWC2.0 <span>Assign Tasks</span>
          </div>
        </PageHeaderContainer>
      </PageHeader>
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
      <AssignTasksDetails>ddd</AssignTasksDetails>
    </div>
  );
};

export default AssignTasks;
