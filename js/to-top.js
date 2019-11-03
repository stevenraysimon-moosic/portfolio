// JavaScript Document
$(document).ready(function(){

     //Date function
     $('#date').text(new Date().getFullYear());

    $('#main-cta').click(function (){
			scrollToAnchor('projects');
			return false;
    });

    function scrollToAnchor(idName){
    		var aTag = $("a[name='"+ idName +"']");
    		$('html,body').animate({scrollTop: aTag.offset().top},'slow');
		}

});//Closing doc ready
