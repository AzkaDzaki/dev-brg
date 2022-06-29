<template>
  <div>
    <HomeNavbar class="navbar" />
    <HomeHeader class="header" />
    <HomeMap class="map" />
    <HomePartners class="partners" />
    <HomeFeatures class="features" />
    <HomeCategory class="category" />
    <HomeUseCase class="use-case" />
    <HomeCards class="home-cards" />
    <HomeFooter class="home-footer" />
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  padding-top: 44px;
}
.header {
  padding-top: 24px;
  padding-bottom: 34px;
}
.map {
  margin-bottom: 58px;
}
.partners,
.use-case,
.home-cards {
  padding-bottom: 58px;
}
.features {
  padding-top: 64px;
  padding-bottom: 26px;
}
.category,
.home-footer {
  padding-top: 64px;
  padding-bottom: 60px;
}
</style>
