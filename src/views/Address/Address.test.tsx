import React from 'react';
import renderer from 'react-test-renderer';

import Address from 'src/views/Address/Address';
import { PropsFromRedux } from 'src/views/Address/Address.connect';
import { CepActionType } from 'src/store/cep/types';
import { MemoryRouter } from 'react-router-dom';

describe(
  `component: ${Address.name}`,
  () => {
    const props: PropsFromRedux = {
      searchCep(cep: string) {
        return { type: CepActionType.fetch, cep };
      },
      address: {
        cep: '09390-500',
        logradouro: '',
        complemento: '',
        bairro: '',
        localidade: '',
        uf: '',
        unidade: '',
        ibge: '',
        gia: '',
      },
    };

    test(
      'renders correctly',
      () => {
        const component = (
          <MemoryRouter initialEntries={['/09390500']}>
            <Address {...props} />
          </MemoryRouter>
        );

        const tree = renderer.create(component).toJSON();
        expect(tree).toMatchSnapshot();
      },
    );
  },
);
