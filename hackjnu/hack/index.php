<!DOCTYPE html>
<html>
<head>
	<title>test hack</title>
<!--
	<script type="text/javascript" src="temp.js"></script>
	<script type="text/javascript" src="userBlockOld.js"></script>
	<script type="text/javascript" src="userBlock.js"></script>
	<script type="text/javascript" src="userBlock.json"></script>
-->
    <style>
    </style>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
</head>
<body>
     <button id="signup" type="button">Signup</button>
    <br>
    <div id="message"></div>

    
    <script>
//        const createuserBlock = (username, password) => {
//            const crypto = require("crypto");
//            const fs = require("fs");
//
//            //to generate hash of a password
//            const generateHash = password => {
//                var hash = crypto.createHmac(
//                    "sha512",
//                    password
//                ); /** Hashing algorithm sha512 */
//                hash.update(password);
//                var value = hash.digest("hex");
//                return value;
//            };
//
//            //User class
//
//            class UserData {
//                constructor(username, password) {
//                    this.username = username;
//                    this.password = generateHash(password);
//                    var today = new Date();
//                    this.timecreated =
//                        today.getFullYear() +
//                        "-" +
//                        (today.getMonth() + 1) +
//                        "-" +
//                        today.getDate();
//
//                    const { privateKey, publicKey } = crypto.generateKeyPairSync("rsa", {
//                        modulusLength: 2048,
//                        publicKeyEncoding: { type: "spki", format: "pem" },
//                        privateKeyEncoding: { type: "pkcs8", format: "pem" }
//                    });
//                    this.privatekey = privateKey;
//                    this.publickey = publicKey;
//                }
//            }
//            var user = new UserData(username, password);
//            return user;
////            var userString = JSON.stringify(user);
////            fs.writeFile("./userBlock.json", "[" + userString + "]", function(err) {
////                if (err) {
////                    return console.log(err);
////                }
////                return 10;
////            });
////            return 55;
//
//        };
        $('#signup').click(function(){   
//            var username="sandeep";
//            var password="password";
            var datatopost={username:"sandeep",password:"passworrd"};
            $.ajax({
                url: "test2.php",
                type:"POST",
                data: datatopost,
                success: function (data){
                    $('#message').html(data);
                },
                error: function(){
                  $('#message').html("<div>Error!</div>");
                }

            });
        });
    
    </script>
    
</body>
</html>