// eslint-disable-next-line no-extend-native
Array.prototype.myMap = function (cb) {
	let results = [];

	for (let i = 0; i < this.length; i++) {
		results.push(cb(this[i], i, this));
	}

	return results;
};

console.log([1, 2, 3, 4].myMap((ele) => ele * 2));
