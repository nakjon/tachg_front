import {

  CREATE_USER,
  CREATE_USER_RESPONSE,
  GET_USER_LIST,
  GET_USER_LIST_RESPONSE,
  DELETE_USER,
  DELETE_USER_RESPONSE,
  EDIT_USER,
  EDIT_USER_RESPONSE,
  EDIT_CERTIFICATE,
  CREATE_CERTIFICATE_RESPONSE,
  CREATE_CERTIFICATE,
  GET_CERTIFICATE_LIST_RESPONSE,
  GET_CERTIFICATE_LIST,
  DELETE_CERTIFICATE_RESPONSE,
  DELETE_CERTIFICATE,
  EDIT_CERTIFICATE_RESPONSE,
  FIND_CERTIFICATE_BY_ID,
  FIND_CERTIFICATE__BY_ID_RESPONSE,
  GET_PRODUCT_LIST,
  GET_PRODUCT_LIST_RESPONSE,
  CREATE_PRODUCT,
  CREATE_PRODUCT_RESPONSE,
  UPLOAD_IMAGE_PRODUCT,
  UPLOAD_IMAGE_PRODUCT_RESPONSE,
  EDIT_PRODUCT,
  EDIT_PRODUCT_RESPONSE,
  DELETE_PRODUCT,
  DELETE_PRODUCT_RESPONSE,
  GET_IMAGE_PRODUCT,
  GET_IMAGE_PRODUCT_RESPONSE,
  FIND_CERTIFICATE_BY_EMAIL,
  FIND_CERTIFICATE__BY_EMAIL_RESPONSE,
} from "./actionTypes";
import {} from "./actionTypes";


export const editUser = (details) => {
  return {
    type: EDIT_USER,
    payload: details,
  };
};
export const editUserResponse = (details) => {
  return {
    type: EDIT_USER_RESPONSE,
    payload: details,
  };
};

export const deleteUser = (userId) => {
  return {
    type: DELETE_USER,
    payload: userId,
  };
};
export const userDeleteResponse = (userDelteResp) => {
  return {
    type: DELETE_USER_RESPONSE,
    payload: userDelteResp,
  };
};

export const getUserList = (pageDetails) => {
  return {
    type: GET_USER_LIST,
    payload: pageDetails,
  };
};

export const getUserListResponse = (userListResponse) => {
  return {
    type: GET_USER_LIST_RESPONSE,
    payload: userListResponse,
  };
};


// POST

export const createUser = (userDetails) => {
  return {
    type: CREATE_USER,
    payload: userDetails,
  };
};

export const createUserResponse = (createUsrResp) => {
  return {
    type: CREATE_USER_RESPONSE,
    payload: createUsrResp,
  };
};

//certificate

export const editCertificate = (details) => {
  return {
    type: EDIT_CERTIFICATE,
    payload: details,
  };
};
export const editCertificateResponse = (details) => {
  return {
    type: EDIT_CERTIFICATE_RESPONSE,
    payload: details,
  };
};

export const deleteCertificate = (details) => {
  return {
    type: DELETE_CERTIFICATE,
    payload: details,
  };
};
export const CertificateDeleteResponse = (details) => {
  return {
    type: DELETE_CERTIFICATE_RESPONSE,
    payload: details,
  };
};

export const getCertificateList = (details) => {
  return {
    type: GET_CERTIFICATE_LIST,
    payload: details,
  };
};

export const getCertificateListResponse = (details) => {
  return {
    type: GET_CERTIFICATE_LIST_RESPONSE,
    payload: details,
  };
};
export const getCertificateById = (details) => {
  return {
    type: FIND_CERTIFICATE_BY_ID,
    payload: details,
  };
};

export const getCertificateByIdResponse = (details) => {
  return {
    type: FIND_CERTIFICATE__BY_ID_RESPONSE,
    payload: details,
  };
};


// POST

export const createCertificate = (details) => {
  return {
    type: CREATE_CERTIFICATE,
    payload: details,
  };
};

export const createCertificateResponse = (details) => {
  return {
    type: CREATE_CERTIFICATE_RESPONSE,
    payload: details,
  };
};

export const getCertificateByEmail = (details) => {
  return {
    type: FIND_CERTIFICATE_BY_EMAIL,
    payload: details,
  };
};

export const getCertificateByEmailResponse = (details) => {
  return {
    type: FIND_CERTIFICATE__BY_EMAIL_RESPONSE,
    payload: details,
  };
};


//product actions  

export const getProductList = (details) => {
  return {
    type: GET_PRODUCT_LIST,
    payload: details,
  };
};

export const getProductListResponse = (details) => {
  return {
    type: GET_PRODUCT_LIST_RESPONSE,
    payload: details,
  };
};

export const createProduct = (details) => {
  return {
    type: CREATE_PRODUCT,
    payload: details,
  };
};

export const createProductResponse = (details) => {
  return {
    type: CREATE_PRODUCT_RESPONSE,
    payload: details,
  };
};



export const uploadImageProduct = (details) => {
  return {
    type: UPLOAD_IMAGE_PRODUCT,
    payload: details,
  };
};

export const uploadImageProductResponse = (details) => {
  return {
    type: UPLOAD_IMAGE_PRODUCT_RESPONSE,
    payload: details,
  };
};  

export const updateProduct = (details) => {
  return {
    type: EDIT_PRODUCT,
    payload: details,
  };
};

export const updateProductResponse = (details) => {
  return {
    type: EDIT_PRODUCT_RESPONSE,
    payload: details,
  };
};
export const deleteProduct = (details) => {
  return {
    type: DELETE_PRODUCT,
    payload: details,
  };
};
export const deleteProductResponse = (details) => {
  return {
    type: DELETE_PRODUCT_RESPONSE,
    payload: details,
  };
};


export const getImageProduct = (details) => {
  return {
    type: GET_IMAGE_PRODUCT,
    payload: details,
  };
};
export const getImageProductResponse = (details) => {
  return {
    type: GET_IMAGE_PRODUCT_RESPONSE,
    payload: details,
  };
};