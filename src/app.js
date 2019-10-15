import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue ({
    el: '#app',
    data: {
      header: "Countries",
      countries: []

    },

    mounted(){
      this.fetchCountries();
    },

    computed: {
      totalPopulation: function() {
        return(this.countries.reduce((sum, pop) => sum + pop.population, 0));
      }
    },

    methods: {
      fetchCountries: function () {
        const request = fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(data => this.countries = data);
      }
    }
  })
})
