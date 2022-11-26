import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const usePlaceSearch = (url, cb) => {
  const [formBlock, setFormBlock] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const div = document.createElement("div");
    div.innerHTML = `
                <div id="formBlock">
                  <input type="text" name="MCP" id="MCP" placeholder="Search MCP point" /> 
                  <button id="MCP-btn">Clear all MCP points</button>
                  <button id="turn-back">Turn back</button>
                </div>
              `;
    const link = div.querySelector("#turn-back");
    link.addEventListener("click", (e) => {
      e.preventDefault();
      /* cb(); */
      navigate(url);
    });

    /* div.innerHTML = <PlaceSearchForm />; */

    document.body.appendChild(div);
    setFormBlock(div);
    return () => {
      cb();
      document.body.removeChild(div);
      setFormBlock(null);
    };
  }, [url]);

  return [formBlock, setFormBlock];
};

export default usePlaceSearch;
