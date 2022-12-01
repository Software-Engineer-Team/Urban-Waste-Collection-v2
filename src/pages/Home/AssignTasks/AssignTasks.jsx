import React from "react";
import GeneralHeader from "@utils/GeneralHeader";
import { AssignTasksHeader } from "./AssignTasks.styled";
import AssignTasksDetails from "@components/AssignTasks/AssignTasksDetails";
import { Slide } from "react-reveal";

const AssignTasks = () => {
  return (
    <div style={{ overflow: "scroll", height: "100vh" }}>
      <GeneralHeader type="Assign Tasks" />
      <AssignTasksHeader>
        <Slide right>
          <div className="container">
            <div className="row">
              <h2>Bạn có quan tâm đến Phân công nhiệm vụ không?</h2>
              <p>
                Nhận các mẹo và thông tin về cách quản lý chất thải hiệu quả và
                giảm tác động đến môi trường.
                <br /> Cần thêm thông tin? <a href="">Gọi +84 0400-0096</a> để
                nói chuyện với chuyên gia Wostin.
              </p>
            </div>
          </div>
        </Slide>
      </AssignTasksHeader>
      <AssignTasksDetails></AssignTasksDetails>
    </div>
  );
};

export default AssignTasks;
