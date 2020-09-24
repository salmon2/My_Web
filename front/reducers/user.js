import Router from "next/router";
export const initialState = {
  user:{
    id: '', //primary key
    email: '',
    password: '',
    stdnum: 0,
    major:  '',
    nickname: '',
  },


  fetchinUpdate: false,   //로그인 중 상태확인
  isLoggedIn: false,
}

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'
export const LOG_IN_FAILRUE = 'LOG_IN_FAILRUE'


export const SIGNUP_REQUEST = 'SIGNUP_REQUEST'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_FAILRUE = 'SIGNUP_FAILRUE'

export const USER_REQUEST = 'USER_REQUEST'
export const USER_SUCCESS = 'USER_SUCCESS'
export const USER_FAILRUE = 'USER_FAILRUE'

export const LOG_OUT = 'LOG_OUT'


export const logInAction = (data) => {

  return {
    type: LOG_IN_REQUEST,
    data: data
  }
}

export const SignupAction = (data) => {

  return {
    type: SIGNUP_REQUEST,
    data: data
  }
}
export const InfoAction = (data) => {
  return {
    type: USER_REQUEST,
    data: data
  }
}


export const logOutAction = () => {
  return {
    type: LOG_OUT,
    user: null
  }
}

const reducer = (state=initialState, action) =>{
  switch(action.type){
      case LOG_IN_REQUEST:

          return {
              ...state,
              fetchinUpdate: true,
              isLoggedIn: false,
          };
      case LOG_IN_SUCCESS:
        sessionStorage.setItem('islogined', true);
        sessionStorage.setItem('userid', action.data);
        alert('login_success')
        Router.push("/")
        return { 
          ...state,
          user:{id : action.data},
          fetchinUpdate: false,
          isLoggedIn: true,
        }
      case LOG_IN_FAILRUE:
        alert('login_fail')
          return {
              ...state,
              fetchinUpdate: false,
              isLoggedIn: false,
          }
      case SIGNUP_REQUEST:
        return{
          ...state,
          fetchinUpdate:true,
        }
      case SIGNUP_SUCCESS:
          alert('signup_success')
          Router.push("/login")
          return{
            ...state,
            fetchinUpdate:false,
        }
      case SIGNUP_FAILRUE:
        alert('signup_fail')
        Router.push("/signup")
        return{
          ...state,
          fetchinUpdate:false,
         }
      case USER_REQUEST:
        console.log('user_info_r')
        return{
          ...state,
          fetchinUpdate:true,
        }
      case USER_SUCCESS:
        console.log('user_info_s')
        console.log(action.data);
        return{
          ...state,
          user:action.data,
          fetchinUpdate: false,
          isLoggedIn:false,
        }
      case USER_FAILRUE:
        console.log('user_info_fail')
        return{
          ...state,
          fetchinUpdate:false,
        }
      case LOG_OUT:
        sessionStorage.setItem('islogined', false);
        sessionStorage.removeItem('userid');
        return {
            ...state,
            isLoggedIn: false,
        }
      default:
          return state ;
  }
}

export default reducer