
myJson = {
	"name": "Yandik",
	"address": "jakarta timur",
	"hobbies" : ["belajar"],
	"is_married" : false,
	"school" : {
		"highSchool" : "SMK SATRIA JAMBI",
		"university" : null
	},
	"skill" : [
		{"programLanguage": "javascript"}
	]
}

myJsonReturn = JSON.stringify(myJson);
console.log(myJsonReturn)

