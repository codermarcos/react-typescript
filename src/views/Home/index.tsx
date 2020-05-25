import React from 'react';
import { Helmet } from 'react-helmet';
import { Route, RouteProps } from 'react-router-dom';

import Home from 'src/views/Home/Home';
import connector from 'src/views/Home/Home.connect';

const Connected = connector(Home);

export default (props: RouteProps): JSX.Element => (
  <Route {...props}>
    <Helmet>
      <title>Search | Cep</title>
      <meta name="description" content="Search cep decription" />
    </Helmet>
    <Connected />
  </Route>
);
