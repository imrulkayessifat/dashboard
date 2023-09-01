<script>
    import { onMount } from "svelte";
    import "ol/ol.css";
    import Map from "ol/Map";
    import View from "ol/View";
    import GeoJSON from "ol/format/GeoJSON";
    import { Vector as VectorLayer } from "ol/layer";
    import { Vector as VectorSource } from "ol/source";
    import { Style, Fill, Stroke } from "ol/style";
    function getGeoJSONStyle() {
        return new Style({
            fill: new Fill({
                color: "rgba(0, 106, 78, 0.75)",
            }),
            stroke: new Stroke({
                color: "rgba(0, 106, 78, 0.75)",
                width: 2,
            }),
        });
    }

    let map=undefined;
    onMount(() => {
        map = new Map({
            target: "map",
            layers: [
                new VectorLayer({
                    source: new VectorSource({
                        format: new GeoJSON(),
                        url: "https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson",
                    }),
                    style: getGeoJSONStyle(),
                }),
            ],
            view: new View({
                center: [0, 0],
                zoom: 2,
            }),
        });
        console.log(typeof map)
    });
</script>

<div id="map" bind:this={map} class="w-full h-screen" />
{#if typeof(map) === "object"}
    <!-- Render HTML when map is available -->
    <p>Map is available.</p>
{:else}
    <!-- Render HTML when map is not available -->
    <p>Loading map...</p>
{/if}

<style>
</style>
