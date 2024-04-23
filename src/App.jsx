import HomeChat from "./views/HomeChat";
import SalasInv from "./views/SalasInv";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import io from "socket.io-client"
const socket = io("http://localhost:3001");

import "./App.css";
const router = createBrowserRouter([
  {
    path: "/salas",
    element: <SalasInv socket={socket} />,
  },
  {
    path: "/",
    element: <HomeChat socket={socket} />,
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
