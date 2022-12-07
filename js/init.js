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
    });
    $('#pg-0').click(function(e){
        e.preventDefault();
        $('#margord-book').booklet("gotopage", "4");
    });
    $('#pg-1').click(function(e){
        e.preventDefault();
        $('#margord-book').booklet("gotopage", "5");
    });
    $('#pg-2').click(function(e){
        e.preventDefault();
        $('#margord-book').booklet("gotopage", "6");
    });
    $('#pg-3').click(function(e){
        e.preventDefault();
        $('#margord-book').booklet("gotopage", "8");
    });
    $('#pg-4').click(function(e){
        e.preventDefault();
        $('#margord-book').booklet("gotopage", "9");
    });
    $('#pg-5').click(function(e){
        e.preventDefault();
        $('#margord-book').booklet("gotopage", "12");
    });
    $('#pg-6').click(function(e){
        e.preventDefault();
        $('#margord-book').booklet("gotopage", "14");
    });
    $('#pg-7').click(function(e){
        e.preventDefault();
        $('#margord-book').booklet("gotopage", "16");
    });
    $('#pg-8').click(function(e){
        e.preventDefault();
        $('#margord-book').booklet("gotopage", "17");
    });
    $('#pg-9').click(function(e){
        e.preventDefault();
        $('#margord-book').booklet("gotopage", "21");
    });
    $('#pg-10').click(function(e){
        e.preventDefault();
        $('#margord-book').booklet("gotopage", "23");
    });
    $('#pg-11').click(function(e){
        e.preventDefault();
        $('#margord-book').booklet("gotopage", "25");
    });
    $('#pg-12').click(function(e){
        e.preventDefault();
        $('#margord-book').booklet("gotopage", "27");
    });
});

