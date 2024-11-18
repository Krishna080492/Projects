
// reports chart
var options = {
    series: [25.6, 32.0, 23.8, 9.9, 8.7],
    chart: {
        type: 'donut',
    },
    legend: {
        position: 'bottom',
        customLegendItems: ["Direct", 'Social', 'Email', 'Other', 'Refrrals'],

    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                position: 'bottom'
            }
        }
    }]
};

var chart = new ApexCharts(document.querySelector("#reports"), options);
chart.render();
// revenue chart
var options = {
    series: [{
        name: 'Earnings',
        type: 'column',
        data: [89.25, 98.58, 68.7, 108.87, 77.54, 84.03, 51.24, 28.57, 92.57, 42.36, 88.51, 36.57]
    }, {
        name: 'Orders',
        type: 'line',
        data: [37, 65, 46, 68, 49, 61, 42, 44, 78, 52, 63, 67]
    }, {
        name: 'Refunds',
        type: 'line',
        data: [12, 8, 7, 17, 21, 11, 5, 9, 7, 29, 12, 35]
    },
    ],
    chart: {
        height: 350,
        toolbar: {
            show: false,
        },
    },
    stroke: {
        width: [0, 4]
    },
    plotOptions: {
        bar: {
            columnWidth: '30%'
        }
    },
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    xaxis: {
        type: 'string',
    },

};

var chart = new ApexCharts(document.querySelector("#r-mixed-chart"), options);
chart.render();
