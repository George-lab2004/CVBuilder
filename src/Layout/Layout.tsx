import { Outlet } from "react-router-dom";
import Navbar from "../Components/UI/Navbar";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
