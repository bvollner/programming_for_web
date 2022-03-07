Vue.createApp({
    data() {
      return {
        pets: [
        {
            name: 'Opie',
            animal: 'dog',
            age: 'Ancient',
            breed: 'Westside Wonder Mutt'
        }, {
            name: 'Muggsy',
            animal: 'dog',
            age: '6 years',
            breed: 'Lab mix'
        }, {
            name: 'Kona',
            animal: 'dog',
            age: '2 years',
            breed: 'Chi-weenie'
        }, {
            name: 'Jake, Jake from State Farm',
            animal: 'turtle',
            age: '16 years',
            breed: 'African Sideneck Turtle'
        }, {
            name: 'Biff',
            animal: 'turtle',
            age: '16 years',
            breed: 'African Sideneck Turtle'
        }, {
            name: 'Spoofer',
            animal: 'cat',
            age: '11 years',
            breed: 'Calico House Cat'
        }, {
            name: 'Noogie',
            animal: 'cat',
            age: '11 years',
            breed: 'Calico House Cat'
        }
        ]
    }
    }
}).mount('#petsApp');