import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  Document,
  Page,
} from "@react-pdf/renderer";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDashboard } from "@fortawesome/free-solid-svg-icons";

const styles = StyleSheet.create({
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    alignItems: 'center'
  },
  header: {
    fontSize: 13,
    marginBottom: 5,
    textAlign: "center",
    color: "black",
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: "10px",
  },
});
//const imurl = require("./headerImage/manipurlogin2.png");
const PdfHeader = ({ imageName, government, department, state }) => {
  return (
    <>
      {/* <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      > */}
      {/* <Image
          style={styles.image}
          // src={process.env.PUBLIC_URL + `/images/${imageName}.png`}
          src={`${process.env.PUBLIC_URL}/assets/images/manipurlogin2.png`}
        /> */}

       <View >
        <Image src={`${process.env.PUBLIC_URL}/assets/images/manipurlogin2.png`} style={{ height: "90px", width: "300px",alignItems:'center' ,alignContent:'center',alignSelf:'center' }}></Image>
      </View>
      {/* </View> */}

      {/* <Text style={styles.header}>{government}</Text>
      <Text style={styles.header}>{department}</Text>
      <Text style={styles.header}>{state}</Text> */}
    </>
  );
};

PdfHeader.propTypes = {
  imageName: PropTypes.string.isRequired,
  government: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
};

export default React.memo(PdfHeader);
