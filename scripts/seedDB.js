const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect("mongodb://localhost/ideaLoader", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false,
});

const UserSeeds = [
	{
		username: "TestBot",
		email: "testbot@email.com",
		password: "password",
		project: {
			ColumnOne: ["Hello", "World"],
			ColumnTwo: ["Hello", "World"],
			ColumnThree: ["Hello", "World"],
		},
	},
];

db.User.deleteMany({})
	.then(() => db.User.collection.insertMany(UserSeeds))
	.then((data) => {
		console.log(data.result.n + " records inserted!");
		process.exit(0);
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
