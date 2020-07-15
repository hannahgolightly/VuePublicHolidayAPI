<template>
  <div class="container-hol">
    <h2>A public holiday somewhere in the world...</h2>
    <h3 class="next-hol">
      👉 {{ nextHols[0].date }}: It's {{ nextHols[0].name }}
    </h3>
  </div>
</template>

<script>
import HolidayService from '@/services/HolidayService.js'

export default {
  //   props: ['countryCode'],
  data() {
    return {
      nextHols: []
      //   countryName: ''
    }
  },

  created() {
    HolidayService.getNextHols()
      .then(response => {
        this.nextHols = response.data
      })
      .catch(error => {
        console.log('There was an error' + error.response)
      })
  }
}
</script>

<style lang="css" scoped>
.container-hol {
  background-image: url('../assets/jerry-zhang-Y8lCoTRgHPE-unsplash.jpg');
  background-position: center;
  background-size: cover;
  box-sizing: border-box;
  margin: 0;
  padding: 4.5rem 1rem;
  border-top: 0.25rem solid #fffbdc;
  border-bottom: 0.25rem solid #fffbdc;
}
h2 {
  padding-bottom: 0.5rem;
}
</style>
