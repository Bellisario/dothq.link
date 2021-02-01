const express = require("express");
const app = express();
const links = require('./links.json');

// Configure Routes
links.l.forEach(link => {
    app.get(`/${link.slug}`, (req, res) => {
        res.redirect(link.to)
    })
})

// Start server
app.listen(80, () => {
    console.log("Server started running.")
})