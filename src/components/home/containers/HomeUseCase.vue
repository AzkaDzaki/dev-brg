<template>
  <div id="use-case">
    <v-container class="mb-6">
      <h5 class="font-weight-medium mb-2">Consumer Story</h5>
      <h5>Innovative partners that surface insights with Braga Technologies</h5>
    </v-container>

    <no-ssr>
      <carousel
        class="relative"
        :items="$vuetify.breakpoint.mobile ? 1.2 : 1.6"
        :dots="false"
        :nav="false"
        :loop="true"
      >
        <div
          v-for="data in datas"
          :key="data.id"
          class="c-carousel mx-md-0 mx-3"
        >
          <v-card class="c-card pa-3" outlined>
            <h6 class="mb-3">Use Case {{ data.id }}</h6>
            <h3 class="font-weight-semibold mb-3 color-black--60">
              {{ data.title }}
            </h3>
            <h5 class="mb-3">{{ data.caption }}</h5>
            <v-btn class="outline-black" large outlined> Read Use Case </v-btn>
          </v-card>
        </div>
      </carousel>
    </no-ssr>
  </div>
</template>

<script>
export default {
  components: {
    carousel: () => import('vue-owl-carousel'),
  },
  data: () => ({
    datas: [
      {
        id: 1,
        title: 'Accelerating agricultural sustainability',
        caption:
          'Disbun relies on Braga to turn complex geospatial information on agricultural trends into insights, supporting its mission to help farmers sustainably feed the planet.',
        url: '/',
      },
      {
        id: 2,
        title: 'Mitigation Plan to Save Lifes',
        caption:
          'Disbun relies on Braga to turn complex geospatial information on agricultural trends into insights, supporting its mission to help farmers sustainably feed the planet.',
        url: '/',
      },
    ],
  }),
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_mixins.scss';

.c-card {
  width: 805px;
  margin-left: 82px;
  @include mq-large-down {
    width: 100%;
    height: 100%;
    margin-left: 0;
  }
  @include mq-xxlarge-up {
    margin-left: 127.5px;
    margin-right: -20px;
  }
}
</style>
