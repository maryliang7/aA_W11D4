import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";


export const login = (user) => (dispatch) => (
  APIUtil.login(user)
    .then(received_user => dispatch(receiveCurrentUser(received_user)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const signup = (user) => (dispatch) => (
  APIUtil.signup(user)
    .then(received_user => dispatch(receiveCurrentUser(received_user)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const logout = () => (dispatch) => (
  APIUtil.logout()
    .then( () => dispatch(logoutCurrentUser()))
);

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});