import "server-only";

const disctionaries = {
  en: () => import(`./dictionaries/en.json`).then((module) => module.default),
  bn: () => import(`./dictionaries/bn.json`).then((module) => module.default),
};

export const getDictionary = async (locale) => disctionaries[locale]();
