$(".meter > span").each(function() {
	$(this)
		.data("origWidth", $(this).width())
		.width(0)
		.animate({
			width: $(this).data("origWidth")
		}, 1200);
});



$(document).ready(function(e){
    $('.item').click(function (e){
        if($(this).next('.item-data').css('display') != 'block'){
            $('.active').slideUp('fast').removeClass('active');
            $(this).next('.item-data').addClass('active').slideDown('slow');
        } else {
            $('.active').slideUp('fast').removeClass('active');
        }
    });
});
