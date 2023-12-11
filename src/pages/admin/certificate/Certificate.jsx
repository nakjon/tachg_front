import React, {
  useState,
  useMemo,
  useEffect,
  useCallback,
  lazy,
  Suspense,
} from "react";
import { Paper } from "@mui/material";
import { TableBody } from "@mui/material";
import TableComponent from "../../../components/tables/datatable/tableComponent";
import Basicbutton from "../../../components/button/basicbutton";
import SearchField from "../../../components/search/search";
import {
  faPenToSquare,
  faSearch,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import toastMessage from "../../../common/toastmessage/toastmessage";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCertificate,
  deleteUser,
  getCertificateList,
  getCertificateListResponse,
  getUserList,
  getUserListResponse,
  userDeleteResponse,
} from "../../../store/admin/action";
import TablePagination from "../../../components/tables/datatable/tablepagination";
import StyledTableRow from "../../../components/tables/datatable/customTableRow";
import handleSortingFunc from "../../../components/tables/datatable/sortable";
import { Seo } from "../../../components/seo/seo";
import StyledTableCell from "../../../components/tables/datatable/customTableCell";
import TableRowLaoder from "../../../components/tables/datatable/tableRowLaoder";
import EmptyRow from "../../../components/tables/datatable/emptyRow";
import { useNavigate } from "react-router-dom";
import HorizonatalLine from "../../../components/horizontalLine/horizonatalLine";
import searchFunc from "../../../components/tables/searchFunc";
import {
  DELETE_MESSAGE_DESCRIPTION,
  NETWORK_STATUS_CODE,
  SERVER_STATUS_CODE,
  SORTINGORDER,
} from "../../../common/constant/constant";
import useWindowSize from "../../../common/windowsize/useWindowSize";
import EditUserModal2 from "./editUserModel2";
import dayjs from 'dayjs'
const CreateUserModalForm = lazy(() => import("./createusermodalform"));


