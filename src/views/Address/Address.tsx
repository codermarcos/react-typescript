import React from 'react';
import { useParams } from 'react-router-dom';

import 'src/views/Address/Address.css';

import { PropsFromRedux } from 'src/views/Address/Address.connect';


function Address(props: PropsFromRedux) {
  let html: JSX.Element = <main>Procurando</main>;
  const { address } = props;

  if (address && address.logradouro) {
    html = (
      <main>
        {address.logradouro}
      </main>
    );
  }

  const { cep } = useParams();

  if (!cep) return html = <main>Cep não encontrado</main>;

  if (cep && cep !== address.cep.replace('-', '')) {
    const { searchCep } = props;
    searchCep(cep);
  }

  return html;
}

export default Address;
