<script>
    import { onMount } from "svelte";
    import Loading from "./Loading.svelte";
    import "ol/ol.css";
    import Map from "ol/Map";
    import View from "ol/View";
    import GeoJSON from "ol/format/GeoJSON";
    import { Vector as VectorLayer } from "ol/layer";
    import { Vector as VectorSource } from "ol/source";
    import { Style, Fill, Stroke } from "ol/style";
    import OSM from "ol/source/OSM.js";
    import TileLayer from "ol/layer/Tile.js";
    function getGeoJSONStyle() {
        return new Style({
            fill: new Fill({
                color: "rgba(0, 106, 78,0.75)",
            }),
            stroke: new Stroke({
                color: "#006a4e",
                width: 2,
            }),
        });
    }

    let map;
    async function fetchGeoJSON() {
        try {
            const response = await fetch("/countries.geojson");
            if (!response.ok) {
                throw new Error(
                    `Failed to fetch GeoJSON: ${response.statusText}`
                );
            }
            const geojsonData = await response.json();
            return geojsonData;
        } catch (error) {
            console.error("Error fetching GeoJSON:", error);
        }
    }
    onMount(async () => {
        const geojsonData = await fetchGeoJSON();
        console.log("GeoJSON Data:", geojsonData);
        map = new Map({
            target: "map",
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
                new VectorLayer({
                    source: new VectorSource({
                        // features: new GeoJSON().readFeatures(geojsonData),
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
    });
</script>

<div id="map" class="w-full h-screen" />

<style>
</style>
