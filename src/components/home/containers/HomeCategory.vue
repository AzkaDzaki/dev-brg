<template>
  <div>
    <v-container class="mb-6">
      <h5 class="font-weight-medium mb-2">Range of Industry</h5>
      <h5>
        Morphocode Explorer helps planners, businesses, and cities do more with
        data.
      </h5>
    </v-container>
    <div>
      <no-ssr>
        <div class="d-flex mb-6">
          <MarqueeText :duration="120" :paused="pausedTop">
            <div
              @mouseenter="pausedTop = !pausedTop"
              @mouseleave="pausedTop = false"
            >
              <HomeCategoryCarousel :datas="categoryTop" />
            </div>
          </MarqueeText>
        </div>
        <div class="d-flex">
          <MarqueeText :duration="120" :paused="pausedBottom">
            <div
              @mouseenter="pausedBottom = !pausedBottom"
              @mouseleave="pausedBottom = false"
            >
              <HomeCategoryCarousel :datas="categoryBottom" />
            </div>
          </MarqueeText>
        </div>
      </no-ssr>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    MarqueeText: () => import('vue-marquee-text-component'),
  },
  data: () => ({
    pausedTop: false,
    pausedBottom: false,
    categoryTop: [
      'Healthcare',
      'Transport and Logistics',
      'Defense',
      'Cities and Government',
      'Communication Tech',
      'Oil, Gas, and Mining',
    ],
    categoryBottom: [
      'Engineering',
      'Commercial and Retail',
      'Tourism and Leisure',
      'Real Estate',
      'Task Force',
      'IoT Management',
    ],
  }),
}
</script>

<style></style>
