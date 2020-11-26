var app = new Vue({
    el: '#app',
    data: {
      message: 'Привет, Vue!',
      profil: [],
      
    },
    created: function () {
        const vm = this;
        axios.get('http://localhost:8000/api/profil.json')
        .then(function (response){
        console.log(response.data)
        })
    }
  })

