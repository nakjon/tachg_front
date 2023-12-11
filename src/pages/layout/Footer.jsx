import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
 
  const getCurrentYear = () => {
    return new Date().getFullYear();
  }


  return (
    
      <div className="bg-dark " style={{height:'70px'}}>
                 <hr></hr>
            {/* <div className="row offset-md-0 offset-xl-3 offset-lg-3  "  >

                  <div className=" col-md-4 col-xl-3 col-lg-3 ">
                      <Link className="flexCenter animate pointer" to="home" smooth={true} offset={-80}>
                      
                      <h5 className="text-white foot-text" style={{ marginLeft: "15px" }}>
                      Designed by Nadim
                      </h5>
                    </Link>
                  </div>
                  <div className="col-md-5 col-xl-4 col-lg-3 ">
                      <StyleP className="text-white">
                        © {getCurrentYear()} - <span className="right-text" >Nadim</span> <span className="right-text" >All Right Reserved</span>
                      </StyleP>
                  </div>

                  <div className="col-md-2 col-xl-2 ">
                      <a className=" animate pointer font13"  href="#nav-top-bar" smooth={true} offset={-80}>
                      
                        <ScrollToTopDiv>
                        
                              <FontAwesomeIcon icon={faAngleUp} size="2x" style={{color: "white", position: "absolute", top: "5px", left: "5px"}}/>
                        
                        </ScrollToTopDiv>
                      </a>
                  </div>

          </div> */}

                <div className="d-flex justify-content-between mx-5">
                  <div className="flex-fill">
                    <Link className="flexCenter animate pointer" to="home" smooth={true} offset={-80}>
                      <h6 className="text-white foot-text">
                          Designed by Nadim
                      </h6>
                    </Link>
                  </div>
                  <div className="flex-fill">
                    <StyleP className="text-white">
                      © {getCurrentYear()} - <span className="right-text">Nadim</span>{" "}
                      <span className="right-text">All Rights Reserved</span>
                    </StyleP>
                  </div>
                  <div className="flex-fill">
                    <a className="animate pointer font13" href="#nav-top-bar" smooth={true} offset={-80}>
                      <ScrollToTopDiv>
                        <FontAwesomeIcon
                          icon={faAngleUp}
                          size="2x"
                          style={{ color: "white", position: "absolute", top: "5px", left: "5px" }}
                        />
                      </ScrollToTopDiv>
                    </a>
                  </div>
                </div>
          
      </div>
  
  );
}
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
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;
export default Footer
