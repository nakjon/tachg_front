// import React, { ReactNode, memo } from "react";
// import {
//   TableContainer,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
// } from "@mui/material";

// import Checkbox from "@mui/material/Checkbox";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faArrowUpWideShort,
//   faArrowDownWideShort,
// } from "@fortawesome/free-solid-svg-icons";
// import Box from "@mui/material/Box";

// interface tableProps {
//   caption?: string;
//   columns: [];
//   handleSorting: (accessor: string) => void;
//   sortField: string;
//   order: string;
//   children: any;
//   customWidth?: string | "100%";
//   checkBoxRequired?: boolean | false;
//   multipleSelect?: boolean | false;
//   tableTitle?: string | "";
//   onSelectAllClick?: () => void;
//   numSelected: number;
//   rowCount: number;
//   actionIcon?: any;
//   handleActionClick?: () => void;
//   actionToolTip?: string;
//   overFlow: boolean | false;
//   colouredHeader?: boolean | false;
//   showTableActionBar: boolean | false;
//   toolbarRequired?: boolean | false;
//   stickyHeader?: boolean | false;
//   toolbar: ReactNode;
// }

// const TableComponent: React.FC<tableProps> = ({
//   caption,
//   columns,
//   sortField,
//   handleSorting,
//   order,
//   children,
//   customWidth,
//   checkBoxRequired,
//   tableTitle,
//   onSelectAllClick,
//   numSelected,
//   rowCount,
//   overFlow,
//   colouredHeader,
//   multipleSelect,
//   toolbarRequired,
//   stickyHeader,
//   toolbar,
// }) => {
//   return (
//     <Box
//       component="div"
//       sx={
//         overFlow
//           ? {
//               width: "100%",
//               overflow: "hidden",
//               overflowX: "scroll",
//             }
//           : {
//               width: "100%",

//               overflow: "auto",
//             }
//       }
//     >
//       {toolbarRequired ? toolbar : null}

//       <TableContainer
//         sx={{ width: customWidth, maxHeight: overFlow ? 440 : "" }}
//       >
//         <Table stickyHeader={stickyHeader} aria-label="sticky table">
//           <caption>{caption}</caption>
//           <TableHead style={{ width: "100%" }}>
//             <TableRow>
//               {checkBoxRequired && multipleSelect && (
//                 <TableCell padding="checkbox">
//                   <Checkbox
//                     color="primary"
//                     indeterminate={numSelected > 0 && numSelected < rowCount}
//                     checked={rowCount > 0 && numSelected === rowCount}
//                     onChange={onSelectAllClick}
//                     inputProps={{
//                       "aria-label": `select all ${tableTitle}`,
//                     }}
//                   />
//                 </TableCell>
//               )}
//               {checkBoxRequired && !multipleSelect && (
//                 <TableCell padding="checkbox"></TableCell>
//               )}

//               {columns &&
//                 columns.length > 0 &&
//                 columns.map(({ name, id, sortable }) => {
//                   const sortableIcon = sortable
//                     ? sortField === id && order === "asc"
//                       ? faArrowUpWideShort
//                       : sortField === id && order === "desc"
//                       ? faArrowDownWideShort
//                       : faArrowUpWideShort
//                     : faArrowUpWideShort;
//                   return (
//                     <TableCell
//                       padding="none"
//                       style={{
//                         backgroundColor: colouredHeader
//                           ? "#ffffff"
//                           : "transparent",
//                         color: colouredHeader ? "black" : "black",
//                         padding: "10px",
//                         fontSize: "0.7rem",
//                         textAlign: "center",
//                       }}
//                       key={id}
//                       onClick={sortable ? () => handleSorting(id) : () => null}
//                     >
//                       {name}
//                       {sortable ? (
//                         <FontAwesomeIcon
//                           style={{ cursor: "pointer" }}
//                           className="ms-1"
//                           icon={sortableIcon}
//                           onClick={
//                             sortable ? () => handleSorting(id) : () => null
//                           }
//                         />
//                       ) : (
//                         ""
//                       )}
//                     </TableCell>
//                   );
//                 })}
//             </TableRow>
//           </TableHead>
//           {children}
//         </Table>
//       </TableContainer>
//     </Box>
//   );
// };

