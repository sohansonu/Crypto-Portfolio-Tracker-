const { profile, holdings, transaction, addreminder } = require('../models/model');
const mongoose = require('mongoose');

exports.login = async (req, res) => {
    try {
        const lusername = req.body.username;
        const lpassword = req.body.password;
        const validuser = await profile.findOne({username:lusername});

        if (validuser.password == lpassword) {
            res.status(200).json({
                message:"login succesfull"
            })
        }
        else {
            res.status(401).json({
                message:"login unsuccesfull"
            })
        }
    }
    catch (err) {
        res.status(404).json({
            status: "failed login",
            message: `something went wrong ${err}`
        });
    }
}

exports.signUp = async (req, res) => {
    try {
        const lusername = req.body.username;
        const lpassword = req.body.password;
        const validuser = await profile.findOne({username: lusername});
        if (validuser) {
            res.status(409).json({
                status: "conflict",
                message: "user already exists"
            });
        }
        else {
            const newuser =  new profile({
                username: lusername,
                password: lpassword
            });
            let saveresult = await newuser.save();
            res.status(201).json({
                message: `new user created successfully :${saveresult.username}`
            });
        }
    }
    catch (err) {
        res.status(404).json({
            status: "user not created",
            message: `something went wrong ${err}`
        });

    }
}