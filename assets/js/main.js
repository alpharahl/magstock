var cur_menu = 'landing';
// $(function() {
//  $('#about_link').click(function() {
//    showAbout();
//  })
// })
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
$('#menu_link2').click(function(){
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
$('#rewards_return').click(function(){
 showMenu();
})
})
$(function(){
$('#opp_return').click(function(){
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
$(function(){
 $('#opp_link').click(function(){
   showOpportunities();
 })
})
$(function(){
 $('#rewards_link').click(function(){
   showRewards();
 })
})

function hideAll(){
  $('#landing_page').fadeOut(750);
  $('#about').hide();
  $('#directions').hide();
  $('#whattobring').hide();
  $('#signup').hide();
  $('#menu').hide();
  $('#events').hide();
  $('#music').hide();
  $('#rewards').hide();
  $('#opportunities').hide();
  $('#menuselection').html('');
}

function showMenu(){
  hideAll();
  $('#menu').show();
  $('#header_box').show();
  $('#footer_box').show();
  $('#menuselection').html('');

  cur_menu = 'main_menu';
  // menuinput.focus();
}
function showAbout(){
  hideAll();
  $('#about').show();
  $('#menu').hide();
  $('#aboutselection').html('');
  cur_menu = 'about_menu';
}
function showEvent(){
  hideAll();
  $('#about').hide();
  $('#events').show();
  cur_menu = 'return';
}
function showMusic(){
  hideAll();
  $('#about').hide();
  $('#music').show();
  cur_menu = 'return';
}
function showDirections(){
  hideAll();
  $('#directions').show();
  $('#menu').hide();
  cur_menu = 'return';
}
function showWhatToBring(){
  hideAll();
  $('#whattobring').show();
  $('#menu').hide();
  cur_menu = 'return';
}
function showSignUp(){
  hideAll();
  $('#signup').show();
  $('#menu').hide();
  cur_menu = 'volunteer_menu';
}
function showOpportunities(){
  hideAll();
  $('#signup').hide();
  $('#opportunities').show();
  cur_menu = 'return';
}
function showRewards(){
  hideAll();
  $('#signup').hide();
  $('#rewards').show();
  cur_menu = 'return';
}


$(window).hashchange(function(){
  switch(location.hash){
    case '#menu':
      showMenu();
      break;
    case '#about':
      showAbout();
      break;
    case '#directions':
      showDirections();
      break;
    case '#what_to_bring':
      showWhatToBring();
      break;
    case '#signup':
      showSignUp();
      break;
    case '#events':
      showEvent();
      break;
    case '#music':
      showMusic();
      break;
  }
})


window.onload = function(){
 // $(window).hashchange();
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
             // showEvent();
             window.location.hash = "#events"
             break;
           case '2':
             // showMusic();
             window.location.hash = "#music"
             break;
           case '3':
             // showMenu();
             window.location.hash = "#menu"
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
              // showAbout();
              window.location.hash = "#about"
              // cur_menu = 'about_menu';
              break;
            case '2':
              window.location.replace("https://magstock8.uber.magfest.org/uber/preregistration/form");
              break;
            case '3':
              // showDirections();
              window.location.hash = "#directions"
              break;
            case '4':
              // showWhatToBring();
              window.location.hash = "#what_to_bring"
              break;
            case '5':
              // showSignUp();
              window.location.hash = "#signup"
              break;
            default:
              $('menuselection').html('')
          }
       }else {
         $('#menuselection').html(e.key);
       }
       break;
     case 'volunteer_menu':
       if (e.key == "Enter"){
         switch($('#volunteer_selection').html()){
           case '1':
             showOpportunities();
             cur_menu = 'return';
             break;
           case '2':
             showRewards();
             cur_menu = 'return';
             break;
           case '3':
             showMenu();
             break;
         }
       }else{
         $('#volunteer_selection').html(e.key);
       }
     case 'return':
       if (e.key == ' '){
         showMenu();
       }
   }
 })
 setTimeout("showMenu()", 2000);
}
