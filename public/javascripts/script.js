jQuery(document).ready(function() {
/*******************************
    ISOTOPE INIT 
********************************/
	var $container = $('#items');
	$container.imagesLoaded(function(){
		$container.masonry({
			itemSelector : '.item',
			columnWidth : 30,
			isAnimated: true
		});
	});
});
