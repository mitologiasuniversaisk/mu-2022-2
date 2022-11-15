// Booklet
$(function(){
    $('#margord-book').booklet({
        closed: true,
        autoCenter: true,
        easing:  null,
        easeIn:  null,
        easeOut: null,
        covers: true,
        pagePadding: 0,
        pageNumbers: false,
        width: 920,
        height: 600,
        next: '#next_book',
        prev: '#prev_book'
    })
});