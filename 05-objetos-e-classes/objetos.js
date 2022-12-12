const person = {
	name: "Lya",
	age: 23,
	descrever: function () {
		console.log(`Meu nome é ${this.name} e tenho ${this.age} anos`);
	},
};

person.descrever();
