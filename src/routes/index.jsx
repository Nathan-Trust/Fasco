import { createBrowserRouter } from "react-router-dom";
import { Fasco_Routes } from "../store/routes";
import Home from "../app/landing-page/page";
import LandingPageLayout from "../app/landing-page/layout";

export const router = createBrowserRouter([
  {
    element: <LandingPageLayout />,
    children: [
      {
        path: Fasco_Routes.home,
        element:<Home/>
      }
    ]
  },
]);
