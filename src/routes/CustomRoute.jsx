import { Route, Routes } from "react-router-dom";
import Home from "../pages/HomePage/Home";
import AdminManagement from "../pages/AdminPage/AdminManagenetment";
const CustomRoute = () => {
  return (
    <Routes>
      {/* HomePage */}
      <Route path="/" element={<Home />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
      </Route>

      {/* Admin */}
      <Route path="/admin" element={<AdminManagement />}>
        <Route index element={<AdminManagement />} />
      </Route>
    </Routes>
  );
};

export default CustomRoute;
