// Add your code here
// new instance of the vue class
new Vue({
    el: "#myApp",
    data: {
      message: "Hello World!"
    }
  });
  new Vue({
    el: '#app',
    data: {
      message: 'Am I doing this right?'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  });
  var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'You loaded this page on ' + new Date().toLocaleString()
    }
  })
  