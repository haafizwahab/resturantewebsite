$(document).ready(function () {
  // carousal button handler
  $('#mycarousel').carousel({ interval: 3000 });
  $('#carouselButton').click(function () {
    if ($('#carouselButton').children('span').hasClass('fa-pause')) {
      $('#mycarousel').carousel('pause');
      $('#carouselButton').children('span').removeClass('fa-pause');
      $('#carouselButton').children('span').addClass('fa-play');
    } else if ($('#carouselButton').children('span').hasClass('fa-play')) {
      $('#mycarousel').carousel('cycle');
      $('#carouselButton').children('span').removeClass('fa-play');
      $('#carouselButton').children('span').addClass('fa-pause');
    }
  });

  // toggle login modal
  $('#login').click(function () {
    $('#loginModal').modal('show');
  });

  // toggle reserve table model
  $('#reserveTableButton').click(function () {
    $('#reservationmodal').modal('show');
  });
});
