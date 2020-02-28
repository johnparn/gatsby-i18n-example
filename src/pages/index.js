import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';
import { Container } from '../components/common';
import Head from '../components/common/Head';

const IndexPage = () => (
  <>
    <Head title="welcome" />
    <Container>
      <h1>
        <FormattedMessage id="welcome" />
      </h1>
      <p>Links to client only routes</p>
      <ul>
        <li>
          <Link to="/titles/A-Special-Title">A Special Title</Link>
        </li>
        <li>
          <Link to="/titles/عنوان خاص">عنوان خاص</Link>
        </li>
      </ul>
    </Container>
  </>
);

export default IndexPage;
