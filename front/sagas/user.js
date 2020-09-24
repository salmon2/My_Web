import { all, fork, call, put, takeLatest } from 'redux-saga/effects'
import {
	LOG_IN_FAILRUE, LOG_IN_SUCCESS, LOG_IN_REQUEST, 
	SIGNUP_REQUEST,SIGNUP_FAILRUE, SIGNUP_SUCCESS,
	USER_SUCCESS,USER_FAILRUE,USER_REQUEST
	} from '../reducers/user'

import axios from 'axios'

axios.defaults.baseURL="http://localhost:7000"

function logInAPI(body) {
	return axios.post('/api/user/login', body) //다른 리소스 간에 자원공유, course orgin
}

function signupAPI(body){
	return axios.post('/api/user/join', body)
}

function infoAPI(body){
	console.log(body);
	return axios.get('/api/user/id',{params:{id:body}});
}

function* logIn(action) {
	try {
		const result = yield call(logInAPI, action.data);
		yield put({
			type:LOG_IN_SUCCESS,
			data:result.data,
		})
	} catch (err) {
		yield put({
			type:LOG_IN_FAILRUE,
			data:null,
		})
	}
}

function* signup(action) {
	try {
		const result = yield call(signupAPI, action.data)
		yield put({
			type: SIGNUP_SUCCESS,
			data: null
		})	
	} catch (error) {
		yield put({
			type: SIGNUP_FAILRUE,
			error: null,
		})
	}
}
function* info(action) {
	console.log(action.data);
	try {
		const result = yield call(infoAPI, action.data);
		console.log(result.data);
		yield put({
			type:USER_SUCCESS,
			data:result.data,
		})
	} catch (err) {
		yield put({
			type:USER_FAILRUE,
			data:null,
		})
	}
}
function* watchLogIn() {
	yield takeLatest(LOG_IN_REQUEST, logIn)
}

function* watchSignup(){
	yield takeLatest(SIGNUP_REQUEST, signup)
}
function* watchInfo(){
	yield takeLatest(USER_REQUEST, info)
}

export default function* userSaga() {
	yield all([
		fork(watchLogIn),
		fork(watchSignup),
		fork(watchInfo),
	])
}