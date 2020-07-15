<template>
  <div class="container">
    <h2>
      {{ countryName }}
    </h2>
    <h3>2020 public holidays</h3>

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

h2 {
  color: #803dd6;
  font-family: 'Corben', cursive;
  font-size: 2rem;
  text-shadow: -3px 2px 0 #fffbdc;
  margin-bottom: 0.2rem;
}
h3 {
  color: #454545;
  font-size: 1.6rem;
  font-weight: 400;
  margin-top: 0.2rem;
  margin-bottom: 2.4rem;
  /* text-shadow: -1px 1px 0 #fffbdc; */
}

@media screen and (max-width: 1080px) {
  h2 {
    font-size: 1.5rem;
    text-shadow: -2px 1.3px 0 #fffbdc;
  }
}
</style>
