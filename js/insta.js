$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '7631269643',
        limit: 15,
        resolution: 'standard_resolution',
        accessToken: '7631269643.1677ed0.2c579a7fdd3e49bea5d940f00a990bed',
        sortBy: 'most-liked',
        links:true,
        square: true,
        template: '<div class="col-md-3 col-sm-6 col-6"><div class="galeria"><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div></div>',        
    });


    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    /*$('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });

*/
});