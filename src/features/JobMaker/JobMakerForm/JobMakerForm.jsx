import React from "react";
import { Container } from "./JobMakerForm.styled";
import JanitorTaskForm from "./JanitorTaskForm";
import CollectorTaskForm from "./CollectorTaskForm";

const JobMakerForm = ({ type, janitorTasks, collectorTasks }) => {
  console.log(janitorTasks, collectorTasks, type);
  return (
    <Container>
      {type === "Janitors" ? (
        <>
          {janitorTasks.map(
            ({ taskTime, description, areas, mcp, janitor }, idx) => {
              return (
                <JanitorTaskForm
                  key={idx}
                  taskTime={taskTime}
                  description={description}
                  mcp={mcp}
                  janitor={janitor}
                  areas={areas}
                />
              );
            }
          )}
        </>
      ) : (
        <>
          {collectorTasks.map(
            ({ description, taskTime, collector, route }, idx) => {
              return (
                <CollectorTaskForm
                  key={idx}
                  description={description}
                  taskTime={taskTime}
                  route={route}
                  collector={collector}
                />
              );
            }
          )}
        </>
      )}
    </Container>
  );
};

export default JobMakerForm;
