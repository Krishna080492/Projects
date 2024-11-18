
//revenue counter
$('#r-counter1').each(function () {
    var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 5000,
        step: function (func) {
            $(this).text(parseFloat(func).toFixed(size));
        }
    });
});
$('#r-counter2').each(function () {
    var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 5000,
        step: function (func) {
            $(this).text(parseFloat(func).toFixed(size));
        }
    });
});
$('#r-counter3').each(function () {
    var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 5000,
        step: function (func) {
            $(this).text(parseFloat(func).toFixed(size));
        }
    });
});
$('#r-counter4').each(function () {
    var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 5000,
        step: function (func) {
            $(this).text(parseFloat(func).toFixed(size));
        }
    });
});

// main-bottom counter
$('#counter1').each(function () {
    var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 5000,
        step: function (func) {
            $(this).text(parseFloat(func).toFixed(size));
        }
    });
});
$('#counter2').each(function () {
    var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 5000,
        step: function (func) {
            $(this).text(parseFloat(func).toFixed(size));
        }
    });
});
$('#counter3').each(function () {
    var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 5000,
        step: function (func) {
            $(this).text(parseFloat(func).toFixed(size));
        }
    });
});
$('#counter4').each(function () {
    var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 5000,
        step: function (func) {
            $(this).text(parseFloat(func).toFixed(size));
        }
    });
});