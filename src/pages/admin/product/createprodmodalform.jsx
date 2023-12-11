import React, { useEffect, useRef, useState } from "react";
import BasicModal from "../../../components/modal/basicmodal";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import toastMessage from "../../../common/toastmessage/toastmessage";
import {
  createProduct,
  createProductResponse,
  getProductList,
  uploadImageProduct,
  uploadImageProductResponse,
} from "../../../store/admin/action";
import {
  NETWORK_STATUS_CODE,
  SECRET_KEY,
} from "../../../common/constant/constant";

import Basicbutton from "src/components/button/basicbutton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import BasicInput from "src/components/inputbox/floatlabel/basicInput";
import { Paper } from "@mui/material";
import CustDatepicker from "src/components/datepicker/custDatepicker";

import dayjs from "dayjs";
import CustomSelect from "src/components/select/customSelect";

const CreateProdModalForm = ({
  openCreateuserModal,
  handleCloseCreateUserModal,
  catList
}) => {

  const [values,setValue] = useState({
    name:'',
    description:'',
    price:'',
    qty:'',
    cid:''
  })
  const [errors,setErrors] = useState({
    name:'',
    description:'',
    price:'',
    qty:'',
    cid:''
  })
  const [image ,setImage]=useState()

  const formRef = useRef();
  const dispatch = useDispatch();

  const createProductRes = useSelector(
    (state) => state?.admin?.createProdResp
  );

  const uploadProductImageRes = useSelector(
    (state) => state?.admin?.uploadImageProdResp
  );

  const [valid ,setValid] =useState(false)

  const isFormValid = (formData) => {
    for (const key in formData) {
      if (formData[key] === null && formData[key] === '') {
        return false; // If any field is  empty or null, the form is not valid
      }
    }
    return true; // All fields are not empty or null
  };
  useEffect( ()=>{
    setValid(isFormValid(values))
  },[values])

  const handleSubmit = () => {
    console.warn("Submit Values", values);
    const { cid, ...dtoWithoutCid } = values;

    console.log('cid',cid)
    console.log('dtoWithoutCid',dtoWithoutCid)
    dispatch(
      createProduct({
        cid:cid ,
        dto :dtoWithoutCid
      })
    );
  };

  useEffect(()=>{
    console.log('aaaa',values)
    if(values.name==='' || values.description==='' || values.price=='' || values.qty==='' || values.cid==''  || image===undefined){
      setValid(false)
    }else{
      setValid(true)
    }
  },[values])

  useEffect(() => {
    console.log('uploadProductImageRes',uploadProductImageRes)
    if (
      uploadProductImageRes &&
      uploadProductImageRes?.status === NETWORK_STATUS_CODE.SUCCESS
    ) {   
      setValue({
        name:'',
        description:'',
        price:'',
        qty:'',
        cid:''
      })
      setErrors({
        name:'',
        description:'',
        price:'',
        qty:'',
        cid:''
      })
      toastMessage("User Desk", createProductRes?.data?.message, "success");
      handleCloseCreateUserModal();
     dispatch(getProductList());
      dispatch(uploadImageProductResponse(""));  
    } else if (
      uploadProductImageRes &&
      uploadProductImageRes?.status === NETWORK_STATUS_CODE.PAGE_NOT_FOUND
    ) {
      dispatch(uploadImageProductResponse(""));
      toastMessage("User Desk", uploadProductImageRes?.data?.message, "error");
    } 
  }, [uploadProductImageRes]);
  useEffect(() => {
    console.log('createProductRes',createProductRes)
    if (
      createProductRes &&
      createProductRes?.status === NETWORK_STATUS_CODE.CREATED_SUCCESSFULLY
    ) {
      if (createProductRes && createProductRes?.data?.status === 1) {
        dispatch(uploadImageProduct({
          pid:createProductRes?.data?.pid ,
          image :image
        }))
      } 
      // setValue({
      //   name:'',
      //   description:'',
      //   price:'',
      //   qty:'',
      //   cid:''
      // })
      // setErrors({
      //   name:'',
      //   description:'',
      //   price:'',
      //   qty:'',
      //   cid:''
      // })
     // dispatch(getProductList());
      dispatch(createProductResponse(""));  
    } else if (
      createProductRes &&
      createProductRes?.status === NETWORK_STATUS_CODE.PAGE_NOT_FOUND
    ) {
      dispatch(createProductResponse(""));
      toastMessage("User Desk", createProductRes?.data?.message, "error");
    } 
  }, [createProductRes]);

  useEffect( ()=>{
    console.log('iamge',image)
  } ,[image])
  
  return (
    <>
      <BasicModal
        title="Create Product"
        show={openCreateuserModal}
        close={() => {
          handleCloseCreateUserModal(false);
        }}
        isStatic={false}
        // scrollable={true}
        isCenterAlign={false}
        fullScreen={false}
        size="lg"
        key="create_product"
      >
        <div className="row">
          <div className="col-12">
            
                  <div className="row mx-0">
                    <div className="col-md-12 col-sm-12">
                      <Paper className=" my-2">
                        <div className="p-3">
                      <div className="row mb-2" >
                        <div className="col-sm-12 col-md-4">
                               <div className="col-auto">
                                <label htmlFor="name" >
                                  Name{" "}
                                </label>
                              </div>
                              <div className="col-auto d-flex flex-column">
                                <BasicInput
                                  className="form-control shadow-none"
                                  value={values?.name}
                                  type="text"
                                  id="name"
                                  name="name"
                                  onChange={(e)=>{
                                    setValue({...values,name:e.target.value})
                                    setErrors({...errors ,name:e.target.value===''?"name  is required":''})
                                  }}
                                />
                                {errors.name !==''? (
                                  <div className="text-danger float-end">
                                    {errors.name}
                                  </div>
                                ) : null}
                              </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                             <div className="col-auto">
                                  <label htmlFor="name" class="">
                                     Description{" "}
                                  </label>
                              </div>
                              <div className="col-auto d-flex flex-column">
                                  <BasicInput
                                    className="form-control shadow-none"
                                    value={values?.description}
                                    type="text"
                                    id="coursename"
                                    name="coursename"
                                    onChange={(e)=>{
                                      setValue({...values,description:e.target.value})
                                      setErrors({...errors ,description:e.target.value===''?"description is required":''})
                                    }}
                                    
                                  />
                                  {errors.description !=='' ? (
                                <div className="text-danger float-end">
                                  {errors.description}
                                </div>
                              ) : null}
                            </div>   
                       </div>
                         <div className="col-sm-12 col-md-4">
                             <div className="col-auto">
                                <label htmlFor="price" class="">
                                Price{" "}
                                </label>
                                </div>
                              <div className="col-auto d-flex flex-column">
                                <BasicInput
                                  className="form-control shadow-none"
                                  value={values?.price}
                                  type="number"
                                  id="price"
                                  name="price"
                                  onChange={(e)=>{
                                    setValue({...values,price:e.target.value})
                                    setErrors({...errors ,price:e.target.value===''?"price is required":''})
                                  }}
                                />
                                 {errors.price !=='' ? (
                                  <div className="text-danger float-end">
                                    {errors.price}
                                  </div>
                                ) : null}
                              </div>
                       </div>
                    </div>

                    
                    <div className="row mb-2" >
                        <div className="col-sm-12 col-md-4">
                               <div className="col-auto">
                                <label htmlFor="qty" >
                                  Quantity{" "}
                                </label>
                              </div>
                              <div className="col-auto d-flex flex-column">
                                <BasicInput
                                  className="form-control shadow-none"
                                  value={values?.qty}
                                  type="text"
                                  id="name"
                                  name="name"
                                  onChange={(e)=>{
                                    setValue({...values,qty:e.target.value})
                                    setErrors({...errors ,qty:e.target.value===''?"qty is required":''})
                                  }}
                                />
                                {errors.name !==''? (
                                  <div className="text-danger float-end">
                                    {errors.qty}
                                  </div>
                                ) : null}
                              </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                               <div className="col-auto">
                                <label htmlFor="qty" >
                                  Category{" "}
                                </label>
                              </div>
                              <div className="col-auto d-flex flex-column">
                                <CustomSelect
                                  className="form-control shadow-none"
                                  //value={values?.cid}
                                  options={catList && catList}
                                  id="cid"
                                  name="cid"
                                  onChange={(e)=>{
                                    setValue({...values,cid:e.value})
                                  }}
                                />
                                {errors.name !==''? (
                                  <div className="text-danger float-end">
                                    {errors.cid}
                                  </div>
                                ) : null}
                              </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                               <div className="col-auto">
                                <label htmlFor="image" >
                                  Select Image{" "}
                                </label>
                              </div>
                              <div className="col-auto d-flex flex-column">
                              <input type="file" id="logo" name="product_pic" accept="image/*" 
                                                 onChange={(event)=>{
                                                    
                                                     var file = event.target.files[0];
                                                    if(file){
                                                        setImage(file)
                                                    }else{ 
                                                        return ;
                                                    }
                                                    
                                                 }}  
                                                 />
                                                 { image &&
                                                    <img
                                                    alt="not found"
                                                    width={"100px"}
                                                    height={'60px'}
                                                    src={URL.createObjectURL(image)}
                                                /> }
                              </div>
                        </div>
                       
                         
                    </div>   
                    
                  </div>
                  </Paper>   
                    </div>
                  </div>
                  
                    <div className="row mt-3  mb-2">
                        <div className="col-12">
                          <div className="d-flex justify-content-center">
                            <Basicbutton
                            internalDisabled={true}
                              icon={
                                <FontAwesomeIcon
                                  icon={faFloppyDisk}
                                  className="me-1"
                                />
                              }
                              onClick={handleSubmit}
                              type="submit"
                              buttonText="Save"
                              className="primary"
                              outlineType={true}
                              disabled={!valid}
                            />
                          </div>
                        </div>
                      </div>
                
          </div>
        </div>
      </BasicModal>
    </>
  );
};

export default CreateProdModalForm;
