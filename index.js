$(document).ready(function () {

  var current = 0,
      n,
      i;
  for(i=0; i < $('.photo').length; i++) {
  $('.photo:eq(0)').css({'display' : 'none' });
  console.log(i)
  }
  $('.prev').on('click' , leftSlides);
  $('.next').on('click' , rightSlides);
  function slides(n) {
      current += n;
      if(current >= $('.photo').length) {
        current = 0;
  }
      else if(current < 0) {
        current = $('.photo').length -1;
  }
  console.log(current)
  for(i=0; i < $('.photo').length; i++) {
  $('.photo').eq(i).css({'display' : 'none' });
  }
  $('.photo').eq(current).css({'display' : 'block' });
  }
  function leftSlides() {
  slides(-1);
  }
  function rightSlides() {
  slides(+1);
  }
  slides(0);
});
$(window).scroll(function(){

  var $scrollHeight = $(this).scrollTop();
  var $navTop = $('.mainLogo').height();
  if($scrollHeight - $navTop >= 0){
    $('article.mainNav').addClass('fixed');

  }
  else{
    $('article.mainNav').removeClass('fixed');
  }

  console.log($navTop/2)
});
