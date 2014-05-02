 


(function () {


var timer;

$(window).on('mousemove', function () {
  $('nav').addClass('show');
  try {
    clearTimeout(timer);
  } catch (e) {}
  timer = setTimeout(function () {
    $('nav').removeClass('show');
  }, 1500);
});

    $('.item').click(function (e){
        if($(this).next('.item-data').css('display') != 'block'){
            $('.active').slideUp('fast').removeClass('active');
            $(this).next('.item-data').addClass('active').slideDown('slow');
        } else {
            $('.active').slideUp('fast').removeClass('active');
        }
    });

})()



