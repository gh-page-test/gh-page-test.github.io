var q = $(window).height();
var r = $("nav").height();
$(".menu_list").innerHeight(q-r);
var screen = window.matchMedia("(min-width:550px)");
if (screen.matches) {

    function refreshHeight() {
      h = $(".img").height();
      console.log(h, "img");
      $(".head").height( h );
      n = $("main").css( 'padding-top');
      $("main").css( 'margin-top', h);
      a = $("main").css( 'margin-top', h);
      console.log(a);
    };

    refreshHeight();
    $(window).resize(refreshHeight);
};

$('.auto_reg').on('click', function(e) {
  $('.reg_block').toggleClass('reg_block_activ');
  $('.auto-reg_click').toggleClass('activ_click');
});


const wrapper = document.querySelector(".input-wrapper"),
      textInput = document.getElementById("input_serch");

textInput.addEventListener("keyup", event => {
  wrapper.setAttribute("data-text", event.target.value);
});


$('.menu').on('click', function(e) {
  $('.menu_list').toggleClass('menu_list-activ');
  $('.content').toggleClass('content-activ');
  $(this).toggleClass('span_activ');
});

$('.menu_cls').on('click', function(e) {
  $('.menu_list').toggleClass('menu_list-activ');
  $('.content').toggleClass('content-activ');
});


/*$('.').on('click', function(){
     $(this).next('.menu_items').toggleClass('.menu_items_activ');
});*/

$("i.1").on('click', function(e){
  $("div.1").toggleClass("menu_items_activ");
  $("i.1").toggleClass('activv');
});
$("i.2").on('click', function(e){
  $("div.2").toggleClass("menu_items_activ");
  $("i.2").toggleClass('activv');
});
$("i.3").on('click', function(e){
  $("div.3").toggleClass("menu_items_activ");
  $("i.3").toggleClass('activv');
});
$("i.4").on('click', function(e){
  $("div.4").toggleClass("menu_items_activ");
  $("i.4").toggleClass('activv');
});
$("i.5").on('click', function(e){
  $("div.5").toggleClass("menu_items_activ");
  $("i.5").toggleClass('activv');
});

VK.Widgets.Group("vk_groups", {mode: 3}, 57834807);
VK.Widgets.Group("vk_groupss", {mode: 3}, 57834807);

/*  (function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = "https://vk.com/js/api/openapi.js?158"; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'vk_openapi_js'));
  (function() {
    if (!window.VK || !VK.Widgets || !VK.Widgets.Post || !VK.Widgets.Post('vk_post_1_45616', 1, 45616, 'Zso9Z9tgogtILsUNAcL_gP04Lw5p')) setTimeout(arguments.callee, 50);
  }());*/
