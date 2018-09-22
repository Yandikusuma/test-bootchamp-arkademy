//Validasi username
 let username = "yandik"

   function ValidasiUsername(){
   	if(username.match(/^[a-z]+$/)){
   		console.log('username valid')
   		return('username valid');
   	}else{
   		console.log('username invalid')
   		return('username invalid');
   	}
   }
ValidasiUsername();


//Validasi email


let email = "yandik@gmail.com"

    function validasiEmail(){
    	if (email.match(/^([a-z]+)@([a-z\.]+).$/)){
    		console.log('email  valid')
    		return('email valid');
    	}else{
    		console.log('email invalid')
    		return('email invalid');
    	}
    }
validasiEmail()


 //validasi Phone Number

 phoneNumber = "+0853 2024 5700"

  function validPhoneNumber(){
	if(phoneNumber.match(/^([0-9\+]+)\s/)){
  		console.log('phonenumber valid')
  		return('phonenumber valid');
  	}else{
  		console.log('phonenumber invalid')
  		return('phonenumber invalid');
  	}
  }
  validPhoneNumber();