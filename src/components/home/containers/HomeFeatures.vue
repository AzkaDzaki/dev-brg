<template>
  <v-container id="features">
    <div class="mb-15">
      <h6 class="font-weight-medium mb-2">Braga Geodashboard</h6>
      <h2 class="font-weight-semibold mb-4">
        Move from seeing where<br class="d-md-flex d-none" />
        to understanding why
      </h2>
      <h5 class="">
        Analyze existing site conditions, measure key urban indicators, and
        perform<br class="d-md-flex d-none" />
        spatial analysis — directly in the browser.
      </h5>
    </div>
    <div class="mb-12">
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
    <div v-for="item in featuresItems" :key="item.title">
      <HomeFeaturesItem :title="item.title" :caption="item.caption" />
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    featuresItems: [
      {
        title: 'How it Works',
        caption: `Braga’s Location Intelligence platform allows organizations to store, enrich,<br class="d-md-flex d-none" /> analyze & visualize their data to make spatially-aware decisions.`,
      },
      {
        title: 'Research',
        caption: ` Ensure your insights make an impact<br class="d-md-flex d-none" /> with rich photo and video data.`,
      },
      {
        title: 'Insight',
        caption: `Empower anyone in your org to<br class="d-md-flex d-none" /> conduct, engage with, and be inspired<br class="d-md-flex d-none" />by user insights`,
      },
    ],
  }),
}
</script>

<style></style>
