<template>
  <v-container>
    <v-card
      class="rounded-1--important pa-6 d-flex flex-md-row flex-column"
      outlined
    >
      <div
        class="d-flex flex-md-row flex-column gap-4 align-md-center align-start mb-md-0 mb-4"
      >
        <GeodashboardIcon />
        <span class="d-md-flex d-none">|</span>
        <v-btn class="px-2" large text @click="$vuetify.goTo('#features')">
          Features
        </v-btn>
        <v-btn class="px-2" large text @click="$vuetify.goTo('#use-case')">
          Use Case
        </v-btn>
      </div>
      <v-spacer></v-spacer>
      <v-btn color="accent" large> Product Demo </v-btn>
    </v-card>
  </v-container>
</template>

<script>
export default {}
</script>

<style></style>
