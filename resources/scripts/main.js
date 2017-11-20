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


/**
 * HTML5 CustomPlayer Controls
 */
var myVideo = document.getElementById("html5-video-player");
function onHtml5PlayerPlay(event) {

}
function onHtml5PlayerPause(event) {
    document.getElementById("html5-video-player").pause();
    return
    if (myVideo.paused)
        myVideo.play();
    else
        myVideo.pause();
}
function onHtml5PlayerStop(event) {
    console.log( event)
}
function onHtml5PlayerMute(event) {
    console.log( event)
}
function onHtml5PlayerJump(event,iNumberOfSeconds) {
    console.log( event);
    console.log( iNumberOfSeconds)
}