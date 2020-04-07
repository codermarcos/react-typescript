import React, { useState } from 'react';

import 'src/views/Home/Home.css';

import { PropsFromRedux } from './Home.connect';

export interface State {
  cep: string;
}

function Home(props: PropsFromRedux) {
  const [state, setState] = useState({ cep: '' });

  const send = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.searchCep(state.cep);
  };

  return (
    <main>
      <form onSubmit={send}>
        <input
          type="text"
          defaultValue={state.cep}
          onInput={(e) => setState({ cep: e.currentTarget.value })}
        />

        <button type="submit">
          search
        </button>
      </form>
    </main>
  );
}

export default Home;
