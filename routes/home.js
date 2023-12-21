const express = require("express");
const router = express.Router();

const path = require("path");

var theme;

const { getChatResponse } = require("./axios");
const { question } = require("readline-sync");

var questions = [];
var answers = [];






router.get("/", function (req, res) {

    res.render("theme", { theme });

});

router.post("/", function (req, res) {

    theme = req.body.theme
    console.log(theme);
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
    const name = req.params.name || "";
    console.log("in the homepage request");

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


router.get("/logout", function (req, res) {
    res.redirect("/")
});


// router.post("/signup", function (req, res) {
//     res.redirect("/homepage");

// });

// router.post("/login", function (req, res) {



//     res.redirect("/homepage");

// });
// router.post("/tryPostman", function (req, res) {
//     console.log(req.body)
//     res.json({})
//     // });


module.exports = router;