<template>
  <div class="leaflet-map">
    <div id="map" />
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import { Prop, Vue } from 'vue-property-decorator';
import leaflet from 'leaflet';
import Base from '@/components/Base';

@Component
export default class LeafletMap extends Base {
  private leafletProp: any;

  protected created() {
    this.leafletProp = this.config.leaflet;

    navigator.geolocation.getCurrentPosition(position => {
      const lat: number = position.coords.latitude;
      const lon: number = position.coords.longitude;
      this.mountLeaflet(lat, lon);
    });
  }

  private mountLeaflet(lat: number, lon: number): void {
    const map: any = leaflet.map('map');
    map.setView([lat, lon], this.leafletProp.initZoom);

    const { tileLayer } = this.leafletProp;

    leaflet
      .tileLayer(tileLayer.png, {
        attribution: tileLayer.params.attribution,
        maxZoom: tileLayer.params.maxZoom,
      })
      .addTo(map);

    leaflet
      .marker([lat, lon])
      .addTo(map)
      .bindPopup(`I'm here.`)
      .openPopup();
  }
}
</script>

<style>
#map {
  width: 100vw;
  height: 95vh;
}
</style>
