<?php
    $username = filter_var($_POST["username"],FILTER_SANITIZE_STRING);
    $password = filter_var($_POST["password"],FILTER_SANITIZE_STRING);
//    $privatekey = filter_var($_POST["privatekey"],FILTER_SANITIZE_STRING);
//    $publickey = filter_var($_POST["publickey"],FILTER_SANITIZE_STRING);
//    echo "<div>username: ".$username."<br>password:".$password."<br>public key:".$publickey."<br>private key:".$privatekey."</div>";
echo "<div>username: ".$username."<br>password:".$password."</div>";
    exit;
?>