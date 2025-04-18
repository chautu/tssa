jQuery(function(){
	jQuery(".tb_wrap").bind('touchend',function(){
		jQuery(this).addClass('touch-end');
	});
	jQuery(".tb_wrap").scroll(function(){
		jQuery(this).addClass('touch-end');
	});
});