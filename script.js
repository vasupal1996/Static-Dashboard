
$(document).ready(function(){

    var height = $(document).height();
    $('#sidebar-nav').css('height', height)

    $('#sidebar-control-button').click(function(){
        $('#sidebar-nav').fadeToggle();
        $('#content-wrapper').toggleClass('col-lg-10 col-md-10 col-sm-10 col-xs-12', 'col-lg-12 col-md-12 col-sm-12 col-xs-12');
        //$('#navbar-wrapper').toggleClass('col-lg-10 col-md-10 col-sm-10 col-xs-12', 'col-lg-12 col-md-12 col-sm-12 col-xs-12');
    })
})

var gaugeOptions = {
    chart: {
        type: 'solidgauge'
    },
    title: null,
    pane: {
        center: ['50%', '85%'],
        size: '100%',
        startAngle: -90,
        endAngle: 90,
        background: {
        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
        innerRadius: '60%',
        outerRadius: '100%',
        shape: 'arc'
        }
    },

    tooltip: {
        enabled: false
    },

// the value axis
    yAxis: {
        stops: [
        [0.1, '#DF5353'], // red '#DF5353'
        [0.5, '#DDDF0D'], // yellow
        [0.9, '#55BF3B'] // green '#55BF3B'
        ],
        lineWidth: 0,
        minorTickInterval: null,
        tickAmount: 2,
        title: {
        y: -70
        },
        labels: {
        y: 16
        }
    },

    plotOptions: {
        solidgauge: {
        dataLabels: {
            y: 5,
            borderWidth: 0,
            useHTML: true
        }
        }
    }
    };

// The speed gauge
var chartPortfolioRanking = Highcharts.chart('container-portfolio-ranking', Highcharts.merge(gaugeOptions, {
    yAxis: {
        min: 0,
        max: 100,
        title: {
        text: null
        }
    },

    credits: {
        enabled: false
    },

    series: [{
        name: 'Portfolio Ranking',
        //  actual value to plot in gauage.
        data: [0],
        
        dataLabels: {
        format: '<div style="text-align:center"><span style="font-size:25px;color:' +
            ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
            '<span style="font-size:12px;color:silver">%</span></div>'
        },
        tooltip: {
        valueSuffix: '%'
        }
    }]

    }));


// function to set the gauge's random value dynamically after every 2 secs. 
// disable this function when using in production. this function is just to illustrate the chart.

setInterval(function() {
var point,
    newVal,
    inc;

if (chartPortfolioRanking) {
    point = chartPortfolioRanking.series[0].points[0];
    inc = Math.round((Math.random() - 0.5) * 100);
    newVal = point.y + inc;

    if (newVal < 0 || newVal > 100) {
    newVal = point.y - inc;
    }
    point.update(newVal);
}
}, 2000);

    


Highcharts.chart('container-DEFAULT', {

chart: {
    type: 'gauge',
    plotBackgroundColor: null,
    plotBackgroundImage: null,
    plotBorderWidth: null,
    plotShadow: false
},

title: {
    text: null
},

pane: {
    startAngle: -150,
    endAngle: 150,
    background: [{
        backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
                [0, '#FFF'],
                [1, '#333']
            ]
        },
        borderWidth: 0,
        outerRadius: '0%'
    }, {
        backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
                [0, '#333'],
                [1, '#FFF']
            ]
        },
        borderWidth: null,
        outerRadius: '0%'
    }, {
        // default background
    }, {
        backgroundColor: '#DDD',
        borderWidth: 0,
        outerRadius: '0%',
        innerRadius: '0%'
    }]
},

// the value axis
yAxis: {
    min: 0,
    max: 100,

    minorTickInterval: 'auto',
    minorTickWidth: 1,
    minorTickLength: 10,
    minorTickPosition: 'inside',
    minorTickColor: '#666',

    tickPixelInterval: 30,
    tickWidth: 2,
    tickPosition: 'inside',
    tickLength: 10,
    tickColor: '#666',
    labels: {
        step: 2,
        rotation: 'auto'
    },
    title: {
        text: '%'
    },
    plotBands: [{
        from: 0,
        to: 30,
        color: '#DDDF0D' // yellow #55BF3B
    }, {
        from: 30,
        to: 70,
        color: '#55BF3B' // green #DDDF0D
    }, {
        from: 70,
        to: 100,
        color: '#DF5353' // red #DF5353
    }]
},

series: [{
    name: 'Default Probability',
    data: [80],
    tooltip: {
        valueSuffix: ' %'
    }
}]

},
// function to set the gauge's random value dynamically after every 2 secs. 
// disable this function when using in production. this function is just to illustrate the chart.

