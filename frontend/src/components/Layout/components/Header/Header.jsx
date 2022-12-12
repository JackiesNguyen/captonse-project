import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { format } from "date-fns";
import { FaMailBulk } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { MdPlace } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AiOutlineArrowRight, AiOutlineUser } from "react-icons/ai";

import logomain from "../../../../assets/images/LOGO.png";
import { BsCaretDownFill } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";

import "./Header.scss";
import { useSelector } from "react-redux";
import axios from "axios";
const Header = () => {
  const [time, setTime] = useState();
  useEffect(() => {
    const timeId = setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timeId);
  }, [time]);

  const navigate = useNavigate();
  const today = format(new Date(), `EEEE, dd-MM-yyyy`);
  const auth = useSelector((state) => state.auth);
  const { user, isLogged } = auth;
  const handleLogout = async () => {
    try {
      await axios.get("/api/user/logout");
      localStorage.removeItem("firstLogin");
      window.location.href = "/signin";
    } catch (error) {
      window.location.href = "/";
    }
  };
  const userLink = () => {
    return (
      <div className="auth__user">
        <div className="user-container">
          <img src={user.avatar} alt="" />
          <p>{user.name}</p>
          <AiFillCaretDown />
          <ul className="user-content">
            <li>
              <Link to="/profile">Profie</Link>
            </li>
            <li>
              <Link to="/" onClick={handleLogout}>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  const [navbar, setNavbar] = useState(false);
  const sticky = () => {
    const navbar = document.querySelector(".header__bot");
    const navHeight = navbar.getBoundingClientRect().height;
    window.scrollY > navHeight ? setNavbar(true) : setNavbar(false);
  };
  window.addEventListener("scroll", sticky);

  return (
    <header className="header">
      <div className="header__top">
        <Container>
          <div className="header__top-container">
            <p>
              {today}, {time}
            </p>
            <div className="header__top-left">
              <ul>
                <li>
                  <FaMailBulk />
                  <span>travelcaps@gmail.com</span>
                </li>
                <li>
                  <BiPhoneCall />
                  <span>012345678</span>
                </li>
                <li>
                  <MdPlace />
                  <span>Đà Nẵng</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      <div className={!navbar ? "header__bot" : "header__bot sticky"}>
        <Container>
          <div className="header__bot-container">
            <a href="/" className="header__bot-logo">
              <img src={logomain} alt={logomain} />
            </a>
            <div className="header__bot-category">
              Chọn khu vực <BsCaretDownFill />
              <ul className="area">
                <li>
                  <NavLink id="RouterNavLink" to="/khu-vuc/hai-chau">
                    Hải Châu
                  </NavLink>
                </li>
                <li>
                  <NavLink id="RouterNavLink" to="/khu-vuc/son-tra">
                    Sơn Trà
                  </NavLink>
                </li>
                <li>
                  <NavLink id="RouterNavLink" to="/khu-vuc/ngu-hanh-son">
                    Ngũ Hành Sơn
                  </NavLink>
                </li>
                <li>
                  <NavLink id="RouterNavLink" to="/khu-vuc/lien-chieu">
                    Liên Chiểu
                  </NavLink>
                </li>
                <li>
                  <NavLink id="RouterNavLink" to="/khu-vuc/thanh-khe">
                    Thanh Khê
                  </NavLink>
                </li>
                <li>
                  <NavLink id="RouterNavLink" to="/khu-vuc/cam-le">
                    Thanh Khê
                  </NavLink>
                </li>
              </ul>
            </div>
            <ul className="menu">
              <li className="menu-item">
                <NavLink id="RouterNavLink" to="/" className="menu-link">
                  Trang chủ
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink
                  id="RouterNavLink"
                  to="/gioi-thieu"
                  className="menu-link"
                >
                  Giới thiệu
                  <ul className="introList">
                    <li>
                      <AiOutlineArrowRight />
                      <NavLink
                        id="RouterNavLink"
                        to="/gioi-thieu/thoi-tiet-da-nang"
                      >
                        Thời tiết Đà Nẵng
                      </NavLink>
                    </li>
                    <li>
                      <AiOutlineArrowRight />
                      <NavLink
                        id="RouterNavLink"
                        to="/gioi-thieu/tong-quan-da-nang"
                      >
                        Tổng quan Đà Nẵng
                      </NavLink>
                    </li>
                    <li>
                      <AiOutlineArrowRight />
                      <NavLink
                        id="RouterNavLink"
                        to="/gioi-thieu/lich-su-da-nang"
                      >
                        Lịch sử đà nẵng
                      </NavLink>
                    </li>
                  </ul>
                </NavLink>
              </li>
              <li className="menu-item">
                <div className="menu-link" style={{ cursor: "pointer" }}>
                  Điểm du lịch
                  <ul className="categoryList">
                    <li>
                      <AiOutlineArrowRight />
                      <NavLink
                        id="RouterNavLink"
                        to="diem-du-lich/dia-diem-tham-quan"
                      >
                        Địa điểm tham quan
                      </NavLink>
                    </li>
                    <li>
                      <AiOutlineArrowRight />
                      <NavLink
                        id="RouterNavLink"
                        to="diem-du-lich/bai-bien-dep"
                      >
                        Bãi biển đẹp
                      </NavLink>
                    </li>

                    <li>
                      <AiOutlineArrowRight />
                      <NavLink
                        id="RouterNavLink"
                        to="diem-du-lich/van-hoa-tin-nguong-ban-dia"
                      >
                        Văn hoá tín ngưỡng bản địa
                      </NavLink>
                    </li>
                    <li>
                      <AiOutlineArrowRight />
                      <NavLink
                        id="RouterNavLink"
                        to="diem-du-lich/dia-diem-vui-choi-hap-dan"
                      >
                        Địa điểm vui chơi hấp dẫn
                      </NavLink>
                    </li>
                    <li>
                      <AiOutlineArrowRight />
                      <NavLink
                        id="RouterNavLink"
                        to="diem-du-lich/dia-diem-checkin-hap-dan"
                      >
                        Địa điểm check-in hấp dẫn
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="menu-item">
                <div className="menu-link" style={{ cursor: "pointer" }}>
                  Trải nghiệm
                  <ul className="experience">
                    <li>
                      <AiOutlineArrowRight />
                      <NavLink id="RouterNavLink" to="/trai-nghiem/khach-san">
                        Khách sạn
                      </NavLink>
                    </li>
                    <li>
                      <AiOutlineArrowRight />
                      <NavLink id="RouterNavLink" to="trai-nghiem/tour-du-lich">
                        Tour du lịch
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="menu-item">
                <NavLink id="RouterNavLink" to="/lien-he" className="menu-link">
                  Liên hệ
                </NavLink>
              </li>
            </ul>
            <div className="header__bot-auth">
              {isLogged ? (
                userLink()
              ) : (
                <div
                  className="btn btn__primary"
                  onClick={() => navigate("/signin")}
                >
                  <AiOutlineUser />
                  Login
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
