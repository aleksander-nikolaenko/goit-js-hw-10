import { ListItem } from './countryItem';
import countryInfoTemplate from './template/countryInfo.hbs';

export const clearElementContent = (Ref) => {
  Ref.innerHTML = '';
}

export const renderCountriesList = (list, parentElemRef) => {
  const countriesList = list.map((country) => ListItem(country));
        parentElemRef.append(...countriesList);
}

export const renderCountryInfo = (info, parentElemRef) => {

  const { capital, flags, name, population,languages } = info;
  const countryInfo = {
    capital: capital.join(", "),
    flag: flags.svg,
    name: name.common,
    population,
    languages: Object.values(languages).join(", "),
  };
  parentElemRef.innerHTML = countryInfoTemplate(countryInfo);
};