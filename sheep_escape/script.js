window.onload = function () {

        alert("Notice from the local Shepherd: A SHEEP HAS GONE ROGUE!");
    };

    $("#go").click(function () {
        $("#sheep").animate({
            width: ["toggle", "swing"],
            height: ["toggle", "swing"],
            opacity: "toggle"
        }, 5000, "linear", function () {});
    });


    $("#run").click(function () {
        $("#sheep").animate({
            "left": "+=500px"
        }, 2000);
    });


