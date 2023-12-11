const key = "DVDMS_KEEP_SECRET";
const PROFILE_DETAIL = "PROFILE_DETAIL";
const storetoken = (token) => {
  sessionStorage.setItem(key, token);
};
// const storeRefreshToken = (token) => {
//   localStorage.setItem("refresh_token", token);
// };
const storeProfileDetails = (details) => {
  console.log("Details", details);
  sessionStorage.setItem(PROFILE_DETAIL, JSON.stringify(details));
};
const getToken = () => {
  return sessionStorage.getItem(key);
};
const getProfileDetail = () => {
  return sessionStorage.getItem(PROFILE_DETAIL);
};
const getActivityList = () => {
  return JSON.parse(localStorage.getItem("role"));
};

const setActivityList = (det) => {
  localStorage.setItem("role", det);
};

// const getRefreshToken = () => {
//   return localStorage.getItem("refresh_token");
// };

const clearToken = () => {
  sessionStorage.clear();
  localStorage.clear();
  return true;
};

const func = {
  storetoken,
  getToken,
  clearToken,
  storeProfileDetails,
  getProfileDetail,
  // storeRefreshToken,
  // getRefreshToken,
   getActivityList,
   setActivityList
};

export default func;
