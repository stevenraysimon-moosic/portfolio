$(document).ready(function(){

    myClick('lwl');
    myClick('shoeboxChallenge');
    myClick('appyBirthday');
    myClick('wa-sp');
    myClick('wwg');
    myClick('shakeasound');
    myClick('hippoFestival');
    myClick('sdcf');
    myClick('geicoIT');

    //Sound
    var pop = $("#pop")[0];
    $('a').click(function(){
       pop.play();
    });

    var el = $(document).scrollTop();

    function myClick(clicker){
      $('#modal-'+clicker).css('display', 'none');
      //Clicker
      $('#'+clicker+'-cta').click(function(){
         $('#modal-'+clicker).fadeIn();
         $('#modal-'+clicker).scrollTop(0);
         el = $(document).scrollTop();
         $('body').addClass('my-body-noscroll-class');

         return false;
      });//See More
      $('#'+clicker+'-exit').click(function(){
         $('#modal-'+clicker).fadeOut();
         $('body').removeClass('my-body-noscroll-class');
         $(document).scrollTop(el);

         return false;
      });//Close Top
      $('#'+clicker+'-exit-bottom').click(function(){
         $('#modal-'+clicker).fadeOut();
         $('body').removeClass('my-body-noscroll-class');
         $(document).scrollTop(el);

         return false;
      });//Close Bottom
    }//myClick

});//doc ready
