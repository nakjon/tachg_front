
import React from 'react'
import "./Style.css";
import {DefaultPlayer as Video} from 'react-html5video'
import introVideo from '../../media/video/145864.mp4'
import 'react-html5video/dist/index'
import { Paper } from "@mui/material";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Modal from 'react-awesome-modal';
import {
  faCalendar,
  faEnvelope,
  faLocationDot,
  faMailBulk,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
library.add(faFacebookF, faTwitter, faInstagram, faLinkedin);


const landing = () => {
  return (
   <>

  <div id='home' style={{backgroundColor:'azure'}} >
        <div className='mb-4'>
          <section class="bg-main bg-color hero-section">
                <div class="container">
                  <div class="row mb-5 ">
                      <div class="d-flex flex-column align-items-start justify-content-center col-xl-6 xl-lg-6 col-md-12 col-12 order-1 order-lg-0 text-md-start text-center">
                          <h2 class=" text-capitalize fw-bolder text-white">
                              We Provide High Quality Workshop
                          </h2>
                          <p class="mt-3 mb-5  para-width text-light-grey ">
                          We are the team of Engineers with the dream in their eyes to make India more innovative and Atmanirbhar.
                          Great things in business are never done by one person. They’re done by a team of people. – Steve Jobs
                          </p>

                          {/* <div class="text-center w-100 text-md-start">
                              <button class="btn btn-primary px-5 py-2 " data-bs-offset="0,5" data-bs-placement="top"
                                      data-bs-title="Get Best Services" data-bs-toggle="tooltip">Contact Us
                              </button>
                          </div> */}

                      </div>

                      <div class="col-xl-6 xl-lg-6 col-md-12 col-12 order-0 order-lg-1 hero-image--section ">
                          <div class="text-md-end text-center mb-5">                                                                                   
                                  <Video controls autoPlay  loop muted  class="hero-video--section"  >
                                      <source src={introVideo} type='video/webm'/>
                                  </Video>                              
                          </div>
                      </div>

                  </div>

               </div>
              <div  class="custom-shape-divider-bottom-1684208460 "  >
                  <svg data-name="Layer 1" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
                      <path class="shape-fill"
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                  </svg>
              </div>
        </section>
      </div>

      
   <div id="aboutus" style={{backgroundColor:'Azure'}}>

        <div className="row mt-5 offset-xl-1 offset-lg-1 offset-md-0" >
          
          <div className="col-xl-3 col-lg-3 col-md-12 mx-2">
            <div className="carosal-main">
              <Paper>
              <div className="row mt-3 ">
                <div className="col-12">
                    <div className='mb-4 mt-2 '>
                        <h3 className='text-capitalize fw-bolder mx-2' style={{color:'teal'}}>Our Mission</h3> 
                    </div>
                    <div className='mb-2 content-text mb-2'>
                        <p>Our Mission is to establish innovation Labs across India.</p> 
                    </div>
                    <div className='my-2 content-text'>
                        <p>Our Mission is to establish innovation Labs across India.</p> 
                    </div>
                </div>
              </div>
              </Paper>
            </div>
          </div>
          

          <div className="col-xl-4 col-lg-4 col-md-12  mx-xl-5  mt-3 mb-3 ">
            <div className="carosal-main">
              <Paper>
              <div className="row " style={{padding:'10px'}}>
                <div className="col-12">
                  <div id="carouselExampleAutoplaying2" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src={require("../../media/image/1.jpg")} className="d-block w-100 " alt="no kmyb" />
                      </div>
                      <div className="carousel-item">
                        <img src={require("../../media/image/2.jpg")} className="d-block w-100 " alt="no kmyb" />
                      </div>
                      <div className="carousel-item">
                        <img src={require("../../media/image/3.jpg")} className="d-block w-100 " alt="no kmyb" />
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying2" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying2" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </div>
              </Paper>
            </div>
          </div>


          <div className="col-xl-3 col-lg-3 col-md-12 mx-2">
            <div className="carosal-main">
            <Paper>
                <div className="row mt-3">
                  <div className="col-12">
                      <div className='mb-4 mt-2'>
                          <h3 className='text-capitalize mx-2 fw-bolder' style={{color:'teal'}}>Our Vision</h3> 
                      </div>
                      <div className='mb-2  content-text'>
                          <p>Our Mission is to establish innovation Labs across India.</p> 
                      </div>
                      <div className='my-2 content-text'>
                          <p>Our Mission is to establish innovation Labs across India.</p> 
                      </div>
                  </div>
                </div>
              </Paper>
            </div>
          </div>


        </div>
  
    </div>


{/* <div className="row div col-12 mb-5" style={{backgroundColor:'azure'}}>
  *********************************************************************************************************************************************************************************************************************************************************************************************************************************************
</div> */}
{/* our team start*/}
  
 {/* <div className='mt-5' style={{backgroundColor:'azure'}}>
   <div className="row offset-xl-1 offset-md-1">
    <div className="col-xl-11 col-md-10">
      <div id='aboutourteam' className='aboutourteam mt-4'>
         <Paper>
            <h3 className='text-primary text-center fw-bolder my-4'>our team</h3>
            <div className="">
                  <div className="d-flex justify-content-center align-items-center">
                  <img alt="..." style={{borderRadius: '50%', width:'90px',height: '90px'}} 
                      src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                  </div><br></br>
                  <p className='mt-3 d-flex justify-content-center align-items-center team-name'>Nishant Kumar</p>
                   <p className='mt-3 d-flex justify-content-center align-items-center team-name'>Founder and CEO</p>
            </div>
            
         </Paper>
      </div>
    </div>
   </div>
  </div> */}

<div id='aboutusteam' class="container py-5">
    <div class="row text-center text-white">
        <div class="col-lg-8 mx-auto">
            <h1 class="display-4">Our Team </h1>
            
        </div>
    </div>
</div>


<div class="container">
    <div class="row text-center">
    
        <div class="col-xl-4 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4"><img src={require(`../../media/image/npic.jpeg`)} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                <h5 class="mb-0">Nishant Singh</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item"><a href="https://m.facebook.com/103506081090401/" class="social-link"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                    {/* <li class="list-inline-item"><a href="##" class="social-link"><FontAwesomeIcon icon={faTwitter} /></a></li> */}
                    <li class="list-inline-item"><a href="https://www.instagram.com/nsinghjs1/" class="social-link"><FontAwesomeIcon icon={faInstagram} /></a></li>
                    <li class="list-inline-item"><a href="https://www.linkedin.com/in/nishant-kumar-955266187" class="social-link"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                </ul>
            </div>
        </div>

        <div class="col-xl-4 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4"><img src={require(`../../media/image/nakpic.jpg`)} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                <h5 class="mb-0">Nadim Ahmed Khan</h5><span class="small text-uppercase text-muted">CO - Founder</span>
                <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item"><a href="https://www.facebook.com/profile.php?id=100014127456875" target='_blank' rel="noreferrer" class="social-link"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                    <li class="list-inline-item"><a href="https://twitter.com/NadimAhmedkhan9" class="social-link"><FontAwesomeIcon icon={faTwitter} target='_blank' rel="noreferrer" /></a></li>
                    <li class="list-inline-item"><a href="https://instagram.com/nakjon?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==" class="social-link"><FontAwesomeIcon icon={faInstagram} target='_blank' rel="noreferrer" /></a></li>
                    <li class="list-inline-item"><a href="https://www.linkedin.com/in/nadim-ahmed-khan-648512205?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' rel="noreferrer" class="social-link"><FontAwesomeIcon icon={faLinkedin} target='_blank' rel="noreferrer" /></a></li>
                </ul>
            </div>
        </div>

        <div class="col-xl-4 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4"><img src={require(`../../media/image/akelapic.jpg`)} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                <h5 class="mb-0">Subham Akela</h5><span class="small text-uppercase text-muted">CO - Founder</span>
                <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item"><a href="##" class="social-link"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                    <li class="list-inline-item"><a href="##" class="social-link"><FontAwesomeIcon icon={faTwitter} /></a></li>
                    <li class="list-inline-item"><a href="##" class="social-link"><FontAwesomeIcon icon={faInstagram} /></a></li>
                    <li class="list-inline-item"><a href="##" class="social-link"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                </ul>
            </div>
        </div>

       
        {/* <div class="col-xl-3 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-team/teacher-7.jpg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                <h5 class="mb-0">John Tarly</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item"><a href="##" class="social-link"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                    <li class="list-inline-item"><a href="##" class="social-link"><FontAwesomeIcon icon={faTwitter} /></a></li>
                    <li class="list-inline-item"><a href="##" class="social-link"><FontAwesomeIcon icon={faInstagram} /></a></li>
                    <li class="list-inline-item"><a href="##" class="social-link"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                </ul>
            </div>
        </div> */}
    </div>
</div>
   
{/* our team end */}

<div id='contact' className='p-2' style={{ backgroundColor: 'azure'}}>
  {/* <Paper className='conteem' style={{ backgroundColor: "PaleTurquoise" }}>  */}
      <div className="row offset-xl-1 offset-md-0  "  >
         <div className="col-xl-6 col-md-12   ">

        <div className="container">
          <div className="row">

            <div className="col-6 " data-aos="fade-down">
              <div className='mt-5'>
                <div className="">
                  <h5>CONTACT DETAILS</h5>
                  
                  <ul className="list p-0 my-3">
                    <li className="list-item p-1">
                      <FontAwesomeIcon
                        size="2x"
                        className="me-2"
                        color='orange'
                        icon={faCalendar}
                      />
                      Mon- Fri, 10am to 6pm
                    </li>
                    <li className="list-item p-1">
                      <FontAwesomeIcon
                        size="2x"
                        className="me-2"
                        icon={faPhone}
                        color='grey'
                      />{" "}
                      +91 6204696995
                    </li>
                    <li className="list-item p-1" >
                      <FontAwesomeIcon
                      
                      className='me-2'
                        size="2x"
                        icon={faMailBulk}
                        color='red'
                      />{" "}
                      nsinghjs108@gmail.com
                    </li>
                    <li className="list-item p-1">
                      <FontAwesomeIcon
                        size="2x"
                        className="me-2"
                        icon={faLocationDot}
                        color='green'
                      />
                      {" "}
                      <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/company/techglaz/'> GET DIRECTION</a> 
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-6" data-aos="fade-down">
              <div className='mt-5'>
                <div className="">
                  <h5>FOLLOW US ON</h5>
                    
              <div className="row offset-1 my-3">
                <div className="col-10 ">
                  <ul className="list p-0">
                    <li className="list-item p-1">
                      <FontAwesomeIcon
                        size="2x"
                        className="me-3"
                        color='blue'
                        icon={faLinkedin}
                      />
                      <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/company/techglaz/'>Linkedin</a>
                    </li>
                    <li className="list-item p-1">
                      <FontAwesomeIcon
                        size="2x"
                        className="me-2"
                        color='red'
                        icon={faYoutube}
                      />{" "}
                      
                      <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/company/techglaz/'>Youtube</a>
                    </li>
                    <li className="list-item p-1">
                      <FontAwesomeIcon
                        size="2x"
                        className="me-3"
                        color='blue'
                        icon={faFacebookF}
                      />{" "}
                      <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/company/techglaz/'>Facebook</a>
                    </li>
                    <li className="list-item p-1">
                      <FontAwesomeIcon
                        size="2x"
                        className="me-2"
                        color='red'
                        icon={faInstagram}
                      />{" "}
                      <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/company/techglaz/'>Instagram</a>
                    </li>
                  </ul>
                       </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="lh-lg">
                    ANK Villa, Sabour, NH-32, Bhagalpur,
                    813210,Bhagalpur
                  </p>
        </div>
  </div>
           
        <div  className="col-xl-5 col-md-12 ">       
                <div className="row">
                    <div className="col-md-12">
                                <div className="row  mt-2 mb-4">
                                      <div className="col-md-8  offset-3 ">
                                          <h4 className="text-primary">send query</h4>
                                      </div>
                                  </div>

                            <div class="container">
                              <div class="row justify-content-center">
                                <div class="col-lg-12">
                                  <form>
                                    <div class="row mb-2">
                                      <div class="col-md-4">
                                        <label for="name">Name</label>
                                      </div>
                                      <div class="col-md-6">
                                        <input type="text" class="form-control" id="name" placeholder="Enter your name" />
                                      </div>
                                    </div>
                                    <div class="row my-2">
                                      <div class="col-md-4">
                                        <label for="email">Email</label>
                                      </div>
                                      <div class="col-md-6">
                                        <input type="email" class="form-control" id="email" placeholder="Enter your email" />
                                      </div>
                                    </div>
                                    <div class="row my-2">
                                      <div class="col-md-4">
                                      <label for="remark">Remark</label>
                                      </div>
                                      <div class="col-md-6">
                                      <textarea class="form-control" id="remark" rows="3" placeholder="Enter your remark"></textarea>
                                      </div>
                                    </div>
                                  
                                    <div className="d-flex justify-content-center align-items-center my-3">
                                       <button type="submit" class="btn btn-primary">Submit</button>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>                     
                        </div>                  
                </div> 
      </div>  
    </div>
    {/* </Paper> */}
</div>
  {/* <div className='mx-3 my-5'>
    
    <div className="row">
        <div id='ourteam' className="col-xl-5 offset-xl-1 offset-lg-1 col-lg-5 col-md-12">
            
        </div>
            
        <div id='contact' className="col-xl-5 offset-xl-1 offset-lg-1 col-lg-5 col-md-12">
            
        </div>
    </div>

  </div> */}



</div>
          
</>
)
}

export default landing
