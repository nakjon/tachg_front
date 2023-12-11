import React, { useEffect, useRef, useState } from "react";
import BasicModal from "../../../components/modal/basicmodal";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import toastMessage from "../../../common/toastmessage/toastmessage";
import {
  createCertificate,
  createCertificateResponse,
  getCertificateList,
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

const CreateUserModalForm = ({
  openCreateuserModal,
  handleCloseCreateUserModal,
}) => {



  const [values,setValue] = useState({
    name:'',
    coursename:'',
    certificateno:'',
    fromdate:null,
    todate:null,
    uniRollNo:'',
    email:'',
    mobile:''
  })
  const [errors,setErrors] = useState({
    name:'',
    coursename:'',
    certificateno:'',
    fromdate:null,
    todate:null,
    uniRollNo:'',
    email:'',
    mobile:''
  })

  const formRef = useRef();
  const dispatch = useDispatch();

  const createCertificateRes = useSelector(
    (state) => state?.admin?.createCertificateResp
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
    dispatch(
      createCertificate(values)
    );
  };

  useEffect(()=>{
    console.log('aaaa',values)
    if(values.name==='' || values.coursename==='' ||values.certificateno=='' ||values.fromdate===null || values.todate===null){
      setValid(false)
    }else{
      setValid(true)
    }
  },[values])
  useEffect(() => {
    if (
      createCertificateRes &&
      createCertificateRes?.status === NETWORK_STATUS_CODE.CREATED_SUCCESSFULLY
    ) {
      if (createCertificateRes && createCertificateRes?.data?.status === 1) {
         toastMessage("User Desk", createCertificateRes?.data?.message, "success");
         handleCloseCreateUserModal();
      } 
      setValue({
        name:'',
        coursename:'',
        certificateno:'',
        fromdate:null,
        todate:null,
        uniRollNo:'',
        email:'',
        mobile:''
      })
      setErrors({
        name:'',
        coursename:'',
        certificateno:'',
        fromdate:null,
        todate:null,
        uniRollNo:'',
        email:'',
        mobile:''
      })
      dispatch(getCertificateList());
      dispatch(createCertificateResponse(""));  
    } else if (
      createCertificateRes &&
      createCertificateRes?.status === NETWORK_STATUS_CODE.PAGE_NOT_FOUND
    ) {
      dispatch(createCertificateResponse(""));
      toastMessage("User Desk", createCertificateRes?.data?.message, "error");
    } 
  }, [createCertificateRes]);
  
  return (
    <>
      <BasicModal
        title="Create Certificate"
        show={openCreateuserModal}
        close={() => {
          handleCloseCreateUserModal(false);
        }}
        isStatic={false}
        // scrollable={true}
        isCenterAlign={false}
        fullScreen={false}
        size="lg"
        key="create_certificate"
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
                                    course name{" "}
                                  </label>
                              </div>
                              <div className="col-auto d-flex flex-column">
                                  <BasicInput
                                    className="form-control shadow-none"
                                    value={values?.coursename}
                                    type="text"
                                    id="coursename"
                                    name="coursename"
                                    onChange={(e)=>{
                                      setValue({...values,coursename:e.target.value})
                                      setErrors({...errors ,coursename:e.target.value===''?"course name is required":''})
                                    }}
                                    
                                  />
                                  {errors.coursename !=='' ? (
                                <div className="text-danger float-end">
                                  {errors.coursename}
                                </div>
                              ) : null}
                            </div>   
                       </div>
                         <div className="col-sm-12 col-md-4">
                             <div className="col-auto">
                                <label htmlFor="certificateno" class="">
                                   Certificate No{" "}
                                </label>
                                </div>
                              <div className="col-auto d-flex flex-column">
                                <BasicInput
                                  className="form-control shadow-none"
                                  value={values?.certificateno}
                                  type="number"
                                  id="certificateno"
                                  name="certificateno"
                                  onChange={(e)=>{
                                    setValue({...values,certificateno:e.target.value})
                                    setErrors({...errors ,certificateno:e.target.value===''?"certificate number is required":''})
                                  }}
                                />
                                 {errors.certificateno !=='' ? (
                                  <div className="text-danger float-end">
                                    {errors.certificateno}
                                  </div>
                                ) : null}
                              </div>
                       </div>
                    </div>

                    
                    <div className="row mb-2" >
                        <div className="col-sm-12 col-md-4">
                               <div className="col-auto">
                                <label htmlFor="email" >
                                  Email{" "}
                                </label>
                              </div>
                              <div className="col-auto d-flex flex-column">
                                <BasicInput
                                  className="form-control shadow-none"
                                  value={values?.email}
                                  type="text"
                                  id="name"
                                  name="name"
                                  onChange={(e)=>{
                                    setValue({...values,email:e.target.value})
                                    setErrors({...errors ,email:e.target.value===''?"email is required":''})
                                  }}
                                />
                                {errors.name !==''? (
                                  <div className="text-danger float-end">
                                    {errors.email}
                                  </div>
                                ) : null}
                              </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                             <div className="col-auto">
                                  <label htmlFor="uni" class="">
                                    Uni Roll No.{" "}
                                  </label>
                              </div>
                              <div className="col-auto d-flex flex-column">
                                  <BasicInput
                                    className="form-control shadow-none"
                                    value={values?.uniRollNo}
                                    type="number"
                                    id="coursename"
                                    name="coursename"
                                    onChange={(e)=>{
                                      setValue({...values,uniRollNo:parseInt(e.target.value)})
                                      setErrors({...errors ,uniRollNo:e.target.value===''?"course name is required":''})
                                    }}
                                    
                                  />
                                  {errors.coursename !=='' ? (
                                <div className="text-danger float-end">
                                  {errors.coursename}
                                </div>
                              ) : null}
                            </div>   
                       </div>
                         <div className="col-sm-12 col-md-4">
                             <div className="col-auto">
                                <label htmlFor="mobile" class="">
                                   Mobile No{" "}
                                </label>
                                </div>
                              <div className="col-auto d-flex flex-column">
                                <BasicInput
                                  className="form-control shadow-none"
                                  value={values?.mobile}
                                  type="number"
                                  id="mobile"
                                  name="mobile"
                                  onChange={(e)=>{
                                    setValue({...values,mobile:e.target.value})
                                    setErrors({...errors ,mobile:e.target.value===''?"Mobile number is required":''})
                                  }}
                                />
                                 {errors.mobile !=='' ? (
                                  <div className="text-danger float-end">
                                    {errors.mobile}
                                  </div>
                                ) : null}
                              </div>
                       </div>
                    </div>


                    <div className="row mb-2" >
                        <div className="col-sm-12 col-md-4">
                               <div className="col-auto">
                                <label htmlFor="name" >
                                  From Date{" "}
                                </label>
                              </div>
                              <div className="col-auto d-flex flex-column">
                                <CustDatepicker
                                  className="form-control shadow-none"
                                  value={values?.fromdate} 
                                  id="fromdate"
                                  name="fromdate"
                                  inputFormat="DD/MM/YYYY"
                                  onChange={(value)=>{
                                    setValue({...values,fromdate:value})
                                  }}
                                />
                               
                              </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                               <div className="col-auto">
                                <label htmlFor="name" >
                                  To Date{" "}
                                </label>
                              </div>
                              <div className="col-auto d-flex flex-column">
                                <CustDatepicker
                                  className="form-control shadow-none"
                                  value={values?.todate} 
                                  id="todate"
                                  name="todate"
                                  inputFormat="DD/MM/YYYY"
                                  onChange={(value)=>{
                                    setValue({...values,todate:value})
                                  }}
                                />
                               
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

export default CreateUserModalForm;
