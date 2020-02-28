import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Container } from '../components/common';
import Head from '../components/common/Head';

const AboutPage = () => (
  <>
    <Head title="about" />
    <Container>
      <h2>
        <FormattedMessage id="about" />
      </h2>
    </Container>
  </>
);

export default AboutPage;
