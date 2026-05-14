import { createBrowserRouter } from "react-router";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHome from '../pages/Home/Deshboard/DashboardHome'
import AddProduct from "../pages/Home/Deshboard/AddProduct";
import ManageProducts from "../pages/Home/Deshboard/ManageProducts";
import Orders from "../pages/Home/Deshboard/Orders";
import Profile from "../pages/Home/Deshboard/Porfile";
import Users from "../pages/Home/Deshboard/Users";
 

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home</h1>,
  },
 
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,

    children: [
      {
        index: true,
         element: <DashboardHome></DashboardHome>
      },
      {
        path:"add-product",
        element: <AddProduct></AddProduct>
      },
      {
        path:"manage-products",
        element: <ManageProducts></ManageProducts>
      },
      {
        path: "orders",
        element: <Orders></Orders>
      },
      {
        path: "profile",
        element: <Profile></Profile>
      }, 
      {
        path:"users",
        element: <Users></Users>
      }
    ]

  }
]);

export default router;





















// import { createBrowserRouter } from "react-router";

// import DashboardLayout from "../layouts/DashboardLayout";

// // pages
// import DashboardHome from "../pages/Dashboard/DashboardHome";
// import AddProduct from "../pages/Dashboard/AddProduct";
// import ManageProducts from "../pages/Dashboard/ManageProducts";
// import Orders from "../pages/Dashboard/Orders";
// import Users from "../pages/Dashboard/Users";
// import Profile from "../pages/Dashboard/Profile";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <h1>Home</h1>
//   },

//   {
//     path: "/dashboard",
//     element: <DashboardLayout />,
//     children: [
//       {
//         index: true,
//         element: <DashboardHome />,
//       },
//       {
//         path: "add-product",
//         element: <AddProduct />,
//       },
//       {
//         path: "manage-products",
//         element: <ManageProducts />,
//       },
//       {
//         path: "orders",
//         element: <Orders />,
//       },
//       {
//         path: "users",
//         element: <Users />,
//       },
//       {
//         path: "profile",
//         element: <Profile />,
//       },
//     ],
//   },
// ]);

// export default router;