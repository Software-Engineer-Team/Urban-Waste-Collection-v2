import { useEffect } from "react";

const useScript = (url) => {
  useEffect(() => {
    const div = document.createElement("div");
    div.innerHTML = `
                <div id="formBlock">
                  <input type="text" name="MCP" id="MCP" placeholder="Search MCP point"> 
                  <button id="MCP-btn">Clear all MCP points</button>
                </div>
              `;

    document.body.appendChild(div);
    /* const script = document.createElement("script"); */
    /**/
    /* script.src = url; */
    /* script.async = true; */
    /**/
    /* document.body.appendChild(script); */
    /* handler(); */

    return () => {
      document.body.removeChild(div);
    };
  }, [url]);
};

export default useScript;
