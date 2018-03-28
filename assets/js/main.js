var cur_menu = 'landing';

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
  $('#brentalfloss').hide();
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
  $('#aboutselection').html('');
  cur_menu = 'about_menu';
}
function showEvent(){
  hideAll();
  $('#events').show();
  cur_menu = 'return';
}
function showMusic(){
  hideAll();
  $('#music').show();
  cur_menu = 'music_menu';
}
function showDirections(){
  hideAll();
  $('#directions').show();
  cur_menu = 'return';
}
function showWhatToBring(){
  hideAll();
  $('#whattobring').show();
  cur_menu = 'return';
}
function showSignUp(){
  hideAll();
  $('#signup').show();
  cur_menu = 'volunteer_menu';
}
function showOpportunities(){
  hideAll();
  $('#opportunities').show();
  cur_menu = 'return';
}
function showRewards(){
  hideAll();
  $('#rewards').show();
  cur_menu = 'return';
}
function showBrentalfloss(){
  hideAll();
  $('#brentalfloss').show();
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
    case '#brentalfloss':
      showBrentalfloss();
      break;
    case '#rewards':
      showRewards();
      break;
    case '#opportunities':
      showOpportunities();
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
     case 'music_menu':
       if (e.key == "Enter"){
         switch($('#music_selection').html()){
           case '1':
             window.location.hash = "#brentalfloss"
             break;
         }
       }else{
         $('#music_selection').html(e.key);
       }
       break;
     case 'volunteer_menu':
       if (e.key == "Enter"){
         switch($('#volunteer_selection').html()){
           case '1':
             // showOpportunities();
             // cur_menu = 'return';
             window.location.hash = "#opportunities"
             break;
           case '2':
             // showRewards();
             // cur_menu = 'return';
             window.location.hash = "#rewards"
             break;
           case '3':
             // showMenu();
             window.location.hash = "#menu"
             break;
         }
       }else{
         $('#volunteer_selection').html(e.key);
       }
       break;
     case 'return':
       if (e.key == ' '){
         window.location.hash = "#menu";
       }
   }
 })
 window.location.hash = '';
 setTimeout("window.location.hash = '#menu'", 2000);
}
