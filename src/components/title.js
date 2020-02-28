import React, { Fragment } from 'react';
import Head from './common/Head';

const Title = props => {
  return (
    <Fragment>
      <Head title={props.identifier} />
      <h1>{props.identifier}</h1>
      <code>{JSON.stringify(props)}</code>
    </Fragment>
  );
};

export default Title;
