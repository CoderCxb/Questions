let p = new Promise((resolve, reject) => {
	resolve();
});

let a = p
	.then((data) => {
		console.log(data);
		return 222;
		console.log('@@@@');
	})
	.then((data) => {
		console.log(data);
	});

a.then((data) => {
	console.log(data);
});
