import { takeLatest } from 'redux-saga/effects';

import searchCep from './cep/saga';
import { CepActionType } from './cep/types';

function* rootSaga() {
  yield takeLatest(CepActionType.fetch, searchCep);
}

export default rootSaga;
