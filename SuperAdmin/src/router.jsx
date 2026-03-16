import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import Agencies from "./pages/Agencies";
import Users from "./pages/Users";
import Tours from "./pages/Tours";
import Bookings from "./pages/Bookings";
import Plans from "./pages/Plans";
import Settings from "./pages/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/agencies", element: <Agencies /> },
      { path: "/users", element: <Users /> },
      { path: "/tours", element: <Tours /> },
      { path: "/bookings", element: <Bookings /> },
      { path: "/plans", element: <Plans /> },
      { path: "/settings", element: <Settings /> }
    ]
  }
]);