document.addEventListener("DOMContentLoaded", function() {
    let first = document.getElementById('first-screen');
    first.addEventListener('click', function () {
        console.log('click');
    });
});

$( document ).ready(function() {
    console.log( "ready!" );
});