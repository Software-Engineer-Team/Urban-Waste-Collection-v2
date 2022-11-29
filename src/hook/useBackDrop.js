import { useEffect } from "react";

const useBackDrop = (elId, onClick = () => {}) => {
  useEffect(() => {
    let backDropEl = document.createElement("div");
    backDropEl.style.cssText = `
      width: 100vw;
      height: 100vh;
      opacity: 1;
      transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      z-index: -10;
      position: fixed;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.3);
      -webkit-tap-highlight-color: transparent;
  `;
    backDropEl.addEventListener("click", onClick);
    document.getElementById(elId)?.appendChild(backDropEl);
    return () => {
      document.getElementById(elId)?.removeChild(backDropEl);
      backDropEl.removeEventListener("click", () => {});
    };
  }, [elId, onClick]);
};

export default useBackDrop;
