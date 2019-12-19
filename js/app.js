$(document).ready(function() {

    var events = [{
        date: 'Q1 - 2018',
        content: 'Lorem ipsum dolor sit amet<small>Consectetur adipisicing elit</small>'
    }, {
        date: 'Q2 - 2018',
        content: 'Lorem ipsum dolor sit amet<small>Consectetur adipisicing elit</small>'
    }, {
        date: 'Q3 - 2018',
        content: 'Lorem ipsum dolor sit amet<small>Consectetur adipisicing elit</small>'
    }, {
        date: 'Q4 - 2018',
        content: 'Lorem ipsum dolor sit amet<small>Consectetur adipisicing elit</small>'
    }, {
        date: 'Q1 - 2019',
        content: 'Lorem ipsum dolor sit amet<small>Consectetur adipisicing elit</small>'
    }, {
        date: 'Q2 - 2019',
        content: 'Lorem ipsum dolor sit amet<small>Consectetur adipisicing elit</small>'
    }, {
        date: 'Q3 - 2019',
        content: 'Lorem ipsum dolor sit amet<small>Consectetur adipisicing elit</small><small>Consectetur adipisicing elit</small>'
    }, {
        date: 'Q4 - 2019',
        content: 'Lorem ipsum dolor sit amet<small>Consectetur adipisicing elit</small>'
    }, {
        date: 'Q1 - 2020',
        content: 'Lorem ipsum dolor sit amet<small>Consectetur adipisicing elit</small>'
    }, {
        date: 'Q2 - 2020',
        content: 'Lorem ipsum dolor sit amet<small>Consectetur adipisicing elit</small>'
    }, {
        date: 'Q3 - 2020',
        content: 'Lorem ipsum dolor sit amet<small>Consectetur adipisicing elit</small>'
    }, {
        date: 'Q4 - 2020',
        content: 'Lorem ipsum dolor sit amet<small>Consectetur adipisicing elit</small>'
    }, {
        date: 'Q1 - 2021',
        content: 'Lorem ipsum dolor sit amet<small>Consectetur adipisicing elit</small>'
    }, {
        date: 'Q2 - 2021',
        content: 'Lorem ipsum dolor sit amet<small>Consectetur adipisicing elit</small>'
    }, {
        date: 'Q3 - 2021',
        content: 'Lorem ipsum dolor sit amet<small>Consectetur adipisicing elit</small>'
    }, {
        date: 'Q4 - 2021',
        content: 'Lorem ipsum dolor sit amet<small>Consectetur adipisicing elit</small>'
    }];

    $('#my-timeline').roadmap(events, {
        eventsPerSlide: 6,
        slide: 1,
        prevArrow: '<i class="material-icons">keyboard_arrow_left</i>',
        nextArrow: '<i class="material-icons">keyboard_arrow_right</i>'
    });
});