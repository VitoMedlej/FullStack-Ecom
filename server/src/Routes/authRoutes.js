const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const User = require('../../db/Models/userModel')
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken')

router.post('/account/login', async(req, res) => {
    try {
        const {email, password} = req.body

        if (!password || !email) {
            res
                .status(404)
                .json({message: 'Please enter email and password'})
            return;
        }
        const user = await User.findOne({email})
        if (!user) {
            res
                .status(404)
                .json({message: 'Sorry ,no users found!'})
            return;
        }

        if (user) {
            try {

                const isVaild = await bcrypt.compare(password, user.password)

                res.json({isVaild})
            } catch (err) {
                console.log(err);
                throw err
            }
        }

    } catch (err) {
        console.log(err);
    }
})

module.exports = router