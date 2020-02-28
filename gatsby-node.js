const nodePath = require('path');

exports.onCreatePage = ({ page, actions }) => {
  const { path, matchPath, context } = page;
  const { createPage, deletePage } = actions;

  const isPlainRoute = /^\/titles\//.test(path); // /titles/
  const isLocaleRoute = /^\/[a-z]{2,3}\/titles\//.test(path); // /sv/titles/, /ar/titles/ ...

  if (isPlainRoute || isLocaleRoute) {
    const component = nodePath.resolve('./src/components/titles-route.js');

    deletePage(page);
    page.matchPath = '/titles/:identifier';
    createPage({
      ...page,
      matchPath: '/titles/:identifier',
    });
  }
};
