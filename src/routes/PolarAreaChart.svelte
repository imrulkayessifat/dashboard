<script>
    import { onMount } from "svelte";
    import {
        countryDataStore1,
        fetchAndPopulateCountryData1,
    } from "../stores1";
    import { Chart } from "chart.js/auto";

    let sortedCountries = [];
    let chart = null;
    function updateChart(data) {
        sortedCountries = data
            .slice()
            .sort((a, b) => b.population - a.population)
            .slice(0, 10)
            .map((country) => ({
                label: country.name.common,
                data: country.population,
            }));

        if (chart) {
            chart.data.labels = sortedCountries.map((country) => country.label);
            chart.data.datasets[0].data = sortedCountries.map(
                (country) => country.data
            );
            chart.update();
        }
    }
    onMount(() => {
        fetchAndPopulateCountryData1();
        countryDataStore1.subscribe(updateChart);
        const ctx = document
            .getElementById("polar-area-chart")
            .getContext("2d");
        chart = new Chart(ctx, {
            type: "polarArea",
            data: {
                labels: sortedCountries.map((country) => country.label),
                datasets: [
                    {
                        data: sortedCountries.map((country) => country.data),
                        backgroundColor: [
                            "rgb(100 116 139)",
                            "rgb(209 213 219)",
                            "rgb(228 228 231)",
                        ],
                    },
                ],
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: "top",
                    },
                    title: {
                        display: true,
                        text: "Chart.js Polar Area Chart",
                    },
                },
            },
        });
    });
</script>

<div class="h-screen row-span-3 md:col-span-3  grid grid-rows-6 border-2 rounded-md bg-white  m-2">
    <div class="row-span-1 p-2">Countries</div>
    <canvas class="p-2 row-span-5" id="polar-area-chart" />
</div>
