<script>
    import { onMount } from "svelte";
    import { countryDataStore, fetchAndPopulateCountryData } from "../stores";

    let countries = [];
    onMount(() => {
        fetchAndPopulateCountryData();
        countryDataStore.subscribe((data) => {
            countries = data;
        });
    });
</script>

<div class="overflow-x-auto row-span-4 h-screen md:col-span-4  border-2 rounded-md bg-white  m-2">
    <table class="table">
        <thead>
            <tr>
                <th class="px-5 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Name</th>
                <th class="px-5 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Flag</th>
                <th class="px-5 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">CIOC</th>
                <th class="px-5 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">UN Member Status</th>
                <th class="px-5 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Currencies</th>
                <th class="px-5 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Population</th>
                <th class="px-5 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Languages</th>
            </tr>
        </thead>
        <tbody>
            {#each countries as country}
                {#if country}
                    <tr>
                        <td class="text-xs py-2 px-4 border-b border-gray-200 bg-white"
                            ><img
                                width="20px"
                                height="20px"
                                src={country.flags.png}
                                alt={country.name.common}
                            /></td
                        >
                        <td class="text-xs py-2 px-4 border-b border-gray-200 bg-white">{country.name.common}</td>
                        <td class="text-xs py-2 px-4 border-b border-gray-200 bg-white">{country.cioc || "-"}</td>
                        <td class="text-xs py-2 px-4 border-b border-gray-200 bg-white"
                            >{country.unMember ? "Member" : "Not a Member"}</td
                        >
                        <td class="text-xs py-2 px-4 border-b border-gray-200 bg-white">
                            {#if country.currencies}
                                {Object.keys(country.currencies).join(", ")}
                            {:else}
                            0
                            {/if}
                        </td>
                        <td class="text-xs py-2 px-4 border-b border-gray-200 bg-white">{country.population || "-"}</td>
                        <td class="text-xs py-2 px-4 border-b border-gray-200 bg-white"
                            >{country.languages
                                ? Object.values(country.languages).join(", ")
                                : "-"}</td
                        >
                    </tr>
                {/if}
            {/each}
        </tbody>
    </table>
</div>

<style>
</style>
