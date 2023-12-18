
class Hashing {

    passwordHashing(password) {
        const sha256 = require('sha256');
        // const { createHash } = require('crypto');

        return sha256(password);
        // return createHash('sha256').update(password).digest('hex');
    }
}

module.exports = Hashing;

// /*
// // password hashing
// const Hashing = require("./hashing")
// */

// const hash = new Hashing();

// // console.log(hash.passwordHashing("Hi"));
// console.log(hash.passwordHashing("gm"));
