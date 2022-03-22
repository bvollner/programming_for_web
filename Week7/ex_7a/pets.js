var vm = Vue.createApp({
    data() {
      return {
        newPetObj: {
            name: '',
            animal: '',
            age: '',
            breed: '',
            image: '',
            pain: ''
        },
        pets: [
        {
            name: 'Opie',
            animal: 'Dog',
            age: 'Ancient',
            breed: 'Westside Ghost Dingo',
            image: 'images/opie.png',
            pain: 'true'
        }, {
            name: 'Muggsy',
            animal: 'Dog',
            age: '6 years',
            breed: 'Cuddle Moose / Retriever Mix',
            image: 'images/muggsy.png',
            pain: 'true'
        }, {
            name: 'Kona',
            animal: 'Dog',
            age: '2 years',
            breed: 'Nibbling Gremlin',
            image: 'images/kona.png',
            pain: 'true'
        }, {
            name: 'Jake, Jake from State Farm',
            animal: 'Turtle',
            age: '16 years',
            breed: 'Bougie Sideneck Turtle',
            image: 'images/jake.png',
            pain: 'true'
        }, {
            name: 'Biff',
            animal: 'Turtle',
            age: '16 years',
            breed: 'Expandable Mud Turtle',
            image: 'images/biff.png',
            pain: 'false'
        }, {
            name: 'Spoofer',
            animal: 'Cat',
            age: '11 years',
            breed: 'Cloned Calico Lab Cat',
            image: 'images/spoofer.png',
            pain: 'false'
        }, {
            name: 'Noogie',
            animal: 'Cat',
            age: '11 years',
            breed: 'Cloned Calico Lab Cat',
            image: 'images/noogie.png',
            pain: 'false'
        },
        {
            name: 'Yours Truly',
            animal: 'Human',
            age: '41 years',
            breed: 'Midwestern Bearded CouchDweller',
            image: 'images/yourstruly.png',
            pain: 'true'
        },
        {
            name: 'The Teenager',
            animal: 'Human',
            age: '19 years',
            breed: 'Western Nocturnal Giggler',
            image: 'images/thekid.png',
            pain: 'true'
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
                image: '',
                pain: ''
            };
        },
        deleteItem: item => {
            vm.pets = vm.pets.filter(pet => {
                return pet !== item;
            });
        }
    }    
}).mount('#petsApp');