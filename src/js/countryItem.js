export const ListItem = ({ flags, name }) => {
  const countryItem = document.createElement('li');
  const countryImage = document.createElement('img');
  const countryName = document.createElement('p');

  countryItem.classList.add('country-list-item');
  countryImage.src = flags.svg;
  countryImage.alt = `flag of ${name.common}`;
  countryImage.width = "70";
  countryImage.height = "50";
  countryName.classList.add('country-list-item-text');
  countryName.textContent = `${name.common}`
  countryItem.append(countryImage, countryName);
  
  return countryItem;
}