const express = require("express")
const CookieParser = require("cookie-parser")
const cors = require("cors")

app = express();

app.use(express.json());
app.use(CookieParser())

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

// require all the routes over here
const authRouter = require("./routes/auth.routes")

//use the routes over here
app.use("/api/auth", authRouter)
module.exports = app