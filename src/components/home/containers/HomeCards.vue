<template>
  <v-container>
    <div class="mb-10">
      <h4 class="font-weight-medium">
        Do your research with an urban analysis tool<br
          class="d-md-flex d-none"
        />
        designed for discoveries. Use a single, powerful,<br
          class="d-md-flex d-none"
        />
        interactive interface and explore location insights<br
          class="d-md-flex d-none"
        />
        faster than ever.
      </h4>
    </div>
    <div class="d-flex flex-wrap gap-8">
      <div
        v-for="data in datas"
        :key="data.id"
        :class="[$vuetify.breakpoint.mobile ? 'w-full' : '']"
      >
        <HomeCardItem :data="data" />
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    datas: [
      {
        type: '2D Geodashboard',
        title: 'BIG GeoDashboard',
        caption: 'Designed for task force management and POI data collection',
      },
      {
        type: '2D Geodashboard',
        title: 'Disbun',
        caption: 'Designed for task force management and POI data collection',
      },
    ],
  }),
}
</script>

<style></style>
