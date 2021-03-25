const initialState = {
  loginEmailPasswordLoading: false,
  loginUser: {},
};

export default function auth(state = initialState, action = {}) {
  switch (action.type) {
    case 'LOGIN': {
      return {
        ...state,
        LoginError: action.error ? action.error : null,
        LoginSuccess: action.subtype === 'success',
        LoginLoading: action.subtype === 'loading',
        Login: action.subtype === 'success' ? action.Login : state.Login,
      };
    }
    case 'SIGN_UP': {
      return {
        ...state,
        SignUpError: action.error ? action.error : null,
        SignUpSuccess: action.subtype === 'success',
        SignUpLoading: action.subtype === 'loading',
        SignUp: action.subtype === 'success' ? action.SignUp : state.SignUp,
      };
    }
    case 'OTP_VERIFY': {
      return {
        ...state,
        OtpVerifyError: action.error ? action.error : null,
        OtpVerifySuccess: action.subtype === 'success',
        OtpVerifyLoading: action.subtype === 'loading',
        OtpVerify:
          action.subtype === 'success' ? action.OtpVerify : state.OtpVerify,
      };
    }
    case 'RESET_PASSWORD': {
      return {
        ...state,
        resetPasswordError: action.error ? action.error : null,
        resetPasswordSuccess: action.subtype === 'success',
        resetPasswordLoading: action.subtype === 'loading',
        resetPassword:
          action.subtype === 'success'
            ? action.resetPassword
            : state.resetPassword,
      };
    }

    default:
      return state;
  }
}
