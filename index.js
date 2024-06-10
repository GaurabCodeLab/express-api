require("dotenv").config();
const express = require("express");
const dbConnect = require("./utils/dbConnection");
const userRouter = require("./routes/user");
const cors = require("cors");

const server = express();

dbConnect.dbConnection().then(()=>console.log("Database Connected"))
.catch((error)=>console.log("Error in connecting Database", error));

const corsOptions = {
    origin: "https://mern-1-nu.vercel.app",
    methods: "GET, POST, PUT, PATCH, DELETE",
    optionsSuccessStatus: 200, 
    credentials: true   // Allows cookies to be sent
}
server.use(cors(corsOptions));
server.use(express.json());
server.use("/", userRouter.router);

server.listen(process.env.PORT, ()=>{
    console.log(`server is running on PORT ${process.env.PORT}`);
});

