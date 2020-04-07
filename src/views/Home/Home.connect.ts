import { routerActions } from 'connected-react-router';
import { connect, ConnectedProps } from 'react-redux';
import { CepActionType } from 'src/store/cep/types';

const mapDispatch = {
  searchCep: (cep: string) => ({ type: CepActionType.fetch, cep }),
  ...routerActions,
};

const connector = connect(null, mapDispatch);

export default connector;

export type PropsFromRedux = ConnectedProps<typeof connector>;
