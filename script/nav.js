$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll < 400) {
          $(".sidenav a").css("color" , "white");
        }
   
        else{
            $(".sidenav a").css("color" , "black");  	
        }
    })
  })