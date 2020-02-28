import React, { Fragment } from 'react';
import { Router } from '@reach/router';
import Title from './title';

const TitlesRoutes = props => {
  return (
    <Fragment>
      <Router>
        <Title path="/titles/:identifier" />
      </Router>
    </Fragment>
  );
};

export default TitlesRoutes;
