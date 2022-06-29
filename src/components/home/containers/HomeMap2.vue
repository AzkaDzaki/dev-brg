<template>
  <v-container class="c-map">
    <div class="map-wrap">
      <div ref="mapContainer" class="map"></div>
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
} from '@nuxtjs/composition-api'
export default {
  name: 'Map',
  setup() {
    const mapContainer = shallowRef(null)
    const map = shallowRef(null)
    const operationsDoc = `
  query MyQuery {
    jembatan {
      geom
    }
  }
`
    onMounted(() => {
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
          style: `https://api.maptiler.com/maps/streets/style.json?key=${apiKey}`,
          center: [initialState.lng, initialState.lat],
          zoom: initialState.zoom,
        })
      )
      map.value.addControl(new NavigationControl(), 'top-right')
      new Marker({ color: '#FF0000' })
        .setLngLat([107.71960000000007, -6.946899999999971])
        .addTo(map.value)
      new Marker({ color: '#FF0000' })
        .setLngLat([107.71590000000003, -6.945699999999931])
        .addTo(map.value)
      new Marker({ color: '#FF0000' })
        .setLngLat([107.74610000000007, -6.950099999999964])
        .addTo(map.value)

      console.log(map)
    })
    onUnmounted(() => {
      map.value?.remove()
    })
    async function fetchGraphQL(operationsDoc, operationName, variables) {
      const result = await fetch('https://sipjatan.com/hasura/v1/graphql', {
        method: 'POST',
        body: JSON.stringify({
          query: operationsDoc,
          variables,
          operationName,
        }),
      })

      return await result.json()
    }

    function fetchMyQuery() {
      return fetchGraphQL(operationsDoc, 'MyQuery', {})
    }

    async function startFetchMyQuery() {
      const { errors, data } = await fetchMyQuery()

      if (errors) {
        // handle those errors like a pro
        console.error(errors)
      }

      // do something great with this precious data
      console.log(data)
    }

    startFetchMyQuery()
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
</style>
