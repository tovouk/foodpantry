$( document ).ready(function(){
        $(".button-collapse").sideNav();
        var subt = $(window).height()	- $(".nav-wrapper").height();
        var responsivelogo = $(window).height() - subt;
        $("#logowrapper a img").css("height",responsivelogo);
        
        
        
        var r1height = $("#r1").height();
        var r2height = $("#r2").height();
        var r3height = $("#r3").height();
        $(".img1").css("height",r1height);
        $(".img1").css("max-height","100%");
        console.log("r2height " +r2height);
        $(".img2").css("height",r2height);
        $(".img2").css("max-height","100%");
        console.log("r3Height " +r3height);
        $(".img3").css("height",r3height);
        $(".img3").css("max-height","100%");

        
        
	    $(".img1").css("height",$("#r1").height());
	    $(".img1").css("max-height","100%");
	    $(".img2").css("height",$("#r2").height());
	    $(".img2").css("max-height","100%");
	    $(".img3").css("height",$("#r3").height());
	    $(".img3").css("max-height","100%");
	    $(".img1").css("width",$(".img2").width());
	    $(".img1").css("max-width","100%");
	    $(".img2").css("width",$(".img1").width());
	    $(".img2").css("max-width","100%");
	    $(".img3").css("width",$(".img1").width());
	    $(".img3").css("max-width","100%");
	    
	    var totalheight = r1height+$("#r2").height()+r3height;
	    if ($(window).width() > 500){
	    totalheight = r1height+$("#r2").height()+r3height;
	    $("#cl1").css("height",totalheight);
	    }
	    
	     $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens,
      
    }
  );
	    
	    
});
$( window ).resize(function() {
    var r1height = $("#r1").height();
        var r2height = $("#r2").height();
        var r3height = $("#r3").height();
        $(".img1").css("height",r1height);
        $(".img1").css("max-height","100%");
        console.log("r2height " +r2height);
        $(".img2").css("height",r2height);
        $(".img2").css("max-height","100%");
        console.log("r3Height " +r3height);
        $(".img3").css("height",r3height);
        $(".img3").css("max-height","100%");

        
        
	    $(".img1").css("height",$("#r1").height());
	    $(".img1").css("max-height","100%");
	    $(".img2").css("height",$("#r2").height());
	    $(".img2").css("max-height","100%");
	    $(".img3").css("height",$("#r3").height());
	    $(".img3").css("max-height","100%");
	    $(".img1").css("width",$(".img2").width());
	    $(".img1").css("max-width","100%");
	    $(".img2").css("width",$(".img1").width());
	    $(".img2").css("max-width","100%");
	    $(".img3").css("width",$(".img1").width());
	    $(".img3").css("max-width","100%");
	    
	    var totalheight = r1height+$("#r2").height()+r3height;
	    if ($(window).width() > 500){
	    totalheight = r1height+$("#r2").height()+r3height;
	    $("#cl1").css("height",totalheight);
	    }
});
