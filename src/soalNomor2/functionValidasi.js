//Validasi username

   function ValidasiUsername(username){
   	if(username.match(/^[a-z]+$/)){
   		console.log('username valid')
   		return('username valid');
   	}else{
   		console.log('username invalid')
   		return('username invalid');
   	}
   }
ValidasiUsername("yandik");


//Validasi email

    function validasiEmail(email){
    	if (email.match(/^([a-z]+)@([a-z\.]+).$/)){
    		console.log('email  valid')
    		return('email valid');
    	}else{
    		console.log('email invalid')
    		return('email invalid');
    	}
    }
validasiEmail("yandik@gmail.com")


 //validasi Phone Number


  function validPhoneNumber(phoneNumber){
	if(phoneNumber.match(/^([0-9\+]+)\s/)){
  		console.log('phonenumber valid')
  		return('phonenumber valid');
  	}else{
  		console.log('phonenumber invalid')
  		return('phonenumber invalid');
  	}
  }
  validPhoneNumber("+0853 2024 5700");