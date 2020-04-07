import React from 'react';
import { Helmet } from 'react-helmet';
import { Route, RouteProps } from 'react-router-dom';

import Address from 'src/views/Address/Address';
import connector from 'src/views/Address/Address.connect';

const Connected = connector(Address);

export default (props: RouteProps): JSX.Element => (
  <Route {...props}>
    <Helmet>
      <title>Address | Cep</title>
      <meta name="description" content="Welcome cruiser" />
    </Helmet>
    <Connected />
  </Route>
);
