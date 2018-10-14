

	// 	function stairCase(){
	// 		let n = 6
	// 		let space = ""
	// 		let symbol = "";
	// 		let height = n ;
	// 		let width = height -1
	// 		let sym = 0;
	// 			for(let i = 0; i < height; i++){
	// 				let j = 0;
	// 					for(j = width; j > 0; j--){
	// 						space += " "
	// 					}
	// 					if(j == 1 || j == 0){
	// 						sym += 1
	// 						for(let m = 0; m < sym; m++ ){
	// 							symbol += "#"
	// 						}
	// 					}
	// 					console.log(space+symbol)
	// 					width -=1
	// 					space=""
	// 					sym=0
	// 			}
	// 	}

	// stairCase()


//  function test(){
// 	 let symbol = "DW";
// 	 let space = "";
// 	 let height = 6;
// 	 let width = 12;
// 			for(let k = 1; k < width; k++){
// 					space+=symbol
				
// 				}
// 			for (let m = 0; m < height; m++){
// 				console.log(symbol+space)
// 			}
//  }

//  test()

// function miniMaxSum_Old(){
// 	const data = [1,2,3,4,5]
// 	let min = 0
// 	let max = 0
// 	let int = 0

// 	for(i = 0; i < data.length; i++){
// 			let sum = 0
// 			for( j = 0; j < data.length; j++){
// 					if(j !== int)
// 							sum += data[j]
// 							console.log(sum)
// 			}
// 			if(min){
// 					min+sum
// 			}if(max) max += sum
// 			int++
// 	}
// return[max,min]
// console.log(max,min)
// }
// miniMaxSum_Old()

// let sumNum = (x,y) => Number(x)+Number(y)

// function miniMaxSum(arr) {
// const min = arr.slice(0,4).reduce(sumNum,0);
// const max = arr.slice(1,5).reduce(sumNum,0)
// console.log(min, max)
// }
// miniMaxSum()

let dw = "DW"
let space = ""

HardCoreDw = (row, col) => {
	for(i = 1; i <= row; i++){
		for( j = 1; j <= col; j++){
			if( i === 1 ){
				if(j === 1 || j === 2 || j === 6 || j === 12){
					space += dw
				}else{
					space += '  '
				}
			}
			if(i === 2){
				if(j === 1 || j === 3 || j === 6 || j === 12){
					space += dw
				}else{
					space += '  '
				}
			}
			if(i === 3){
				if(j === 1 || j === 4 || j === 6 || j === 9 || j === 12){
					space += dw
				}else{
					space += '  '
				}
			}
			if(i === 4){
				if(j === 1 || j === 4 || j === 6 || j === 8 || j === 9 || j === 10 || j ==12){
					space += dw
				}else{
					space += '  '
				}
			}
			if(i === 5){
				if(j === 1 || j === 3 || j === 6 || j === 7 || j === 11 || j === 12){
					space += dw
				}else{
					space += '  '
				}
			}
			if(i === 6){
				if(j === 1 || j === 2 || j === 6 || j === 12){
					space += dw
				}else{
					space += '  '
				}
			}
		}
		space += '\n'
	}
	return space
}

let hardcode = HardCoreDw(6, 12)

console.log(hardcode)