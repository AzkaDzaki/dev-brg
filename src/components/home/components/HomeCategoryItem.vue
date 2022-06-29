<template>
  <div class="mx-3">
    <div class="border border-solid border--grey-10 pa-3 rounded-3">
      <div class="d-block mx-auto w-fit-content">
        <CategoryIcon />
      </div>
      <h6>{{ title }}</h6>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
