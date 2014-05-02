(function () {

var PlaylistContent = Backbone.Model.extend({
    initialize: function () {
        console.log('Good to go');
    },
    defaults: {
        title: 'Intro to Programming',
        status: 'Half'
    }    

});

var PlayList = new PlaylistContent();

console.log(PlayList);

})();




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
