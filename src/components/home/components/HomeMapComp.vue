<template>
  <v-container class="c-map">
    <div class="map-wrap">
      <div ref="mapContainer" class="map">
        <v-select
          v-model="styleSelected"
          class="style-select"
          :items="styleList"
          label="Base Peta"
          outlined
          dense
          style="max-width: 150px"
          append-icon="mdi-chevron-down"
        ></v-select>
      </div>
    </div>
  </v-container>
</template>

<script>
import { Map, NavigationControl, Marker, Popup } from 'maplibre-gl'
import {
  shallowRef,
  onMounted,
  onUnmounted,
  markRaw,
  computed,
  ref,
  watch,
} from '@nuxtjs/composition-api'
export default {
  name: 'Map',
  props: {
    jembatan: {
      type: Array,
      default: () => [],
    },
  },
  setup(props, { root }) {
    const jembatanComp = computed(() => props.jembatan)
    const mapContainer = shallowRef(null)
    const map = shallowRef(null)
    const styleList = ref([
      'basic',
      'bright',
      'pastel',
      'hybrid',
      'streets',
      'topo',
    ])
    const styleSelected = ref('streets')

    onMounted(() => {
      // Base
      const apiKey = 'HAIayvA5luH3W9E0qoS7'
      if (apiKey == null) {
        throw new Error(
          'You need to configure env VUE_APP_API_KEY first, see README'
        )
      }

      // Initiate
      const initialState = {
        lng: 107.71960000000007,
        lat: -6.946899999999971,
        zoom: 13,
      }
      map.value = markRaw(
        new Map({
          container: mapContainer.value,
          style: `https://api.maptiler.com/maps/streets/style.json?key=${apiKey}`,
          center: [initialState.lng, initialState.lat],
          zoom: initialState.zoom,
        })
      )

      // Navigation
      map.value.addControl(new NavigationControl(), 'top-right')

      // Marker & Popup
      for (let i = 0; i < jembatanComp.value.jembatan.length; i++) {
        const description = `<p class="body-3 mb-0">${jembatanComp.value.jembatan[i].nama_jembatan}</p><br /><span>Lebar: ${jembatanComp.value.jembatan[i].lebar}  |  Panjang: ${jembatanComp.value.jembatan[i].panjang}</span>`
        const popup = new Popup({ offset: 25 }).setHTML(description)
        const el = document.createElement('div')
        el.className = 'marker'
        el.style.backgroundImage = 'url(/images/bridge.svg)'
        el.style.width = 40 + 'px'
        el.style.height = 60 + 'px'
        new Marker(el)
          .setLngLat([
            jembatanComp.value.jembatan[i].geom.coordinates[0],
            jembatanComp.value.jembatan[i].geom.coordinates[1],
          ])
          .setPopup(popup)
          .addTo(map.value)
      }

      // Style
      watch(styleSelected, (newVal) => {
        const style = newVal
        map.value.setStyle(
          `https://api.maptiler.com/maps/${style}/style.json?key=${apiKey}`
        )
      })
    })

    onUnmounted(() => {
      map.value?.remove()
    })

    return {
      map,
      mapContainer,
      styleList,
      styleSelected,
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

.style-select {
  z-index: 1;
  position: absolute;
  top: 5px;
  left: 5px;
  padding: 5px;
}
</style>