const AlertDialog = lazy(() => import("../../../components/dialog/dialog"));
const UserDesk = () => {
  const cerListResponse = useSelector(
    (state) => state?.admin?.CertificateListResponse
  );
  const deleteCerResponse = useSelector(
    (state) => state?.admin?.deleteCertificateResponse
  );
  console.log("cerListResponse", cerListResponse);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState(SORTINGORDER.ASC);
  const [totalRows, setTotalRows] = useState(0);
  const [tableData, setTableData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const [controller, setController] = useState({
    page: 0,
    rowsPerPage: 10,
  });
  const [loading, setLoading] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editData, setEditData] = useState("");
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  const profiledetails = JSON.parse(sessionStorage.getItem("PROFILE_DETAIL"));
  const activityList = profiledetails?.activityList;

  const formatDate = (date) => {
    return dayjs(date).format("MM/DD/YYYY");
  };
  const columns = useMemo(() => [
    {
      id: "name",
      name: "Name",
      sortable: true,
    },
    {
      id: "coursename",
      name: "Course Name",
      sortable: true,
    },
    {
      id: "certificateNo",
      name: "Certificate No",
      sortable: true,
    },
    {
      id: "uniRollNo",
      name: "Uni.Roll No",
      sortable: true,
    },
    {
      id: "email",
      name: "Email",
      sortable: true,
    },
    {
      id: "fromdate",
      name: "From date",
      sortable: true,
    },
    {
      id: "todate",
      name: "To Date",
      sortable: true,
    },
    {
      id: "Action",
      name: "Edit / Delete",
      sortable: false,
    },
  ]);

  const handlePageChange = useCallback(
    (newPage) => {
      setLoading(true);
      setController({
        ...controller,
        page: newPage - 1,
      });
    },
    [controller]
  );
  const handleChangeRowsPerPage = (e) => {
    setController({
      ...controller,
      rowsPerPage: e,
      page: 0,
    });
  };
  const handleSortingChange = (accessor) => {
    const sortOrder =
      accessor === sortField && order === SORTINGORDER.ASC
        ? SORTINGORDER.DESC
        : SORTINGORDER.ASC;
    setSortField(accessor);
    setOrder(sortOrder);
    setTableData(handleSortingFunc(accessor, sortOrder, tableData));
  };

  useEffect(() => {
    let isApiSubcribed = true;
    if (isApiSubcribed) {
      setLoading(true);
      dispatch(
        // getCertificateList({
        //   pageNumber: controller.page,
        //   pageSize: controller.rowsPerPage,
        // })
        getCertificateList()
      );
    }
    return () => {
      isApiSubcribed = false;
      dispatch(getUserListResponse(""));
    };
  }, [controller]);

  useEffect(() => {
    if (
      cerListResponse &&
      cerListResponse?.status === NETWORK_STATUS_CODE.SUCCESS
    ) {
      if (
        cerListResponse?.data 
      ) {
        setTotalRows(cerListResponse?.data?.totalElements);
        setTableData(cerListResponse?.data?.content);
        setFilterData(cerListResponse?.data?.content);
        setLoading(false);
        dispatch(getCertificateListResponse(""));
      } 
    }else if (
      cerListResponse &&
      cerListResponse?.response?.status == NETWORK_STATUS_CODE.PAGE_NOT_FOUND
    ) {
      setLoading(false);
      dispatch(getUserListResponse(""));
      toastMessage(
        "User Desk",
        "Something went wrong please try after sometime",
        "error"
      );
    }
  }, [cerListResponse]);

  useEffect(() => {
    if (
      deleteCerResponse &&
      deleteCerResponse?.status === NETWORK_STATUS_CODE.CREATED_SUCCESSFULLY
    ) {
        setShowDeleteDialog(false);
        toastMessage("USER DESK", deleteCerResponse?.data?.message);
        dispatch(
          getUserList({
            pageNumber: controller.page,
            pageSize: controller.rowsPerPage,
          })
        );
        dispatch(userDeleteResponse(""));
      
    }  else if (
      deleteCerResponse &&
      deleteCerResponse?.status === NETWORK_STATUS_CODE.PAGE_NOT_FOUND
    ) {
      setShowDeleteDialog(false);
      toastMessage("USER DESK", deleteCerResponse?.data?.message);
    }
  }, [deleteCerResponse]);

  const handleCloseCreateUserModal = useCallback(() => {
    setShowAddModal(false);
  }, [showAddModal]);
  const handleCloseEditUserModal = useCallback(() => {
    setEditData("");
    setShowEditModal(false);
  }, [showEditModal]);

  const handleDeleteDialog = () => {
    setDeleteId("");
    setShowDeleteDialog(false);
  };
  const handleDeleteUser = () => {
    dispatch(deleteCertificate({id: deleteId }));
  };

  const islargeDevive = useWindowSize();

  return (
    <div style={{height:'100vh'}}>
      <Seo title="Techglaz | User Desk" description="User Desk" />
      <div className="row mt-2">
        <div className="d-flex justify-content-start">
          <p className="fs-6">CERTIFICATE LIST</p>
        </div>
      </div>
      <div className="row mt-1">
        <HorizonatalLine text="Certificate Management Desk" />
      </div>
      <div className="row">
        <div className="d-flex flex-row justify-content-between">
          
            <Basicbutton
              internalDisabled={true}
              buttonText={islargeDevive ? "Add New Certificate" : "Add new"}
              outlineType={true}
              className="btn btn-outline-primary btn-sm rounded-0 mb-2 me-1 mt-2"
              onClick={() => {
                setShowAddModal(true);
              }}
            />
          
          <SearchField
            className="me-1 mt-2"
            iconPosition="end"
            iconName={faSearch}
            //disabled={tableData.length === 0 ? true : false}
            onChange={(e) => {
              if (e.target?.value !== "") {
                console.log(e.target?.value);
                setSearchValue(e?.target?.value);
                console.log("filterData", filterData);
                setTableData(searchFunc(filterData, e.target?.value));
              } else {
                setTableData(filterData);
                setSearchValue("");
              }
            }}
          />
        </div>
      </div>

      <Paper>
        <div className="row">
          <div className="col-12">
            <TableComponent
              columns={columns}
              sortField={sortField}
              order={order} 
              handleSorting={handleSortingChange}
              checkBoxRequired={false}
            >
              <TableBody>
                {loading ? (
                  <TableRowLaoder />
                ) : (
                  tableData &&
                  tableData.length > 0 &&
                  tableData.map((data, index) => {
                    return (
                      <StyledTableRow key={index}>
                        <StyledTableCell padding="none">
                          {data.name}
                        </StyledTableCell>
                        <StyledTableCell padding="none">
                          {data.coursename}
                        </StyledTableCell>
                        <StyledTableCell padding="none">
                          {data?.certificateno}
                        </StyledTableCell>
                        <StyledTableCell padding="none">
                          {data?.uniRollNo}
                        </StyledTableCell>
                        <StyledTableCell padding="none">
                          {data?.email}
                        </StyledTableCell>
                        <StyledTableCell padding="none">
                          {formatDate(data?.fromdate)}
                        </StyledTableCell>
                        <StyledTableCell padding="none">
                          {formatDate(data?.todate)}
                        </StyledTableCell>
                        
                        <StyledTableCell padding="none">
                          <span
                            className="text-decoration-underline ms-1"
                            style={{
                              fontSize: "0.7rem",
                              cursor: 'pointer',
                            }}
                            onClick={() => {
                              setShowEditModal(true);
                              setEditData(data);
                            }}
                          >
                            <FontAwesomeIcon
                              icon={faPenToSquare}
                              className="me-lg-2 "
                            />
                          </span>
                          
                            <span className="m-1"> |</span>
                          

                          <span
                            className="text-decoration-underline"
                            style={{
                              fontSize: "0.7rem",
                              cursor: 'pointer',
                            }}
                            onClick={() => {
                              setDeleteId(data?.id);
                              setShowDeleteDialog(true);
                            }}
                          >
                            <FontAwesomeIcon
                              icon={faTrash}
                              className="me-lg-2"
                              color="red"
                            />
                          </span>
                        </StyledTableCell>
                      </StyledTableRow>
                    );
                  })
                )}
                <EmptyRow
                  loading={loading}
                  tableData={tableData}
                  searchValue={searchValue}
                />
              </TableBody>
            </TableComponent>
            <TablePagination
              page={controller.page + 1}
              count={totalRows}
              rowsPerPage={controller?.rowsPerPage}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </div>
        </div>
      </Paper>
      <Suspense>
        <CreateUserModalForm
          openCreateuserModal={showAddModal}
          handleCloseCreateUserModal={handleCloseCreateUserModal}
        />
      </Suspense>
      <Suspense>
        <EditUserModal2
          openEdituserModal={showEditModal}
          handleCloseEditUserModal={handleCloseEditUserModal}
          editData={editData}
        />
      </Suspense>

      <Suspense>
        <AlertDialog
          open={showDeleteDialog}
          handleClose={handleDeleteDialog}
          description={DELETE_MESSAGE_DESCRIPTION}
        >
          <Basicbutton
            buttonText="Disagree"
            onClick={() => setShowDeleteDialog(false)}
          />
          <Basicbutton buttonText="Agree" onClick={handleDeleteUser} />
        </AlertDialog>
      </Suspense>
    </div>
  );
};

export default UserDesk;
