import { LOGIN, LOGIN_COMPLETED, LOGIN_FAILED } from "../actions/types";
import {takeLatest,put } from 'redux-saga/effects';
function* Login(action){
    try{
        console.log('function from saga start check connexion data');
        let loginResponse = getDataConnexion();
        if(loginResponse){
            console.log(JSON.stringify(action));
            if(loginResponse.email === action.payload.email && loginResponse.password === action.payload.password)
            {
                console.log('it s ok');
                yield localStorage.setItem('AUTH_TOKEN', loginResponse.auth_token);
                yield put({type: LOGIN_COMPLETED, payload:loginResponse.auth_token});
            }
            else{
                console.log('error when login ');
                yield put({type: LOGIN_FAILED, payload:{message: "Something went wrong. Please try again later"}});
            }
        } 
    }
    catch(error){
        console.log(error);
    }

}

function getDataConnexion(){
    return {email: 'youness@yns.com', password:'yones', auth_token:'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1NzE1MDg1Njd9.6o1baDep5qWbTR4zx-yuUDvPmyv3TxvwASjcgnyf13U'}
}

export function* LoginWatcher(){
    yield takeLatest(LOGIN,Login);
}
