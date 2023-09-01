import { writable } from 'svelte/store';

export const countryDataStore = writable([]);

export async function fetchAndPopulateCountryData() {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    countryDataStore.set(data);
  } catch (error) {
    console.error('Error fetching country data:', error);
  }
}
