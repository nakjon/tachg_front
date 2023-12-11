// import { styled } from "@mui/material/styles";
// import { TableCell } from "@mui/material";

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   "&": {
//     padding: "11px !important",
//     fontSize: "0.7rem !important",
//     textAlign: "center",
//   },
// }));

// export default StyledTableCell;

  //updated code by code
import { styled } from "@mui/material/styles";
import { TableCell } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  "&": {
    padding: "11px !important",
    fontSize: "0.7rem !important",
    textAlign: "center !important",
    maxWidth: "100px", // Set the desired maximum width here
    minWidth: "50px",
    //overflow: "",
    textOverflow: "ellipsis",
  },
}));

export default StyledTableCell;