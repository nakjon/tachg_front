import React, { useState } from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
  MDBBtn,
  MDBModalDialog,
  MDBModalContent,
  MDBCarouselItem,
  MDBCarousel,
} from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Paper } from '@mui/material';


const Gallery = () => {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);

  return (
    <>
      <Paper>
      <div className='mt-2' style={{minHeight:'100vh' ,border:'5px solid white', backgroundColor:'whitesmoke',}}>

      <div id='aboutusteam' class="container py-0">
        <div class="row text-center ">
            <div class="col-lg-12 mx-auto">
                <h1 class="display-6 fw-bold" style={{color:'chocolate'}} >Welcome to our Gallery </h1>   
            </div>
         </div>
      </div>

         <div className="p-3">
         <MDBRow>
          <MDBCol lg={4} md={12} className='mb-2 mb-lg-0'>
              <div className="d-flex flex-column">
                  <Paper elevation={3}>
                  <div className='bg-image hover-overlay ripple shadow-1-strong rounded'  style={{border:'3px solid grey'}}> 
                    <a href='##' style={{ cursor: 'pointer' }} onClick={() => setModal1(true)}>
                      <img alt='hii' src='https://mdbcdn.b-cdn.net/img/screens/yt/screen-video-2.webp' className='w-100' />
                      <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                    </a>
                  </div>
                  </Paper>
                  <div className="d-flex mt-0 justify-content-center">
                      <h4 className='me-2 mt-2'>Lemon De Narage</h4>
                      <span style={{ fontSize:'37px' ,color:"red" ,cursor:'pointer' , }} onClick={() => setModal1(true)} ><FontAwesomeIcon
                            icon={faYoutube}
                            className="me-1"
                      /></span>
                  </div>
                </div>
        </MDBCol>

        <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
        <div className="d-flex flex-column">
        <Paper elevation={3}>
          <div className='bg-image hover-overlay ripple shadow-1-strong rounded' style={{border:'3px solid grey'}}>  
            <a href='##' style={{ cursor: 'pointer' }} onClick={() => setModal2(true)}>
               <img alt='hii' src='https://mdbcdn.b-cdn.net/img/screens/yt/screen-video-2.webp' className='w-100' />
              <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
            </a>
          </div>
          </Paper>
          <div className="d-flex mt-0 justify-content-center">
              <h4 className='me-2 mt-2'>Lemon De Narage</h4>
              <span style={{ fontSize:'37px' ,color:"red" ,cursor:'pointer' , }} onClick={() => setModal2(true)} ><FontAwesomeIcon
                    icon={faYoutube}
                    className="me-1"
               /></span>
          </div>
       </div>
        </MDBCol>

        <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
        <div className="d-flex flex-column"> 
        <Paper elevation={3}>
          <div className='bg-image hover-overlay ripple shadow-1-strong rounded' style={{border:'3px solid grey'}}>
            <a href="##" style={{ cursor: 'pointer' }} onClick={() => setModal3(true)}>
               <img alt='hii' src='https://mdbcdn.b-cdn.net/img/screens/yt/screen-video-3.webp' className='w-100' />
              <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
            </a>
          </div>
          </Paper>
          <div className="d-flex mt-0 justify-content-center">
              <h4 className='me-2 mt-2'>Lemon De Narage</h4>
              <span style={{ fontSize:'37px' ,color:"red" ,cursor:'pointer' , }} onClick={() => setModal3(true)} ><FontAwesomeIcon
                    icon={faYoutube}
                    className="me-1"
               /></span>
          </div>
        </div>
        </MDBCol>
      </MDBRow>

        <div className="row" style={{border:'1px solid grey'}}>
            <div className="col-md-6 col-sm-12" >
            <div className="my-3">
           <MDBCarousel showControls  dark fade delay={30}>
              <MDBCarouselItem
                className='w-100 d-block'
                itemId={1}
                src='https://mdbootstrap.com/img/Photos/Slides/img%20(19).jpg'
                alt='...'
              >
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </MDBCarouselItem>
              <MDBCarouselItem
                className='w-100 d-block'
                itemId={2}
                src='https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg'
                alt='...'
              >
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </MDBCarouselItem>

              <MDBCarouselItem
                className='w-100 d-block'
                itemId={3}
                src='https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg'
                alt='...'
              >
                <h5>Third slide label</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </MDBCarouselItem>
            </MDBCarousel>
           </div>
         </div>
            <div className="col-md-6 col-sm-12">
              <div className="my-3">
                <MDBCarousel showControls  dark fade delay={300}>
                    <MDBCarouselItem
                      className='w-100 d-block'
                      itemId={1}
                      src='https://mdbootstrap.com/img/Photos/Slides/img%20(19).jpg'
                      alt='...'
                    >
                      <h5>SECOND slide label</h5>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </MDBCarouselItem>
                    <MDBCarouselItem
                      className='w-100 d-block'
                      itemId={2}
                      src='https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg'
                      alt='...'
                    >
                      <h5>Second slide label</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </MDBCarouselItem>

                    <MDBCarouselItem
                      className='w-100 d-block'
                      itemId={3}
                      src='https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg'
                      alt='...'
                    >
                      <h5>Third slide label</h5>
                      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </MDBCarouselItem>
                  </MDBCarousel>
              </div>
            </div>
        </div>
        

      <MDBModal show={modal1} setShow={setModal1} backdrop={false}>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalBody>
              <div className='ratio ratio-16x9'>
                <iframe
                  src='https://www.youtube.com/embed/A3PDXmYoF5U'
                  title='YouTube video'
                  allowFullScreen
                ></iframe>
              </div>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn onClick={() => setModal1(false)} color='secondary'>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

      <MDBModal show={modal2} setShow={setModal2} backdrop={false}>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalBody>
              <div className='ratio ratio-16x9'>
                <iframe
                  src='https://www.youtube.com/embed/wTcNtgA6gHs'
                  title='YouTube video'
                  allowFullScreen
                ></iframe>
              </div>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn onClick={() => setModal2(false)} color='secondary'>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

      <MDBModal show={modal3} setShow={setModal3} backdrop={false} >
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalBody>
              <div className='ratio ratio-16x9'>
                <iframe
                  src='https://www.youtube.com/embed/vlDzYIIOYmM'
                  title='YouTube video'
                  allowFullScreen
                ></iframe>
              </div>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn onClick={() => setModal3(false)} color='secondary'>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
         </div>
      </div>
      </Paper>
    </>
  );
};

export default Gallery;
