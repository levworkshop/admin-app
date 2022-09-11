const User = require('../models/User');
const joi = require('joi');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
    signup: async function (req, res, next) {
        const schema = joi.object({
            name: joi.string().required().min(2).max(256),
            email: joi.string().required().email().min(6).max(256),
            password: joi.string().required().min(6).max(1024),
        });

        const { error, value } = schema.validate(req.body);

        if (error) {
            console.log(error.details[0].message);
            res.status(400).send('error sign up new user');
            return;
        }

        try {
            console.log(User);
            console.log(value.email);

            const user = await User.findOne({ email: value.email });
            if (user) {
                return res.status(400).send('user already registered.');
            }

            const hash = await bcrypt.hash(value.password, 10);

            const newUser = new User({
                name: value.name,
                email: value.email,
                password: hash,
            });

            await newUser.save();

            res.json({
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
            })
        }
        catch (err) {
            console.log(err.message);
            res.status(400).send('error sign up new user');
        }
    },
}