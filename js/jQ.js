$(function(){

$('#saying').on('click',function(){
$(this).hide();
$(this).after('<p class="p1" id="welcome">Thanks for reading!<br>Welcome to the Anime World!</p>');
});
});