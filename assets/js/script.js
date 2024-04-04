$(document).ready(function () {
  const $nav = $('nav');
  const $navbarNavAltMarkup = $('#navbarNav');
  const headerHeight = $('header').outerHeight();
  //cambiar a fondo negro cuando esté fuera del header
  $(window).scroll(function () {
    if ($(window).scrollTop() > headerHeight) {
      $nav.addClass('bg-black');
    } else {
      $nav.removeClass('bg-black');
    }
  });
  //agregar clase para cambiar de fondo cuando esté collapsado el menu
  $('.navbar-collapse').on('bs.collapse.hide', function () {
    $navbarNavAltMarkup.addClass('bg-semi-transparente');
  });
  //Quitar clase para cambiar de fondo cuando no esté collapsado el menu
  $('.navbar-collapse').on('bs.collapse.show', function () {
    $navbarNavAltMarkup.removeClass('bg-semi-transparente');
  });
  $('[data-toggle="tooltip"]').tooltip();
  $('.navbar-nav > .link').hover(function() {
    if (!$('.navbar-collapse').hasClass('show')) {
      $(this).tooltip('show');
    }
  }, function() {
    $(this).tooltip('hide');
  });
  //Aplicar Smooth scroll al pinchar en los links
  $("a.link").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {

        window.location.hash = hash;
      });
    }
  });
  /*
  mostrar alerta y ocultarlo después de 4 segundos
  */
  $("#enviarCorreo").on("click", function () {
    $("#alert").addClass("d-block");
    $("#alert").removeClass("d-none");
    setTimeout(function () {
      $("#alert").addClass("d-none");
      $("#alert").removeClass("d-block");
    }, 4000);
  });
});