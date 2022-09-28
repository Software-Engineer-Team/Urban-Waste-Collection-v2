import { useEffect } from "react";

export default function useClickOutside(ref, handler) {
  const listener = (e) => {
    const el = ref?.current;
    if (el && el.contains(e.target)) {
      return;
    }
    handler(e);
  };
  useEffect(() => {
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
  return ref;
}
