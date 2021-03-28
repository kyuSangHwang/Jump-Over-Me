
document.addEventListener('DOMContentLoades', function () {
   document.getElementsByTagName('h1')[0].style.color='red';
});

$(document).ready(function () {
   $('h1').css({'color':'red'});
});

$(function (){
    $('h1').css({'color':'red'});
});