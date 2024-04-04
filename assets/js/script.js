$(document).ready(function() {
    const $nav = $('nav');
    const headerHeight = $('header').outerHeight();

    $(window).scroll(function() {
      if ($(window).scrollTop() > headerHeight) {
        $nav.addClass('bg-black');
      } else {
        $nav.removeClass('bg-black');
      }
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