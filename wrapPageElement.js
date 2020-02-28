import React from 'react';
import { Layout } from './src/components/common/Layout';
// import { useIntl } from 'gatsby-plugin-intl';

// Pass all props (hence the ...props) to the layout component so it has access to things like pageContext or location
const wrapPageElement = ({ element, props }) => {
  // const intl = useIntl();
  return <Layout {...props}>{element}</Layout>;
};

export default wrapPageElement;
