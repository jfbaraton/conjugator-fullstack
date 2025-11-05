const app = require("./src/app");
const PORT = 5000;

// Make the app listen on port 5000 for incoming requests
app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})

// the app.listen() method makes the program continue forever
// so there is no need for an explicit exit with Ctrl-C