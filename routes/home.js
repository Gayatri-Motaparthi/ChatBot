const express = require("express");
const router = express.Router();

const path = require("path");

// const Hashing = require("./hashing");
// const hash = new Hashing();

var theme;



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

router.get("/homepage/:name?", function (req, res) {
    const name = req.params.name || "";
    console.log("in the homepage request");

    res.render('homepage', { theme, userName: name, content: "" });
});

router.post("/homepage", function (req, res) {



    res.redirect("/homepage");

});


// router.post("/signup", function (req, res) {
//     res.redirect("/homepage");

// });

// router.post("/login", function (req, res) {



//     res.redirect("/homepage");

// });


module.exports = router;