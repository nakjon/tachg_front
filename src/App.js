import logo from './logo.svg';
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from './pages/Landing/Login';
//import PrivateRoute from './pages/route/PrivateRoute';
import SignUp from './pages/auth/SignUp';
import Courses from './pages/education/Courses';
import CourseDetails from './pages/education/CourseDetails';
import Cart from './pages/cart/cart';
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./store/store";
import ProtectedRoute from './route/middleware/ProtectedRoute';
import AdminRoute from './route/middleware/adminRoute';
import Certificate from './pages/admin/certificate/Certificate';
import Gallery from './pages/gallary/Gallery';
const Landing = lazy(() =>
  import("./pages/Landing/landing")
);
const Product = lazy(() =>
  import("./pages/admin/product/Product")
);
const UserDesk = lazy(() =>
  import("./pages/admin/user/UserDesk")
);
const MasterLayout=lazy( ()=> 
import("./pages/layout/MasterLayout"))

function App() {
  return (
    <div className="App">
    <Provider store={store}>
     <Routes>
       <Route path="" element={<MasterLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path='login' element={<Login/>} />
          <Route path='signUp' element={<SignUp />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/courseDetails' element={<CourseDetails />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route element={<ProtectedRoute />} >
              <Route path='/cart' element={<Cart />} />
          </Route>
          <Route element={<AdminRoute />} >
              <Route path='admin/certificate' element={<Certificate />} />
              <Route path='admin/product' element={<Product />} />
              <Route path='admin/userlist' element={<UserDesk />} />
          </Route>
      </Route> 
    </Routes>
    </Provider>
      <ToastContainer newestOnTop={true} />
    </div>
  );
}

export default App;
