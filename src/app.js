import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue ({
    el: '#app',
    data: {
      header: "Countries",
      countries: [
        {name: "", population: ""}
      ]
    },
    mounted(){
      this.fetchPopulation();
    },
    methods: {
      fetchPopulation: function () {
        const request = fetch("https://restcountries.eu/rest/v2/all");
        console.log(request)
        // .then(response => response.json())
        // .then(data => this.countries.name = data.message);
      }
    }

  })
})
