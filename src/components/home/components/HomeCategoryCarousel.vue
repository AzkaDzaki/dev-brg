<template>
  <no-ssr>
    <Carousel
      class="relative d-flex"
      :auto-width="true"
      :dots="false"
      :nav="false"
      :loop="true"
    >
      <div v-for="title in datas" :key="title.id">
        <HomeCategoryItem :title="title" />
      </div>
    </Carousel>
  </no-ssr>
</template>

<script>
export default {
  components: {
    Carousel: () => import('vue-owl-carousel'),
  },
  props: {
    datas: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