function (chart) {
    if (!chart.renderer.forExport) {
        setInterval(function () {
            var point = chart.series[0].points[0],
                newVal,
                inc = Math.round((Math.random() - 0.5) * 20);

            newVal = point.y + inc;
            if (newVal < 0 || newVal > 100) {
                newVal = point.y - inc;
            }

            point.update(newVal);

        }, 3000);
    }
});



Highcharts.chart('container-CIBIL', {

chart: {
    type: 'gauge',
    plotBackgroundColor: null,
    plotBackgroundImage: null,
    plotBorderWidth: null,
    plotShadow: false
},

title: {
    text: null
},

pane: {
    startAngle: -150,
    endAngle: 150,
    background: [{
        backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
                [0, '#FFF'],
                [1, '#333']
            ]
        },
        borderWidth: 0,
        outerRadius: '0%'
    }, {
        backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
                [0, '#333'],
                [1, '#FFF']
            ]
        },
        borderWidth: null,
        outerRadius: '0%'
    }, {
        // default background
    }, {
        backgroundColor: '#DDD',
        borderWidth: 0,
        outerRadius: '0%',
        innerRadius: '0%'
    }]
},

// the value axis
yAxis: {
    min: 0,
    max: 900,

    minorTickInterval: 'auto',
    minorTickWidth: 1,
    minorTickLength: 10,
    minorTickPosition: 'inside',
    minorTickColor: '#666',

    tickPixelInterval: 30,
    tickWidth: 2,
    tickPosition: 'inside',
    tickLength: 10,
    tickColor: '#666',
    labels: {
        step: 2,
        rotation: 'auto'
    },
    title: {
        text: '%'
    },
    plotBands: [{
        from: 0,
        to: 300,
        color: '#DDDF0D' // yellow #55BF3B
    }, {
        from: 300,
        to: 600,
        color: '#55BF3B' // green #DDDF0D
    }, {
        from: 600,
        to: 900,
        color: '#DF5353' // red #DF5353
    }]
},

series: [{
    name: 'CIBIL',
    data: [80],
    tooltip: {
        valueSuffix: ' %'
    }
}]

},

// function to set the gauge's random value dynamically after every 2 secs. 
// disable this function when using in production. this function is just to illustrate the chart.

function (chart) {
    if (!chart.renderer.forExport) {
        setInterval(function () {
            var point = chart.series[0].points[0],
                newVal,
                inc = Math.round((Math.random() - 0.5) * 600);

            newVal = point.y + inc;
            if (newVal < 0 || newVal > 900) {
                newVal = point.y - inc;
            }

            point.update(newVal);

        }, 3000);
    }
});




    Highcharts.chart('container-RISK', {

    chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: null,
        plotShadow: false
    },

    title: {
        text: null
    },

    pane: {
        startAngle: -150,
        endAngle: 150,
        background: [{
            backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                    [0, '#FFF'],
                    [1, '#333']
                ]
            },
            borderWidth: 0,
            outerRadius: '0%'
        }, {
            backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                    [0, '#333'],
                    [1, '#FFF']
                ]
            },
            borderWidth: null,
            outerRadius: '0%'
        }, {
            // default background
        }, {
            backgroundColor: '#DDD',
            borderWidth: 0,
            outerRadius: '0%',
            innerRadius: '0%'
        }]
    },

    // the value axis
    yAxis: {
        min: 0,
        max: 100,

        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',

        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: '%'
        },
        plotBands: [{
            from: 0,
            to: 30,
            color: '#DDDF0D' // yellow #55BF3B
        }, {
            from: 30,
            to: 70,
            color: '#55BF3B' // green #DDDF0D
        }, {
            from: 70,
            to: 100,
            color: '#DF5353' // red #DF5353
        }]
    },

    series: [{
        name: 'RISK Score',
        // data for plotting
        data: [80],
        tooltip: {
            valueSuffix: ' %'
        }
    }]

    },
// function to set the gauge's random value dynamically after every 2 secs. 
// disable this function when using in production. this function is just to illustrate the chart.

function (chart) {
    if (!chart.renderer.forExport) {
        setInterval(function () {
            var point = chart.series[0].points[0],
                newVal,
                inc = Math.round((Math.random() - 0.5) * 20);

            newVal = point.y + inc;
            if (newVal < 0 || newVal > 100) {
                newVal = point.y - inc;
            }

            point.update(newVal);

        }, 3000);
    }
});
    