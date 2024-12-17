const express = require('express');
const app = express();
const cors = require("cors");
const pool = require("./database");
const accountRouter = require("./routes/account_routes"); // Ensure this path points to your router file correctly


app.use(cors());
app.use(express.json());
app.use("/account", accountRouter); // Mount the account router at "/account"


//ROUTES

app.listen(5000, () => {
    console.log("Server running at port 5000");
});