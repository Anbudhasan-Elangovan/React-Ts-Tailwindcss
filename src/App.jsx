import "./App.css";

import { BrowserRouter } from "react-router";
import { router } from "./routes/routerConfig";
import AppRoutes from "./routes/AppRoutes";

import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
