

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
		if( i !== 6){
			space += '\n'
		}
	}
	return space
}

let hardcode = HardCoreDw(6, 12)

console.log(hardcode)