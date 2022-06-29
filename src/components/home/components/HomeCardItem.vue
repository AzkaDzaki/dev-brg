<template>
  <v-card class="c-card pa-3" outlined>
    <v-img
      src="https://via.placeholder.com/325x120"
      class="mb-3 rounded-3"
      alt="Logo"
      width="325"
      height="120"
    />
    <h6 class="mb-3">{{ data.type }}</h6>
    <h3 class="font-weight-semibold mb-3 color-black--60">{{ data.title }}</h3>
    <h5>{{ data.caption }}</h5>
  </v-card>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_mixins.scss';

.c-card {
  width: 350px;
  transition: transform 0.4s; /* Animation */
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);

  @include mq-large-down {
    width: 100%;
    height: 100%;
  }
}

.c-card:hover {
  transform: scale(1.02);
  box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.08);
  transition: transform 0.4s; /* Animation */
}
</style>
