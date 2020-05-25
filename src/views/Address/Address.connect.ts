import { connect, ConnectedProps } from 'react-redux';
import { CepActionType } from 'src/store/cep/types';
import { RootState } from 'src/store';

const mapState = (state: RootState) => ({
  address: state.cep.address,
});

const mapDispatch = {
  searchCep: (cep: string) => ({ type: CepActionType.fetch, cep }),
};

const connector = connect(mapState, mapDispatch);

export default connector;

export type PropsFromRedux = ConnectedProps<typeof connector>;
