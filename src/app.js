import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
//import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import { Suspense, lazy } from "react";
import Shimmer from "./components/shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

//PLanning;
// Header
//   -Logo
//   -nav-items
// Body
//   -Search
//   -RestarauntContainer
//   -RestroCards
// Footer
//   -CopyRights
//   -Links etc...

const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [username, setUserName] = useState();
  //Authentication
  useEffect(() => {
    //MAke an API call and getting username and password
    const data = {
      name: "Rajesh",
    };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: username, setUserName }}>
        <div className="app">
          {/* <UserContext.Provider value={{ loggedInUser: "xyz" }}> */}
          <Header />
          {/* </UserContext.Provider> */}
          <Outlet />
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        // <Suspense fallback={<Shimmer />}>
        // </Suspense>
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
