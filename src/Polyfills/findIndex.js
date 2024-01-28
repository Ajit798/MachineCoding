// 1 takes a callback
//2 finds the first element with that and return the index
//3 if it does not find the element it returns -1

// eslint-disable-next-line no-extend-native
Array.prototype.myFindIndex = function (cb) {
	let index = 0;
	for (let i = 0; i < this.length; i++) {
		console.log('hello', i);
		if (cb(this[i], i)) {
			index = i;
			break;
		} else {
			index = -1;
		}
	}
	return index;
};

console.log([1, 2, 3, 4].myFindIndex((ele) => ele === 2));
