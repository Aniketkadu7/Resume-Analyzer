const express = require("express")
const CookieParser = require("cookie-parser")

app = express();

app.use(express.json());
app.use(CookieParser())

// require all the routes over here
const authRouter = require("./routes/auth.routes")

//use the routes over here
app.use("/api/auth", authRouter)
module.exports = app