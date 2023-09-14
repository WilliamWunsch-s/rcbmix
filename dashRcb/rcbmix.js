let empresas = [
    "VOTORANTIM SA",
    "VIERO S/A",
    "CIMENTO ITAMBE",
    "EIRELI",
    "CONCRE+ LTDA",
    "MS LTDA",
    "INDUSTRIA INDAIAL LTDA",
    "CONCREART LTDA",
    "PEDRANORTE LTDA",
    "F. ZANCANARO LTDA",
    "MJC LTDA",
    "GATTI LTDA",
    "TANCAL LTDA",
]
var options = {
    series: [{
        name: 'FATURADO',
        data: [
            4210588.09, 
            19114.65, 
            571376.99,
            326499.17,
            16126.2,
            261775.43,
            57419.22,
            43226.4,
            137096.08,
            39840.48,
            31618.2,
            4390,
            2457.35
        ]
    }, {
        name: 'LUCRO',
        data: [
            1405125.615,
            8287.6573,
            305501.0939,
            134401.6472,
            11923.056,
            78331.1044,
            35697.466,
            19661.302,
            120644.5504,
            24570.7944,
            27824.016,
            3863.2,
            2162.468
        ]
    }, {
        name: 'GASTO',
        data: [
            2805462.54,
            10826.99,
            265876,
            192097.53,
            4203.14,
            183444.31,
            21721.75,
            23565.1,
            16451.51,
            15269.69,
            3794.18,
            526.8,
            294.88
        ]
    }],
    chart: {
        height: 350,
        type: 'bar',
        stacked: false
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        colors: ['#14c03d', '#00cfe8', '#ea5455'],
        width: []
    },
    plotOptions: {
        bar: {
            columnWidth: '50%',
        }
    },

    fill: {
        colors: ['#14c03d', '#00cfe8', '#ea5455'],
        opacity: 0.7
    },
    labels: empresas,
    markers: {
        colors: ['#14c03d', '#00cfe8', '#ea5455'],
        size: 0
    },
    xaxis: {
        type: 'category',
        labels: {
            show: true,
            rotateAlways: false,
            hideOverlappingLabels: true,
            showDuplicates: false,
            trim: false,
            minHeight: undefined,
            maxHeight: 120,
            style: {
                colors: '#CACDD1',
                fontSize: '10px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                cssClass: 'apexcharts-xaxis-label',
            }
        }
    },
    yaxis: {
        title: {},
        min: 0,
        labels: {
            show: true,
            rotateAlways: false,
            hideOverlappingLabels: true,
            showDuplicates: false,
            trim: false,
            minHeight: undefined,
            maxHeight: 120,
            style: {
                colors: '#CACDD1',
                fontSize: '10px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                cssClass: 'apexcharts-xaxis-label',
            }
        }
    },
    tooltip: {
        shared: true,
        intersect: false,
        y: {
            formatter: function (y) {
                y = y.toString()
                if (typeof y !== "undefined") {
                    y = y.split(".")
                    y = y[0]
                    console.log(y)
                    
                    if (y.length >= 7) {
                        if(y.length == 8){
                            let value = y.slice(0, 3)
                            console.log("valor", value)
                            value = value.charAt(0) + value.charAt(1) + "," + value.charAt(2)
                            return value + " mi"
                        } else {
                            let value = y.slice(0, 2)
                            console.log("valor", value)
                            value = value.charAt(0) + "," + value.charAt(1)
                            return value + " mi"
                        } 
                    } else if (y.length == 6) {
                        let value = y.slice(0, 3)
                        console.log("valor", value)
                        return value + " mil"
                    } else if (y.length == 5){
                        let value = y.slice(0, 2)
                        console.log("valor", value)
                        return value + " mil"
                    } else if (y.length == 4){
                        let value = y.slice(0, 1)
                        console.log("valor", value)
                        return value + " mil"
                    }
                }
                return y;

            }
        }
    }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();