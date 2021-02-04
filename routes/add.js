var data = require("../data.json");

exports.addFriend = function(request, response) {    
	// Your code goes here
	var name = request.query.name;
	var description = request.query.description;
	var img = "http://lorempixel.com/400/400/people";
	var newFriend = {
					name : name,
					description : description,
					imageURL: img}
	console.log(name);
	console.log(description);
	console.log(img);
	data.friends.push(newFriend);
	response.redirect('/');
 }
