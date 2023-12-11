import { faWpexplorer } from '@fortawesome/free-brands-svg-icons'
import { faAnchor, faArrowCircleRight, faArrowDown, faArrowRightFromBracket, faFloppyDisk } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Paper } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'


const Courses = () => {
  const navigate = useNavigate()
  const handleExplore = (ele)=>{
    navigate('/courseDetails',{ state: { data: JSON.stringify(ele), } })
  }

  const data =[
    {
      title:'Certification Course (4-8 weeks)',
      name:'Audiono and its application',
      content:'This is a Complete Arduino Course which will guide you from very basic to advanced level. Students generally lack in applying programming knowledge to embedded systems. Therefore, this course is so designed, in turn, help in applying programming concepts step by step in the practical scenarios.The duration of this workshop will be 4 week, it consists, 24 sessions each 1 hours; properly divided into theory and practical.',
      imageName:'Rover.png'
    },
    {
      title:'Certification Course (4-8 weeks)',
      name:'Autonomus Robotics and its Application',
      content:"This workshop mainly focuses on the students eager to learn robotics from basic. They will get the chance to expand their knowledge in the field of designing, construction, operation, and application of robot with real time hand on practical experience." ,
       imageName:'Rover.png'
    },{
      title:'Certification Course (4-8 weeks)',
      name:'Wireless Robotics and its application',
      content:"Unlock the world of wireless robotics in our hands-on workshop! Learn to build and program a Bluetooth-controlled robot using the HC-05 module. Master the art of robotics, mobile phone controlled robot development, and hardware integration in this exciting journey into the future of technology. Join us to bring your robot to life with just a smartphone and your creativity!" ,
     imageName:'Rover.png'
    },
    {
      title:'Certification Course (4-8 weeks)',
      name:'IoT for Home Automation and Weather Monitoring with ESP32',
      content:"Experience the power of IoT in our workshop! Learn to harness the ESP32's capabilities to create a Home Automation and Weather Monitoring device. Gain practical skills in IoT, hardware integration, and programming as you bring your home and the weather under your control. Join us to make your mark in the world of connected devices!",
       imageName:'Rover.png'
    },
    {
      title:'Certification Course (4-8 weeks)',
      name:'Python Programming Essentials',
      content:"Master the language of the future with our Python Programming Essentials course! From fundamentals to advanced concepts, dive into the world of Python and gain the skills to develop software, analyze data, and build applications. Your journey to becoming a Python pro starts here",
     imageName:'Rover.png'
    },
    {
      title:'Certification Course (4-8 weeks)',
      name:'Web Development Fundamentals',
      content:"Embark on a journey into the dynamic world of web development! Our Web Development Fundamentals course equips you with the essential skills to create and launch websites. Learn HTML, CSS, JavaScript, and more, and discover how to turn your ideas into engaging online experiences. Start building your web development future today!",
      imageName:'Rover.png'
    }
  ]

  return (
    <div className='containes' style={{backgroundColor:'azure'}}>
        <div className="d-flex justify-content-center">
          <h1 className='mt-5 mb-2'>Courses to make you ingenious</h1>         
        </div>
        <div className="d-flex justify-content-center">
          <h4>be practical and innovative</h4>
        </div>
        <div className="row">
           <div className="col-md-8 col-sm-12 offset-md-2">
                <div className="mt-3 d-flex flex-column">
                <div >
                 
                     {
                      data.map( (ele,index)=>{
                        return(
                          <Paper>
                          <div className="row my-2">
                          <div className="col-auto">
                              <div className=" p-4 d-flex flex-column justify-content-start">
                                  <span className='fs-5 fw-bold my-3'>{ele.title}</span>
                                   <span className='fs-5 mb-4'>{ele.name}</span>
                                   <span className='text-primary fs-5'
                                   style={{
                                    cursor: 'pointer',
                                     fontWeight:'bold' , fontSize:'19px'
                                  }}
                                  onClick={()=>{
                                    handleExplore(ele)
                                  }}>
                                   Explore Now 
                                   <FontAwesomeIcon
                                         icon={faArrowRightFromBracket}
                                         size='1x'
                                       className="mx-3 mt-4"
                                        color="red"
                                   /></span>
                                   {/* <span className='text-primary fs-5'
                                   style={{
                                    cursor: 'pointer',
                                     fontWeight:'bold' , fontSize:'19px'
                                  }}
                                  onClick={()=>{
                                    alert('HHEllo')
                                  }}>
                                   Add to Cart
                                   </span> */}
                              </div>
                          </div>
                          <div className="col-auto ">
                              <div className="" style={{height:'200px' }}>
                                <img src={require(`../../media/image/${ele.imageName}`)} className="d-block w-50 " alt="no kmyb" />
                              </div>
                          </div>
                        </div>
                        </Paper>
                        )
                      })
                     }
                  
                  </div>
                  *********************
                  {/* <div >
                  <Paper>
                      <div className="row">
                        <div className="col-auto">
                            <div className=" p-4 d-flex flex-column justify-content-start">
                                <span className='fs-5 fw-bold my-3'>Certification Course (4-8 weeks)</span>
                                 <span className='fs-5 mb-4'>Audiono and its application</span>
                                 <span className='text-primary fs-5'
                                 style={{
                                  cursor: 'pointer',
                                   fontWeight:'bold' , fontSize:'19px'
                                }}
                                onClick={()=>{
                                  alert('HHEllo')
                                }}>
                                 Explore Now 
                                 <FontAwesomeIcon
                                       icon={faFloppyDisk}
                                     className="fa-sm mx-2"
                                      color="grey"
                                 /></span>
                            </div>
                        </div>
                        <div className="col-auto ">
                            <div className="" style={{height:'200px' ,width:'400px'}}>
                              <img src={require("../../media/image/Rover.png")} className="d-block w-50 " alt="no kmyb" />
                            </div>
                        </div>
                      </div>
                  </Paper>
                  </div> */}
                  **********************
                  {/* <div >
                  <Paper>
                      <div className="row">
                        <div className="col-auto">
                            <div className=" p-4 d-flex flex-column justify-content-start">
                                <span className='fs-5 fw-bold my-3'>Certification Course (4-8 weeks)</span>
                                 <span className='fs-5 mb-4'>Audiono and its application</span>
                                 <span className='text-primary fs-5'
                                 style={{
                                  cursor: 'pointer',
                                   fontWeight:'bold' , fontSize:'19px'
                                }}
                                onClick={()=>{
                                  alert('HHEllo')
                                }}>
                                 Explore Now 
                                 <FontAwesomeIcon
                                       icon={faFloppyDisk}
                                     className="fa-sm mx-2"
                                      color="grey"
                                 /></span>
                            </div>
                        </div>
                        <div className="col-auto ">
                            <div className="" style={{height:'200px' ,width:'400px'}}>
                              <img src={require("../../media/image/Rover.png")} className="d-block w-50 " alt="no kmyb" />
                            </div>
                        </div>
                      </div>
                  </Paper> 
                  </div>*/}
                </div>
           </div>
        </div>

    </div>
  )
}

export default Courses