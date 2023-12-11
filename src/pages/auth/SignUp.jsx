import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NETWORK_STATUS_CODE } from 'src/common/constant/constant';
import toastMessage from 'src/common/toastmessage/toastmessage'
import { createUser, createUserResponse } from 'src/store/admin/action';

function SignUp() {
    const dispatch = useDispatch()
    const[postData ,setPostData] = useState({
      name:"",
      email:'',
      password:''
    })

    const addUserResponse = useSelector(
      (state) => state?.admin?.createUserResponse
    );
    useEffect(() => {
      if (
        addUserResponse &&
        addUserResponse?.status === NETWORK_STATUS_CODE.CREATED_SUCCESSFULLY
      ) {
        dispatch(createUserResponse(""));
        toastMessage("User ", "user added succesfully", "success");
      } else if (
        addUserResponse &&
        addUserResponse?.status === NETWORK_STATUS_CODE.PAGE_NOT_FOUND
      ) {
        dispatch(createUserResponse(""));
        toastMessage("User", addUserResponse?.data?.message, "error");
      } 
    }, [addUserResponse]);
  return (
    <div>

<section class="">
 {/* //style="background-color: hsl(0, 0%, 96%)" */}
  <div class="px-4 py-5 px-md-5 text-center text-lg-start" style={{backgroundColor :'hsl(0, 0%, 96%)' ,minHeight:'100vh' }} >
    <div class="container">
      <div class="row gx-lg-5 align-items-center">
        <div class="col-lg-6 mb-5 mb-lg-0">
          <h1 class="my-5 display-3 fw-bold ls-tight">
            The best place <br />
            <span class="text-primary">to learn Robotics</span>
          </h1>
          <p style={{color:'hsl(217, 10%, 50.8%)'}}>
            Here , you will get the oppurtunity to learn about robotics and other important aspect for your bright
            carriar such as web development , IOT , wordpress etc. along with handon practice on these technology.
          </p>
        </div>

        <div class="col-lg-6 mb-5 mb-lg-0">
          <div class="card">
            <div class="card-body py-5 px-md-5">
              <form>
               
                {/* <div class="row">
                  <div class="col-md-6 mb-4"> */}
                    <div class="form-outline mb-4">
                      <input  onChange={(e)=>setPostData({...postData ,name:e.target.value})}
                       value={postData.name} type="text" id="form3Example1" class="form-control" />
                      <label class="form-label" for="form3Example1">Full name</label>
                    {/* </div>
                  </div> */}
                  {/* <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" id="form3Example2" class="form-control" />
                      <label class="form-label" for="form3Example2">Last name</label>
                    </div>
                  </div> */}
                </div>

               
                <div class="form-outline mb-4">
                  <input
                  onChange={(e)=>setPostData({...postData ,email:e.target.value})}
                  value={postData.email} type="email" id="form3Example3" class="form-control" />
                  <label class="form-label" for="form3Example3">Email address</label>
                </div>

              
                <div class="form-outline mb-4">
                  <input  onChange={(e)=>setPostData({...postData ,password:e.target.value})}
                  value={postData.password} type="password" id="form3Example4" class="form-control" />
                  <label class="form-label" for="form3Example4">Password</label>
                </div>

              
                <div  class="form-check d-flex justify-content-center mb-4">
                  <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                  <label class="form-check-label" for="form2Example33">
                    Subscribe to our newsletter
                  </label>
                </div>

             
                <button type="button" class="btn btn-primary btn-block mb-4"
                    onClick={()=>{
                      if(postData.name===""){ 
                          toastMessage('Error', 'Name field is mandatory', 'error');
                      }else if (
                        !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                          postData.email
                        )){
                          toastMessage('login',"Enter a valid email" ,"error")
                        }else if(postData.password.length<6 || postData.password.length>15){
                        toastMessage('login',"password field must be between 5 to 15 char" ,"error")
                      }else{
                        console.warn("Submit Values", postData);
                          dispatch(
                            createUser(postData)
                          );
                      }
                    }}
                >
                  Sign up
                </button>

              
                {/* <div class="text-center">
                  <p>or sign up with:</p>
                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-facebook-f"></i>
                  </button>

                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-google"></i>
                  </button>

                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-twitter"></i>
                  </button>

                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-github"></i>
                  </button>
                </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</section>

    </div>
  )
}

export default SignUp
