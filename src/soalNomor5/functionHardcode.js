

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


 function test(){
	 let symbol = "DW";
	 let space = "";
	 let height = 6;
	 let width = 12;
			for(let k = 1; k < width; k++){
					space+=symbol
				
				}
			for (let m = 0; m < height; m++){
				console.log(symbol+space)
			}
 }

 test()
