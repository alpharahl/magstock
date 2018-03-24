var cur_menu = 'landing';
$(function() {
   $('#about_link').click(function() {
     showAbout();
   })
})
$(function(){
  $('#events_link').click(function(){
    showEvent();
  })
})
$(function(){
  $('#music_link').click(function(){
    showMusic();
  })
})
$(function(){
 $('#menu_link').click(function(){
   showMenu();
 })
})
$(function(){
 $('#directions_return').click(function(){
   showMenu();
 })
})
$(function(){
 $('#bring_return').click(function(){
   showMenu();
 })
})
$(function(){
 $('#signup_return').click(function(){
   showMenu();
 })
})
$(function(){
 $('#events_return').click(function(){
   showMenu();
 })
})
$(function(){
 $('#music_return').click(function(){
   showMenu();
 })
})
$(function(){
 $('#directions_link').click(function(){
   showDirections();
 })
})
$(function(){
 $('#bring_link').click(function(){
   showWhatToBring();
 })
})
$(function(){
 $('#volunteer_link').click(function(){
   showSignUp();
 })
})
$(function(){
   $('#landing_link').click(function(){
     showMenu();
   })
 })

 function showMenu(){
   $('#landing_page').fadeOut(750);
   $('#about').hide();
   $('#directions').hide();
   $('#whattobring').hide();
   $('#signup').hide();
   $('#menu').show();
   $('#header_box').show();
   $('#footer_box').show();
   $('#events').hide();
   $('#music').hide();
   $('#menuselection').html('');

   cur_menu = 'main_menu';
   // menuinput.focus();
 }
 function showAbout(){
   $('#about').show();
   $('#menu').hide();
   $('#aboutselection').html('');
   cur_menu = 'about_menu';
 }
 function showEvent(){
   $('#about').hide();
   $('#events').show();
   cur_menu = 'return';
 }
 function showMusic(){
   $('#about').hide();
   $('#music').show();
   cur_menu = 'return';
 }
 function showDirections(){
   $('#directions').show();
   $('#menu').hide();
   cur_menu = 'return';
 }
 function showWhatToBring(){
   $('#whattobring').show();
   $('#menu').hide();
   cur_menu = 'return';
 }
 function showSignUp(){
   $('#signup').show();
   $('#menu').hide();
   cur_menu = 'return';
 }
 //setup keypress stuff
 // document.addEventListener('keypress', (event) => {
 //   const keyName = event.key;
 // })
 window.onload = function(){
   var input = document.getElementById('body_div');
   $(document).keypress(function(e){
     switch(cur_menu){
       case 'landing':
         if (e.key == ' ' || e.key == 'Enter'){
           showMenu();
         }
         break;
       case 'about_menu':
         if (e.key == "Enter"){
           switch($('#aboutselection').html()){
             case '1':
               showEvent();
               break;
             case '2':
               showMusic();
               break;
             case '3':
               showMenu();
               break;
             default:
               $('aboutselection').html('');
           }
         }else {
           $('#aboutselection').html(e.key);
         }
         break;
       case 'main_menu':
         if (e.key == "Enter"){
            switch($('#menuselection').html()){
              case '1':
                showAbout();
                cur_menu = 'about_menu';
                break;
              case '2':
                window.location.replace("https://magstock8.uber.magfest.org/uber/preregistration/form");
                break;
              case '3':
                showDirections();
                break;
              case '4':
                showWhatToBring();
                break;
              case '5':
                showSignUp();
                break;
              default:
                $('menuselection').html('')
            }
         }else {
           $('#menuselection').html(e.key);
         }
         break;
       case 'return':
         if (e.key == ' '){
           showMenu();
         }
     }
   })
 }
