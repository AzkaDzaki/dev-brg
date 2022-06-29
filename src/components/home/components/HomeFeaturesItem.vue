<template>
  <div class="mb-8">
    <h5 class="font-weight-medium mb-2">{{ title }}</h5>
    <h5 v-html="caption"></h5>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    caption: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
