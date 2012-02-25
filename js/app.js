$(function() {

    var	winHeight = $(window).height(),
        headerHeight = $('.header').outerHeight();

    $('.people, .tweets')
        .css('overflow-y', 'scroll')
        .css('margin-top', headerHeight)
        .height(winHeight - headerHeight);
        
    $('.people a').on('click',function(e){
        var lol = $(e.target).closest('a').attr('id');
        var catz = lol.split('-')[1];

        $('.tweets p').slideUp();
        $($('.tweets p')[catz - 1]).slideDown();
    });

    
});