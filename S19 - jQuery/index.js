$(document).keydown(function(event) {
    console.log(event.key);
    $("h1").text(event.key);
});