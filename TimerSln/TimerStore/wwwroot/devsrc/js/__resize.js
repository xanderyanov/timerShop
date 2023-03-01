$window = $(window);

function newFunc() {
	console.log("Hello!");
}

function siteResizeFunction() {
	windowWidth = $window.width();
	topLine3 = $(".topLine3__area").height();
	header3 = $(".header3__area");
	header3Height = $(".header3__area").height();
	prevWindowWidth = windowWidth;


	newFunc();

	if (prevWindowWidth <= 1080 && windowWidth > 1080) {
		newFunc();
	}

	if (prevWindowWidth > 1080 && windowWidth <= 1080) {
		newFunc();
	}
}

$(function () {
	// siteResizeFunction();
	$window.on("resize", siteResizeFunction);
});
