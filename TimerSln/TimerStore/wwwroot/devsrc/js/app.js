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
