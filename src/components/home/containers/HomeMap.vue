<template>
  <div>
    <HomeMapComp v-if="jembatan.jembatan.length" :jembatan="jembatan" />
  </div>
</template>

<script>
import { useFetch, ref } from '@nuxtjs/composition-api'
export default {
  setup(_, { root }) {
    const { $services } = root
    const jembatan = ref([])

    const operationsDoc = `query MyQuery {jembatan {geom}}`
    const { fetch } = useFetch(async () => {
      const payload = JSON.stringify({
        query: operationsDoc,
        variables: {},
        operationName: 'MyQuery',
      })
      const res = await $services.geo.getGeo(payload)
      if (res.success) {
        jembatan.value = res.data
      }
    })

    fetch()
    return { jembatan }
  },
}
</script>

<style></style>
