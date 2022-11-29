import { useEffect, useRef, useState } from "react";
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
import { fetchData } from "@utils/util";
import Swal from "sweetalert2";
import { AiFillGithub } from "react-icons/ai";

const AssignTasksForm = ({ url, type }) => {
  const [isAssignRoute, setIsAssignRoute] = useState(false);
  const [areas, setAreas] = useState([]);
  const areasRef = useRef([]);
  const [mcps, setMcps] = useState([]);

  useEffect(() => {
    if (type !== "Collectors") {
      fetchData("/api/areas").then((areas) => {
        areasRef.current = areas;
        setAreas(areas);
      });
    }

    fetchData("/api/MCPs").then((mcps) => setMcps(mcps));
  }, [type]);

  const submitHandler = () => {
    let timerInterval;
    Swal.fire({
      title: "<strong>Processing...</strong>",
      html: "Please wait for a minute!!!",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Task Assignment done",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <AssignTasksListForm>
      <AssignTasksCheckBoxes />
      <AssignTasksListImg>
        <img src={url} alt="Rubish" />
      </AssignTasksListImg>
      <AssignTasksListFormContent>
        <AssignTasksListFormRow>
          <AssignTasksListFormCol>
            <AssignTasksListFormInputSelect
              onChange={(e) => {
                console.log(e.target.value);
                const mcpName = e.target.value;
                console.log(areas);
                setAreas((_preAreas) => {
                  const newAreas = areasRef.current.filter(({ mcp }) => {
                    return mcp.name === mcpName;
                  });
                  return [...newAreas];
                });
              }}
            >
              <option value="Assign MCP">Assign MCP</option>
              {mcps?.map(({ name }, idx) => {
                return (
                  <option key={idx} value={`${name}`}>
                    {name}
                  </option>
                );
              })}
            </AssignTasksListFormInputSelect>

            {type !== "Collectors" && (
              <AssignTasksListFormInputSelect
                onChange={(e) => {
                  console.log(e.target.value);
                }}
              >
                <option value="Assign area">Assign area</option>
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
                  console.log(e.target.value);
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
                  console.log(e.target.value);
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
            <AssignTasksListFormInputTextArea placeholder="Brief description of waste to be removed" />
          </AssignTasksListFormCol>
        </AssignTasksListFormRow>
        <AssignTasksListFormBtn>
          <a href="#" onClick={submitHandler}>
            Submit
          </a>
        </AssignTasksListFormBtn>
      </AssignTasksListFormContent>
    </AssignTasksListForm>
  );
};

export default AssignTasksForm;
