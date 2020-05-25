import React from 'react';
import renderer from 'react-test-renderer';

import Home from 'src/views/Home/Home';
import { CepActionType } from 'src/store/cep/types';
import { PropsFromRedux } from 'src/views/Home/Home.connect';

describe(
  `component: ${Home.name}`,
  () => {
    const props: PropsFromRedux = {
      searchCep(cep: string) {
        return { type: CepActionType.fetch, cep };
      },
    };

    test(
      'renders correctly',
      () => {
        const tree = renderer.create(<Home {...props} />).toJSON();
        expect(tree).toMatchSnapshot();
      },
    );
  },
);
