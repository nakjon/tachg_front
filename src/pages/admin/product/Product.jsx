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
  deleteProduct,
  deleteUser,
  getCertificateList,
  getCertificateListResponse,
  getImageProduct,
  getProductList,
  getProductListResponse,
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
import dayjs from 'dayjs'
import EditProdModalForm from "./editProdModel2";
import BasicModal from "src/components/modal/basicmodal";
const CreateProductModalForm = lazy(() => import("./createprodmodalform"));


const AlertDialog = lazy(() => import("../../../components/dialog/dialog"));
const ProductDesk = () => {
  const prodListResponse = useSelector(
    (state) => state?.admin?.productListResp
  );
  const deleteProdResp = useSelector(
    (state) => state?.admin?.deleteProdResp
  );

  const imgProdResp = useSelector(
    (state) => state?.admin?.imageProdResp
  );
  console.log("prodListResponse", prodListResponse);
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
  const [catList ,setCatList] = useState([]) ;
  const [base64ImageString ,setBase64ImageString] = useState()
  const [showImage, setShowImage] = useState(false);
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
      id: "category?.categoryTitle",
      name: "Category",
      sortable: true,
    },
    {
      id: "description",
      name: "Description",
      sortable: true,
    },
    {
      id: "price",
      name: "Price",
      sortable: true,
    },
    {
      id: "qty",
      name: "Quantity",
      sortable: true,
    },
    {
      id: "imageName",
      name: "Image",
      sortable: false,
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
        getProductList(
            {
              pageNumber: controller.page,
              pageSize: controller.rowsPerPage,
            }
        )
      );
    }
    return () => {
      isApiSubcribed = false;
      dispatch(getUserListResponse(""));
    };
  }, [controller]);

  useEffect(() => {
    if (
      prodListResponse &&
      prodListResponse?.status === NETWORK_STATUS_CODE.SUCCESS
    ) {
      if (
        prodListResponse?.data 
      ) {
        setTotalRows(prodListResponse?.data?.page?.totalElements);
        setTableData(prodListResponse?.data?.page?.content);
        setFilterData(prodListResponse?.data?.page?.content);
        setCatList(prodListResponse?.data?.cat)
        setLoading(false);
        dispatch(getProductListResponse(""));
      } 
    }else if (
      prodListResponse &&
      prodListResponse?.response?.status == NETWORK_STATUS_CODE.PAGE_NOT_FOUND
    ) {
      setLoading(false);
      dispatch(getProductListResponse(""));
      toastMessage(
        "Prod Desk",
        "Something went wrong please try after sometime",
        "error"
      );
    }
  }, [prodListResponse]);

  useEffect(() => {
    if (
      imgProdResp &&
      imgProdResp?.status === NETWORK_STATUS_CODE.SUCCESS
    ) {
      
       alert("helo")
       const imageSrc = `data:image/png;base64,${imgProdResp?.data?.image}`;
       setBase64ImageString(imageSrc)
       setShowImage(true)
    }  else if (
      imgProdResp &&
      imgProdResp?.status === NETWORK_STATUS_CODE.PAGE_NOT_FOUND
    ) {
      setShowDeleteDialog(false);
      toastMessage("Product DESK", imgProdResp?.data?.message);
    }
  }, [imgProdResp]);

  useEffect(() => {
    if (
      deleteProdResp &&
      deleteProdResp?.status === NETWORK_STATUS_CODE.CREATED_SUCCESSFULLY
    ) {
        setShowDeleteDialog(false);
        toastMessage("USER DESK", deleteProdResp?.data?.message);
        dispatch(
          getProductList({
            pageNumber: controller.page,
            pageSize: controller.rowsPerPage,
          })
        );
        dispatch(userDeleteResponse(""));
      
    }  else if (
      deleteProdResp &&
      deleteProdResp?.status === NETWORK_STATUS_CODE.PAGE_NOT_FOUND
    ) {
      setShowDeleteDialog(false);
      toastMessage("Product DESK", deleteProdResp?.data?.message);
    }
  }, [deleteProdResp]);

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
    dispatch(deleteProduct({id: deleteId }));
  };

  const islargeDevive = useWindowSize();

  return (
    <div style={{height:'100vh'}}>
      <Seo title="Techglaz | User Desk" description="User Desk" />
      <div className="row mt-2">
        <div className="d-flex justify-content-start">
          <p className="fs-6">PRODUCT LIST</p>
        </div>
      </div>
      <div className="row mt-1">
        <HorizonatalLine text="Product Management Desk" />
      </div>
      <div className="row">
        <div className="d-flex flex-row justify-content-between">
          
            <Basicbutton
              internalDisabled={true}
              buttonText={islargeDevive ? "Add New Product" : "Add new"}
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
                          {data.category?.categoryTitle}
                        </StyledTableCell>
                        <StyledTableCell padding="none">
                          {data?.description}
                        </StyledTableCell>
                        <StyledTableCell padding="none">
                          {data?.price}
                        </StyledTableCell>
                        <StyledTableCell padding="none">
                          {data?.qty}
                        </StyledTableCell>
                        <StyledTableCell padding="none">
                          <span style={{color:'teal' ,cursor:'pointer' ,fontSize:'16px'}}
                          onClick={()=>{
                             dispatch(getImageProduct({
                              image:data?.imageName
                             }))
                          }}>
                             VIEW 
                          </span>
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
        { showImage &&
          <div >
          <div>
           <h1>Your Image</h1>
           {base64ImageString && <img src={base64ImageString} alt="Your Ima" />}
            </div>
          </div>
        }
      </Paper>
      <Suspense>
        <CreateProductModalForm
          catList={catList}
          openCreateuserModal={showAddModal}
          handleCloseCreateUserModal={handleCloseCreateUserModal}
        />
      </Suspense>
      <Suspense>
        <EditProdModalForm
          catList={catList}
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

export default ProductDesk;
