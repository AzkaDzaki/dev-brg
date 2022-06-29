<template>
  <v-container class="c-map">
    <div class="map-wrap">
      <div ref="mapContainer" class="map">
        <select id="styles" class="dropdownSelect">
          <option value="jawg-streets">jawg-streets</option>
          <option value="jawg-sunny">jawg-sunny</option>
          <option value="jawg-terrain">jawg-terrain</option>
          <option value="jawg-dark">jawg-dark</option>
          <option value="jawg-light">jawg-light</option>
        </select>
      </div>
    </div>
  </v-container>
</template>

<script>
import { Map, NavigationControl, Marker } from 'maplibre-gl'
import {
  shallowRef,
  onMounted,
  onUnmounted,
  markRaw,
  computed,
} from '@nuxtjs/composition-api'
export default {
  name: 'Map',
  props: {
    jembatan: {
      type: Object,
      default: () => {},
    },
  },
  setup(props, { root }) {
    const jembatanComp = computed(() => props.jembatan)
    const mapContainer = shallowRef(null)
    const map = shallowRef(null)

    onMounted(() => {
      console.log(jembatanComp.value)
      const apiKey = 'HAIayvA5luH3W9E0qoS7'
      if (apiKey == null) {
        throw new Error(
          'You need to configure env VUE_APP_API_KEY first, see README'
        )
      }
      const initialState = {
        lng: 107.71960000000007,
        lat: -6.946899999999971,
        zoom: 14,
      }
      map.value = markRaw(
        new Map({
          container: mapContainer.value,
          style: `https://api.maptiler.com/maps/hybrid/style.json?key=${apiKey}`,
          center: [initialState.lng, initialState.lat],
          zoom: initialState.zoom,
        })
      )
      map.value.addControl(new NavigationControl(), 'top-right')
      for (let i = 0; i < jembatanComp.value.jembatan.length; i++) {
        new Marker({ color: '#FF0000' })
          .setLngLat([
            jembatanComp.value.jembatan[i].geom.coordinates[0],
            jembatanComp.value.jembatan[i].geom.coordinates[1],
          ])
          .addTo(map.value)
      }

      console.log(jembatanComp.value.jembatan[1].geom.coordinates[0])
    })

    onUnmounted(() => {
      map.value?.remove()
    })

    return {
      map,
      mapContainer,
    }
  },
}
</script>
<style scoped>
.map-wrap {
  position: relative;
  width: 100%;
  height: 532px;
}

.map {
  width: 100%;
  height: 100%;
}

select {
  z-index: 1;
  position: absolute;
  top: 5px;
  left: 5px;
  padding: 5px;
  background: white;
}
</style>
