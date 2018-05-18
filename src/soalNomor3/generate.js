var i = 78, j = 247, k = 170, a = [], b = [], c, d, e, f, l = 0;
for(; i <= j; i++){ a.push(i); }
while(l < 110){
		c = Math.random()*100; c = Math.floor(c);
		d = Math.random()*100; d = Math.floor(d);
		b.push(a[c]); e = c + d;
		if((b.length != k) && (e < k)){  b.push(a[e]); }
		l = b.length;
}
console.log('Method 1:');
console.log(b);

const angka = 1-10;
const huruf = 'a-z';

function Generate(){
	for ( )
}