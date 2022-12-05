import { useEffect, useRef, useState } from "react";
import React from "react";
import AssignTasksCheckBoxes from "../AssignTasksCheckBoxes/AssignTasksCheckBoxes";
import {
  AssignTasksListForm,
  AssignTasksListFormBtn,
  AssignTasksListFormCol,
  AssignTasksListFormContent,
  AssignTasksListFormDate,
  AssignTasksListFormInputSelect,
  AssignTasksListFormInputText,
  AssignTasksListFormInputTextArea,
  AssignTasksListFormRow,
  AssignTasksListImg,
} from "./AssignTasksForm.styled";
import { fetchData, sweetAlertHelper, postData } from "@utils/util";
import { Fade } from "react-reveal";
import { useNavigate } from "react-router-dom";

const AssignTasksForm = ({ url, type }) => {
  const [areas, setAreas] = useState([]);
  const collectorTaskRef = useRef({});
  const janitorTaskRef = useRef({});
  const areasRef = useRef([]);
  const [routes, setRoutes] = useState([]);
  const routesRef = useRef([]);
  const [users, setUsers] = useState([]);
  const usersRef = useRef([]);
  const [mcps, setMcps] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (type !== "Collectors") {
      fetchData("/api/areas").then((areas) => {
        areasRef.current = areas;
        setAreas(areas);
      });
    } else {
      fetchData("/api/routes").then((routes) => {
        routesRef.current = routes;
        setRoutes(routes);
      });
    }

    fetchData("/api/MCPs").then((mcps) => setMcps(mcps));
    let url = "";
    if (type === "Collectors") {
      url = `/api/users-role?roleName=ROLE_COLLECTOR`;
    } else {
      url = "/api/users-role?roleName=ROLE_JANITOR";
    }

    fetchData(url).then((users) => {
      usersRef.current = users;
      setUsers(users);
    });
  }, [type]);

  const submitHandler = () => {
    let url = "";
    let data = {};
    if (type === "Collectors") {
      const collectorTaskData = collectorTaskRef.current;
      url = `/api/collector-task/save?userName=${collectorTaskData.userName}&routeName=${collectorTaskData.routeName}&mcpName=${collectorTaskData.mcpName}`;
      data = {
        description: collectorTaskData.description,
        taskTime: {
          day: collectorTaskData.day,
          time: collectorTaskData.time,
        },
      };
    } else {
      const janitorTaskData = janitorTaskRef.current;
      url = `/api/janitor-task/save?userName=${janitorTaskData.userName}&mcpName=${janitorTaskData.mcpName}&areaName=${janitorTaskData.areaName}`;
      data = {
        description: janitorTaskData.description,
        taskTime: {
          day: janitorTaskData.day,
          time: janitorTaskData.time,
        },
      };
    }
    sweetAlertHelper("Task Assignment done", () => {
      postData(data, url);
      navigate("/home");
    });
  };

  const changeMCPHandler = (e) => {
    const mcpName = e.target.value;
    if (type !== "Collectors") {
      janitorTaskRef.current.mcpName = mcpName;
      setAreas((_preAreas) => {
        const newAreas = areasRef.current.filter(({ mcp }) => {
          return mcp.name === mcpName;
        });
        return [...newAreas];
      });
    } else {
      collectorTaskRef.current.mcpName = mcpName;
      setRoutes((_preRoutes) => {
        const newRoutes = routesRef.current.filter(({ mcp }) => {
          return mcp.name === mcpName;
        });
        return [...newRoutes];
      });
    }
  };

  return (
    <AssignTasksListForm>
      <Fade bottom>
        <AssignTasksCheckBoxes />
        <AssignTasksListImg>
          <div style={{ background: "#f5f0ea", width: "400px" }}>
            <img src={url} alt="Rubish" />
          </div>
        </AssignTasksListImg>
        <AssignTasksListFormContent>
          <AssignTasksListFormRow>
            <AssignTasksListFormCol>
              <AssignTasksListFormInputSelect
                onChange={(e) => {
                  if (type === "Collectors") {
                    collectorTaskRef.current.userName = e.target.value;
                  } else {
                    janitorTaskRef.current.userName = e.target.value;
                  }
                }}
              >
                <option value="Assign route">Choose {type}</option>
                {users?.map(({ name, email }, idx) => {
                  return (
                    <option key={idx} value={`${name}`}>
                      {name}
                    </option>
                  );
                })}
              </AssignTasksListFormInputSelect>

              <AssignTasksListFormInputSelect onChange={changeMCPHandler}>
                <option value="Assign MCP">Assign MCP</option>
                {mcps?.map(({ name }, idx) => {
                  return (
                    <option key={idx} value={`${name}`}>
                      {name}
                    </option>
                  );
                })}
              </AssignTasksListFormInputSelect>

              {type === "Collectors" && (
                <AssignTasksListFormInputSelect
                  onChange={(e) => {
                    collectorTaskRef.current.routeName = e.target.value;
                  }}
                >
                  <option value="Assign route">Assign route</option>
                  {routes?.map(({ name, point, endPoint }, idx) => {
                    return (
                      <option key={idx} value={`${name}`}>
                        {name}
                      </option>
                    );
                  })}
                </AssignTasksListFormInputSelect>
              )}

              {type !== "Collectors" && (
                <AssignTasksListFormInputSelect
                  onChange={(e) => {
                    janitorTaskRef.current.areaName = e.target.value;
                  }}
                >
                  <option value="Assign Area">Assign Area</option>
                  {areas?.map(({ description }, idx) => {
                    return (
                      <option key={idx} value={`${description}`}>
                        {description}
                      </option>
                    );
                  })}
                </AssignTasksListFormInputSelect>
              )}
              {/* <AssignTasksListFormInputText */}
              {/*   placeholder={type === "Collectors" ? "Assign MCP" : "Assign area"} */}
              {/*   wid="100%" */}
              {/*   onClick={() => setIsAssignRoute(!isAssignRoute)} */}
              {/* /> */}
              <AssignTasksListFormDate>
                <AssignTasksListFormInputText
                  type="text"
                  wid="45%"
                  onChange={(e) => {
                    if (type === "Collectors") {
                      collectorTaskRef.current.day = e.target.value;
                    } else {
                      janitorTaskRef.current.day = e.target.value;
                    }
                  }}
                  onMouseEnter={(e) => {
                    e.target.disabled = false;
                    return (e.target.type = "date");
                  }}
                  onMouseLeave={(e) => {
                    e.target.disabled = true;
                    return (e.target.type = "text");
                  }}
                  placeholder="Pick up date"
                />
                <AssignTasksListFormInputText
                  type="text"
                  wid="45%"
                  onChange={(e) => {
                    if (type === "Collectors") {
                      collectorTaskRef.current.time = e.target.value;
                    } else {
                      janitorTaskRef.current.time = e.target.value;
                    }
                  }}
                  onMouseEnter={(e) => {
                    e.target.disabled = false;
                    return (e.target.type = "time");
                  }}
                  onMouseLeave={(e) => {
                    e.target.disabled = true;
                    return (e.target.type = "text");
                  }}
                  placeholder="Pick up time"
                />
              </AssignTasksListFormDate>
            </AssignTasksListFormCol>
            <AssignTasksListFormCol>
              <AssignTasksListFormInputTextArea
                placeholder="Brief description of waste to be removed"
                onChange={(e) => {
                  if (type === "Collectors") {
                    collectorTaskRef.current.description = e.target.value;
                  } else {
                    janitorTaskRef.current.description = e.target.value;
                  }
                }}
              />
            </AssignTasksListFormCol>
          </AssignTasksListFormRow>
          <AssignTasksListFormBtn>
            <a href="#" onClick={submitHandler}>
              Submit
            </a>
          </AssignTasksListFormBtn>
        </AssignTasksListFormContent>
      </Fade>
    </AssignTasksListForm>
  );
};

export default AssignTasksForm;
