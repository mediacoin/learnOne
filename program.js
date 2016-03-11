var sum = 0;

process.argv.forEach(function(val, index, array) {
	Number(val) ? sum = sum + Number(val) : sum = sum ;
});

console.log(sum);
