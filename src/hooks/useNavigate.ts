import { useState } from "react";
import { useNavigate } from "react-router-dom";

const usePageNavigate = () => {
  const navigationList = [
    { name: "nav.home", path: "/home", current: true },
    { name: "nav.introduction", path: "/introduction", current: false },
    { name: "nav.projects", path: "/projects", current: false },
    { name: "nav.resources", path: "/resources", current: false },
    { name: "nav.partner", path: "/partnerPlan", current: false },
    { name: "nav.events", path: "/web3Events", current: false },
  ];
  const [currentPath, setCurrentPath] = useState<string>("/home");
  const navigate = useNavigate();
  return {
    navigationList,
    navigate,
  };
};

export default usePageNavigate;
