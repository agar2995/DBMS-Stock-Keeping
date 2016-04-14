$(document).ready(function () {
    $('.div4').hide();
    $('.div6').hide();
    
    $('.user').on('click', function(){
        $('.div4').toggle(1000);
        $('.div6').hide(1000);
    });

    $('.admin').on('click', function(){
        $('.div6').toggle(1000);
        $('.div4').hide(1000);
    });

    
});