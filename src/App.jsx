import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import { Home } from "./pages/Home";
import { ProjectDetail } from "./pages/ProjectDetail";
import { Projects } from "./pages/Projects";
import { Courses } from "./pages/Courses";
import { CourseDetail } from "./pages/CourseDetail";
import Welcome from "./components/Welcome/Welcome";

function App() {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsAnimating(false);
    }, 4200);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "courses/:id",
          element: <CourseDetail />,
        },
        {
          path: "courses",
          element: <Courses />,
        },
        {
          path: "loyihalar/:id",
          element: <ProjectDetail />,
        },
        {
          path: "loyihalar",
          element: <Projects />,
        },
      ],
    },
  ]);

  // if (isAnimating) {
  //   return <Welcome />;
  // }

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
