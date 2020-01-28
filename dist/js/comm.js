$(function(){

//slide
    
var now = 1;
var max = 3;
var width = 100;
    
setInterval(function(){
    if(now<3){
        $('.popupzon > ul').animate({
            left: (now*width*(-1))+'%'
        })
        now++;
       
       }else{
           $('.popupzon > ul').animate({
               left:0
           });
           now = 1;
       }
},1500);

	
		$('.tab_depth1 > li:eq(0)').addClass('on');
	
	$('.tab_depth1 > li').click(function(){
		$('.tab_depth1 > li').removeClass('on');	
		$(this).addClass('on');
	});
	
	
		
	var $depth1List = $('header .nav_depth1 > li');
	
	$depth1List.focusin(function(){	
		$(this).addClass('on');
	});
	$depth1List.focusout(function(){	
		$(this).removeClass('on');
	});
	
	var $nav = $('header nav');
		$nav.on('mouseover focusin',function(){
		$(this).addClass('active')
	});
		$nav.on('mouseleave focusout',function(){
		$(this).removeClass('active')
	});
	
//	$depth1List.on('mouseover focusin',function(){
//		$(this).addClass('on')
//	});
//	$depth1List.on('mouseleave focusout',function(){
//		$(this).removeClass('on')
//	});
	
	//중간
  $('a').click(function(event){
    event.preventDefault();
    $("div.tab_bbs").addClass("foo");
  });
	
	
	
	
	
});