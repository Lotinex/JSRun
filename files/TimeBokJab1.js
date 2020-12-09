const n = 10 //1
for(i=1;i<n;i++){ // n
	for(j=1;j<n;j*=2){ // log 2 n
		console.log(j)
	}
}
// T(n) = nlog2n + 1
// => O(n log n)
