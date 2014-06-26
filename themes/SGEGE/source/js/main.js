window.semantic = {
	handler: {}
};
semantic.ready = function () {
	var menu = {};
	menu = {
		mouseenter: function () {
			$(this).stop().animate({
				width: '155px'
			}, 300, function () {
				$(this).find('.text').show();
			});
		},
		mouseleave: function (event) {
			$(this).find('.text').hide();
			$(this).stop().animate({
				width: '70px'
			}, 300);
		}
	};
	var $sidebarButton = $("#showSidBtn"),
		$uiSidebar = $(".ui header .sidebar");
	$sidebarButton.on('mouseenter', menu.mouseenter)
		.on('mouseleave', menu.mouseleave);
	$uiSidebar.sidebar('attach events', '#showSidBtn');

}
$(function () {
	semantic.ready();
})
