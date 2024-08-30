import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./Footer";
import PlayMovie from "./PlayMovie";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/movie/:movieId",
      element: <PlayMovie />,
    },
    {
      path: "/browse",
      element: (
        <>
          <Browse /> <Footer />
        </>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
