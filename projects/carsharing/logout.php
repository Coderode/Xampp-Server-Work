<?php
$logout=0;
if(isset($_SESSION['user_id'])){
    if(isset($_GET['logout'])){
        if($_GET['logout'] == 1){
            session_destroy();
            $logout=1;
            setcookie("rememberme", "", time()-3600);
        }
    }
    
}
?>