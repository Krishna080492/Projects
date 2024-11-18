$(document).ready(function () {

    $.fn.jQuerySimpleCounter = function (options) {
        var settings = $.extend({
            start: 0,
            end: 100,
            easing: 'swing',
            duration: 400,
            complete: ''
        }, options);

        var thisElement = $(this);

        $({ count: settings.start }).animate({ count: settings.end }, {
            duration: settings.duration,
            easing: settings.easing,
            step: function () {
                var mathCount = Math.ceil(this.count);
                thisElement.text(mathCount);
            },
            complete: settings.complete
        });
    };


    $('#number1').jQuerySimpleCounter({ end: 250, duration: 1000});
    $('#number2').jQuerySimpleCounter({ end: 123, duration: 1000});
    $('#number3').jQuerySimpleCounter({ end: 321, duration: 1000});
    $('#number4').jQuerySimpleCounter({ end: 220, duration: 1000});
});