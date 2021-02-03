const express = require("express");
const app = express();
const links = require('./links.json');
const port = process.env.PORT || 3000;

// Configure Routes
links.l.forEach(link => {
    app.get(`/${link.slug}`, (req, res) => {
        res.redirect(link.to)
    })
})

app.get("/", (req, res) => {
    res.send("<p>dothq.link the official link shortener for Dot HQ products, services and pages.<br/><br/>You should definitely join our Discord Server through our shortened URL, <a href='https://dothq.link/dsc'>dothq.link/dsc</a>.</p>")
})

// Start server
app.listen(port, () => {
    console.log("Server started running.")
})
