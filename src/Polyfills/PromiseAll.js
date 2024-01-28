function myPromiseAll(promises) {
	let results = [];
	let taskCompleted = 0;

	return new Promise((resolve, reject) => {
		promises.forEach(async (promise, ind) => {
			try {
				const result = await promise;
				results[ind] = result;
				taskCompleted += 1;
				if (taskCompleted === promises.length) {
					resolve(results);
				}
			} catch (err) {
				reject(err);
			}
		});
	});
}

myPromiseAll([Promise.resolve(42), Promise.resolve(43)])
	.then((value) => {
		console.log('hello', value);
	})
	.catch((err) => {
		console.log(err);
	});
