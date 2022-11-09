$(function() {
    $('#mybook').booklet({
        closed: true,
        autoCenter: true,
        easing:  null,
        easeIn:  null,
        easeOut: null,
        covers: true,
        pagePadding: 0,
        width: 920,
        height: 600,
        next: '#next_book',
        prev: '#prev_book'
    });
    $('#inicio_book').click(function(e){
        e.preventDefault();
        $('#mybook').booklet("gotopage", "1");
    });
    $('#sumario_book').click(function(e){
        e.preventDefault();
        $('#mybook').booklet("gotopage", "4");
    });
    $('#2016').click(function(e){
        e.preventDefault();
        $('#mybook').booklet("gotopage", "5");
    });
    $('#2017').click(function(e){
        e.preventDefault();
        $('#mybook').booklet("gotopage", "9");
    });
    $('#2018').click(function(e){
        e.preventDefault();
        $('#mybook').booklet("gotopage", "13");
    });
    $('#cinco').click(function(e){
        e.preventDefault();
        $('#mybook').booklet("gotopage", "5");
    });
    $('#seis').click(function(e){
        e.preventDefault();
        $('#mybook').booklet("gotopage", "6");
    });
    $('#sete').click(function(e){
        e.preventDefault();
        $('#mybook').booklet("gotopage", "7");
    });
    $('#oito').click(function(e){
        e.preventDefault();
        $('#mybook').booklet("gotopage", "8");
    });
    $('#nove').click(function(e){
        e.preventDefault();
        $('#mybook').booklet("gotopage", "9");
    });
    $('#dez').click(function(e){
        e.preventDefault();
        $('#mybook').booklet("gotopage", "10");
    });
    $('#onze').click(function(e){
        e.preventDefault();
        $('#mybook').booklet("gotopage", "11");
    });
    $('#doze').click(function(e){
        e.preventDefault();
        $('#mybook').booklet("gotopage", "12");
    });
    $('#treze').click(function(e){
        e.preventDefault();
        $('#mybook').booklet("gotopage", "13");
    });
    $('#quatorze').click(function(e){
        e.preventDefault();
        $('#mybook').booklet("gotopage", "14");
    });
    $('#quinze').click(function(e){
        e.preventDefault();
        $('#mybook').booklet("gotopage", "15");
    });
    $('#dezesseis').click(function(e){
        e.preventDefault();
        $('#mybook').booklet("gotopage", "16");
    });
    $('#dezessete').click(function(e){
        e.preventDefault();
        $('#mybook').booklet("gotopage", "17");
    });
    $('#dezoito').click(function(e){
        e.preventDefault();
        $('#mybook').booklet("gotopage", "17");
    });
});