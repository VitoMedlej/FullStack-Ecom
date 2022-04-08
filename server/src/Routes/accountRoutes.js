const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const User = require('../../db/Models/userModel')
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken')

router.post('/account/register', async(req, res) => {
    try {
        const {username, email, password} = req.body
        if (!username || !password || !email) {
            res
                .status(404)
                .json({message: 'error ,credentials are required!'})
            return;
        }
        const user = await User.findOne({email})

        const hashedPassword = await bcrypt.hash(password, 10);

        if (user) {
            res
                .status(406)
                .json({message: 'user already exists ,please use another email.'})
            return;
        }

        const newUser = await new User({username, email, password: hashedPassword, isAdmin: false})

        await newUser.save()

        const token = await jwt.sign({
            id: newUser._id,
            isAdmin: false,
            username: newUser.username,
            email: newUser.email
        }, process.env.JWT_SECRET, {expiresIn: '24h'})

        res
            .status(200)
            .json({
                user: {
                    token,

                    username: newUser.username,
                    id: newUser._id,
                    email: newUser.email
                },
                message: 'Account created'
            })

    } catch (err) {

        res.send({message: `something went wrong...`})
    }

})

module.exports = router