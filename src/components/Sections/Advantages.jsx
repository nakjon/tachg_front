import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCheck,
  faDatabase,
  faFile,
  faSuitcaseMedical,
  faTruckMedical,
  faWheelchair,
} from "@fortawesome/free-solid-svg-icons";

const advantages1 = [
  {
    icon: faDatabase,
    title: "Indent Management",
    description:
      "Brings Transparency & Smoothness in the process of Drug Inventory Management and Distribution.",
  },
  {
    icon: faWheelchair,
    title: "Drug Intent",
    description:
      "Ability to generate indents automatically based on reorder, minimum, maximum planning.",
  },
  {
    icon: faSuitcaseMedical,
    title: "Quality Drugs",
    description:
      "Provision to maintain Expiry date/ Shelf life for an item wherever applicable.",
  },
];
const advantages2 = [
  {
    icon: faTruckMedical,
    title: "Supplier",
    description: "Supplier Interface for viewing PO, entering Challan.",
  },
  {
    icon: faBell,
    title: "SMS/EMAIL Alert",
    description: "Customizable SMS/Email Alert Management.",
  },
  {
    icon: faFile,
    title: "Report",
    description: "Stock Ledger, Drill-Down Reports.",
  },
  {
    icon: faCheck,
    title: "Quality Check",
    description: "Lab Interface for entering the QC Reports.",
  },
];

const Advantages = () => {
  return (
    <Wrapper id="advantages">
      <div className="container ">
        <div className="row mb-2">
          <h1 className="font40 extraBold text-center">Advantages</h1>
        </div>
        <div style={{ height: "1rem" }}></div> {/* Just to add some sapce*/}
        <div className="row">
          <div className="col-md-6 col-sm-12" data-aos="fade-right">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/aushadi.png`}
              // height="100%"
              width="100%"
              alt="handImg"
            />
          </div>
          <div className="col-md-3 col-sm-12">
            {advantages1.map((item, idx) => {
              return (
                <div key={idx + "advantages"} data-aos="fade-left">
                  <div
                    className="icon-container me-3"
                    style={{ display: "flex", alignContent: "center" }}
                  >
                    <FontAwesomeIcon
                      size="4x"
                      icon={item.icon}
                      style={{ color: "#2acf35", marginRight: "0.5rem" }}
                    />
                    <h5 style={{ alignSelf: "center", fontWeight: "bold" }}>
                      {item.title}
                    </h5>
                  </div>
                  <div>
                    <Description>{item.description}</Description>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-md-3 col-sm-12">
            {advantages2.map((item, idx) => {
              return (
                <div key={idx + "advantages"} data-aos="fade-left">
                  <div
                    className="icon-container me-3"
                    style={{ display: "flex", alignContent: "center" }}
                  >
                    <FontAwesomeIcon
                      size="4x"
                      icon={item.icon}
                      style={{ color: "#2acf35", marginRight: "0.5rem" }}
                    />
                    <h5 style={{ alignSelf: "center", fontWeight: "bold" }}>
                      {item.title}
                    </h5>
                  </div>
                  <div>
                    <Description>{item.description}</Description>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  padding-top: 3rem;
  max-width: 1200px;
  margin: 0 auto;
`;
const Description = styled.p`
  font-weight: 300 !important;
  font-size: 1.2rem !important;
  padding-bottom: 10px;
  // text-indent: 20px;
`;
export default Advantages;
