const express = require("express");
const path = require("path");
const { HLTV } = require('hltv')
const app = express();

app.get("/getMachtes/:eventId", (req, res) => {
    const eventId = req.params.eventId;
    // HLTV.getMatch({ id }).then(result => {
    //     res.json(result);
    // });
    HLTV.getMatches({ eventId }).then((result) => {
        res.json(result);
      });
});

app.get("/getEvent/:id", (req, res) => {
    const id = req.params.id;
    HLTV.getEvent({ id }).then(result => {
        res.json(result)
    })
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on  ${PORT}`));