import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import CloseIcon from "../../assets/svg/CloseIcon";
import { useDispatch } from "react-redux";
import { showLoginModal } from "../../store/login/actions";

export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  const dispatch = useDispatch();
  return (
    <Wrapper className="animate darkBg" sidebarOpen={sidebarOpen}>
      <SidebarHeader className="flexSpaceCenter">
        <div className="flexNullCenter">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
            height="45"
            width="50"
          />
        </div>
        <CloseBtn
          onClick={() => toggleSidebar(!sidebarOpen)}
          className="animate pointer"
        >
          <CloseIcon />
        </CloseBtn>
      </SidebarHeader>

      <UlStyle className="flexNullCenter flexColumn">
        <li className="semiBold font18 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="home"
            spy={true}
            // smooth={true}
            offset={-60}
          >
            Home
          </Link>
        </li>
        <li className="semiBold font18 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="advantages"
            spy={true}
            // smooth={true}
            offset={-60}
          >
            Advantages
          </Link>
        </li>
        <li className="semiBold font18 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="about"
            spy={true}
            // smooth={true}
            offset={-60}
          >
            About (DVDMS)
          </Link>
        </li>

        <li className="semiBold font18 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="contact"
            spy={true}
            // smooth={true}
            offset={-60}
          >
            Contact
          </Link>
        </li>

        <li
          className="semiBold font18 pointer"
          onClick={() => {
            toggleSidebar(!sidebarOpen);
            dispatch(showLoginModal());
          }}
        >
          <a style={{ padding: "10px 15px" }} className="whiteColor">
            Log in
          </a>
        </li>
      </UlStyle>
      {/* <UlStyle className="flexSpaceCenter">
        <li className="semiBold font15 pointer">
          <a href="/" style={{ padding: "10px 30px 10px 0" }} className="whiteColor">
            Log in
          </a>
        </li>
      </UlStyle> */}
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  padding: 0 30px;
  right: ${(props) => (props.sidebarOpen ? "0px" : "-800px")};
  z-index: 9999;
  @media (max-width: 700px) {
    width: 100%;
  }
`;
const SidebarHeader = styled.div`
  padding: 20px 0;
`;
const CloseBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  padding: 10px;
`;
const UlStyle = styled.ul`
  padding: 40px;
  li {
    margin: 20px 0;
  }
`;
