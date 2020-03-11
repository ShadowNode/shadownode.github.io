// Smooth out javascript calls
// This way users won't see our custom javascript document modifications (aka table of contents is just there already instead of popping in after page is loaded and such visible to the user)
$( document ).ready(function() {
    $('#overlay').fadeOut('fast');
});