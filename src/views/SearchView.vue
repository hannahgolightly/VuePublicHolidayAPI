<template>
  <div class="container">
    <h2>Select a country...</h2>

    <SearchPanel :countries="countries" />
    <NextHolsPanel />
    <!-- <EventCard v-for="event in events" :key="event.id" :event="event" /> -->
  </div>
</template>

<script>
import SearchPanel from '@/components/SearchPanel.vue'
import HolidayService from '@/services/HolidayService.js'
import NextHolsPanel from '@/components/NextHolsPanel.vue'

export default {
  components: {
    SearchPanel,
    NextHolsPanel
  },
  data() {
    return {
      countries: []
    }
  },
  created() {
    HolidayService.getCountries()
      .then(response => {
        this.countries = response.data
      })
      .catch(error => {
        console.log('There was an error' + error.response)
      })
  }
}
</script>

<style scoped>
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
  padding: 1rem 0 0 0;
}

h2 {
  color: #803dd6;
  font-family: 'Corben', cursive;
  font-size: 2rem;
  margin-top: 3rem;
  text-shadow: -3px 2px 0 #fffbdc;
}
</style>
