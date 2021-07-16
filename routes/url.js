const express = require("express");
const shortid = require("shortid");
//const db = require("../utils/db");
const router = express.Router();
const urls = {};
const host = "https://surl-app.herokuapp.com/url/"


router.get("/:shortUrlId", (req, res) => {
    const longUrl = urls[req.params.shortUrlId];
    if (longUrl) {
        res.redirect(longUrl);
    } else {
        res.status(400).send({error: "Invalid input url"})
    }
});

router.post("/", (req, res) => {
    const data = req.body;
    const longUrl = data.longUrl;
    const shortUrlId = shortid.generate();
    urls[shortUrlId] = longUrl;
    console.log(`${longUrl} url created with id: ${shortUrlId}`);
    //db.insert({"id": shortUrlId, "longUrl": longUrl, "shortUrl" : shortUrl});
    res.status(200).send({ shortUrl: host + shortUrlId });
});

module.exports = router