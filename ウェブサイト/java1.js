function conversation() { 
        window.alert("準備中です。ごめんなさい");
}


$(function(){
  $('.index_smooth[href^="#"]').click(function(){
    var adjust = -100;
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});

$(function () {
        $('#openMenu, #menuContent').on('mouseenter', function () {
                $('#menuContent').addClass('showMenu');
        });

        $('#openMenu, #menuContent').on('mouseleave', function () {
                setTimeout(function () {
                        if (!$('#openMenu').is(':hover') && !$('#menuContent').is(':hover')) {
                        $('#menuContent').removeClass('showMenu');
                }
        }, 500);
        });
});




//$(document).ready(function(){
//  $('.main_slideshow').slick({
//    autoplay: true, // 自動再生を設定
///    autoplaySpeed: 4000, // 自動再生のスピード（ミリ秒単位）
//    dots: true // ドットインジケーターの表示
//  });
//});
	

let next = document.querySelector('.chara_next');
let prev = document.querySelector('.chara_prev');


next.addEventListener('click', function () {
  let items = document.querySelectorAll('.chara_item');
  document.querySelector('.chara_slide').appendChild(items[0]);
  animateFirstItem();
});

prev.addEventListener('click', function () {
  let items = document.querySelectorAll('.chara_item');
  document.querySelector('.chara_slide').prepend(items[items.length - 1]);
  animateFirstItem();
});






