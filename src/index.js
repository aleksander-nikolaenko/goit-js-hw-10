import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from "lodash.debounce";
import { fetchCountries } from './js/api/fetchCountries';
import { clearElementContent, renderCountriesList, renderCountryInfo } from './js/renderContent';


const DEBOUNCE_DELAY = 300;
const searchInputRef = document.querySelector('#search-box');
const countryListRef = document.querySelector('.country-list');
const countryInfoRef = document.querySelector('.country-info');
let countryName = '';

searchInputRef.addEventListener('input', debounce(searchHandler, DEBOUNCE_DELAY));

Notify.init({
  width: '320px',
  fontSize: '16px',
  position: 'right-top',
});



function searchHandler(event) {
  countryName = event.target.value.trim();
  clearElementContent(countryListRef);
  clearElementContent(countryInfoRef);
  if (countryName) {
    fetchCountries(countryName)
      .then(countries => {
        if (countries.length > 1 && countries.length < 10) {
          renderCountriesList(countries, countryListRef);
        }
        else if (countries.length === 1) {
          renderCountryInfo(countries[0], countryInfoRef);
        }
        else {
          Notify.info("Too many matches found. Please enter a more specific name.");
        }
      })
      .catch(() => {
        return Notify.failure('Oops, there is no country with that name');
      });
  }
}