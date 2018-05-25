
var database = [
	{ 
		username:"Siobhan",
		password: "bang"
	 },
		{ 
		username:"si",
		password: "too"
	},
		{ 
		username:"si24",
		password: "beep"
	}
];

var newsFeed = [
	{
		username:"boo",
		timeline:"hitting head on brick wall"
	},
	{
		username:"sam",
		timeline: "jumping up and down"
	},
	{
		username:"greta",
		timeline: "holding my breathe"
	}
];

function isUserValid (username,password){
	for (var i = 0; i< database.length; i++){
		if (database[i].username === username && database[i].password === password){
			return true;
			}
		}
		return false;
}

function signIn(username,password){
	
	if(isUserValid(username,password)){
			console.log(newsFeed);
	}
	else{
		alert("Sorry,wrong username and password!");
	}
	
}

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("what is your password?");

signIn(userNamePrompt,passwordPrompt);



