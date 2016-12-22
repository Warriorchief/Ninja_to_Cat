console.log("the .js has loaded properly");
var img_0_counter=0;
var img_1_counter=0;
var img_2_counter=0;
var img_3_counter=0;
var img_4_counter=0;

$( document ).ready(function() {

    $("#img_0").click(function(){
      console.log("you've clicked on img_0, incrementing img_0_counter...");
      console.log("img_0_counter is now "+img_0_counter);
      img_0_counter++;
      if(img_0_counter%2===1){
        $("#img_0").attr("src","img/ninja0.png");
      } else{
        $("#img_0").attr("src","img/cat0.png");}
    });

    $("#img_1").click(function(){
      console.log("you've clicked on img_1, incrementing img_1_counter...");
      console.log("img_1_counter is now "+img_1_counter);
      img_1_counter++;
      if(img_1_counter%2===1){
        $("#img_1").attr("src","img/ninja1.png");
      } else{
        $("#img_1").attr("src","img/cat1.png");}
    });

    $("#img_2").click(function(){
      console.log("you've clicked on img_2, incrementing img_2_counter...");
      console.log("img_2_counter is now "+img_2_counter);
      img_2_counter++;
      if(img_2_counter%2===1){
        $("#img_2").attr("src","img/ninja2.png");
      } else{
        $("#img_2").attr("src","img/cat2.png");}
    });

    $("#img_3").click(function(){
      console.log("you've clicked on img_3, incrementing img_3_counter...");
      console.log("img_3_counter is now "+img_3_counter);
      img_3_counter++;
      if(img_3_counter%2===1){
        $("#img_3").attr("src","img/ninja3.png");
      } else{
        $("#img_3").attr("src","img/cat3.png");}
    });

    $("#img_4").click(function(){
      console.log("you've clicked on img_4, incrementing img_4_counter...");
      console.log("img_4_counter is now "+img_2_counter);
      img_4_counter++;
      if(img_4_counter%2===1){
        $("#img_4").attr("src","img/ninja4.png");
      } else{
        $("#img_4").attr("src","img/cat4.png");}
    });


  });
