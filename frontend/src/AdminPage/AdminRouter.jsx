import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Edit from "./pages/UserList/page/Edit/Edit";
import UserList from "./pages/UserList/UserList";

const AdminRouter = () => {
  return (
    <div className="admin__router">
      <Routes>
        <Route path="admin" element={<Outlet />}>
          <Route path="users" element={<UserList />} />
          <Route path="users/edit/:id" element={<Edit />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AdminRouter;
