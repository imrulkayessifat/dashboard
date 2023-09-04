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
                            "rgb(248 113 113)",
                            "rgb(249 115 22)",
                            "rgb(245 158 11)",
                            "rgb(132 204 22)",
                            "rgb(14 165 233)"
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

<div id="chart" class="overflow-x-auto relative row-span-3 lg:col-span-3 border-2 rounded-md bg-white m-2">
    <div class="p-2 w-full h-8 border-b-2 absolute">Countries</div>
    <div class="flex h-screen justify-center items-center">
        <canvas  class="row-span-6 " id="polar-area-chart" />
    </div>
</div>

<style>
    #polar-area-chart {
        width: 450px !important;
        height: 450px !important;
    }
    #chart{
        height: 670px !important;
    }
</style>