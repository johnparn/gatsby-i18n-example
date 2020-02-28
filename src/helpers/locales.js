const locales = [
  {
    code: 'ar',
    rtl: true,
    name: 'العربية',
  },
  {
    code: 'en',
    rtl: false,
    name: 'english',
  },
  {
    code: 'sv',
    rtl: false,
    name: 'svenska',
  },
];
export default locales;

const isRtl = langCode => locales.filter(l => l.code === langCode)[0].rtl;
const getDirectionByLangCode = langCode => (isRtl(langCode) ? 'rtl' : 'auto');
const getLanguageObject = langCode =>
  locales.filter(l => l.code === langCode)[0];
const getLanguageName = langCode =>
  locales.filter(l => l.code === langCode)[0].name;

export { isRtl, getLanguageObject, getLanguageName, getDirectionByLangCode };
