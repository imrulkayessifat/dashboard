import { writable } from 'svelte/store';

export const countryDataStore1 = writable([]);

export async function fetchAndPopulateCountryData1() {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    countryDataStore1.set(data);
  } catch (error) {
    console.error('Error fetching country data:', error);
  }
}
