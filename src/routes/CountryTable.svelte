<script>
    import { onMount } from "svelte";
    import { countryDataStore, fetchAndPopulateCountryData } from "../stores";
    import IoIosArrowDropleft from "svelte-icons/io/IoIosArrowDropleft.svelte";
    import IoIosArrowDropright from "svelte-icons/io/IoIosArrowDropright.svelte";

    let countries = [];
    let page = 0;
    let totalPages = [];
    let currentPageRows;
    let itemsPerPage = 10;

    $: currentPageRows = totalPages.length > 0 ? totalPages[page] : [];

    const paginate = (items) => {
        const pages = Math.ceil(items.length / itemsPerPage);

        const paginatedItems = Array.from({ length: pages }, (_, index) => {
            const start = index * itemsPerPage;
            return items.slice(start, start + itemsPerPage);
        });

        totalPages = [...paginatedItems];
    };

    onMount(async () => {
        fetchAndPopulateCountryData();
        countryDataStore.subscribe((data) => {
            countries = data;
            paginate(countries);
        });
    });

    const setPage = (p) => {
        if (p >= 0 && p < totalPages.length) {
            page = p;
        }
    };

</script>

<div
    id="countyTable"
    class=" overflow-x-auto row-span-3 grid grid-rows-6 lg:col-span-7 border-2 rounded-md bg-white m-2"
>
    <table class="table row-span-5">
        <thead>
            <tr>
                <th
                    class="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                    >Flag</th
                >
                <th
                    class="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                >
                    Name
                </th>
                <th
                    class="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                    >CIOC</th
                >
                <th
                    class="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                    >UN Member Status</th
                >
                <th
                    class="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                    >Currencies</th
                >
                <th
                    class="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                    >Population</th
                >
                <th
                    class="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                    >Languages</th
                >
            </tr>
        </thead>
        <tbody>
            {#each currentPageRows as country}
                {#if country}
                    <tr>
                        <td
                            class="text-xs py-2 px-4 border-b border-gray-200 bg-white"
                            ><img
                                width="20px"
                                height="20px"
                                src={country.flags.png}
                                alt={country.name.common}
                            /></td
                        >
                        <td
                            class="text-xs py-2 px-4 border-b border-gray-200 bg-white"
                            >{country.name.common}</td
                        >
                        <td
                            class="text-xs py-2 px-4 border-b border-gray-200 bg-white"
                            >{country.cioc || "-"}</td
                        >
                        <td
                            class="text-xs py-2 px-4 border-b border-gray-200 bg-white"
                            ><span class="bg-slate-400 w-4 h-2"
                                >{country.unMember ? "YES" : "NO"}</span
                            ></td
                        >
                        <td
                            class="text-xs py-2 px-4 border-b border-gray-200 bg-white"
                        >
                            {#if country.currencies}
                                {Object.keys(country.currencies).join(", ")}
                            {:else}
                                0
                            {/if}
                        </td>
                        <td
                            class="text-xs py-2 px-4 border-b border-gray-200 bg-white"
                            >{country.population || "-"}</td
                        >
                        <td
                            class="text-xs py-2 px-4 border-b border-gray-200 bg-white"
                            >{country.languages
                                ? Object.values(country.languages).join(", ")
                                : "-"}</td
                        >
                    </tr>
                {/if}
            {/each}
        </tbody>
    </table>
    <nav class="flex row-span-1 justify-center  gap-8">
        <button
            type="button"
            class="btn-next-prev m-8 w-8 h-8"
            on:click={() => setPage(page - 1)}
        >
            <IoIosArrowDropleft />
        </button>

        <button
            type="button"
            class="btn-next-prev m-8 w-8 h-8"
            on:click={() => setPage(page + 1)}
        >
            <IoIosArrowDropright />
        </button>
    </nav>
</div>

<style>
    #countyTable {
        height: 670px !important;
    }
</style>
