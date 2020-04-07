import { Reducer } from 'react';

import defaultState from 'src/store/cep/state';
import { CepState, CepActionTypes, CepActionType } from 'src/store/cep/types';

const cepReducer: Reducer<CepState, CepActionTypes> = (state = defaultState, action) => {
  switch (action.type) {
    case CepActionType.save:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default cepReducer;
