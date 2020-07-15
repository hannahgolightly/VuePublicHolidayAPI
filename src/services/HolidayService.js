import axios from 'axios'

const proxyurl = 'https://cors-anywhere.herokuapp.com/'

const apiClient = axios.create({
  baseURL: proxyurl + 'https://date.nager.at/api/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json'
  }
})

export default {
  getCountries() {
    return apiClient.get('v2/AvailableCountries')
  },
  getCountry(countryCode) {
    return apiClient.get('v2/publicholidays/2020/' + countryCode)
  },
  getCountryName(countryCode) {
    return apiClient.get('v2/CountryInfo?countryCode=' + countryCode)
  },
  getNextHols() {
    return apiClient.get('v2/NextPublicHolidaysWorldwide')
  }
}
