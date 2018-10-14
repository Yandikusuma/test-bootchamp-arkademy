

// function miniMaxSum(Arr){
// 	let arr = [7,69,2,221,8974]
// 	let maxSum = 0
// 	let minSum = 0

// 	for(let i = arr.length -1, j = 0; i > arr.length - 4, j < 4; i--, j++ ){
// 		maxSum += arr[i]
// 		minSum += arr[j]
// 		console.log(arr[i])
// 	}
// 		console.log(minSum,maxSum)
// }
// miniMaxSum()

// function main() {
// 	let arr =[1,2,3,4,5]
// 	let min = 0
// 	let max = 0
// 	let sum = 0
// 	let int = 0
	
// 	// arr.map((data, i) => {
// 	// 	if(arr.indexOf(data) !== i) {
// 	// 		// let sum = arr.reduce(acc, cur => acc + cur)
// 	// 		console.log('sum', data)
// 	// 	}
// 	// })
	
// 	for (let i = 0; i < 5; i++) {
// 			int = arr[i];
// 			console.log(arr)
			
// 	}
// }
// main()
// let arr=[7,69,2,221,8974]

// function miniMaxSum(){
// 	let min = 0
// 	let max = 0
// 	let arr=[7,69,2,221,8974]
// 	let int = 0

// 	for(i = 0; i < arr.length; i++){
// 		let sum = 0
// 		for( j = 0; j < arr.length; j++){
// 			if(j !== int)
// 			{sum += arr[j]}
// 				//console.log(sum)
// 		}
// 			if( min < sum) {
// 				min = sum
// 			}else{
// 			min = max
// 		}
// 		if(max >= sum) {
// 			max = sum
// 		}
// 		int++
// 	}
// 	return[max,min]
// 	console.log(max, min)
// }
// miniMaxSum()


function miniMaxSum() {
	let arr=[1,2,3,4,5]
	let sumNum = (x,y) => Number(x)+Number(y)
  const sorted = arr.sort()
  const min = arr.slice(0,4).reduce(sumNum,0);
  const max = arr.slice(1,5).reduce(sumNum,0)
  console.log(min, max)
}
miniMaxSum()






// function main() {
// 	//let n = parseInt(readLine());
// 	let n = [1,2,33]
// 	let a = [1,2,3];
// 	for(let i = 0; i < n; i++){
// 		 a[i] = readLine().split(" ");
// 		 a[i] = a[i].map(Number);
// 	}

// 	let sumPrimaryDiagonal = 0;
// 	let sumSecondaryDiagonal = 0;
	 
// 	for (i = 0, n = a.length; i < n; i++){
// 			let line = a[i];
// 			sumPrimaryDiagonal += line[i];
// 			sumSecondaryDiagonal += line[(n - 1) - i];
// 	}
// 	console.log(Math.abs(sumPrimaryDiagonal - sumSecondaryDiagonal))
// }
// main()
