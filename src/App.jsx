import "./App.css";

import { RouterProvider } from "react-router";
import { router } from "./routes/routerConfig";

import MainLayout from "./layouts/MainLayout";

function App() {
  // return (
  //   <>
  //     <MainLayout />
  //   </>
  // );
  return <RouterProvider router={router} />;
}

export default App;
