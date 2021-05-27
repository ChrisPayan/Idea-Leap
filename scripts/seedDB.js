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
		username: "Test Bot",
		email: "testbot@gmail.com",
		password: "$2b$10$EHMCusOc0e2Am3RUf1KxIugHnYykMvEmFaYqKJBCoKv4LdytawAOq",
		__v: 0,
		project: {
			title: "Idea Board",
			columns: [
				{
					words: [],
					title: "ColumnOne",
				},
				{
					words: [],
					title: "ColumnTwo",
				},
				{
					words: [],
					title: "ColumnThree",
				},
			],
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
