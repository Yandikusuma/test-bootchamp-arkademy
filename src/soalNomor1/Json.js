
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
	"Yandi", 
	"Jakarta", 
	["bola"], 
	false, {
	"highSchool": "SMK",
	"university": null 
  },
	[{"programLanguage": "javascript"}]
)

console.log(bio)

