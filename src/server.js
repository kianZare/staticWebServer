const express = require('express');
const app = express();

app.use("/static", express.static("public"));  
app.use("/static/home", express.static("public/home.html"));  
app.use("/static/contact", express.static("public/contact.html"));  
app.use("/static/about", express.static("public/about.html"));  
//add public folder to the webserver but using /static path

app.listen(5001, () => {console.log('Listening on port 5001')});
