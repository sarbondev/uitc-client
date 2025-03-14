import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import { Home } from "./pages/Home";
import { ProjectDetail } from "./pages/ProjectDetail";
import { Courses } from "./pages/Courses";
import { CourseDetail } from "./pages/CourseDetail";

function App() {
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
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
