import { takeLatest, put, all, call } from 'redux-saga/effects';

import UserActionsTypes from './user.types';

import {
  auth,
  googleProvider,
  createUserProfileDocument,
} from '../../firebase/firebase.utils';

export function* signInWithGoogle() {
  try {
    const userRef = yield auth.signInWithGoogle(googleProvider);
    console.log(userRef);
  } catch (error) {}
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionsTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart)]);
}
