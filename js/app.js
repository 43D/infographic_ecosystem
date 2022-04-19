$(document).ready(function () {
    $.getJSON("./json/data.json", function (data) {
        $('#my-timeline').roadmap(data.data, {
            eventsPerSlide: 6,
            slide: 1,
            prevArrow: '<i class="material-icons">keyboard_arrow_left</i>',
            nextArrow: '<i class="material-icons">keyboard_arrow_right</i>'
        });
    });
});