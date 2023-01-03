$("nav a").click(function(){
    
  var aHref=$(this).attr("href");
  $("body").animate({scrollTop:$(aHref).offset().top},1100)
})


$(window).scroll(function(){
  
  if ($(window).scrollTop()>100)
  {
      $(".bg-mine").css("backgroundColor","#fff")
      $(".linkofnav").css("color","#282828")
      $(".logo").attr("src","images/logo-red.png");
      $("nav").css("height","60px");
  }
else
{
    $(".bg-mine").css("backgroundColor","transparent")
    $(".linkofnav").css("color","#fff")
    $(".logo").attr("src","images/logo-white.png")
    $("nav").css("height","100px");

}
});



$(".navbar-toggler").click(function(){
   
  $(".navbar-nav").css("backgroundColor","#fff");
  $(".linkofnav").css("color","#000")

});


/*//////////////////////////////////////////////////////////////*/

$(".cogicon").click(function(){

  $(".options").fadeToggle(500);
})
       
var colorList=$(".options ul li")
colorList.eq(0).css("backgroundColor","#f25454");
colorList.eq(1).css("backgroundColor","#4e9cb5");
colorList.eq(2).css("backgroundColor","#24bca4");
colorList.eq(3).css("backgroundColor","#46cad7");
colorList.eq(4).css("backgroundColor","#c86f98");
colorList.eq(5).css("backgroundColor","#ee8f67");
colorList.eq(6).css("backgroundColor","#e4d20c");
colorList.eq(7).css("backgroundColor","#6b798f");


colorList.click(function(){
 var color=$(this).css("backgroundColor");
    
    $("#mission .header").hover(function(){
     $(this).css("color",color);
 },function(){
     $(this).css("color","#fff")
 })
    $(".arrow").css({"background-color":color,"opacity":".8"});
    
    $(".contact-icon").css("color",color);
    
    
    
    $(".contact-text>h5").hover(function(){
        $(this).css("color",color)
    },function(){
                $(this).css("color","#282828");

    });
    
    
     $("footer .tag").hover(function(){
        $(this).css({"color":color,"borderColor":color})    
    },function(){
                $(this).css({"color":"#b0b0b0","borderColor":"#b0b0b0"});

    });
    
     
     $(".copyright a").hover(function(){
        $(this).css("color",color)    
    },function(){
                $(this).css("color","#fff");

    });
    
    
     $(".copyright i").hover(function(){
        $(this).css("color",color)    
    },function(){
                $(this).css("color","#fff");

    });

  $(".blog-text h4 a").hover(function(){
        $(this).css("color",color)    
    },function(){
                $(this).css("color","#666");

    });
   

     $("footer li").hover(function(){
        $(this).css("color",color)
    },function(){
                $(this).css("color","#b0b0b0");

    });
    
    
    
    $("form>button").css("backgroundColor",color);
    $(".card2>.card-head").css("backgroundColor",color);
    
    
    $(".card-footer").hover(function(){
        $(this).css("backgroundColor",color)
    },function(){
                $(this).css("backgroundColor","#111");

    });

    
 $(".progress-bar").css("backgroundColor",color);
 
    
    
    
   $(".memberoverlay").hover(function(){
        $(this).css({"background-color": color, "opacity": ".85"})
    },function(){
                $(this).css("opacity","0");

    });
    
        $("#projects .nav-link").hover(function(){
        $(this).css({"color":color,"borderColor":color})
    },function(){
                $(this).css("color","#282828");

    });
    
        
    
   $(".member h5").hover(function(){
        $(this).css("color",color)
    },function(){
                $(this).css("color","#282828");

    });
    
    $(".number-of-char").css("color",color);

   
    
    $(".contact-btn").css("backgroundColor",color);
    
    $("#blog span").css("backgroundColor",color);
    
    $(".service h3").hover(function(){
        $(this).css("color",color);
 },function(){
     $(this).css("color","#282828")
 })
 
    
    $(".service i").css("color",color);

    $(".btn-read-more").css("color",color);
    
    
    
})


/*//////////////////////////////////////////////////////////////////////////////////////////////////////*/
$(".arrow").click(function(){
        $("body").animate({scrollTop:'0'},2000)

})
/* /////////////////////////////////////////////////////////////////////////////////////// */



var countDounTimer =new Date ("may 15 , 2019 10:5:5").getTime();

var interval =setInterval(function(){
 
    var timeNow=new Date().getTime();
    var diffrence=countDounTimer-timeNow;
    
    var day=Math.floor(diffrence/(24*60*60*1000));
    var hour=Math.floor(diffrence%(24*60*60*1000)/(60*60*1000));
    var minute=Math.floor(diffrence%(60*60*1000)/(60*1000));
    var second=Math.floor(diffrence%(60*1000)/(1000));
    
    $("#day").html(day+"D");
    $("#hour").html(hour+"h");
    $("#minute").html(minute+"m");
    $("#second").html(second+"s");
     
    if(diffrence<0)
        {
            clearInterval(interval);
            $(".time").html("Expired");
        }
},1000);



/*///////////////////////////*/

var maxChar=100;
$(".number-of-char").html(maxChar)

$("#msg-area").keyup(function(){

    var msgLength=$("#msg-area").val().length;
    var msgRemaining=maxChar-msgLength;
    $(".number-of-char").html(msgRemaining);
    
     if(msgRemaining<=0)
            {
                 $("#characters").text("your available character finished");
                
            }

})
 


