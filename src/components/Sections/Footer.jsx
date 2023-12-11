import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <Wrapper>
      <div className="darkBg">
        <div className="container">
          <InnerWrapper
            className="flexSpaceCenter"
            style={{ padding: "30px 0" }}
          >
            <Link
              className="flexCenter animate pointer"
              to="home"
              smooth={true}
              offset={-80}
            >
              <h1
                className="font15 extraBold whiteColor"
                style={{ marginLeft: "15px" }}
              >
                Designed by C-DAC CENTER IN NORTH EAST
              </h1>
            </Link>
            <StyleP className="whiteColor font13 mt-1">
              © {getCurrentYear()} -{" "}
              <span className="purpleColor font13">CINE</span> All Right
              Reserved
            </StyleP>

            <Link
              className="whiteColor animate pointer font13"
              to="home"
              // smooth={false}
              offset={-80}
            >
              <ScrollToTopDiv>
                <FontAwesomeIcon
                  icon={faAngleUp}
                  size="2x"
                  style={{
                    color: "white",
                    position: "absolute",
                    top: "5px",
                    left: "10px",
                  }}
                />
              </ScrollToTopDiv>
            </Link>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
};
const ScrollToTopDiv = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  background-color: black;
  // &:hover{
  //   background-color: white
  // }
`;

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 650px) {
    margin: 20px 0;
  }
`;
export default Footer;
