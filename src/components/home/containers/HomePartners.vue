<template>
  <v-container>
    <div class="d-flex gap-8 flex-wrap justify-md-start justify-center">
      <div v-for="n in 6" :key="n.id">
        <PartnersIcon />
      </div>
    </div>
  </v-container>
</template>

<script>
export default {}
</script>

<style></style>
