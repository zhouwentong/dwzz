$(function(){
	$('.m14').click(function(e) {
        $('.m17').show();
		return false;
    });
	$('.m17 .close').click(function(e) {
        $('.m17').hide();
		return false;
    });
	$('.g2_2 li').not('.li2').find('img').hover(function(){
		var title=$(this).attr('title');
		var src=$(this).attr('data-src');
		$('.g2_2 .l2 img').attr('src',src);
		$('.g2_2 .l2 h3').text(title);
	})
});