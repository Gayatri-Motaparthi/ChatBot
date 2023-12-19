const express = require("express");
const router = express.Router();

const path = require("path");

// const Hashing = require("./hashing");
// const hash = new Hashing();



router.get("/", function (req, res) {

    if ("myCookie" in req.cookies) {
        console.log(req.cookies.myCookie)
        res.render("homepage")
    }
    else {
        res.render("preLogin");
    }
});

router.get("/signup/:error?", function (req, res) {
    const error = req.params.error || "";
    res.render("signUp", { errorMessage: error });


});


router.get("/login/:error?", function (req, res) {
    const error = req.params.error || "";
    res.render("login", { errorMessage: error });

});

router.get("/homepage/:name?", function (req, res) {
    const name = req.params.name || "";
    console.log("in the homepage request");

    res.render('homepage', { userName: name, content: "" });
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