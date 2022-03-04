Vue.createApp({
    data() {
        return {
            alpaca: "https://en.wikipedia.org/wiki/Alpaca",
            llama: "https://en.wikipedia.org/wiki/Llama",
            alpacaTitle: "Still not as cool as African Sideneck Turtles but better than Llamas",
            llamaTitle: "Still not as cool as African Sideneck Turtles but better than Alpacas",
            currentRoute: 'alpacaRoute',
            baseStyle: {
                border: "1px solid black"
            },
        }
    }
}).mount("#app");