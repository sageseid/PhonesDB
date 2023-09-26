const express = require("express")
//const cors = require("cors")

const phonesRouter = require("./v1/phonesRouter")

//const db = require("/db-config")

const server = express();

//server.use(helmet());
//server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));


// server.use(session({
// 	resave: false, // avoid recreating sessions that have not changed
// 	saveUninitialized: false, // for laws against setting cookies automatically
// 	secret: "hot cross buns  pot lucker", // cryptographically sign the session/cookie
// 	store: new KnexSessionStore({
// 		knex: db, // pass configured instance of knex
// 		createtable: true, // if the session table does not exist, create it
// 	}),
// }))

server.use("/phones" , phonesRouter)



server.use((err, req, res, next) => {
	console.log(err)
	
	res.status(500).json({
		message: "Something went wrong",
	})
})

module.exports = server