var app = new Vue({
    el: '#app',
    data: {
      database: [],
    },
    mounted() {
      axios.get('http://localhost/php-ajax-dischi/vers2/comp/').then((res)=> {
        this.database= res.data;
      })
    },
    beforeUpdate() {
  
    },
    methods: {
      
    }
  })