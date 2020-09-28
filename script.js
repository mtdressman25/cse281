function revealMessage() {
    document.getElementById("message").style.display = 'block';
}

//trying to get the image to cover the entire page
//jQuery
$(window).load(function() {    

    var theWindow        = $(window),
        $bg              = $("#bg"),
        aspectRatio      = $bg.width() / $bg.height();

    function resizeBg() {
            if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
                $bg
                    .removeClass()
                    .addClass('bgheight');
            } else {
                $bg
                    .removeClass()
                    .addClass('bgwidth');
            }
    }
    theWindow.resize(resizeBg).trigger("resize");
});