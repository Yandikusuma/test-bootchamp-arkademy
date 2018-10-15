
// myJson = {
// 	"name": "Yandik",
// 	"address": "jakarta timur",
// 	"hobbies" : ["belajar"],
// 	"is_married" : false,
// 	"school" : {
// 		"highSchool" : "SMK SATRIA JAMBI",
// 		"university" : null
// 	},
// 	"skill" : [
// 		{"programLanguage": "javascript"}
// 	]
// }

// myJsonReturn = JSON.stringify(myJson);




biodata = ( name, address, hobbies, is_married, school, skill) => {
	return {
		name,
		address,
		hobbies,
		is_married,
		school,
		skill
	}
}

const bio = biodata( 
	'Yandik', 
	'Jakarta', 
	['bola'], 
	false, {
	'highSchool': 'SMK',
	'university': null},
	[{"programLanguage": "javascript"}]
)

console.log(bio)

