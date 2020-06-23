$(function(){
    
  
//structure of the code
    //declare variables
        //painting erasing or not
    var paint =false;
        //painting(true) or erasing(false)
    var paint_erase="paint";
        //get the canvas and context
    var canvas=document.getElementById("paint");
    var ctx=canvas.getContext("2d");
        //get the canvas container
    var container=$("#container");
        //mouse position(coordinates)
    var mouse = {x:0,y:0};
    //onload load saved work from localStorage
    if(localStorage.getItem("imgCanvas") != null){
        var img = new Image();
        img.onload= function (){
            ctx.drawImage(img,0,0);
        }
        img.src = localStorage.getItem("imgCanvas");
//        window.alert("x is there and it is equal to "+localStorage.getItem("x"));
    }
    //set drawing parameters (linewidth,lineJoin,lineCap)
    ctx.lineWidth = 0.2;
    ctx.lineJoint = "round";
    ctx.lineCap = "round";
    //click inside container
    container.mousedown(function(e){
        paint=true;
//        window.alert(paint);
        ctx.beginPath();
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
        ctx.moveTo(mouse.x,mouse.y);
    });
    //move the mouse while holding mouse key
    container.mousemove(function(e){
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
        if(paint == true){
            if(paint_erase == "paint"){
                //get color input
                ctx.strokeStyle = $("#paintColor").val();
            }else{
                //white color while erasing
                ctx.strokeStyle = "white";
            }
            ctx.lineTo(mouse.x,mouse.y);
            ctx.stroke();
        }
    });
    //mouse up->we are not painting erasing anymore
    container.mouseup(function(){
        paint=false;
    });
    //if we leave the container we are not painting erasing anymore
    container.mouseleave(function(){
        paint=false;
    });
    //click on the reset button
    $("#reset").click(function(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        paint_erase = "paint";
        $("#erase").removeClass("eraseMode");
    });
    //click on save button
    $("#save").click(function(){
        if(typeof(localStorage) != null){
            localStorage.setItem("imgCanvas",canvas.toDataURL());
//            window.alert(localStorage.getItem("imgCanvas"));
        }else{
            window.alert("Your browser does not support local storage!")
        }
    });

    //click on the erase button
    $("#erase").click(function(){
        if(paint_erase == "paint"){
            paint_erase= "erase";
        }else{
            paint_erase = "paint";
        }
        $(this).toggleClass("eraseMode");
    });
    //change color input
    $("#paintColor").change(function(){
        $("#circle").css("background-color",$(this).val());
    });
    //change linewidth using slider
    $("#slider").slider({
        min:0.2,
        max:30,
        slide:function(event,ui){
            $("#circle").height(ui.value);
            $("#circle").width(ui.value);
            ctx.lineWidth = ui.value;
        }
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //structure of the code
    //declare variables
        //painting erasing or not
        //painting or erasing
        //get the canvas and context
        //get the canvas container
        //mouse position
    //onload load saved work from localStorage
    //set drawing parameters (linewidth,lineJoin,lineCap)
    //click inside container
    //move the mouse while holding mouse key
    //mouse up->we are not painting erasing anymore
    //if we leave the container we are not painting erasing anymore
    //click on the reset button
    //click on save button
    //click on the erase button
    //change color input
    //change linewidth using slider
    //functions
    
    
    
    
    
    /* 
    //HTML 5 canvas 
    var canvas = document.getElementById("paint");
    var context = canvas.getContext('2d');
    //draw a line
    //declare new path
    context.beginPath();
    
    
    //set line width
    context.lineWidth = 40;
    //set line color
    context.strokeStyle = '#42e565';
    //set cap to the line(round,butt,square)
    context.lineCap = "round";
    //set line join style (bevel,round,miter)
    context.lineJoin = "round";
    //position the context point/ start point
    context.moveTo(50,50);
    
    //draw a straight line from starting point to a new position
    context.lineTo(500,600);
    //draw another line
    context.lineTo(800,200);
    //make line visible
    context.stroke();
    */
    
    
});