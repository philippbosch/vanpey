$(document).ready(function() {
    $('#images-large').cycle({
        'fx': 'cover',
        'after': function(currSlideElement, nextSlideElement, options, forwardFlag) {
            $('#' + $(nextSlideElement).attr('rel')).addClass('selected').parent().siblings().find('img').removeClass('selected');
        }
    });
});
