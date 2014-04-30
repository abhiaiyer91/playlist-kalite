/*global KALitePlaylist, $*/


window.KALitePlaylist = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');
    }
};

$(document).ready(function () {
    'use strict';
    KALitePlaylist.init();
});
