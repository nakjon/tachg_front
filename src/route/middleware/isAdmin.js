import tokenhandle from '../../common/tokenhandle/tokenhandle'

const isAdmin = () => {
    const token = tokenhandle.getToken() // Replace 'localStorage' with 'sessionStorage' or read cookies if that's where you store the token
    const role = tokenhandle.getActivityList() ;

    if (token && role?.some(role => role.authority === 'ROLE_ADMIN')) {  
        return true;
    } 
    else {
      return false;
    }
  };
  
  export default isAdmin;