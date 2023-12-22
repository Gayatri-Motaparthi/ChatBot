const db = require('./db');

const User = require("../models/userSchema");

const createUser = async () => {
    const newUser = new User({
        username: "kjhg",
        email: "jhg",
        password: "kjh"
    });
    await newUser.save();
}
createUser();
