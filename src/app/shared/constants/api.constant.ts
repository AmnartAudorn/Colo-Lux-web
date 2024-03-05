// BASE API

import { environment } from 'src/environments/environment';

const BASE_URL = environment.apiUrl;
export const API_URL = {
  // User
  USER_AUTH_TOKEN: `${BASE_URL}/api/v1/auth/signin`,
  REGISTER_USER_AUTH_TOKEN: `${BASE_URL}/api/v1/auth/signup`,
  GET_PRODUCT: `${BASE_URL}/get/product`,
  GET_PRODUCT_BY_ID: `${BASE_URL}/get/product/code`,
  SAVE_PRODUCT: `${BASE_URL}/create/product`,
  SAVE_APPOINTMENT: `${BASE_URL}/create/appointment`,
  SAVE_ASSESSMENT: `${BASE_URL}/create/rickAssessment`,
  DELETE_PRODUCT: `${BASE_URL}/delete/product`,
  CLICK: `${BASE_URL}/click`,
};
