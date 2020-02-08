$(function(){
    $('#name').keyup(function(){
        $('#greet').text('Yo ' + $('#name').val())
    })
});