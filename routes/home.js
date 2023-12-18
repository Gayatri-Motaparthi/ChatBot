const express = require("express");
const router = express.Router();

const path = require("path");

const Hashing = require("./hashing"); t
const hash = new Hashing();



router.get("/", function (req, res) {

    if ("myCookie" in req.cookies) {
        console.log(req.cookies.myCookie)
        res.render("homepage")
    }
    else {
        res.render("preLogin");
    }
});

router.get("/signup", function (req, res) {
    res.render("signUp", { errorMessage: "" });

});


router.get("/login", function (req, res) {
    res.render("login");

});

router.get("/homepage", function (req, res) {
    console.log("in the homepage request");

    res.render('homepage');
});

router.post("/signup", function (req, res) {



    var name = req.body.name;
    var email = req.body.em;
    var allUserDetails = localStorage.getItem("users");
    for (item in allUserDetails) {
        if (email == item[i].get("email")) {
            const error = "Account already exists. Try Logging In";
            res.render("signup", { errorMessage: error }, iflogin = true)
            break;
        }

    }

    var password = hash.passwordHashing(req.body.p);
    var confirmPassword = hash.passwordHashing(req.body.cp);

    if (password != confirmPassword) {
        const error = "Passwords do not match. Please try again.";
        res.render("signup", { errorMessage: error })
    }

    const userDetails = { "name": name, "email": email, "password": password }





    // // console.log(name);
    // res.cookie('myCookie', email, { maxAge: 10, httpOnly: true });


    res.redirect("/homepage");

});

router.post("/login", function (req, res) {

    var email = req.body.em;
    var password = hash.passwordHashing(req.body.p);

    console.log(password);
    res.cookie('myCookie', email, { maxAge: 300000, httpOnly: true });


    res.redirect("/homepage");

});

router.post("/homepage", function (req, res) {

    res.redirect("/homepage");

});

module.exports = router;