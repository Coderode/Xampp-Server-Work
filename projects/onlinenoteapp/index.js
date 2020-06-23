//Ajax Call for the sign up form
//Once the form is submitted
$("#signupform").submit(function(event){
    //prevent default php processing
    event.preventDefault();
    //collect user inputs
    var datatopost = $(this).serializeArray(); //make array of objects containing values of signup form
//    console.log(datatopost);
    //send them to signup.php using Ajax (using ajax or post method)
    //   $.post({}).done()
    //   .fail();
    $.ajax({
        url: "signup.php",
        type: "POST",
        data: datatopost,
        success: function(data){
            if(data){
                $("#signupmessage").html(data);
            }
        },
        error: function(){
            
            $("#signupmessage").html("<div class='alert alert-danger'>There was an error with the Ajax Call. Please try again later.</div>");
        }
    });
});
    
        
       
//Ajax Call for the login form
//Once the form is submitted
$("#loginform").submit(function(event){ 
    //prevent default php processing
    event.preventDefault();
    //collect user inputs
    var datatopost = $(this).serializeArray();
//    console.log(datatopost);
    //send them to login.php using AJAX
    $.ajax({
        url: "login.php",
        type: "POST",
        data: datatopost,
        success: function(data){
            if(data == "success"){
                window.location = "mainpageloggedin.php";
            }else{
                $('#loginmessage').html(data);   
            }
        },
        error: function(){
            $("#loginmessage").html("<div class='alert alert-danger'>There was an error with the Ajax Call. Please try again later.</div>");
            
        }
    
    });

});

//Ajax Call for the forgot password form
//Once the form is submitted
$("#forgotpasswordform").submit(function(event){ 
    //prevent default php processing
    event.preventDefault();
    //collect user inputs
    var datatopost = $(this).serializeArray();
//    console.log(datatopost);
    //send them to signup.php using AJAX
    $.ajax({
        url: "forgot-password.php",
        type: "POST",
        data: datatopost,
        success: function(data){
            
            $('#forgotpasswordmessage').html(data);
        },
        error: function(){
            $("#forgotpasswordmessage").html("<div class='alert alert-danger'>There was an error with the Ajax Call. Please try again later.</div>");
            
        }
    
    });

});




//documentation
//Ajax Call for the sign up form
//Once the form is submitted
    //prevent default php processing
    //collect user inputs
    //send them to signup.php using Ajax
        //Ajax call successful: show error or success message
        //Ajax call fails: show Ajax call error

//Ajax call for the login form
//Once the form is submitted
    //prevent default php processing
    //collect user inputs
    //send them to login.php using Ajax
        //Ajax call successful
            //if php files returns "success": redirect the user to notes page
            //otherwise show error message
        //Ajax call fails: show Ajax call error

//Ajax call for the forgot password form
//Once the form is submitted
    //prevent default php processing
    //collect user inputs
    //send them to forgot-password.php using Ajax
        //Ajax call successful: show error or success message
        //Ajax call fails: show Ajax call error
