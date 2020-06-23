/*----------functions----------*/

// Private key verification

//   SignAndVerify(privateData) {
//     const sign = crypto.createSign("SHA256");
//     sign.update("some data to sign");
//     sign.end();
//     const signature = sign.sign(privateData, "hex");

//     const verify = crypto.createVerify("SHA256");
//     verify.update("some data to sign");
//     verify.end();
//     return verify.verify(this.pubK, signature, "hex");
//   }

//   showKeys() {
//     console.log("Private Key: " + this.privK);
//   }
// }

// var user = new UserData("Tarun", "helllo world");
// // console.log(user);

// // console.log(
// //   "Check for sign & verify --------------------" +
// //     user.SignAndVerify(user.privK)
// // );
// /*-----------Password verification--------*/

// const validate = (userpassword, hashedPassFromDB) => {
//   var passwordData = genrateHash(userpassword);
//   if (passwordData.passwordHash === hashedPassFromDB) {
//     return true;
//   }
//   return false;


/*Function to use*/
const createuserBlock = (userName, password) => {
    const crypto = require("crypto");
    const fs = require("fs");

    //to generate hash of a password
    const generateHash = password => {
        var hash = crypto.createHmac(
            "sha512",
            password
        ); /** Hashing algorithm sha512 */
        hash.update(password);
        var value = hash.digest("hex");
        return value;
    };

    //User class

    class UserData {
        constructor(userName, password) {
            this.userName = userName;
            this.password = generateHash(password);
            var today = new Date();
            this.timecreated =
                today.getFullYear() +
                "-" +
                (today.getMonth() + 1) +
                "-" +
                today.getDate();

            const { privateKey, publicKey } = crypto.generateKeyPairSync("rsa", {
                modulusLength: 2048,
                publicKeyEncoding: { type: "spki", format: "pem" },
                privateKeyEncoding: { type: "pkcs8", format: "pem" }
            });
            this.privK = privateKey;
            this.pubK = publicKey;
        }
    }
    var user = new UserData(userName, password);
    var userString = JSON.stringify(user);
    fs.writeFile("./userBlock.json", "[" + userString + "]", function(err) {
        if (err) {
            return console.log(err);
        }
        return 10;
    });
    return 55;

};

createuserBlock("yoyo", "secret");