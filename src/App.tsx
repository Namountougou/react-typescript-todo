import { createBrowserRouter, RouterProvider } from "react-router-dom/dist";
import "./App.css";
import Routing from "./pages/Routing";
function App() {
  const router = createBrowserRouter([
    {
      path: "*",
      element: <Routing />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
