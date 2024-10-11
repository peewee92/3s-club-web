// import Home from "./pages/home";
import Layouts from "@/layouts";
import { Navigate, createHashRouter } from "react-router-dom";
import Home from "@/pages/home";
import PartnerPlan from "@/pages/partner-plan";
import Introduction from "@/pages/introduction";
import Projects from "@/pages/projects";
import Resources from "@/pages/resources";
import Web3Events from "@/pages/web3-events";

const router = createHashRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        path: '',
        element: <Navigate to="/home" />
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "introduction",
        element: <Introduction />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "resources",
        element: <Resources />,
      },
      {
        path: "partnerPlan",
        element: <PartnerPlan />,
      },
      {
        path: "web3Events",
        element: <Web3Events />,
      },
    ],
  },
]);

export default router;
