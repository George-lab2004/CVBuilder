import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Suspense } from "react";
import Layout from "./Layout/Layout";
import Loader from "./Components/UI/Loader";
import Home from "./Pages/Home/Home";
import CvBuilder from "./Pages/CvBuilder/CvBuilder";
import CoverLetter from "./Pages/CoverLetter/CoverLetter";
import MyCvs from "./Pages/MyCvs/MyCvs";
import Login from "./Pages/auth/Login";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<Loader />}>
          <Layout />
        </Suspense>
      ),
      children: [
        { path: "/", element: <Home /> },
        { path: "/buildCV", element: <CvBuilder /> },
        { path: "/coverLetter", element: <CoverLetter /> },
        { path: "/myCVs", element: <MyCvs /> },
        { path: "login", element: <Login /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
