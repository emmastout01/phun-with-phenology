const express = require('express');
const pool = require('../modules/pool');
const axios = require("axios");

const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const router = express.Router();

/**
 * GET weather route for specific date/zip code
 */
router.get('/:date/:zipCode', rejectUnauthenticated, (req, res) => {
    const { date, zipCode } = req.params;
    const baseUrl = "http://api.weatherapi.com";
    const weatherUrl = `${baseUrl}/v1/history.json?key=${process.env.WEATHER_API_KEY}&q=${zipCode}&dt=${date}`;
    axios.get(weatherUrl)
        .then(response => {
            res.send(response.data)
        }).catch(err => {
            console.log('error in GET weather: ', err);
            res.sendStatus(500);
        })
})

module.exports = router;
