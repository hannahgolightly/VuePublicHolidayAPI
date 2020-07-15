<template>
  <div class="container">
    <h3>{{ countryName }}</h3>
    <h4>2020 public holidays</h4>

    <ResultPanel :holidays="holidays" />
  </div>
</template>

<script>
import HolidayService from '@/services/HolidayService.js'
import ResultPanel from '@/components/ResultPanel.vue'

export default {
  components: {
    ResultPanel
  },
  props: ['countryCode'],
  data() {
    return {
      holidays: [],
      countryName: ''
    }
  },

  created() {
    HolidayService.getCountry(this.countryCode)
      .then(response => {
        this.holidays = response.data
      })
      .catch(error => {
        console.log('There was an error' + error.response)
      }),
      HolidayService.getCountryName(this.countryCode)
        .then(response => {
          this.countryName = response.data.commonName
        })
        .catch(error => {
          console.log('There was an error' + error.response)
        })
  }
}
</script>

<style lang="css" scoped>
.container {
  background: linear-gradient(
    45deg,
    #ffc45f7b 0%,
    #ff97567b 40%,
    #f577517b 100%
  );
  background-color: #fff6e8;
  min-height: 90vh;
  margin-top: 0rem;
  padding: 1rem;
}

@media screen and (max-width: 1080px) {
  h2 {
    font-size: 1.5rem;
    text-shadow: -2px 1.3px 0 #fffbdc;
  }
}
</style>
