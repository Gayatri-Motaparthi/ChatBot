const express = require("express");
const router = express.Router();

const path = require("path");

var theme;

const { getChatResponse } = require("./axios");


var questions = [];
var answers = [];

const UserDetails = require("./userDetails");
const { passwordHashing } = require("./hashing");

router.get("/", function (req, res) {

    res.render("theme", { theme });

});

router.post("/", function (req, res) {

    theme = req.body.theme
    res.redirect("/preLogin");

});

router.get("/preLogin", function (req, res) {
    res.render("preLogin", { theme });
});

router.get("/signup/:error?", function (req, res) {
    const error = req.params.error || "";
    res.render("signUp", { theme, errorMessage: error });

});


router.get("/login/:error?", function (req, res) {
    const error = req.params.error || "";
    res.render("login", { theme, errorMessage: error });

});

router.get("/homepage/", function (req, res) {
    questions = [];
    answers = [];

    res.render('homepage', { theme, questions, answers });
});


router.post("/homepage", async function (req, res) {
    var question = req.body.inputbar;
    questions.push(question);

    try {
        var response = await getChatResponse(question);
        var content = response.data
        answers.push(content);

        res.render("homepage", { theme, questions, answers });
    } catch (error) {
        console.error(error);
    }
});


router.get("/logout", async function (req, res) {
    res.redirect("/")
});


router.post("/signup", async function (req, res) {
    var name = req.body.name;
    var email = req.body.em;
    var password = req.body.p;
    var confirmPassword = req.body.cp;

    var response = {};
    if (!email.includes("@") || !email.includes(".")) {
        response.error = "Invalid Email-ID!";
        res.json(response);
    } else if (await UserDetails.checkIfUserExists(email)) {
        response.error = "Account already exists! Try Logging In ";
        res.json(response);
    } else if (! await UserDetails.checkIfPasswordsMatchSignUp(password, confirmPassword)) {
        response.error = "Passwords do not match! Try again ";
        res.json(response);
    } else {
        await UserDetails.addUser(name, email, passwordHashing(password))
        response.success = true;
        res.json(response);
    }


});

router.post("/login", async function (req, res) {

    var email = req.body.em;
    var password = req.body.p;
    var response = {};
    if (! await UserDetails.checkIfUserExists(email)) {

        response.error = "Account does not exist! Try Signing Up ";
        res.json(response);

    } else if (! await UserDetails.checkIfCorrectPasswordLogIn(email, password)) {
        response.error = "Incorrect Password! Try again ";
        res.json(response);

    } else {
        response.success = true;
        res.json(response);
    }



});

module.exports = router;