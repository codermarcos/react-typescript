import { FetchCepAction, CepActionType } from 'src/store/cep/types';
import { call, put, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import cepService from 'src/services/cep';
import { RootState } from 'src/store';

function* searchCep(action: FetchCepAction) {
  try {
    const address = yield call(cepService, action.cep);

    yield put({ type: CepActionType.save, payload: { address } });

    const page = yield select((state: RootState) => state.router.location.pathname);

    if (!page || page === '/') yield put(push(action.cep));
  } catch (error) {
    console.log(error);
  }
}

export default searchCep;
