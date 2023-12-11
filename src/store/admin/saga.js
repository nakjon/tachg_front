import { call, put, takeEvery } from "redux-saga/effects";

import { Service } from "../../config/commonFetch";

import * as CONSTANTS from "../../common/constant/constants";
import { CertificateDeleteResponse, createCertificateResponse, createProductResponse, createUserResponse, deleteProductResponse, editCertificateResponse, editUserResponse, getCertificateByEmailResponse, getCertificateByIdResponse, getCertificateListResponse, getImageProductResponse, getProductListResponse, getUserListResponse, updateProductResponse, uploadImageProductResponse, userDeleteResponse } from "./action";
import { CREATE_CERTIFICATE, CREATE_PRODUCT, CREATE_USER, DELETE_CERTIFICATE, DELETE_PRODUCT, DELETE_USER, EDIT_CERTIFICATE, EDIT_PRODUCT, EDIT_USER, FIND_CERTIFICATE_BY_EMAIL, FIND_CERTIFICATE_BY_ID, GET_CERTIFICATE_LIST, GET_IMAGE_PRODUCT, GET_PRODUCT_LIST, GET_USER_LIST, UPLOAD_IMAGE_PRODUCT } from "./actionTypes";


function* deleteUserById({ payload: userId }) {
  console.log("userId", userId);
  try {
    const response = yield call(
      Service.commonPost,
      CONSTANTS.DELETE_USER,
      userId
    );
    console.log("Response", response);
    yield put(userDeleteResponse(response));
  } catch (error) {
    console.log("Error", error);
    put(userDeleteResponse(error));
  }
}

function* getUserList({ payload: pageDetails }) {
  console.log("pageDetails", pageDetails);
  try {
    const response = yield call(Service.commonFetch, CONSTANTS.USER_LISTING, {
      params: pageDetails,
    });
    console.log("Response", response);
    yield put(getUserListResponse(response));
  } catch (error) {
    console.log("Error", error);
    put(getUserListResponse(error));
  }
}


function* editUser({ payload: userDetails }) {
  try {
    const response = yield call(
      Service.commonPost,
      CONSTANTS.EDIT_USER,
      userDetails
    );
    console.warn("Response", response);
    yield put(editUserResponse(response));
  } catch (error) {
    console.log("Error", error);
    put(editUserResponse(error));
  }
}

// POST
function* createUser({ payload: userDetails }) {
  console.log("userDetails", userDetails);
  try {
    const response = yield call(
      Service.commonPost,
      CONSTANTS.CREATE_USER,
      userDetails
    );
    console.log("Response", response);
    yield put(createUserResponse(response));
  } catch (error) {
    console.log("Error", error);
    put(createUserResponse(error));
  }
}

// certificate

function* deleteCertificateById({ payload: details }) {
  console.log("details", details);
  try {
    const response = yield call(
      Service.commonPost,
      CONSTANTS.DELETE_CERTIFICATE_BY_ID_URL,
      details
    );
    console.log("Response", response);
    yield put(CertificateDeleteResponse(response));
  } catch (error) {
    console.log("Error", error);
    put(CertificateDeleteResponse(error));
  }
}

function* getCertificatesListRes({ payload: details }) {
  console.log("details", details);
  try {
    const response = yield call(Service.commonFetch, CONSTANTS.CERTIFICATE_LISTING_URL, {
      params: details,
    });
    console.log("Response", response);
    yield put(getCertificateListResponse(response));
  } catch (error) {
    console.log("Error", error);
    put(getCertificateListResponse(error));
  }
}
function* getCertificatesByIdRes({ payload: details }) {
  console.log("details", details);
  try {
    const response = yield call(Service.commonFetch, CONSTANTS.CERTIFICATE_BY_ID_URL, {
      params: details,
    });
    console.log("Response", response);
    yield put(getCertificateByIdResponse(response));
  } catch (error) {
    console.log("Error", error);
    put(getCertificateByIdResponse(error));
  }
}


function* editCertificateRes({ payload: details }) {
  try {
    const response = yield call(
      Service.commonPost,
      CONSTANTS.EDIT_CERTIFICATE_BY_ID_URL,
      details,
    );
    console.warn("Response", response);
    yield put(editCertificateResponse(response));
  } catch (error) {
    console.log("Error", error);
    put(editCertificateResponse(error));
  }
}

