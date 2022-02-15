const { i18n } = require('./next-i18next.config');
const withPwa = require('next-pwa');

module.exports = withPwa({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'developement',
  },
  reactStrictMode: true,
  i18n,
});
