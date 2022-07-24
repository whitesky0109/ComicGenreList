import store from 'appStore';

import ko from './lang.ko';

const i18nList = {
  ko,
};

const i18n = {
  /**
   * @param {string} key
   * @returns {string}
   */
  t: (key) => {
    const { init: { lang } } = store.getState();

    const languageMap = i18nList[lang] || {};
    return languageMap[key] || key;
  },
};

export default i18n;
