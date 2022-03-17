var vm = Vue.createApp({
    data() {
      return {
        newPetObj: {
            name: '',
            animal: '',
            age: '',
            breed: '',
            image: ''
        },
        pets: [
        {
            name: 'Opie',
            animal: 'Dog',
            age: 'Ancient',
            breed: 'Westside Ghost Dingo',
            image: 'images/opie.png'
        }, {
            name: 'Muggsy',
            animal: 'Dog',
            age: '6 years',
            breed: 'Cuddle Moose / Retriever Mix',
            image: 'images/muggsy.png'
        }, {
            name: 'Kona',
            animal: 'Dog',
            age: '2 years',
            breed: 'Nibbling Gremlin',
            image: 'images/kona.png'
        }, {
            name: 'Jake, Jake from State Farm',
            animal: 'Turtle',
            age: '16 years',
            breed: 'Bougie Sideneck Turtle',
            image: 'images/jake.png'
        }, {
            name: 'Biff',
            animal: 'Turtle',
            age: '16 years',
            breed: 'Expandable Mud Turtle',
            image: 'images/biff.png'
        }, {
            name: 'Spoofer',
            animal: 'Cat',
            age: '11 years',
            breed: 'Cloned Calico Lab Cat',
            image: 'images/spoofer.png'
        }, {
            name: 'Noogie',
            animal: 'Cat',
            age: '11 years',
            breed: 'Cloned Calico Lab Cat',
            image: 'images/noogie.png'
        },
        {
            name: 'Yours Truly',
            animal: 'Human',
            age: '41 years',
            breed: 'Midwestern Bearded CouchDweller',
            image: 'images/yourstruly.png'
        },
        {
            name: 'The Teenager',
            animal: 'Human',
            age: '19 years',
            breed: 'Western Nocturnal Giggler',
            image: 'images/thekid.png'
        }
        ]
    };
},
    methods: {
        submitHandler: () => {
            console.log('submitted');
            vm.pets = vm.pets.concat(vm.newPetObj);
            vm.resetForm();
        },
        resetForm: () => {
            vm.newPetObj = {
                name: '',
                animal: '',
                age: '',
                breed: '',
                image: ''
            };
        },
        deleteItem: item => {
            vm.pets = vm.pets.filter(pet => {
                return pet !== item;
            });
        }
    }    
}).mount('#petsApp');