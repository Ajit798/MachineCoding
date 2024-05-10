Promise.race([Promise.reject('Error'), Promise.resolve(42)])
	.then((vale) => console.log(vale))
	.catch((err) => console.log(err));
