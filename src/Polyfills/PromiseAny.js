function myPromiseAny(promises) {
	let rejectedPromiseCount = 0;

	return new Promise((resolve, reject) => {
		promises.forEach((promise) => {
			promise
				.then((value) => {
					resolve(Promise.resolve(value));
				})
				.catch((err) => {
					rejectedPromiseCount += 1;

					if (rejectedPromiseCount === promises.length) {
						reject(new Error.AggregateError('All promises were rejected'));
					}
				});
		});
	});
}

const pErr = new Promise((resolve, reject) => {
	reject('Always fails');
});

const pSlow = new Promise((resolve, reject) => {
	setTimeout(resolve, 500, 'Done eventually');
});

const pFast = new Promise((resolve, reject) => {
	setTimeout(resolve, 100, 'Done quick');
});

myPromiseAny([pErr, pSlow, pFast]).then((value) => {
	console.log(value);
	// pFast fulfills first
});
