const crypto = require("crypto");

class UserData 
{
  constructor(userName, password) 
  {
    this.userName = userName;
    this.password = password;
    var today = new Date();
    this.timecreated = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

    const { privateKey, publicKey } = crypto.generateKeyPairSync("rsa", 
                                                                  {
                                                                    modulusLength: 2048,
                                                                    publicKeyEncoding: { type: "spki", format: "pem" },
                                                                    privateKeyEncoding: { type: "pkcs8", format: "pem" }
                                                                  }
                                                                );
    this.privK = privateKey;
    this.pubK = publicKey;
  }

  //functions

  SignAndVerify(privateData) 
  {
    const sign = crypto.createSign("SHA256");
    sign.update("some data to sign");
    sign.end();
    const signature = sign.sign(privateData, "hex");

    const verify = crypto.createVerify("SHA256");
    verify.update("some data to sign");
    verify.end();
    return verify.verify(this.pubK, signature, "hex");
  }

  showKeys() 
  {
    console.log("Private Key: " + this.privK);
  }
}

var user = new UserData("Tarun", "helllo world");
console.log(user);

console.log( "Check for sign & verify --------------------" + user.SignAndVerify(user.privK) );
