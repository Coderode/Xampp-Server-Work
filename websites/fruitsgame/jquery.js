//document ready function $(function(){});
var playing = false;
var score;
var trialsLeft;
var step;
var action; //used for setinterval function
var fruits =  ['apple','banana','cherry','grapes1','grapes2','grapes3','orange','pineapple','strawberry','watermelon'];
$(function(){
    
//click on start reset button
$("#startreset").click(function(){
    //we are playing
    if(playing == true){
       //reload page
        location.reload();
    }else{

        //we are not playing
        playing = true; //game initiated
    
        //set score to 0
        score=0;
        $("#scorevalue").html(score);

        //show trials left
        $("#trialsLeft").show();
        trialsLeft = 3;

        addHearts();

        //hide game over box
        $("#gameOver").hide();

        //change button text to reset game
        $("#startreset").html("Reset Game");

        //start sending fruits
        startAction();

    }
});
    
    
//slice a fruit
$("#fruit1").mouseover(function(){
    score++;
    $("#scorevalue").html(score); //update score
    
//    document.getElementById("slicesound").play();
    $("#slicesound")[0].play(); //play sound
    
    //stop fruit going down
    clearInterval(action);
    
    //hide fruit with animation
    $("#fruit1").hide("explode",500);// slice the fruit 
    //this hide function use jquery ui for animation
    
    
    //send new fruit after 500 ms
    setTimeout(startAction,500);
});

//functions
function addHearts(){
    $("#trialsLeft").empty();
    for(i=0; i< trialsLeft; i++){
        $("#trialsLeft").append('<img src="images/heart.png" class="life">');
    }
}

//start sending fruits
function startAction(){
    
    //1. generating a fruit
    $("#fruit1").show();
    chooseFruit();//choose a random fruit
    
   //setting random position
 $("#fruit1").css({'left':Math.round(550*Math.random()),'top': -50});
    
    //generate a random step
    step=1+Math.round(4*Math.random()); //change step bet 1 and 5px
    
    //2. move fruit down by one step every 10ms
    action = setInterval(function(){
        
        //move fruit by one step
        $("#fruit1").css('top',$("#fruit1").position().top + step);
        
            //check if the fruit is too low compare to  fruit container
            if($("#fruit1").position().top >  $("#fruitContainer").height()){
                //check if we have trials left
                if(trialsLeft > 1){
                   //1. generating a fruit
                    $("#fruit1").show();
                    chooseFruit();//choose a random fruit

                   //setting random position
                    $("#fruit1").css({'left':Math.round(550*Math.random()),'top': -50});

                    //generate a random step
                    step=1+Math.round(4*Math.random()); //change step bet 1 and 6px
                    
                    //reduce trials by one
                    trialsLeft --;
                    
                    //populates trialsLeft hearts
                    addHearts();
     
                }else{
                    //Game over
                    playing =false; //we are not playing anymore
                    $("#startreset").html("Start Game"); //change button to Start game
                    
                    //show game over div
                    $("#gameOver").show();
                    $("#gameOver").html('<p>Game Over!</p><p>Your score is : '+score+'</p>');
                    $("#trialsLeft").hide();
                    
                    //stop dropping fruits
                    stopAction();
                }
             }
    },10);
}


//generate a random fruit
function chooseFruit(){
    $("#fruit1").attr('src','images/fruits/'+fruits[Math.round(9*Math.random())]+'.png');
}

//stop dropping fruits
function stopAction(){
    clearInterval(action);
    $("#fruit1").hide();
}

});








//structure
//click on start reset button
    //are we playig?
        //yes
            //reload the page
        //no
            //show trials left
            //change button text to "reset game"
            //1.create a random fruit
            //define random step for every new fruit
            //2.move fruit down one step every 30sec
                //is fruit too low?(for page)
                    //no-->repeat num2
                    //yes-->any trials left?
                        //yes: repeat num1
                        //no:show game over,button text:start game
//slice a fruit
    //play sound in background
    //explode fruit

//sites used


//logomakr.com   //for heart logo
//clipart.co    // for fruits clips
//freesound.org  for audio file
//audio.online-convert.com //to convert wav file to mp3 or ogg other compatible files