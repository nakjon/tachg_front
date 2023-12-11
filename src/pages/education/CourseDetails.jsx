import { Paper } from '@mui/material'
import React from 'react'
import './course.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from 'react-router-dom'
const CourseDetails = () => {

  const location = useLocation();
  const { data } = location.state;
  
  const parData = JSON.parse(data)
  console.log('aaaa',parData)
  return (
    <div className='mt-3' style={{minHeight:window.innerHeight}}>  
      <div className="row" >
       <div className="col-md-8 offset-md-2 col-sm-12">
       <Paper elevation={3} >
        <div className='container-fluid' >

          <div className='d-flex justify-content-center '>
            <h1 className='titleName mt-3'>{parData?.name}</h1>
          </div>

               <div className='mt-2 p-4'>
                        <div className='card mb-5' style={{backgroundColor:'lightcyan'}}>
                        <div className='d-flex justify-content-start my-2 card-header h5 '>
                            <span className='subheading'>About this course</span>
                        </div>
                        <div className='px-3 '>
                            <p className='text-justify text-dark courseDis'>{parData?.content}</p>
                        </div>
                        <div className="mt-2 px-3">
                        <div className='d-flex justify-content-start my-2  '>
                            <span className='fs-5 subheading'>You will get :-</span>
                        </div>
                        <div>
                            <ul>
                                <li>Certificate on Robotics to strength your resume. </li>
                                <li>Hand on experiance on  {parData?.name}. </li>
                                <li>You will be able to create multiple project on {parData?.name} </li>
                                <li>You will get the whole kit to make the the project. </li>
                            </ul>
                        </div>
                        <div className='d-flex justify-content-start my-2  '>
                            <span className='fs-5 me-3 subheading' >Duration : </span>
                            <label className='fs-5' htmlFor="4-5 weeks">4-8 weeks</label>
                        </div>
                        {/* <div className='d-flex justify-content-start my-2  '>
                            <span className='fs-5 me-3 subheading'>Buy it for : </span>
                            <label className='fs-5' htmlFor="4-5 weeks">1500  &#8377;</label>
                        </div> */}
                        <div>
                            
                        </div>
                        </div>
                        {/* <div className="mt-2 d-flex justify-content-center mb-2">
                        <button className='btn btn-success'
                                 
                                onClick={()=>{
                                  alert('hello')
                                }}>
                                 Add to cart
                                 <FontAwesomeIcon
                                       icon={faAdd}
                                     className="fa-sm mx-2"
                                      color="grey"
                                 /></button>
                        </div> */}
                        </div>
          </div>
        </div>
    </Paper>
          </div>
        </div>
    </div>
  )
}

export default CourseDetails