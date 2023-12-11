import { CREATE_CERTIFICATE, CREATE_CERTIFICATE_RESPONSE, CREATE_PRODUCT, CREATE_PRODUCT_RESPONSE, CREATE_USER, CREATE_USER_RESPONSE, DELETE_CERTIFICATE, DELETE_CERTIFICATE_RESPONSE, DELETE_PRODUCT, DELETE_PRODUCT_RESPONSE, DELETE_USER, DELETE_USER_RESPONSE, EDIT_CERTIFICATE, EDIT_CERTIFICATE_RESPONSE, EDIT_PRODUCT, EDIT_PRODUCT_RESPONSE, EDIT_USER, EDIT_USER_RESPONSE, FIND_CERTIFICATE_BY_EMAIL, FIND_CERTIFICATE_BY_ID, FIND_CERTIFICATE__BY_EMAIL_RESPONSE, FIND_CERTIFICATE__BY_ID_RESPONSE, GET_CERTIFICATE_LIST, GET_CERTIFICATE_LIST_RESPONSE, GET_IMAGE_PRODUCT, GET_IMAGE_PRODUCT_RESPONSE, GET_PRODUCT_LIST, GET_PRODUCT_LIST_RESPONSE, GET_USER_LIST, GET_USER_LIST_RESPONSE, UPLOAD_IMAGE_PRODUCT, UPLOAD_IMAGE_PRODUCT_RESPONSE } from "./actionTypes";


const initialState = {
  error: "",
  loading: false,
};

const admin = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_USER:
      state = {
        ...state,
      };
      break;
    case DELETE_USER_RESPONSE:
      state = {
        ...state,
        deleteResponse: action.payload,
      };
      break;
    case GET_USER_LIST:
      state = {
        ...state,
      };
      break;
    case GET_USER_LIST_RESPONSE:
      state = {
        ...state,
        userListResponse: action.payload,
      };
      break;
    
      case EDIT_USER:
      state = {
        ...state,
      };
      break;
    case EDIT_USER_RESPONSE:
      state = {
        ...state,
        editUserResp: action?.payload,
      };
      break;
    

    case CREATE_USER:
      state = {
        ...state,
      };
      break;
    case CREATE_USER_RESPONSE:
      state = {
        ...state,
        createUserResponse: action?.payload,
      };
      break;

      case DELETE_CERTIFICATE:
        state = {
          ...state,
        };
        break;
      case DELETE_CERTIFICATE_RESPONSE:
        state = {
          ...state,
          deleteCertificateResponse: action.payload,
        };
        break;
      case GET_CERTIFICATE_LIST:
        state = {
          ...state,
        };
        break;
      case GET_CERTIFICATE_LIST_RESPONSE:
        state = {
          ...state,
          CertificateListResponse: action.payload,
        };
        break;
        case FIND_CERTIFICATE_BY_ID:
        state = {
          ...state,
        };
        break;
      case FIND_CERTIFICATE__BY_ID_RESPONSE:
        state = {
          ...state,
          CertificateByIdResponse: action.payload,
        };
        break;
      
        case EDIT_CERTIFICATE:
        state = {
          ...state,
        };
        break;
      case EDIT_CERTIFICATE_RESPONSE:
        state = {
          ...state,
          editCertificateResp: action?.payload,
        };
        break;
      
  
      case CREATE_CERTIFICATE:
        state = {
          ...state,
        };
        break;
      case CREATE_CERTIFICATE_RESPONSE:
      state = {
        ...state,
        createCertificateResp: action?.payload,
      };
      break; 
      case FIND_CERTIFICATE_BY_EMAIL:
        state = {
          ...state,
        };
        break;
      case FIND_CERTIFICATE__BY_EMAIL_RESPONSE:
      state = {
        ...state,
        getCertificateByEmail: action?.payload,
      };
      break;
      case GET_PRODUCT_LIST:
        state = {
          ...state,
        };
        break;
      case GET_PRODUCT_LIST_RESPONSE:
      state = {
        ...state,
        productListResp: action?.payload,
      };
      break;
      case CREATE_PRODUCT:
        state = {
          ...state,
        };
        break;
      case CREATE_PRODUCT_RESPONSE:
      state = {
        ...state,
        createProdResp: action?.payload,
      };
      break;
      case UPLOAD_IMAGE_PRODUCT:
        state = {
          ...state,
        };
        break;
      case UPLOAD_IMAGE_PRODUCT_RESPONSE:
      state = {
        ...state,
        uploadImageProdResp: action?.payload,
      };
      break;
      case EDIT_PRODUCT:
        state = {
          ...state,
        };
        break;
      case EDIT_PRODUCT_RESPONSE:
      state = {
        ...state,
        updateProdResp: action?.payload,
      };
      break;
      case DELETE_PRODUCT:
        state = {
          ...state,
        };
        break;
      case DELETE_PRODUCT_RESPONSE:
      state = {
        ...state,
        deleteProdResp: action?.payload,
      };
      break;
      case GET_IMAGE_PRODUCT:
        state = {
          ...state,
        };
        break;
      case GET_IMAGE_PRODUCT_RESPONSE:
      state = {
        ...state,
        imageProdResp: action?.payload,
      };
      break;
      
    default:
      state = { ...state };
      break;
  }
  return state;
};
export default admin;         