// POST
function* createCertificateRes({ payload: details }) {
  console.log("details", details);
  try {
    const response = yield call(
      Service.commonPost,
      CONSTANTS.CREATE_CERTIFICATE_URL,
      details
    );
    console.log("Response", response);
    yield put(createCertificateResponse(response));
  } catch (error) {
    console.log("Error", error);
    put(createCertificateResponse(error));
  }
}

function* getCertificateByEmailRes({ payload: details }) {
  console.log("details", details);
  try {
    const response = yield call(
      Service.commonPost,
      CONSTANTS.GET_CERTIFICATE_BY_EMAIL_URL,
      details
    );
    console.log("Response", response);
    yield put(getCertificateByEmailResponse(response));
  } catch (error) {
    console.log("Error", error);
    put(getCertificateByEmailResponse(error));
  }
}

//product start    

function* getProductListRes({ payload: details }) {
  console.log("details", details);
  try {
    const response = yield call(Service.commonFetch, CONSTANTS.PRODUCT_LISTING_URL, {
      params: details,
    });
    console.log("Response", response);
    yield put(getProductListResponse(response));
  } catch (error) {
    console.log("Error", error);
    put(getProductListResponse(error));
  }
}
function* createProdRes({ payload: details }) {
  console.log("details", details);
  try {
    const response = yield call(
      Service.commonPost,
      CONSTANTS.CREATE_PRODUCT_URL,
      details
    );
    console.log("Response", response);
    yield put(createProductResponse(response));
  } catch (error) {
    console.log("Error", error);
    put(createProductResponse(error));
  }
}

function* uploadImageProdRes({ payload: details }) {
 
  const formData = new FormData();
  formData.append('image', details?.image)
  console.log("image" , details?.image)
  try {
    
    console.log("details", formData);
    const response = yield call(
      Service.multipartPost,
      `${CONSTANTS.IMAGE_UPLOAD_PROD_URL}?pid=${details?.pid}`,
       formData
    );
    console.log("Response", response);
    yield put(uploadImageProductResponse(response));
  } catch (error) {
    console.log("Error", error);
    put(uploadImageProductResponse(error));
  }
}

function* updateProdRes({ payload: details }) {
  console.log("details", details);

  try {
    const response = yield call(
      Service.commonPost,
      `${CONSTANTS.EDIT_PRODUCT_URL}?pid=${details?.pid}&cid=${details?.cid}`,
       details?.dto
    );
    console.log("Response", response);
    yield put(updateProductResponse(response));
  } catch (error) {
    console.log("Error", error);
    put(updateProductResponse(error));
  }
}


function* deleteProdRes({ payload: details }) {
  console.log("details", details);
  try {
    const response = yield call(
      Service.commonPost,
      CONSTANTS.DELETE_PRODUCT_URL,
      details
    );
    console.log("Response", response);
    yield put(deleteProductResponse(response));
  } catch (error) {
    console.log("Error", error);
    put(deleteProductResponse(error));
  }
}

function* getIamgeProdRes({ payload: details }) {
  console.log("details", details);
  try {
    const response = yield call(
      Service.commonPost,
      CONSTANTS.IMAGE_PRODUCT_URL,
      details
    );
    console.log("Response", response);
    yield put(getImageProductResponse(response));
  } catch (error) {
    console.log("Error", error);
    put(getImageProductResponse(error));
  }
}



function* AdminSaga() {
  yield takeEvery(DELETE_USER, deleteUserById);
  yield takeEvery(GET_USER_LIST, getUserList);

  yield takeEvery(CREATE_USER, createUser);
  
  yield takeEvery(EDIT_USER, editUser);

  yield takeEvery(DELETE_CERTIFICATE, deleteCertificateById);
  yield takeEvery(GET_CERTIFICATE_LIST, getCertificatesListRes);

  yield takeEvery(CREATE_CERTIFICATE, createCertificateRes); 

  yield takeEvery(FIND_CERTIFICATE_BY_EMAIL, getCertificateByEmailRes);
  
  yield takeEvery(EDIT_CERTIFICATE, editCertificateRes);

  yield takeEvery(FIND_CERTIFICATE_BY_ID, getCertificatesByIdRes);

  yield takeEvery(GET_PRODUCT_LIST, getProductListRes);

  yield takeEvery(CREATE_PRODUCT, createProdRes);

  yield takeEvery(UPLOAD_IMAGE_PRODUCT , uploadImageProdRes )

  yield takeEvery(EDIT_PRODUCT , updateProdRes )

  yield takeEvery(DELETE_PRODUCT , deleteProdRes )

  yield takeEvery(GET_IMAGE_PRODUCT , getIamgeProdRes )
}
export default AdminSaga;     
