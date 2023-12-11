import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import LogoIcon from "../../assets/svg/Logo";
import BurgerIcon from "../../assets/svg/BurgerIcon";
import { useDispatch } from "react-redux";
import { showLoginModal } from "../../store/login/actions";
import "./TopNav.scss";

export default function TopNavbar() {
  const dispatch = useDispatch();
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  return (
    <div style={{ height: y > 100 ? "60px" : "80px", position: "relative" }}>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper
        className="flexCenter animate whiteBg"
        style={
          // y > 100
          //   ? { height: "60px", boxShadow: "0px 1px 5px #999" }
          //   : { height: "80px", boxShadow: "0px 1px 5px #999" }
          {
            height: y > 100 ? "60px" : "80px",
            boxShadow: "0px 1px 5px #999",
          }
        }
      >
        <NavInner className="container flexSpaceCenter">
          <Link className="pointer flexNullCenter" to="home" smooth={true}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
              height="50"
              width="55"
              alt="logo"
            />
          </Link>
          <BurderWrapper
            className="pointer"
            onClick={() => toggleSidebar(!sidebarOpen)}
          >
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper className="flexNullCenter">
            <li className="semiBold font18 pointer">
              <Link
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="home"
                spy={true}
                // smooth={true}
                offset={-80}
              >
                Home
              </Link>
            </li>
            <li className="semiBold font18 pointer">
              <Link
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="advantages"
                spy={true}
                // smooth={true}
                offset={-80}
              >
                Advantages
              </Link>
            </li>
            <li className="semiBold font18 pointer">
              <Link
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="about"
                spy={true}
                // smooth={true}
                offset={-50}
              >
                About (DVDMS)
              </Link>
            </li>
            <li className="semiBold font18 pointer">
              <Link
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="contact"
                spy={true}
                // smooth={true}
                offset={-80}
              >
                Contact
              </Link>
            </li>
          </UlWrapper>
          <UlWrapperRight className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <span
                className="buttonLogin mt-4 "
                onClick={() => dispatch(showLoginModal())}
                style={{
                  padding: "5px 10px",
                  color: "white",
                  borderRadius: "5px",
                  backgroundColor: "#7620ff",
                }}
              >
                Log in
              </span>
            </li>
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`;
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 768px) {
    display: none;
  }
`;