// export default memo(TableComponent);

import React, { ReactNode, memo } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";

import Checkbox from "@mui/material/Checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpWideShort,
  faArrowDownWideShort,
} from "@fortawesome/free-solid-svg-icons";
import Box from "@mui/material/Box";

interface tableProps {
  caption?: string;
  columns: [];
  handleSorting: (accessor: string) => void;
  sortField: string;
  order: string;
  children: any;
  customWidth?: string | "100%";
  checkBoxRequired?: boolean | false;
  multipleSelect?: boolean | false;
  tableTitle?: string | "";
  onSelectAllClick?: () => void;
  numSelected: number;
  rowCount: number;
  actionIcon?: any;
  handleActionClick?: () => void;
  actionToolTip?: string;
  overFlow: boolean | false;
  colouredHeader?: string | 'black';
  showTableActionBar: boolean | false;
  toolbarRequired?: boolean | false;
  stickyHeader?: boolean | false;
  toolbar: ReactNode;
}

const TableComponent: React.FC<tableProps> = ({
  caption,
  columns,
  sortField,
  handleSorting,
  order,
  children,
  customWidth,
  checkBoxRequired,
  tableTitle,
  onSelectAllClick,
  numSelected,
  rowCount,
  overFlow,
  colouredHeader,
  multipleSelect,
  toolbarRequired,
  stickyHeader,
  toolbar,
}) => {
  return (
    <Box
      component="div"
      sx={
        overFlow
          ? {
              width: "100%",
              overflow: "hidden",
              overflowX: "scroll",
            }
          : {
              width: "100%",
            
              overflow: "auto",
            }
      }
    >
      {toolbarRequired ? toolbar : null}

      <TableContainer
        sx={{ width: customWidth, maxHeight: overFlow ? 440 : "" }}
      >
        <Table stickyHeader={stickyHeader} aria-label="sticky table"> 
          <caption>{caption}</caption>
          <TableHead sx={{ width: "100%" }} >
            <TableRow >
              {checkBoxRequired && multipleSelect && (
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    indeterminate={numSelected > 0 && numSelected < rowCount}
                    checked={rowCount > 0 && numSelected === rowCount}
                    onChange={onSelectAllClick}
                    inputProps={{
                      "aria-label": `select all ${tableTitle}`,
                    }}
                  />
                </TableCell>
              )}
              {checkBoxRequired && !multipleSelect && (
                <TableCell padding="checkbox"></TableCell>
              )}

              {columns &&
                columns.length > 0 &&
                columns.map(({ name, id, sortable }) => {
                  const sortableIcon = sortable
                    ? sortField === id && order === "asc"
                      ? faArrowUpWideShort
                      : sortField === id && order === "desc"
                      ? faArrowDownWideShort
                      : faArrowUpWideShort
                    : faArrowUpWideShort;
                  return (
                    <TableCell
                      padding="none"
                      style={{
                        backgroundColor: colouredHeader
                          ? "#ffffff"
                          : "transparent",
                        color: colouredHeader ? colouredHeader : "black",
                        padding: "10px",
                        fontSize: "0.75rem",
                        textAlign: "center",
                      }}
                      key={id}
                      onClick={sortable ? () => handleSorting(id) : () => null}
                    >
                      {name}
                      {sortable ? (
                        <FontAwesomeIcon
                          style={{ cursor: "pointer" }}
                          className="ms-1"
                          icon={sortableIcon}
                          onClick={
                            sortable ? () => handleSorting(id) : () => null
                          }
                        />
                      ) : (
                        ""
                      )}
                    </TableCell>
                  );
                })}
            </TableRow>
          </TableHead>
          {children}
        </Table>
      </TableContainer>
    </Box>
  );
};

export default memo(TableComponent);

