<?php
session_start();
if(!isset($_SESSION['user_id'])){
    header("location: index.php");
}
include('connection.php');

$user_id = $_SESSION['user_id'];

//get username and email
$sql = "SELECT * FROM users WHERE user_id='$user_id'";
$result = mysqli_query($link, $sql);

if(!$result){
    echo '<div class="alert alert-danger">There was an error running sql query!</div>';
    exit;
}

$count = mysqli_num_rows($result);
$username='';
$email='';

if($count == 1){
    $row = mysqli_fetch_array($result, MYSQLI_ASSOC); 
    $username = $row['username'];
    $email = $row['email']; 
//    echo "<div class='alert alert-danger' style='margin-top:55px'>username : ".$username .",".$row['username'].",".$_SESSION['username']."</div>";
}else{
    echo "<div class='alert alert-danger' style='margin-top:55px'>There was an error retrieving the username and email from the database</div>";   
}

?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Profile</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="styling.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Arvo&display=swap" rel="stylesheet">
      
    <style>
        #container{
            margin-top:100px;
        }
        
        #notePad,#allNotes,#done{
            display:none;
        }
        .buttons{
            margin-bottom: 20px;
        }
        textarea{
            width:100%;
            max-width: 100%;
            font-size:16px;
            line-height: 1.5em;
            border-left-width: 20px;
            border-color: #CA3DD9;
            color:#CA3DD9;
            background-color: #FBEFFF;
            padding:10px;
        }
        tr{
            cursor:pointer;
            color:white;
            background-color:rgba(0,0,0,0.4);
        }
        tr:hover{
            color:black;
        }
      
    </style>
    
  </head>
  <body>
<!--      Navigation Bar-->
      <nav role="navigation" class="navbar navbar-custom navbar-fixed-top">
          <div class = "container-fluid">
              <div class="navbar-header">
                  <a class="navbar-brand" href="#">Online Notes</a>
                  <button type="button" class="navbar-toggle" data-target="#navbarCollapse" data-toggle="collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  
                  </button>
                  
              </div>
              <div class="navbar-collapse collapse" id="navbarCollapse">
                  <ul class="nav navbar-nav">
                    <li><a href="mainpageloggedin.php">My Notes</a></li>
                    <li class="active"><a href="#">Profile</a></li>
                    <li><a href="#">Help</a></li>
                    <li><a href="#">Contact us</a></li>
                    
                  </ul>
                  <ul class="nav navbar-nav navbar-right">
                    <li><a href="#">Logged in as <b><?php echo $username; ?></b></a></li>
                    <li><a href="index.php?logout=1">Log out</a></li>
                  </ul>
              </div>
          </div>
      </nav>
<!--      Container-->
      <div class="container" id="container">
          <div class="row">
              <div class="col-md-offset-3 col-md-6">
                  <h2 style="color:white">General Account Settings:</h2>
                  <div class="table-responsize">
                      <table class="table table-hover table-condensed table-bordered">
                          <tr data-target="#updateusername" data-toggle="modal">
                              <td>Username</td>
                              <td><?php echo $username; ?></td>
                          </tr>
                          <tr data-target="#updateemail" data-toggle="modal">
                              <td>Email</td>
                              <td><?php echo $email; ?></td>
                          </tr>
                          <tr data-target="#updatepassword" data-toggle="modal">
                              <td>Password</td>
                              <td>hidden</td>
                          </tr>
                      </table>
                </div>
              </div>
              
          </div>
      </div>
<!--      update username form-->
      <form method="post" id="updateusernameform">
          <div class="modal" id="updateusername" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                      <button class="close" data-dismiss="modal">
                        &times;
                      </button>
                      <h4 id="myModalLabel">
                        Edit Username:
                      </h4>
                    </div>
                      <div class="modal-body">
                          <!--  updateusername message from PHP file-->
                          <div id="updateusernamemessage"></div>
                          
                          
                          <div class="form-group">
                              <label for="username">Username:</label>
                              <input class="form-control" type="text" name="username" id="username" maxlength="30" value="<?php echo $username; ?>">
                          </div>
                      </div>
                      <div class="modal-footer">
                          <input class="btn green" name="updateusername" type="submit" value="Submit">
                        <button type="button" class="btn btn-default" data-dismiss="modal">
                          Cancel
                        </button> 
                      </div>
               </div>
          </div>
        </div>
      </form>
<!--      update email form-->
      <form method="post" id="updateemailform">
          <div class="modal" id="updateemail" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                      <button class="close" data-dismiss="modal">
                        &times;
                      </button>
                      <h4 id="myModalLabel">
                        Enter new email:
                      </h4>
                    </div>
                      <div class="modal-body">
                          <!--  updateemail message from PHP file-->
                          <div id="updateemailmessage"></div>
                          
                          
                          <div class="form-group">
                              <label for="email">Email:</label>
                              <input class="form-control" type="email" name="email" id="email" maxlength="50" value="<?php echo $email; ?>">
                          </div>
                      </div>
                      <div class="modal-footer">
                          <input class="btn green" name="updateemail" type="submit" value="Submit">
                        <button type="button" class="btn btn-default" data-dismiss="modal">
                          Cancel
                        </button> 
                      </div>
               </div>
          </div>
        </div>
      </form>
     
<!--      update password form-->
      <form method="post" id="updatepasswordform">
          <div class="modal" id="updatepassword" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                      <button class="close" data-dismiss="modal">
                        &times;
                      </button>
                      <h4 id="myModalLabel">
                        Enter Current and New password:
                      </h4>
                    </div>
                      <div class="modal-body">
                          <!--  updateusername message from PHP file-->
                          <div id="updatepasswordmessage"></div>
                          
                          
                          <div class="form-group">
                              <label for="currentpassword" class="sr-only">Your Current Password:</label>
                              <input class="form-control" type="password" name="currentpassword" id="currentpassword" maxlength="30" placeholder="Your Current Password">
                          </div>
                          <div class="form-group">
                              <label for="password" class="sr-only">Choose a Password:</label>
                              <input class="form-control" type="password" name="password" id="password" maxlength="30" placeholder="Choose a Password">
                          </div>
                          <div class="form-group">
                              <label for="password2" class="sr-only">Confirm Password:</label>
                              <input class="form-control" type="password" name="password2" id="password2" maxlength="30" placeholder="Confirm Password">
                          </div>
                          
                      </div>
                      <div class="modal-footer">
                          <input class="btn green" name="updatepassword" type="submit" value="Submit">
                        <button type="button" class="btn btn-default" data-dismiss="modal">
                          Cancel
                        </button> 
                      </div>
               </div>
          </div>
        </div>
      </form>
      
<!--      Footer-->
      <div class="footer">
          <div class="container">
                <p>WebDevelopment Copyright &copy; <?php echo date("Y"); ?>. </p>
          </div>
      </div>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
    <script src="profile.js"></script>
  </body>
    
<!--    Image by <a href="https://pixabay.com/users/virin000-4559233/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2984108">virin000</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2984108">Pixabay</a>-->
</html>