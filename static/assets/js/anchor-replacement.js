
jQuery(document).ready(function() {
    //remove any existing anchors
    $( ".anchor" ).remove();
    //hide append class just in case
    $('.append').hide();

    if ($('.append').length) {
        $("h1~h2,h1~h3,h1~h4,h1~h5,h1~h6").append(function (index, html) {
            var element = $(this);
            var append;
            var url = encodeURI(document.location.origin + document.location.pathname);
            var link = url + "#" + element[0].id;
            if ($(this).prev().attr('class') === "append") {
                append = $(this).prev().html();
            } else {
                append = '';
            }
            return append + " <span class='anchor' data-clipboard-text='" + link + "'>" +
                "<i class='fas fa-link fa-lg'></i>" +
                "</span>"
                ;
        });
    } else {
        $("h1~h2,h1~h3,h1~h4,h1~h5,h1~h6").append(function (index, html) {
            var element = $(this);
            var url = encodeURI(document.location.origin + document.location.pathname);
            var link = url + "#" + element[0].id;
            return " <span class='anchor' data-clipboard-text='" + link + "'>" +
                "<i class='fas fa-link fa-lg'></i>" +
                "</span>"
                ;
        });
    }

    $("h1~h2,h1~h3,h1~h4,h1~h5,h1~h6,.rankPrefix").on('mouseover', function(e) {
        $('.anchor').show();
    });

    var text, clip = new ClipboardJS('.anchor');
    $(".anchor").on('mouseleave', function(e) {
        $(this).attr('aria-label', null).removeClass('tooltipped tooltipped-s tooltipped-w');
    });

    clip.on('success', function(e) {
        e.clearSelection();
        $(e.trigger).attr('aria-label', 'Link copied to clipboard!').addClass('tooltipped tooltipped-s');
    });
    $('code.language-mermaid').each(function(index, element) {
        var content = $(element).html().replace(/&amp;/g, '&');
        $(element).parent().replaceWith('<div class="mermaid" align="center">' + content + '</div>');
    });
});