
import React , {Suspense, useEffect, useState} from 'react' ;
import "./Layout.css" ;
import "./navbarCss.Css"
import Certifucate from '../certificate/Certifucate';
import { Link } from "react-scroll";
import { useNavigate } from 'react-router-dom';
import tokenhandle from '../../common/tokenhandle/tokenhandle'
import toastMessage from 'src/common/toastmessage/toastmessage';
import { useDispatch, useSelector } from 'react-redux';
import { NETWORK_STATUS_CODE } from 'src/common/constant/constant';
import { setLoginResponse } from 'src/store/login/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
  const navigate = useNavigate()
  const [showCerModal ,setShowModal] = useState(false)
  const handleShowCerModal = ( () =>{
    setShowModal(false)
  })
  const dispatch = useDispatch();
  const [isLogin ,setIsLogin] = useState(false) ;
  const [isAdmin ,setAdmin] = useState(false) ;
  const loginRespons = useSelector((state) => state.login.setLoginResponse);
  

  const [userName ,setusername] = useState("");
  const [firstName ,setFirstname] = useState("");
  const [role ,setRole] = useState([]);
  useEffect( ()=>{
    if(tokenhandle.getToken()!==null){
      setIsLogin(true)
      console.log('aaaa',tokenhandle.getActivityList()) 
      setusername(JSON.parse(tokenhandle.getProfileDetail())?.name)
      setRole(tokenhandle.getActivityList())
    }else{
      if(tokenhandle.getToken()===null){
        // console.log('aaaa',tokenhandle.getToken())
        setIsLogin(false)
      } }
  },[])                 
  useEffect( ()=>{
   setFirstname(userName?.substring(0,userName.indexOf(' ')))
  },[userName])  

  useEffect(()=>{
    if(role?.length>0 && role?.some(role => role.authority === 'ROLE_ADMIN')){
       setAdmin(true)
    }
  },[role])

  useEffect( ()=>{
     console.log('log res' ,loginRespons)
     if(loginRespons && loginRespons?.status===NETWORK_STATUS_CODE.SUCCESS){
        // console.log('aaaa',tokenhandle.getToken())
        if(tokenhandle.getToken()!==null){
          setIsLogin(true)
          setusername(JSON.parse(tokenhandle.getProfileDetail())?.name)
          setRole(tokenhandle.getActivityList())
        }
     }else{
      if(tokenhandle.getToken()===null){
        // console.log('aaaa',tokenhandle.getToken())
        setIsLogin(false)
      }
     }
  },[loginRespons])


  return (
<div style={{marginLeft:'12px' ,marginRight:'12px'}} >

  <div className="container-fluid bg-success" >
    <div className="row offset-lg-0 offsed-sm-0 " >
      <div className="col-lg-12 col-sm-12 ">
      <div>
        <nav class="navbar  navbar-expand-lg nav-fixed">
          <div class="container-fluid div-main">
              <span color='red' style={{cursor:'pointer'}} class="fs-4 me-4 text-white" onClick={()=>navigate('/')}>TECHGLAZ</span>
              {
                isLogin && 
                <div>
              <FontAwesomeIcon icon={faUser} style={{color:'red' ,fontSize:'18px'}} className='me-2' />
                 <span 
                        style={{ 
                          color :'white',
                          cursor:'copy',
                          fontWeight:'bold' ,
                          fontSize:'18px'  
                        }}
                 > {`Mr. ${firstName}`}</span>
              </div>
              }
 
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse div-main" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 menu ">
                  {/* <li class="nav-item">
                  <a class="nav-link " aria-current="page" href="/#aboutusteam">About Us</a>
                  </li> */}
                  <li class="">
                   {/* <a class="nav-link " href="/#contact">Contact</a> */}
                   
                      <Link
                        activeClass="active"
                        style={{ padding: "10px 15px" }}
                        to="aboutusteam"
                        spy={true}
                         smooth={true}
                        offset={-80}
                        onClick={()=>{
                          navigate('/')
                        }}
                      >
                        <span 
                        style={{ 
                          color :'white',
                          cursor:'pointer',
                          fontWeight:'bold' ,
                          fontSize:'18px'  
                        }}
                        >About us</span>
                      </Link>
                  </li>
                  {/* <li class="nav-item">
                  <a class="nav-link " href="##">Galary</a>
                  </li> */}
                  <li class="">  
                      <Link
                        activeClass="active"
                        style={{ padding: "10px 15px" }}
                        spy={true}
                        // smooth={true}
                        offset={-80}
                        onClick={()=>{
                         navigate('/gallery')
                        }}
                      >
                        <span 
                        style={{ 
                          color :'white',
                          cursor:'pointer',
                          fontWeight:'bold' ,
                          fontSize:'18px'  
                        }}
                        >Galary</span>
                      </Link>
                  </li>
                  {/* <li class="nav-item">
                  <a class="nav-link " href="##">Store</a>
                  </li> */}
                  {/* <li class="">  
                      <Link
                        activeClass="active"
                        style={{ padding: "10px 15px" }}
                        spy={true}
                        // smooth={true}
                        offset={-80}
                        onClick={()=>{
                         // navigate('/courses')
                        }}
                      >
                        <span 
                        style={{ 
                          color :'white',
                          cursor:'pointer',
                          fontWeight:'bold' ,
                          fontSize:'18px'  
                        }}
                        >Store</span>
                      </Link>
                  </li> */}
                  <li class="">
                   {/* <a class="nav-link " href="/#contact">Contact</a> */}
                   
                      <Link
                        activeClass="active"
                        style={{ padding: "10px 15px" }}
                        to="contact"
                        spy={true}
                        // smooth={true}
                        offset={-80}
                        onClick={()=>{
                          navigate('/')
                        }}
                      >
                        <span 
                        style={{ 
                          color :'white',
                          cursor:'pointer',
                          fontWeight:'bold' ,
                          fontSize:'18px'  
                        }}
                        >Contact</span>
                      </Link>
                  </li>
                  <li class="">
                   {/* <a class="nav-link " href="/#contact">Contact</a> */}
                   
                      <Link
                        activeClass="active"
                        style={{ padding: "10px 15px" }}
                        spy={true}
                        // smooth={true}
                        offset={-80}
                        onClick={()=>{
                          setShowModal(true)
                        }}
                      >
                        <span 
                        style={{ 
                          color :'white',
                          cursor:'pointer',
                          fontWeight:'bold' ,
                          fontSize:'18px'  
                        }}
                        >Certificate</span>
                      </Link>
                  </li>
                  
                  {/* <li class="nav-item">               
                    <span 
                    className='nav-link'
                     style={{
                      color :'white',
                      cursor:'pointer',
                      fontWeight:'bold' ,
                      fontSize:'18px' 
                    }}
                    onClick={()=>{
                      setShowModal(true)
                    }}>
                     Certificate
                    </span>
                  </li> */}
                  
                  {/* <li class="nav-item dropdown">
                  <a class="nav-link" href="/courses"  >
                      Education
                  </a>
                 
                  </li> */}
                   <li class="">  
                      <Link
                        activeClass="active"
                        style={{ padding: "10px 15px" }}
                        spy={true}
                        // smooth={true}
                        offset={-80}
                        onClick={()=>{
                          navigate('/courses')
                        }}
                      >
                        <span 
                        style={{ 
                          color :'white',
                          cursor:'pointer',
                          fontWeight:'bold' ,
                          fontSize:'18px'  
                        }}
                        >Education</span>
                      </Link>
                  </li>
                  
                  {/* <li class="nav-item">
                     <a class="nav-link "  href='/user/login'>login</a>
                  </li> */}
                    <li className="semiBold font15 pointer">                 
                     {
                      isLogin ?
                      <Link
                        activeClass="active"
                        style={{ padding: "10px 15px" }}
                        spy={true}
                        // smooth={true}
                        offset={-80}
                        onClick={()=>{
                          toastMessage('Logout','Logout Successfully','success')
                          tokenhandle.clearToken()
                          dispatch(setLoginResponse(""))
                          setAdmin(false)
                        }}
                      >
                        <span 
                        style={{ 
                          color :'white',
                          cursor:'pointer',
                          fontWeight:'bold' ,
                          fontSize:'18px'  
                        }}
                        >Logout</span>
                      </Link> :
                      <Link
                      activeClass="active"
                      style={{ padding: "10px 15px" }}
                      spy={true}
                      // smooth={true}
                      offset={-80}
                      onClick={()=>{
                        navigate('/login')
                      }}
                    >
                      <span 
                      style={{ 
                        color :'white',
                        cursor:'pointer',
                        fontWeight:'bold' ,
                        fontSize:'18px'  
                      }}
                      >Login</span>
                    </Link> }
                  </li>
            {
              isAdmin && 
              <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                to={"/"}
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                activeClass="active"
                style={{ padding: "10px 15px" }}
                spy={true}
                // smooth={true}
                offset={-80}
              >
                <span 
                    style={{ 
                      color :'white',
                      cursor:'pointer',
                      fontWeight:'bold' ,
                      fontSize:'18px'  
                    }}
                    >Admin</span> 
              </Link>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown" style={{backgroundColor:"teal" ,color:'InfoText'}}
              >
                <li>
                  <Link  
                  className="dropdown-item" 
                  activeClass="active"
                        style={{ padding: "10px 15px" }}
                        spy={true}
                        // smooth={true}
                        offset={-80}
                        onClick={()=>{
                          navigate('/admin/userlist')
                        }}
                  >
                     <span 
                       style={{cursor:'pointer'}}
                      className=''> UserDesk</span>
                  </Link>
                </li>
                <li>
                  <Link 
                       style={{ padding: "10px 15px" }}
                        spy={true}
                        // smooth={true}
                        offset={-80}
                        onClick={()=>{
                          navigate('/admin/certificate')
                        }} 
                        className="dropdown-item" >
                    <span style={{cursor:'pointer'}} className=''>Cert Desk</span>
                  </Link>
                </li>
                <li>
                <Link 
                       style={{ padding: "10px 15px" }}
                        spy={true}
                        // smooth={true}
                        offset={-80}
                        onClick={()=>{
                          navigate('/admin/product')
                        }} 
                        className="dropdown-item" >
                    <span style={{cursor:'pointer'}} className=''>Prod Desk</span>
                  </Link>
                </li>
                
                <li>
                  <hr className="dropdown-divider" />
                </li>
                
              </ul>
             </li>
            }
              </ul>
              </div>
              
            </div>
          </nav>
      
        </div>
          </div>
          <Suspense>
            <Certifucate
              openShowCerModal={showCerModal}
              handleCloseCerModal={handleShowCerModal}
            />
      </Suspense> 
        </div>
    </div>


</div>
  )
}

export default Navbar
