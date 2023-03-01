var townSelected;

var locations = {
    engels: {
        name: "Энгельс",
        phone: "8-917-988-88-33"
    },
    saratov: {
        name: "Саратов",
        phone: "8-917-988-88-55"
    },
    penza: {
        name: "Пенза",
        phone: "8-917-988-88-77"
    }
};

$(function () {

    if (localStorage.getItem("townSelected")) {
        townSelected = localStorage.getItem("townSelected");
        $(".locationName").text(locations[townSelected].name);
        $(".topLine__phone_location a").text(locations[townSelected].phone);
        $(".topLine__phone_location a").attr('href', 'tel:' + locations[townSelected].phone);
    } else {
        townSelected = "saratov";
        $(".locationName").text(locations[townSelected].name);
    }




    $(".location__town").on("click", function () {
        $this = $(this);
        townSelected = $this.data("town");
        console.log(townSelected);
        // let loc = locations[townSelected];
        localStorage.setItem("townSelected", townSelected);
        $(".locationName").text(locations[townSelected].name);
        $(".topLine__phone_location a").text(locations[townSelected].phone);
        $(".topLine__phone_location a").attr('href', 'tel:' + locations[townSelected].phone);
        closeFlyBox();

    });
});

