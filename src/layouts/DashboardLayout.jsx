// import { NavLink, Outlet } from "react-router";
 

// const DashboardLayout = () => {
//   return (
//     <div className="flex min-h-screen">
      
//       {/* Sidebar */}
//       <div className="w-64 bg-black text-white p-5">
//         <h2 className="text-2xl font-bold mb-8">
//           Dashboard
//         </h2>

//         <ul className="space-y-4">
//           <li>Home</li>
//           <li>Add Product</li>
//           <li>Manage Products</li>
//           <li>Orders</li>
//           <li>Users</li>
//           <li>Profile</li>
//         </ul>
//       </div>

//       {/* Content */}
//       <div className="flex-1 p-5 bg-gray-100">
//         <Outlet />
//       </div>
//     </div>

    
//   );
// };

// export default DashboardLayout;

















import { NavLink, Outlet } from "react-router";

const linkStyle = ({ isActive }) =>
  isActive
    ? "block text-yellow-400 font-bold"
    : "block text-white";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <div className="w-64 bg-black text-white p-5">
        <h2 className="text-2xl font-bold mb-8">
          Dashboard
        </h2>

        <ul className="space-y-4">
          <li>
            <NavLink to="/dashboard" end className={linkStyle}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="add-product" className={linkStyle}>
              Add Product
            </NavLink>
          </li>

          <li>
            <NavLink to="manage-products" className={linkStyle}>
              Manage Products
            </NavLink>
          </li>

          <li>
            <NavLink to="orders" className={linkStyle}>
              Orders
            </NavLink>
          </li>

          <li>
            <NavLink to="users" className={linkStyle}>
              Users
            </NavLink>
          </li>

          <li>
            <NavLink to="profile" className={linkStyle}>
              Profile
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Content */}
      <div className="flex-1 p-5 bg-gray-100">
        <Outlet />
      </div>

    </div>
  );
};

export default DashboardLayout;