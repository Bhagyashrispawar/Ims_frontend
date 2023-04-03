$(document).ready(function() {
    $("#horizontal-tiles").load("./../../templates/dashboard/horizontal-tiles/horizontal-tiles.html");
    $("#sec-distribution").load("./../../templates/sec-distribution/sec-distribution.html");
    //  loadLineChart();
    $("#r1").on('change', function() {
        getSpecificHomeConsumptionData($(this).find(":selected").val());
        console.log($(this).find(":selected").val());
    });

    $("input[name=fromHome]").change(function(event) {
        console.log($('["#r1"]:selected').val());
        getSpecificHomeConsumptionData($('[#r1]:selected').val());
    });

    $("input[name=toHome]").change(function(event) {
        console.log($('["#r1"]:selected').val());
        getSpecificHomeConsumptionData($('[#r1]:selected').val());
    });

    // // setting to date
    var now = new Date();
    var toDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().substring(0, 19);
    $('#toHome').val(toDate);

    // // setting from date, to date - 24hrs.
    var fromDate = new Date();
    fromDate.setDate(fromDate.getDate() - 1);
    fromDateString = new Date(fromDate.getTime() - fromDate.getTimezoneOffset() * 60000).toISOString().substring(0, 19);
    $('#fromHome').val(fromDateString);

    getSpecificHomeConsumptionData('Total Energy Consumption');

    totalThroughput();
    lastupdatedTime();

});

function getSpecificHomeConsumptionData(tagName) {
    var myJSON = { 'formdate': $('#fromHome').val(), 'todate': $('#toHome').val(), tagName: tagName };
    const postdata = JSON.stringify(myJSON);
    console.log(postdata);
    $.ajax({
            method: "POST",
            data: postdata,
            headers: { 'Content-Type': 'application/json' },
            url: "http://192.168.0.132:8090/api/home/energyConsumptionGraph",
        }).done(function(data) {
            console.log(data)

            formatSpecificHomeConsumptionData(data);
        })
        .fail(function() {
            var failData = [{
                    "SecondaryAxis": 980.0,
                    "PrimaryAxis": 2555.0
                },
                {
                    "SecondaryAxis": 950.0,
                    "PrimaryAxis": 2544.0
                },
                {
                    "SecondaryAxis": 966.0,
                    "PrimaryAxis": 2581.0
                },
                {
                    "SecondaryAxis": 974.0,
                    "PrimaryAxis": 2539.0
                },
                {
                    "SecondaryAxis": 1010.0,
                    "PrimaryAxis": 2600.0
                },
                {
                    "SecondaryAxis": 963.0,
                    "PrimaryAxis": 2560.0
                },
                {
                    "SecondaryAxis": 938.0,
                    "PrimaryAxis": 2555.0
                },
                {
                    "SecondaryAxis": 939.0,
                    "PrimaryAxis": 2578.0
                },
                {
                    "SecondaryAxis": 983.0,
                    "PrimaryAxis": 2543.0
                },
                {
                    "SecondaryAxis": 980.0,
                    "PrimaryAxis": 2598.0
                },
                {
                    "SecondaryAxis": 1000.0,
                    "PrimaryAxis": 2517.0
                },
                {
                    "SecondaryAxis": 2590.0,
                    "PrimaryAxis": 2590.0
                }

            ]
            formatSpecificHomeConsumptionData(failData);
        })
}

function formatSpecificHomeConsumptionData(data) {
    var chartData = { PrimaryAxis: [], SecondaryAxis: [] };
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        chartData.SecondaryAxis.push({ y: element.SecondaryAxis });
        chartData.PrimaryAxis.push({ y: element.PrimaryAxis });
    }
    console.log("Homechartdata", chartData);
    showSpecificHomeConsumptionChart(chartData);
}

function showSpecificHomeConsumptionChart(data) {
    var chart = new CanvasJS.Chart("chartContainer", {
        height: 300,
        animationEnabled: true,
        theme: "dark1",
        backgroundColor: " #26293c",
        axisX: {
            gridColor: "gray",
            gridThickness: 2,
            gridDashType: "dot",
            tickThickness: 0,
            lineThickness: 0,
            labelFontColor: "#bfbfbf",
            labelFontSize: 15,
            fontFamily: "Bahnschrift Light",

        },
        dataPointMaxWidth: 15,
        axisY: {
            title: "Gcal/hr of Crude",
            titleFontSize: 15,
            titleFontFamily: "Yu Gothic UI Semibold",
            titleFontColor: "#D9DAD9",
            gridThickness: 0,
            labelFontColor: "#bfbfbf",
            labelFontSize: 15,
            fontFamily: "Bahnschrift Light",
            "minimum": 0
        },
        axisY2: {
            title: "MT/Day",
            titleFontSize: 15,
            titleFontFamily: "Yu Gothic UI Semibold",
            titleFontColor: "#D9DAD9",
            gridThickness: 0,
            labelFontColor: "#bfbfbf",
            labelFontSize: 15,
            fontFamily: "Bahnschrift Light",
        },

        data: [{
                type: "column",
                color: "#00b0f0",
                name: "PrimaryAxis",
                axisYType: "secondary",
                toolTipContent: "{label} <br> <b>{name}:</b> {y}",
                dataPoints: data.PrimaryAxis
            },
            {
                type: "spline",
                color: "#dc7632",
                name: "SecondaryAxis",
                markerSize: 0,
                toolTipContent: "<b>{name}:</b> {y[0]} - {y[1]} ",
                dataPoints: data.SecondaryAxis
            }

        ]
    });

    chart.render();
}

function totalThroughput() {
    $.ajax({
        url: 'http://192.168.0.132:8090/api/home/totalthroughputprocessed',
        method: "GET"
    }).done(function(data) {


        document.getElementById("totalThroughput").innerHTML = data[0].tagValue;
        document.getElementById("Power").innerHTML = data[1].tagValue;
        document.getElementById("Steam").innerHTML = data[2].tagValue;
        document.getElementById("RenPower").innerHTML = data[3].tagValue;

    });


}

function lastupdatedTime(data) {
    $.ajax({
        url: 'http://192.168.0.132:8090/api/home/lastupdatedate',
        method: "GET"
    }).done(function(data) {


        document.getElementById("homeTime").innerHTML = data.LastUpdatedValue;


    });


}