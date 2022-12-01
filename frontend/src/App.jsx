import "./App.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./page/Home/Home";
import SignIn from "./page/Auth/SignIn/SignIn";
import SignUp from "./page/Auth/SignUp/SignUp";
import PlaceMost from "./page/Place/PlaceMost";
import Overview from "./page/introDanang/Overview/Overview";
import Weather from "./page/introDanang/Weather/Weather";
import History from "./page/introDanang/History/History";
function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/trang-chu" element={<Home />} />
            <Route path="/diem-den-nhieu-nhat/:slug" element={<PlaceMost />} />
            <Route path="/khu-vuc">
              <Route path="hai-chau" element={<Outlet />} />
              <Route path="son-tra" element={<Outlet />} />
              <Route path="ngu-hanh-son" element={<Outlet />} />
              <Route path="lien-chieu" element={<Outlet />} />
              <Route path="thanh-khe" element={<Outlet />} />
              <Route path="cam-le" element={<Outlet />} />
            </Route>
            <Route path="/gioi-thieu">
              <Route path="tong-quan-da-nang" element={<Overview />} />
              <Route path="thoi-tiet-da-nang" element={<Weather />} />
              <Route path="lich-su-da-nang" element={<History />} />
            </Route>
            <Route path="/diem-du-lich">
              <Route path="dia-diem-tham-quan" element={<Outlet />} />
              <Route path="bai-bien-dep" element={<Outlet />} />
              <Route path="van-hoa-tin-nguong-ban-dia" element={<Outlet />} />
              <Route path="dia-diem-vui-choi-hap-dan" element={<Outlet />} />
              <Route path="dia-diem-checkin-hap-dan" element={<Outlet />} />
            </Route>
            <Route path="/trai-nghiem">
              <Route path="khack-san" element={<Outlet />} />
              <Route path="tour-du-lich" element={<Outlet />} />
            </Route>
            <Route path="/lien-he" element={<Outlet />} />
          </Route>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
