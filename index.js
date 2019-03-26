(function() {

  /**
   * CLIC para aparecer la información del fundador y redimensionar las demás fotos
   */
  $('body').on('click','.carrusel-fundadores .item-fundadores',function () {
    $('.carrusel-fundadores .item-fundadores').removeClass('activo');
    $('.carrusel-fundadores .item-fundadores').addClass('inactivo');
    $(this).removeClass('inactivo');
    $(this).addClass('activo');
  });

  $('body').on('click','.carrusel-fundadores .item-fundadores.activo',function () {
    // $(this).removeClass('activo');
    $('.carrusel-fundadores .item-fundadores').removeClass('activo');
    $('.carrusel-fundadores .item-fundadores').removeClass('inactivo');
  });


})();