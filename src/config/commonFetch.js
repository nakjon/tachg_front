import API from "./config";
const commonFetch = async (url, bodyData) => {
  return await API.get(url, bodyData ? bodyData : null , {mode: 'cors'})
    .then((respone) => {
      return respone;
    })
    .catch((error) => {
      return error;
    });
};
const commonPost = async (url, bodyData) => {
  return await API.post(url, bodyData ? bodyData : null )
    .then((respone) => {
      return respone;
    })
    .catch((error) => {
      return error?.response;
    });
};
const commonPut = async (url, bodyData) => {
  return await API.put(url, bodyData ? bodyData : null ,{mode: 'cors'})
    .then((respone) => {
      return respone;
    })
    .catch((error) => {
      return error?.response;
    });
};

const commonDelete = async (url, bodyData) => {
  return await API.delete(url, bodyData ? bodyData : null ,{mode: 'cors'})
    .then((respone) => {
      return respone;
    })
    .catch((error) => {
      return error?.response;
    });
};
const multipartPost = async (url, formData) => {
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      // Redefine the headers for multipart/form-data request
      "Content-Type": "multipart/form-data",
      Accept: "application/json",
    },
  };

  try {
    const response = await API.post(url, formData, config ,{mode: 'cors'});
    return response;
  } catch (error) {
    return error?.response;
  }
};

export const Service = {
  commonFetch,
  commonPost,
  commonPut,
  commonDelete,
  multipartPost
};
