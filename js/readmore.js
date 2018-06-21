jQuery('.text').each(function(){
    var review_full = jQuery(this).html();
    var review = review_full;

    if( review.length > 500 )
    {
        review = review.substring(0, 500);
        jQuery(this).html( review + '<div class="read_more"> читать полностью &rarr;</div>' );
    }
    jQuery(this).append('<div class="full_text" style="display: none;">' + review_full + '</div>');
});

jQuery('.read_more').click(function(){
    jQuery(this).parent().html( jQuery(this).parent().find('.full_text').html() );
});
