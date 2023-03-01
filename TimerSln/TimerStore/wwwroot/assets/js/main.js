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

function closeFlyBox() {
    $("body").removeClass("stop");
    $(".overlay").fadeOut(200);
}

$(function () {

    /********************FlyBox*********************/
    $(".openFlyBoxBtn").on("click", function (e) {
        e.preventDefault();
        var $this = $(this);
        var id = $this.data("id");
        var content = $('.overlay[data-overlay="' + id + '"]');
        content.fadeIn(200);
        $("body").addClass("stop");
    });
    $(".flyBox").on("click", function (e) {
        e.stopPropagation();
    });
    $(".flyBox__close").on("click", function (e) {
        e.preventDefault();
        closeFlyBox();
    });
    $(".overlay").on("click", function (e) {
        e.stopPropagation();
        e.preventDefault();
        closeFlyBox();
    });


});
