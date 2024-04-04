$(document).ready(function () {
  const $nav = $('nav');
  var $carousel = $('#carouselExample');
  //cambiar a fondo negro cuando esté fuera del header
  $(window).scroll(function () {
    if ($(this).scrollTop() > $carousel.height()) {
      $nav.addClass('bg-black');
    } else {
      $nav.removeClass('bg-black');
    }
  });
  //Resuelve el tema del color de fondo del menu, cuando es pantalla pequeña 
  function toggleNavbarBackground() {
    var $navbar = $('.navbar');
    if ($(window).width() < 768 && $(window).scrollTop() > $carousel.height()) {
      $navbar.addClass('bg-dark-mobile');
    } else {
      $navbar.removeClass('bg-dark-mobile');
    }
    //Modifica la posición del tooltip dependiendo de la pantalla
    if($(window).width() < 768){
      $('[data-bs-toggle="tooltip"]').attr('data-bs-placement', 'right').tooltip();
    }else{
      $('[data-bs-toggle="tooltip"]').attr('data-bs-placement', 'bottom').tooltip();
    }
  }

  // Ejecutar al cargar la página y al cambiar el tamaño de la ventana
  toggleNavbarBackground();
  $(window).resize(toggleNavbarBackground);
  
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