import { Route, Routes } from "react-router-dom";
import SignUp from "../auth/Signup";
import Signin from "../auth/Signin";
import MainHome from "../admin/Mianhome";

import Homepage from "../pages/Homepage";
import Cart from "../pages/cart";
import AdminSignin from "../admin/adminSignin";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/" element={<Signin />}></Route>
        <Route path="/home" element={<Homepage />}></Route>
        <Route path="/admin/*" element={<MainHome />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/admin-signin" element={<AdminSignin />} />
      </Routes>
    </div>
  );
};
export default AllRoutes;
