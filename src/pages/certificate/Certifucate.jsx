import React, { useEffect, useMemo, useState } from 'react'
import Modal from 'react-bootstrap/Modal';

import { TableBody, TableCell, TableRow } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { NETWORK_STATUS_CODE } from 'src/common/constant/constant';
import { getCertificateByEmail, getCertificateByEmailResponse, getCertificateById, getCertificateByIdResponse } from 'src/store/admin/action';
import tokenHadle from '../../common/tokenhandle/tokenhandle'
import toastMessage from 'src/common/toastmessage/toastmessage';
import dayjs from 'dayjs'
import isAuthenticated from 'src/route/middleware/auth';
import TableComponent from 'src/components/tables/datatable/tableComponent';
import StyledTableRow from 'src/components/tables/datatable/customTableRow';
import StyledTableCell from 'src/components/tables/datatable/customTableCell';
import HorizonatalLine from 'src/components/horizontalLine/horizonatalLine';
const Certifucate = ({
    openShowCerModal,
    handleCloseCerModal
}) => {
    const dispatch = useDispatch();
    const cerByIdResponse = useSelector(
        (state) => state?.admin?.CertificateByIdResponse
      );

    const cerByEmailResponse = useSelector(
      (state) => state?.admin?.getCertificateByEmail
    );
    
    const columns = useMemo(() => [
      {
        id: "name",
        name: "NAME",
      },
      {
        id: "certificateno",
        name: "CER. NO.",
      },
      {
        id: "coursename",
        name: "COURSE",
      },
      
      {
        id: "fromdate",
        name: "FROM",
      },
      {
        id: "todate",
        name: "TO",
      },
      {
        id: "uniRollNo",
        name: "UNI ROLL NO.",
      },
    ]);


    const data = JSON.parse(tokenHadle.getProfileDetail())
    console.log("data", data?.email)
    useEffect( ()=>{ 
      const data = JSON.parse(tokenHadle.getProfileDetail())
        console.log("aaaaaa")
        if(openShowCerModal && data){
          dispatch(getCertificateByEmail({
            email:data?.email
          }))
        }
        
    },[openShowCerModal])
      
    const [tableData,setTableData] =useState([])

    const[searchValue,setSearchValue] = useState('');
    const[certDetails,setCertDetails] = useState();
      useEffect(() => {
        console.log(",cerByIdResponse",cerByIdResponse)
        if (
          cerByIdResponse &&
          cerByIdResponse?.status === NETWORK_STATUS_CODE.SUCCESS
        ) {
            dispatch(getCertificateByIdResponse(""));
          if (
            cerByIdResponse?.data 
          ) {
            setCertDetails(cerByIdResponse?.data)
            setSearchValue('')
            setShowSearch(false)
          } 
        }else if (
          cerByIdResponse &&
          cerByIdResponse?.response?.status == NETWORK_STATUS_CODE.PAGE_NOT_FOUND
        ) {
          dispatch(getCertificateByIdResponse(""));
          toastMessage(
            "Certificate"
            ,cerByIdResponse?.response?.data?.message ,
            "error"
          );
        }
      }, [cerByIdResponse]);

      useEffect(() => {
        console.log("cerByEmailResponse",cerByEmailResponse)
        if (
          cerByEmailResponse &&
          cerByEmailResponse?.status === NETWORK_STATUS_CODE.SUCCESS
        ) {
            dispatch(getCertificateByEmailResponse(""));
          if (
            cerByEmailResponse?.data 
          ) {
              setTableData(cerByEmailResponse?.data)
          } 
        }else if (
          cerByEmailResponse &&
          cerByEmailResponse?.response?.status === NETWORK_STATUS_CODE.PAGE_NOT_FOUND
        ) {
          dispatch(getCertificateByEmailResponse(""));
          toastMessage(
            "Certificate"
            ,cerByEmailResponse?.data?.message ,
            "error"
          );
        }
      }, [cerByEmailResponse]);

      const formatDate = (date) => {
        return dayjs(date).format("MM/DD/YYYY");
      };
  const[showSearch ,setShowSearch] = useState(true)
  return (
    <div>
        <Modal show={openShowCerModal} onHide={handleCloseCerModal}  width="500" height="300" 
           effect="fadeInLeft" 
          
           >
            <Modal.Header closeButton>
              <Modal.Title>Search Certificate</Modal.Title>
            </Modal.Header>
     {showSearch ?
        <div>         
             <div className="mt-3 p-3">
                 <div className="row">
                     <div className="col-10 offset-1">
                     <div className="d-flex justify-content-center">
                             <input className='form-control' 
                                  placeholder='enter certificate no'
                                onChange={(e)=>{
                                    setSearchValue(e.target.value)
                                }}
                             />
                     </div>
                     </div>
                 </div>
                 <div className="mt-4 d-flex justify-content-center">
                     <button 
                     className='btn btn-primary rounded-1'
                     onClick={()=>{
                        if(searchValue!==''){
                            dispatch(getCertificateById({
                                cid:searchValue
                            }))
                        }
                     }}
                     >
                         Search Here
                     </button>
                 </div>
             </div>
        </div> : 
          <div>
          <div className='mt-2 d-flex justify-content-between'>
              <h6 className='mx-2'>Your Cetificate Details</h6>
              <label className='me-2'>CER NO-{certDetails?.certificateno}</label>
          </div>
           
      <div>
           <div className='mt-2 d-flex justify-content-center'>
           <TableBody>
                      
                                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                                  <TableCell component="th" scope="row">  Name </TableCell>
                                  <TableCell align="right"> {certDetails && certDetails.name}</TableCell>
                                 </TableRow>
                                 <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                                  <TableCell component="th" scope="row">  Course </TableCell>
                                  <TableCell align="right"> {certDetails && certDetails.coursename}</TableCell>
                                 </TableRow>
                                 <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                                  <TableCell component="th" scope="row">  From </TableCell>
                                  <TableCell align="right"> {certDetails && formatDate(certDetails.fromdate)}</TableCell>
                                 </TableRow>
                                 <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                                  <TableCell component="th" scope="row">  To </TableCell>
                                  <TableCell align="right"> {certDetails && formatDate(certDetails.todate) }</TableCell>
                                 </TableRow>
                  
                    </TableBody>
                    </div>
                    <div className='my-2 d-flex justify-content-center'>
                        {/* <button className='me-2 btn btn-success rounded-1'>download(pdf)</button> */}
                        <button 
                        onClick={()=>{
                            setShowSearch(true)
                         }}
                        className='btn btn-success rounded-1'>Seach Again</button>
                    </div>
                </div>
                        
            </div>
          }
           {
            isAuthenticated() ?
        <div className="row">
          <div className="col-12">
            {
              tableData && tableData?.length > 0 ?
              <>
              <h5 className='mx-3' style={{color:'magenta'}}>Your Certificate :-</h5>
              <TableComponent
              columns={columns}
              checkBoxRequired={false}
            >
              <TableBody>
                {
                  tableData &&
                  tableData.length > 0 &&
                  tableData.map( (data,index)=>{
                    return(
                          <StyledTableRow key={index}>
                             <StyledTableCell key={index}>
                                {data?.name}
                             </StyledTableCell  >
                             <StyledTableCell key={index} >
                                {data?.certificateno}
                             </StyledTableCell>
                             <StyledTableCell key={index} >
                                {data?.coursename}
                             </StyledTableCell>
                             <StyledTableCell key={index} >
                                {formatDate(data?.fromdate)}
                             </StyledTableCell>
                             <StyledTableCell key={index} >
                                {formatDate(data?.todate)}
                             </StyledTableCell>
                             <StyledTableCell key={index}>
                                {data?.uniRollNo}
                             </StyledTableCell>
                          </StyledTableRow>
                    )
                  })
                 }   
                   
              </TableBody>
            </TableComponent>
            </>
               :
               <div className='p-3'>
                 <h5>No certificate found link to your email</h5>
              </div>
            }
            
          </div>
        </div>:
        <div className='p-3'>
          <h5>login to see the certificate link to your email</h5>
        </div>
        }
     

        </Modal>
    </div>
  )
}

export default Certifucate
