import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import CreateHotel from "./pages/HotelList/component/CreateHotel";
import EditHotel from "./pages/HotelList/component/EditHotel";
import HotelList from "./pages/HotelList/HotelList";
import CreatePlace from "./pages/PlaceList/component/CreatePlace";
import EditPlace from "./pages/PlaceList/component/EditPlace";
import PlaceList from "./pages/PlaceList/PlaceList";
import CreateTour from "./pages/TourList/component/CreateTour";
import EditTour from "./pages/TourList/component/EditTour";
import TourList from "./pages/TourList/TourList";
import Create from "./pages/UserList/page/Create/Create";
import Edit from "./pages/UserList/page/Edit/Edit";
import UserList from "./pages/UserList/UserList";

const AdminRouter = () => {
  return (
    <div className="admin__router">
      <Routes>
        <Route path="admin" element={<Outlet />}>
          <Route path="users" element={<UserList />} />
          <Route path="users/edit/:id" element={<Edit />} />
          <Route path="users/create" element={<Create />} />
          {/*  */}
          <Route path="places" element={<PlaceList />} />
          <Route path="places/create" element={<CreatePlace />} />
          <Route path="places/edit/:id" element={<EditPlace />} />

          {/*  */}
          <Route path="hotels" element={<HotelList />} />
          <Route path="hotels/create" element={<CreateHotel />} />
          <Route path="hotels/edit/:id" element={<EditHotel />} />
          {/*  */}
          <Route path="tours" element={<TourList />} />
          <Route path="tours/create" element={<CreateTour />} />
          <Route path="tours/edit/:id" element={<EditTour />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AdminRouter;
