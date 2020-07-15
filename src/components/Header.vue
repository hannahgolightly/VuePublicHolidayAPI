<template>
  <div class="header">
    <router-link
      :to="{
        name: 'search-view'
      }"
    >
      <h1>holiday time</h1>
    </router-link>
    <!-- <img
      src="../assets/Holiday_time_logo.png"
      alt="Holiday Time"
      class="logo"
    />-->
    <h2>Worldwide Public Holidays</h2>
  </div>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
.header {
  height: auto;
  width: 100%;
  background-image: url('../assets/julian-myles-2YGrbLlbz6Y-unsplash.jpg');
  background-position: center;
  background-size: cover;
  /* background: linear-gradient(45deg, #ffc45f 0%, #ff9756 40%, #f57751 100%); */
  border-bottom: 3px solid #fffbdc;
  /* margin-bottom: 3rem; */
}

.logo {
  padding: 10px 0;
  height: 120px;
}

h2 {
  text-shadow: -1px 1px 0 #fffbdc;
  margin-top: 0.5rem;
}

a {
  text-decoration: none;
}
</style>
