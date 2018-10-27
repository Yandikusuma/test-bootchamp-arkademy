

vendingMachine = (Total_belanja, Total_uang) => {
	let uang_kembali = Total_uang - Total_belanja

	let Stok_uang = [
		50000,
		20000,
		10000,
		5000,
		2000,
		1000,
		500
	]
	let output = []

	if(uang_kembali < 0 ){
		let kurang = "uang anda kurang " + (Total_belanja - Total_uang)
		return kurang
	}

	Stok_uang.map((uang, index) => {
		if((uang_kembali - output[output.length -1]) >= 0){
			output.push(output[output.length -1])
			uang_kembali -= output[output.length -1]
		}
		if((uang_kembali - uang) >= 0){
			output.push(uang)
			uang_kembali -= uang
		}
	})
	return output

}

console.log(vendingMachine( 21500, 50000))


