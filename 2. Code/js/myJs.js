// JavaScript Document
$(window).scroll(function(e){
  parallax();
});
function parallax(){
  var scrolled = $(window).scrollTop();
  $('.bg').css('bottom',-(scrolled*0.4)+'px');
}