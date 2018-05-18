//Validasi username

function ValidasiUsername(){
	if( username === username.toLowerCase()){
		console.log('username valid')
		return('username valid');
	}else{
		console.log('username invalid')
		return('username invalid');
	}
}
ValidasiUsername();

//Validasi email

function validasiEmail(){
	if (( email.indexOf('@') > 0 ) && ( email == email.toLowerCase() )){
		console.log('email  valid')
		return('email valid');
	}else{
		console.log('email invalid')
		return('email invalid');
	}
}
validasiEmail();

// validasi Phone Number

function validPhoneNumber(){
	if( typeof phonenumber === 'number' ){
		console.log('phonenumber valid')
		return('phonenumber valid');
	}else{
		console.log('phonenumber invalid')
		returna('phonenumber invalid');
	}
}
validPhoneNumber();