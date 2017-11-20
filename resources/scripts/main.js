$(function() {
    //var controls = $(".player-controls").clone();
    //$( "#flash-video" ).append( controls.show() )

});

function onFlashPlay(event) {
    var oPlayer = $("#adobe-flash-player-without-embed");
    player = document.getElementById("adobe-flash-player-without-embed");
    console.log( oPlayer )
}
function onFlashPause(event) {
    console.log( event)
}
function onFlashStop(event) {
    console.log( event)
}
function onFlashMute(event) {
    console.log( event)
}
function onFlashJump(event,iNumberOfSeconds) {
    console.log( event);
    console.log( iNumberOfSeconds)
}