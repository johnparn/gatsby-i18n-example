import React, { Fragment } from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';
import localEng from './src/messages/en.json';
import localAr from './src/messages/ar.json';
import { Context } from './src/components/common/Context';
import Provider from './src/components/common/Layout/Provider';

export const wrapRootElement = ({ element, props }) => {
  console.log(props);
  return (
    <Provider>
      <Context.Consumer>
        {({ lang }) => (
          <IntlProvider
            locale={lang}
            messages={lang === 'en' ? localEng : localAr}
          >
            {element}
          </IntlProvider>
        )}
      </Context.Consumer>
    </Provider>
  );
};

export default wrapRootElement;
