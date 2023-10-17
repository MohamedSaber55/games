import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import GameDetails from "./Pages/GameDetails";
import NotFound from "./Pages/NotFound";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Games from "./Pages/Games";

function App() {

  const routes = createBrowserRouter([
    {
      path: "/", element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: "/game/:gameId", element: <GameDetails /> },
        { path: "/games", element: <Games /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "*", element: <NotFound /> },
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
