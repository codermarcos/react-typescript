import { History } from 'history';
import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';

import cep from 'src/store/cep/reducers';
import { CepState } from './cep/types';

const rootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  cep,
});

export interface RootState {
  router: RouterState;
  cep: CepState;
}

export default rootReducer;
