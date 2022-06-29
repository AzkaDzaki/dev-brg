<template>
  <div class="map-wrap">
    <div ref="mapContainer" class="map"></div>
  </div>
</template>

<script>
import { Map, NavigationControl, Marker } from 'maplibre-gl'
import {
  shallowRef,
  onMounted,
  onUnmounted,
  markRaw,
} from '@nuxtjs/composition-api'
export default {
  name: 'Map',
  setup() {
    const mapContainer = shallowRef(null)
    const map = shallowRef(null)
    onMounted(() => {
      const apiKey = 'HAIayvA5luH3W9E0qoS7'
      if (apiKey == null) {
        throw new Error(
          'You need to configure env VUE_APP_API_KEY first, see README'
        )
      }
      const initialState = { lng: 139.753, lat: 35.6844, zoom: 14 }
      map.value = markRaw(
        new Map({
          container: mapContainer.value,
          style: `https://api.maptiler.com/maps/streets/style.json?key=${apiKey}`,
          center: [initialState.lng, initialState.lat],
          zoom: initialState.zoom,
        })
      )
      map.value.addControl(new NavigationControl(), 'top-right')
      new Marker({ color: '#FF0000' })
        .setLngLat([139.7525, 35.6841])
        .addTo(map.value)

      console.log(map)
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
  height: calc(
    100vh - 77px
  ); /* calculate height of the screen minus the heading */
}

.map {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
