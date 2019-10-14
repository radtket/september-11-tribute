// const listItems = namesList.reduce((result, item) => {
// 	result += `<h3>${item["First Name"]} ${item["Last Name"]}</h3>`;
// 	return result;
// }, "");
// const resultElement = document.getElementById("result");

// resultElement.innerHTML = listItems;

const namesList = [
	{
		"First Name": "AB",
		"Last Name": "R.",
		"Full Name": "AB  R.",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Edward",
		"Last Name": "Abernathy",
		"Full Name": "Edward Abernathy",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Thomas",
		"Last Name": "Adams",
		"Full Name": "Thomas Adams",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Patrick",
		"Last Name": "Ahearne",
		"Full Name": "Patrick  Ahearne",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Wilcox",
		"Last Name": "Alexander",
		"Full Name": "Wilcox Alexander",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "M.",
		"Last Name": "Alfonzo",
		"Full Name": "M. Alfonzo",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Armond",
		"Last Name": "Allen",
		"Full Name": "Armond Allen",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Aleta",
		"Last Name": "Altrichter",
		"Full Name": "Aleta Altrichter",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Jamie",
		"Last Name": "Alvarado",
		"Full Name": "Jamie Alvarado",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Augustine",
		"Last Name": "Amadeo",
		"Full Name": "Augustine Amadeo",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Ibtisam",
		"Last Name": "Amer",
		"Full Name": "Ibtisam Amer",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Nancy",
		"Last Name": "Andrews",
		"Full Name": "Nancy Andrews",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Pete",
		"Last Name": "Angelino",
		"Full Name": "Pete Angelino",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Peter",
		"Last Name": "Arnone",
		"Full Name": "Peter Arnone",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "David",
		"Last Name": "Atwood",
		"Full Name": "David Atwood",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Bill",
		"Last Name": "Balen",
		"Full Name": "Bill Balen",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "John S.",
		"Last Name": "Ballman",
		"Full Name": "John S. Ballman",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Kevin",
		"Last Name": "Barry",
		"Full Name": "Kevin Barry",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Dave",
		"Last Name": "Bearon",
		"Full Name": "Dave Bearon",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Jack",
		"Last Name": "Beck",
		"Full Name": "Jack Beck",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Rob",
		"Last Name": "Berger",
		"Full Name": "Rob Berger",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Eric",
		"Last Name": "Bloom",
		"Full Name": "Eric Bloom",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Shirley",
		"Last Name": "Blount",
		"Full Name": "Shirley Blount",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Joseph",
		"Last Name": "Bodjo",
		"Full Name": "Joseph Bodjo",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Louis",
		"Last Name": "Boehner",
		"Full Name": "Louis Boehner",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Juan",
		"Last Name": "Bortenfeld",
		"Full Name": "Juan Bortenfeld",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Andrew",
		"Last Name": "Boss",
		"Full Name": "Andrew Boss",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Douglas",
		"Last Name": "Bothof",
		"Full Name": "Douglas Bothof",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Tom",
		"Last Name": "Brent",
		"Full Name": "Tom Brent",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Edwin",
		"Last Name": "Brigantty",
		"Full Name": "Edwin Brigantty",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Scott",
		"Last Name": "Brown",
		"Full Name": "Scott Brown",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Carl",
		"Last Name": "Brownholtz",
		"Full Name": "Carl Brownholtz",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Robert",
		"Last Name": "Broyles",
		"Full Name": "Robert Broyles",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Thomas",
		"Last Name": "Bruno",
		"Full Name": "Thomas  Bruno",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Clarence",
		"Last Name": "Bugayong",
		"Full Name": "Clarence Bugayong",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Scott",
		"Last Name": "Burns",
		"Full Name": "Scott Burns",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": "Notes say Scott is the possible first name"
	},
	{
		"First Name": "Joe",
		"Last Name": "Calvacla",
		"Full Name": "Joe Calvacla",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Anthony",
		"Last Name": "Campos",
		"Full Name": "Anthony Campos",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Enzo",
		"Last Name": "Cannizzo",
		"Full Name": "Enzo Cannizzo",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Bob",
		"Last Name": "Capridelio",
		"Full Name": "Bob Capridelio",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Lucinda",
		"Last Name": "Caravajal",
		"Full Name": "Lucinda Caravajal",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Louis",
		"Last Name": "Carducci Jr.",
		"Full Name": "Louis Carducci Jr.",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Edward",
		"Last Name": "Carey",
		"Full Name": "Edward Carey",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Gary",
		"Last Name": "Casaburri",
		"Full Name": "Gary Casaburri",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "John",
		"Last Name": "Casaretti",
		"Full Name": "John Casaretti",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Robert",
		"Last Name": "Castioni",
		"Full Name": "Robert Castioni",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Jacqueline",
		"Last Name": "Castleberry",
		"Full Name": "Jacqueline Castleberry",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Deana",
		"Last Name": "Castoro",
		"Full Name": "Deana Castoro",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Marcos",
		"Last Name": "Castro",
		"Full Name": "Marcos Castro",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Ken",
		"Last Name": "Cates",
		"Full Name": "Ken Cates",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Joseph",
		"Last Name": "Cerar",
		"Full Name": "Joseph Cerar",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Steve",
		"Last Name": "Cerutti",
		"Full Name": "Steve Cerutti",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "David",
		"Last Name": "Chan",
		"Full Name": "David Chan",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Eric",
		"Last Name": "Chan",
		"Full Name": "Eric Chan",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "X.",
		"Last Name": "Chan",
		"Full Name": "X. Chan",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": "Notes say the first name may be Eric"
	},
	{
		"First Name": "John",
		"Last Name": "Chang",
		"Full Name": "John Chang",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Michell",
		"Last Name": "Chase-Brown",
		"Full Name": "Michell Chase-Brown",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Nelson",
		"Last Name": "Chen",
		"Full Name": "Nelson Chen",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Paul",
		"Last Name": "Chen",
		"Full Name": "Paul Chen",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Jason",
		"Last Name": "Cirillo",
		"Full Name": "Jason Cirillo",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "X.",
		"Last Name": "Coleman",
		"Full Name": "X. Coleman",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Cam",
		"Last Name": "Conklin",
		"Full Name": "Cam Conklin",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Karen",
		"Last Name": "Connelly",
		"Full Name": "Karen Connelly",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Stephen",
		"Last Name": "Cook",
		"Full Name": "Stephen Cook",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Miseal",
		"Last Name": "Correa Jr.",
		"Full Name": "Miseal Correa Jr.",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Nelson",
		"Last Name": "Cortes",
		"Full Name": "Nelson Cortes",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Teresa",
		"Last Name": "Courtney",
		"Full Name": "Teresa Courtney",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Leonard",
		"Last Name": "Coy",
		"Full Name": "Leonard Coy",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Eric",
		"Last Name": "Crago",
		"Full Name": "Eric Crago",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Paul",
		"Last Name": "Croce",
		"Full Name": "Paul Croce",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Uriah",
		"Last Name": "Cruickshank",
		"Full Name": "Uriah Cruickshank",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Richard",
		"Last Name": "Dalessandro",
		"Full Name": "Richard Dalessandro",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Andrew",
		"Last Name": "Danchuck",
		"Full Name": "Andrew Danchuck",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "J.",
		"Last Name": "Davis",
		"Full Name": "J. Davis",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "James",
		"Last Name": "DeBoer",
		"Full Name": "James DeBoer",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Pierre",
		"Last Name": "DeBono",
		"Full Name": "Pierre DeBono",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Peter",
		"Last Name": "Decensi",
		"Full Name": "Peter Decensi",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Anthony",
		"Last Name": "DeCrescenzo",
		"Full Name": "Anthony DeCrescenzo",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Norman",
		"Last Name": "Del Toro",
		"Full Name": "Norman Del Toro",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Ruben",
		"Last Name": "DelValle",
		"Full Name": "Ruben DelValle",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Steven",
		"Last Name": "Demayo",
		"Full Name": "Steven Demayo",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Collette",
		"Last Name": "Dennehy",
		"Full Name": "Collette Dennehy",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "James",
		"Last Name": "Dezendorf",
		"Full Name": "James Dezendorf",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "John",
		"Last Name": "Dietz",
		"Full Name": "John Dietz",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "E.",
		"Last Name": "Digregoria",
		"Full Name": "E. Digregoria",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Francis",
		"Last Name": "DiMaio",
		"Full Name": "Francis DiMaio",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Franklin",
		"Last Name": "Dobbins",
		"Full Name": "Franklin Dobbins",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Brett",
		"Last Name": "Dreyer",
		"Full Name": "Brett Dreyer",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Reilly",
		"Last Name": "Dundon",
		"Full Name": "Reilly Dundon",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Elliot",
		"Last Name": "Eap",
		"Full Name": "Elliot Eap",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Debra",
		"Last Name": "Edwards",
		"Full Name": "Debra Edwards",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "John",
		"Last Name": "Eisert",
		"Full Name": "John Eisert",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Darren",
		"Last Name": "Eng",
		"Full Name": "Darren Eng",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Alysa",
		"Last Name": "Erichs",
		"Full Name": "Alysa  Erichs",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "G.",
		"Last Name": "Evancheek",
		"Full Name": "G. Evancheek",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Karen",
		"Last Name": "Evanste",
		"Full Name": "Karen Evanste",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Howard",
		"Last Name": "Farkas",
		"Full Name": "Howard Farkas",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Shawn",
		"Last Name": "Fayles",
		"Full Name": "Shawn Fayles",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Edward",
		"Last Name": "Fecthan",
		"Full Name": "Edward  Fecthan",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "B.",
		"Last Name": "Fenwick",
		"Full Name": "B. Fenwick",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": "Notes say the last name may be Featham"
	},
	{
		"First Name": "Ed",
		"Last Name": "Ferguson",
		"Full Name": "Ed Ferguson",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Joseph",
		"Last Name": "Ferrigno",
		"Full Name": "Joseph  Ferrigno",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Paola",
		"Last Name": "Figueroa",
		"Full Name": "Paola Figueroa",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Michael",
		"Last Name": "Fischgrund",
		"Full Name": "Michael  Fischgrund",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Robert",
		"Last Name": "Fitzsimmons",
		"Full Name": "Robert Fitzsimmons",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Richard",
		"Last Name": "Flanary",
		"Full Name": "Richard Flanary",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Edwin",
		"Last Name": "Flood",
		"Full Name": "Edwin Flood",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Leo",
		"Last Name": "Ford III",
		"Full Name": "Leo Ford III",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Charles",
		"Last Name": "Fredricks",
		"Full Name": "Charles Fredricks",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Vincente",
		"Last Name": "Garcia",
		"Full Name": "Vincente Garcia",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "James",
		"Last Name": "Garr",
		"Full Name": "James Garr",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Lori",
		"Last Name": "Gee",
		"Full Name": "Lori Gee",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Michael",
		"Last Name": "Gellick",
		"Full Name": "Michael Gellick",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Michael",
		"Last Name": "Ginsberg",
		"Full Name": "Michael Ginsberg",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Dennis",
		"Last Name": "Gleason",
		"Full Name": "Dennis Gleason",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Joe",
		"Last Name": "Gloria",
		"Full Name": "Joe Gloria",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Bonnie",
		"Last Name": "Goldblatt",
		"Full Name": "Bonnie  Goldblatt",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Karl",
		"Last Name": "Golovin",
		"Full Name": "Karl Golovin",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Elvis",
		"Last Name": "Gonzalez",
		"Full Name": "Elvis Gonzalez",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Vishnu",
		"Last Name": "Gopaul",
		"Full Name": "Vishnu Gopaul",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Matthew",
		"Last Name": "Goward",
		"Full Name": "Matthew Goward",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Lee",
		"Last Name": "Granato",
		"Full Name": "Lee  Granato",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Joseph",
		"Last Name": "Grenier",
		"Full Name": "Joseph Grenier",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Pete",
		"Last Name": "Grzywacz",
		"Full Name": "Pete Grzywacz",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Loic",
		"Last Name": "Gunn",
		"Full Name": "Loic Gunn",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": "Notes say the first name may be Lorin"
	},
	{
		"First Name": "Alaric",
		"Last Name": "Hall",
		"Full Name": "Alaric Hall",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Carole",
		"Last Name": "Hawkins",
		"Full Name": "Carole Hawkins",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Kenneth",
		"Last Name": "Hawsey",
		"Full Name": "Kenneth Hawsey",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Daniel",
		"Last Name": "Hayden",
		"Full Name": "Daniel Hayden",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Judith",
		"Last Name": "Healy",
		"Full Name": "Judith  Healy",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Jane",
		"Last Name": "Hekel",
		"Full Name": "Jane Hekel",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "X.",
		"Last Name": "Hennelly",
		"Full Name": "X. Hennelly",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Robert",
		"Last Name": "Henridge",
		"Full Name": "Robert  Henridge",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Brian",
		"Last Name": "Herbert",
		"Full Name": "Brian Herbert",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Miguel",
		"Last Name": "Herrera",
		"Full Name": "Miguel Herrera",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Christopher",
		"Last Name": "Herzog",
		"Full Name": "Christopher Herzog",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Corey",
		"Last Name": "Hill",
		"Full Name": "Corey Hill",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Jason",
		"Last Name": "Holcomb",
		"Full Name": "Jason Holcomb",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": "Notes say the first name may be Jason"
	},
	{
		"First Name": "Josef",
		"Last Name": "Holzer",
		"Full Name": "Josef Holzer",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Drew",
		"Last Name": "Houlihan",
		"Full Name": "Drew Houlihan",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Ken",
		"Last Name": "Howaniec",
		"Full Name": "Ken Howaniec",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "William",
		"Last Name": "Husti",
		"Full Name": "William Husti",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Jack",
		"Last Name": "Hynes",
		"Full Name": "Jack Hynes",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Cher",
		"Last Name": "Iannoccone",
		"Full Name": "Cher Iannoccone",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Maria",
		"Last Name": "Imburgia",
		"Full Name": "Maria Imburgia",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Patricia",
		"Last Name": "Inglima",
		"Full Name": "Patricia Inglima",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Bob",
		"Last Name": "Irwin",
		"Full Name": "Bob Irwin",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Mark",
		"Last Name": "Isaacson",
		"Full Name": "Mark Isaacson",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Joseph",
		"Last Name": "Isom",
		"Full Name": "Joseph  Isom",
		Newsletter: true,
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Darrell",
		"Last Name": "Ivey",
		"Full Name": "Darrell Ivey",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Ruth",
		"Last Name": "Jackson",
		"Full Name": "Ruth Jackson",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Carl",
		"Last Name": "Jaigobind",
		"Full Name": "Carl Jaigobind",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Denise",
		"Last Name": "Johnson",
		"Full Name": "Denise Johnson",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Margaret",
		"Last Name": "Jordan",
		"Full Name": "Margaret Jordan",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Roger",
		"Last Name": "Joseph",
		"Full Name": "Roger Joseph",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "William",
		"Last Name": "K.",
		"Full Name": "William K.",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "John",
		"Last Name": "Kane",
		"Full Name": "John Kane",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "James",
		"Last Name": "Kaley",
		"Full Name": "James Kaley",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "John",
		"Last Name": "Karszen",
		"Full Name": "John Karszen",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Alan",
		"Last Name": "Kashinsky",
		"Full Name": "Alan  Kashinsky",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Paul",
		"Last Name": "Kastava",
		"Full Name": "Paul Kastava",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Kevin",
		"Last Name": "Kelleher",
		"Full Name": "Kevin Kelleher",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Rod",
		"Last Name": "Khatabi",
		"Full Name": "Rod Khatabi",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Katie",
		"Last Name": "Kinsey",
		"Full Name": "Katie Kinsey",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "John",
		"Last Name": "Klein",
		"Full Name": "John Klein",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Agnes",
		"Last Name": "Klus",
		"Full Name": "Agnes Klus",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Lucille",
		"Last Name": "Kwas-Cirillo",
		"Full Name": "Lucille Kwas-Cirillo",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Eric",
		"Last Name": "Lacoma",
		"Full Name": "Eric Lacoma",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Howard",
		"Last Name": "Lam",
		"Full Name": "Howard Lam",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Matthew",
		"Last Name": "Larko",
		"Full Name": "Matthew Larko",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Richard",
		"Last Name": "Lautenberger",
		"Full Name": "Richard Lautenberger",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Nathan",
		"Last Name": "Lavoi",
		"Full Name": "Nathan Lavoi",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Robert",
		"Last Name": "Le Goff",
		"Full Name": "Robert Le Goff",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Pat",
		"Last Name": "Leahey",
		"Full Name": "Pat Leahey",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Michael",
		"Last Name": "Lepore",
		"Full Name": "Michael Lepore",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Meredith",
		"Last Name": "Leung",
		"Full Name": "Meredith  Leung",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Michael",
		"Last Name": "Leung",
		"Full Name": "Michael  Leung",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Rosanne",
		"Last Name": "Licitra",
		"Full Name": "Rosanne Licitra",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Darlene",
		"Last Name": "Line",
		"Full Name": "Darlene Line",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Kaysandra",
		"Last Name": "Lockhart",
		"Full Name": "Kaysandra  Lockhart",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Andrew",
		"Last Name": "Long",
		"Full Name": "Andrew Long",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Erik",
		"Last Name": "Lopez",
		"Full Name": "Erik Lopez",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Marc",
		"Last Name": "Lorenti",
		"Full Name": "Marc Lorenti",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Richard",
		"Last Name": "Loria",
		"Full Name": "Richard Loria",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Steve",
		"Last Name": "Lovett",
		"Full Name": "Steve Lovett",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Lee",
		"Last Name": "Lowery",
		"Full Name": "Lee Lowery",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Vincent",
		"Last Name": "Luongo",
		"Full Name": "Vincent Luongo",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "George",
		"Last Name": "Ma",
		"Full Name": "George Ma",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Joseph",
		"Last Name": "Macchiaroli",
		"Full Name": "Joseph Macchiaroli",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "S.",
		"Last Name": "Mackinnon",
		"Full Name": "S. Mackinnon",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Frank",
		"Last Name": "Madelina",
		"Full Name": "Frank Madelina",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Mark",
		"Last Name": "Madenfort",
		"Full Name": "Mark Madenfort",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Ernie",
		"Last Name": "Magana",
		"Full Name": "Ernie Magana",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Nicholas",
		"Last Name": "Maggio",
		"Full Name": "Nicholas Maggio",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Vijayanti",
		"Last Name": "Maharaj",
		"Full Name": "Vijayanti Maharaj",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Robert",
		"Last Name": "Mancene",
		"Full Name": "Robert Mancene",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Ralph",
		"Last Name": "Mariconda",
		"Full Name": "Ralph Mariconda",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Mark",
		"Last Name": "Marino",
		"Full Name": "Mark Marino",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Jose",
		"Last Name": "Martinez",
		"Full Name": "Jose Martinez",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Jose",
		"Last Name": "Marzan",
		"Full Name": "Jose Marzan",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Joseph",
		"Last Name": "Massimp",
		"Full Name": "Joseph Massimp",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Satish",
		"Last Name": "Mathai",
		"Full Name": "Satish Mathai",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Rita",
		"Last Name": "Matula",
		"Full Name": "Rita Matula",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Thomas",
		"Last Name": "Mauro",
		"Full Name": "Thomas Mauro",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "William",
		"Last Name": "McAlpin",
		"Full Name": "William McAlpin",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Dennis",
		"Last Name": "McCarthy",
		"Full Name": "Dennis McCarthy",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "X.",
		"Last Name": "McConnor",
		"Full Name": "X. McConnor",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Robert",
		"Last Name": "McCrossen",
		"Full Name": "Robert McCrossen",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Jeffrey",
		"Last Name": "McDermott",
		"Full Name": "Jeffrey McDermott",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Pat",
		"Last Name": "McElwain",
		"Full Name": "Pat McElwain",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "John",
		"Last Name": "McKenna",
		"Full Name": "John McKenna",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Tom",
		"Last Name": "McMahon",
		"Full Name": "Tom McMahon",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Steve",
		"Last Name": "McMartin",
		"Full Name": "Steve McMartin",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Richard",
		"Last Name": "McNally",
		"Full Name": "Richard McNally",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Michael",
		"Last Name": "McNamara",
		"Full Name": "Michael McNamara",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Dennis",
		"Last Name": "McSweeney",
		"Full Name": "Dennis McSweeney",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Alvin",
		"Last Name": "Medina",
		"Full Name": "Alvin Medina",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Mark",
		"Last Name": "Meeks",
		"Full Name": "Mark Meeks",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Marlon",
		"Last Name": "Miller",
		"Full Name": "Marlon Miller",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Michael",
		"Last Name": "Modrak",
		"Full Name": "Michael Modrak",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Tom",
		"Last Name": "Moffett",
		"Full Name": "Tom Moffett",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Carlos",
		"Last Name": "Morales",
		"Full Name": "Carlos Morales",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Sharon",
		"Last Name": "Morrisette",
		"Full Name": "Sharon Morrisette",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Thomas",
		"Last Name": "Moschetto",
		"Full Name": "Thomas Moschetto",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Brian",
		"Last Name": "Mosher",
		"Full Name": "Brian Mosher",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Tim",
		"Last Name": "Moynihan",
		"Full Name": "Tim Moynihan",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Juan",
		"Last Name": "Munoz",
		"Full Name": "Juan Munoz",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Jared",
		"Last Name": "Murphey",
		"Full Name": "Jared Murphey",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Patrick",
		"Last Name": "Newry",
		"Full Name": "Patrick N.",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Phil",
		"Last Name": "Nepolitan",
		"Full Name": "Paul Nepolitan",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Shawn",
		"Last Name": "Newman",
		"Full Name": "Shawn Newman",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Nell",
		"Last Name": "Newman",
		"Full Name": "Nell Newman",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Alan",
		"Last Name": "Nordman",
		"Full Name": "Alan Nordman",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Michael",
		"Last Name": "O'Brien",
		"Full Name": "Michael O'Brien",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Carl",
		"Last Name": "Olds",
		"Full Name": "Carl Olds",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Kevin",
		"Last Name": "O'Malley",
		"Full Name": "Kevin O'Malley",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Terrence",
		"Last Name": "Opiola",
		"Full Name": "Terrence Opiola",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Osbert",
		"Last Name": "Orduna",
		"Full Name": "Osbert Orduna",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "John",
		"Last Name": "Padilla",
		"Full Name": "John Padilla",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Monica",
		"Last Name": "Padilla",
		"Full Name": "Monica Padilla",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Doug",
		"Last Name": "Panning",
		"Full Name": "Doug Panning",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Gail",
		"Last Name": "Papure",
		"Full Name": "Gail Papure",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Robert",
		"Last Name": "Parish",
		"Full Name": "Robert Parish",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Mark",
		"Last Name": "Parish",
		"Full Name": "Mark Parish",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Tom",
		"Last Name": "Parris",
		"Full Name": "Tom Parris",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "X.",
		"Last Name": "Payne",
		"Full Name": "X. Payne",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Frank",
		"Last Name": "Pedalino",
		"Full Name": "Frank Pedalino",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Jeannine",
		"Last Name": "Perniciaro",
		"Full Name": "Jeannine Perniciaro",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Henry",
		"Last Name": "Peterson",
		"Full Name": "Henry Peterson",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Vanessa",
		"Last Name": "Piepenberg",
		"Full Name": "Vanessa Piepenberg",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Peter",
		"Last Name": "Pietrowski",
		"Full Name": "Peter Pietrowski",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes":
			"Notes say the name is spelled Patrofski, however the source was the newspaper"
	},
	{
		"First Name": "Robert",
		"Last Name": "Pittenridge",
		"Full Name": "Robert Pittenridge",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Max",
		"Last Name": "Polster",
		"Full Name": "Max Polster",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Javier",
		"Last Name": "Posada",
		"Full Name": "Javier Posada",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Clinton",
		"Last Name": "Povlish",
		"Full Name": "Clinton Povlish",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Alex",
		"Last Name": "Povotsky",
		"Full Name": "Alex Povotsky",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes":
			"Notes say the name is spelled Povolotsky, however the source was the newspaper"
	},
	{
		"First Name": "V.",
		"Last Name": "Quinn",
		"Full Name": "V. Quinn",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Izzy",
		"Last Name": "Quintana",
		"Full Name": "Izzy Quintana",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Andrew",
		"Last Name": "Rakowsky",
		"Full Name": "Andrew Rakowsky",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Francisco",
		"Last Name": "Ramos",
		"Full Name": "Francisco Ramos",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Kareem",
		"Last Name": "Rasheed",
		"Full Name": "Kareem Rasheed",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "A.E.",
		"Last Name": "Rathon",
		"Full Name": "A.E. Rathon",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Nicholas",
		"Last Name": "Raudenski",
		"Full Name": "Nicholas Raudenski",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "John",
		"Last Name": "Reddin",
		"Full Name": "John Reddin",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Arthur",
		"Last Name": "Reifke",
		"Full Name": "Arthur Reifke",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Marie",
		"Last Name": "Rey",
		"Full Name": "Marie Rey",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Joseph",
		"Last Name": "Rivera",
		"Full Name": "Joseph Rivera",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Ken",
		"Last Name": "Roberts",
		"Full Name": "Ken Roberts",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Keith",
		"Last Name": "Roberts",
		"Full Name": "Keith Roberts",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Jaime",
		"Last Name": "Rocafuerte",
		"Full Name": "Jaime Rocafuerte",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Tobias",
		"Last Name": "Roche",
		"Full Name": "Tobias Roche",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Eric",
		"Last Name": "Rosado",
		"Full Name": "Eric Rosado",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Eric",
		"Last Name": "Rosenblatt",
		"Full Name": "Eric Rosenblatt",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Diane",
		"Last Name": "Ross-McCullough",
		"Full Name": "Diane Ross-McCullough",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Jack",
		"Last Name": "Russo",
		"Full Name": "Jack Russo",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Rodolpho",
		"Last Name": "Salcedo",
		"Full Name": "Rodolpho Salcedo",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Eric",
		"Last Name": "Sallick",
		"Full Name": "Eric Sallick",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "James",
		"Last Name": "San Filippo",
		"Full Name": "James San Filippo",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Mike",
		"Last Name": "Santory",
		"Full Name": "Mike Santory",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Orlando",
		"Last Name": "Sarabia",
		"Full Name": "Orlando Sarabia",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Michael",
		"Last Name": "Sauer",
		"Full Name": "Michael Sauer",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "David",
		"Last Name": "Schifo",
		"Full Name": "David Schifo",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Jonathan",
		"Last Name": "Sherwin",
		"Full Name": "Jonathan Sherwin",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Raj",
		"Last Name": "Shukia",
		"Full Name": "Raj Shukia",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Eddie",
		"Last Name": "Smith",
		"Full Name": "Eddie Smith",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Sean",
		"Last Name": "Smyth",
		"Full Name": "Sean Smyth",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Allan",
		"Last Name": "Sperling",
		"Full Name": "Allan Sperling",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Michael",
		"Last Name": "Spinella",
		"Full Name": "Michael Spinella",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Martin",
		"Last Name": "Stanford",
		"Full Name": "Martin Stanford",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "David",
		"Last Name": "Staubly",
		"Full Name": "David Staubly",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Alan",
		"Last Name": "Steinmark",
		"Full Name": "Alan Steinmark",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Patricia",
		"Last Name": "Stella",
		"Full Name": "Patricia Stella",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Martin",
		"Last Name": "Suarez",
		"Full Name": "Martin Suarez",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Ronald",
		"Last Name": "Suess",
		"Full Name": "Ronald Suess",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Bernard",
		"Last Name": "Sullivan",
		"Full Name": "Bernard Sullivan",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Steven",
		"Last Name": "Sutherland",
		"Full Name": "Steven Sutherland",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "John",
		"Last Name": "Tobon",
		"Full Name": "John Tobon",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Eugene",
		"Last Name": "Tortora",
		"Full Name": "Eugene Tortora",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Steve",
		"Last Name": "Trent",
		"Full Name": "Steve Trent",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Dianna",
		"Last Name": "Tsang",
		"Full Name": "Dianna  Tsang",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Angelo",
		"Last Name": "Tufano",
		"Full Name": "Angelo Tufano",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Richard",
		"Last Name": "Tursi",
		"Full Name": "Richard Tursi",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "S.",
		"Last Name": "Tutko",
		"Full Name": "S. Tutko",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Ron",
		"Last Name": "Tye",
		"Full Name": "Ron Tye",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Wayne",
		"Last Name": "Usyak",
		"Full Name": "Wayne Usyak",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Ernesto",
		"Last Name": "Valerio",
		"Full Name": "Ernesto Valerio",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Carlos",
		"Last Name": "Vales",
		"Full Name": "Carlos Vales",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "John",
		"Last Name": "Van Gostein",
		"Full Name": "John Van Gostein",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Damian",
		"Last Name": "Vega",
		"Full Name": "Damian Vega",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Michael",
		"Last Name": "Verdi",
		"Full Name": "Michael Verdi",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Robert",
		"Last Name": "Villarreal",
		"Full Name": "Robert Villarreal",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Romedio",
		"Last Name": "Viola",
		"Full Name": "Romedio Viola",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "John",
		"Last Name": "Volpe",
		"Full Name": "John Volpe",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Mike",
		"Last Name": "Walsh",
		"Full Name": "Mike Walsh",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Lee",
		"Last Name": "Wattenbarger",
		"Full Name": "Lee Wattenbarger",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Joseph",
		"Last Name": "Webber",
		"Full Name": "Joseph Webber",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Robert",
		"Last Name": "Weber",
		"Full Name": "Robert Weber",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "E.",
		"Last Name": "Weioz",
		"Full Name": "E. Weioz",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Matt",
		"Last Name": "White",
		"Full Name": "Matt White",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Phillip",
		"Last Name": "Whyte",
		"Full Name": "Phillip Whyte",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Bob",
		"Last Name": "Williams",
		"Full Name": "Bob Williams",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Thomas",
		"Last Name": "Wischerth",
		"Full Name": "Thomas Wischerth",
		Newsletter: true,
		BAH: true,
		Both: true,
		"Feedback Notes": null
	},
	{
		"First Name": "Jamarle",
		"Last Name": "Worlids",
		"Full Name": "Jamarle Worlids",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Steve",
		"Last Name": "Yagode",
		"Full Name": "Steve Yagode",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Kitty",
		"Last Name": "Yiu",
		"Full Name": "Kitty Yiu",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Chance",
		"Last Name": "Youngs",
		"Full Name": "Chance Youngs",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "James",
		"Last Name": "Zammit",
		"Full Name": "James Zammit",
		Newsletter: true,
		BAH: null,
		Both: null,
		"Feedback Notes": null
	},
	{
		"First Name": "Tina",
		"Last Name": "Zimmerman",
		"Full Name": "Tina Zimmerman",
		Newsletter: "",
		BAH: true,
		Both: null,
		"Feedback Notes": null
	}
];

export default namesList;
