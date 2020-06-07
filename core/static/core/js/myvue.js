const endpoint = 'http://localhost:8000/'

var app = new Vue({
    el: '#app',
    delimiters: ['\${', '}'],

    data: {
      users: [
        //{ 'username': 'Huguinho' },
        //{ 'username': 'Zezinho' },
        //{ 'username': 'Luizinho' }
      ]
    },
    created(){
      axios.get(endpoint + 'api/users/')
        .then(response => {
          this.users = response.data.data
        })
    }
  })