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
  $('#steel_samurai').hide();
  $('#cowabunga').hide();
  $('#faq').hide()
  $('#rules').hide()
  $('#tye_dye').hide()
  stopAudio('brentalfloss_music');
  stopAudio('steel_samurai_music');
  stopAudio('cowabunga_music');
}

function showMenu(){
  hideAll();
  $('#menu').show();
  $('#header_box').show();
  $('#footer_box').show();
  $('#menuselection').html('');

  cur_menu = 'main_menu';
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
  cur_menu = 'events_menu';
}
function showTyeDye(){
  hideAll();
  $('#tye_dye').show();
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
  $('#brentalfloss_music').hide();
  cur_menu = 'brentalfloss';
}
function showSteelSamurai(){
  hideAll();
  $('#steel_samurai').show();
  $('#steel_samurai_music').hide();
  cur_menu = 'steel_samurai';
}
function showCowabunga(){
  hideAll();
  $('#cowabunga').show();
  $('#cowabunga_music').hide();
  cur_menu = 'cowabunga';
}
function showFaq(){
  hideAll();
  $('#faq').show();
  cur_menu = 'return';
}
function showRules(){
  hideAll();
  $('#rules').show();
  cur_menu = 'return';
}

function playPauseAudio(elementId){
  if ($('#' + elementId + '_option').html() == "Play a sample"){
    playAudio(elementId);
  } else {
    stopAudio(elementId);
  }

}

function playAudio(elementId){
  var a = document.getElementById(elementId);
  $('#' + elementId).show();
  $('#' + elementId + '_option').html("Pause sample");
  a.volume = 0.1;
  a.play();
}
function stopAudio(elementId){
  var a = document.getElementById(elementId);
  $('#' + elementId).hide();
  $('#' + elementId + '_option').html("Play a sample");
  a.pause();
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
    case '#tye_dye':
      showTyeDye();
      break;
    case '#music':
      showMusic();
      break;
    case '#brentalfloss':
      showBrentalfloss();
      break;
    case '#steel_samurai':
      showSteelSamurai();
      break;
    case '#cowabunga':
      showCowabunga();
      break;
    case '#rewards':
      showRewards();
      break;
    case '#opportunities':
      showOpportunities();
      break;
    case '#rules':
      showRules();
      break;
    case '#faq':
      showFaq();
      break;
  }
})


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
             window.location.hash = "#events"
             break;
           case '2':
             window.location.hash = "#music"
             break;
           case '3':
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
              window.location.hash = "#about"
              break;
            case '2':
              window.location.replace("https://magstock8.uber.magfest.org/uber/preregistration/form");
              break;
            case '3':
              window.location.hash = "#directions"
              break;
            case '4':
              window.location.hash = "#what_to_bring"
              break;
            case '5':
              window.location.hash = "#signup"
              break;
            case '6':
              window.location.hash = "#faq"
              break;
            case '7':
              window.location.hash = "#rules"
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
           case '2':
             window.location.hash = "#steel_samurai"
             break;
           case '3':
             window.location.hash = "#cowabunga"
             break;
         }
       }else{
         $('#music_selection').html(e.key);
       }
       break;
     case 'brentalfloss':
       if (e.key == "Enter"){
         switch($('#brentalfloss_selection').html()){
           case '1':
             window.location = "https://brentalfloss.com"
             break;
           case '2':
             window.location = "https://www.facebook.com/brentalfloss-126828580671866/"
             break;
           case '3':
             window.location = "https://twitter.com/brentalfloss"
             break;
           case '4':
             playPauseAudio('brentalfloss_music');
             break;
           case '5':
             window.location = "#menu"
             break;
         }
       } else {
         $('#brentalfloss_selection').html(e.key);
       }
       break;
       case 'steel_samurai':
         if (e.key == "Enter"){
           switch($('#steel_samurai_selection').html()){
             case '1':
               window.location = "http://steelsamurai.com"
               break;
             case '2':
               window.location = "https://www.facebook.com/steelsamuraiband/"
               break;
             case '3':
               window.location = "https://twitter.com/steelsamuraivgm"
               break;
             case '4':
               window.location = "https://www.instagram.com/steelsamuraiband/"
               break;
             case '5':
               playPauseAudio('steel_samurai_music');
               break;
             case '5':
               window.location = "#menu"
               break;
           }
         } else {
           $('#steel_samurai_selection').html(e.key);
         }
         break;
     case 'cowabunga':
       if (e.key == "Enter"){
         switch($('#cowabunga_selection').html()){
           case '1':
             window.location = "http://steelsamurai.com"
             break;
           case '2':
             window.location = "https://www.facebook.com/steelsamuraiband/"
             break;
           case '3':
             window.location = "https://twitter.com/steelsamuraivgm"
             break;
           case '4':
             playPauseAudio('cowabunga_music');
             break;
           case '5':
             window.location = "#menu"
             break;
         }
       } else {
         $('#cowabunga_selection').html(e.key);
       }
       break;
     case 'events_menu':
       if (e.key == "Enter"){
         switch($('#event_selection').html()){
           case '1':
             window.location.hash = "#tye_dye"
             break;
           case '2':
             window.location.hash = "#about"
             break;
           case '3':
             window.location.hash = "#menu"
             break;
         }
       }else{
         $('#event_selection').html(e.key);
       }
       break;
     case 'volunteer_menu':
       if (e.key == "Enter"){
         switch($('#volunteer_selection').html()){
           case '1':
             window.location.hash = "#opportunities"
             break;
           case '2':
             window.location.hash = "#rewards"
             break;
           case '3':
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
