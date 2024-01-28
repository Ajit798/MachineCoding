//POLYFILL OF GROUP BY LODASH
const arr = [{ a: { b: { c: 2 } } }, { a: { b: { c: 1 } } }];

function groupBy(obj, iteratee) {
	if (typeof iteratee === 'function') {
		return obj.reduce((acc, curr) => {
			const key = iteratee(curr);
			acc[key] ? acc[key].push(curr) : (acc[key] = [curr]);
			return acc;
		}, {});
	}
	if (typeof iteratee === 'string' && !iteratee.match(/[/.]/)) {
		return obj.reduce((acc, curr) => {
			const key = curr[iteratee];
			acc[key] ? acc[key].push(curr) : (acc[key] = [curr]);
			return acc;
		}, {});
	} else {
		const key = iteratee.split('.');
		return obj.reduce((acc, curr) => {
			let ss;
			for (let i = 0; i < key.length; i++) {
				console.log(ss);
				ss === undefined ? (ss = curr[key[i]]) : (ss = ss[key[i]]);
			}
			acc[ss] ? acc[ss].push(curr) : (acc[ss] = [curr]);
			return acc;
		}, {});
	}
}
console.log(groupBy(arr, 'a.b.c'));
