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
        ],
        
    }],
    chart: {
        height: 450,
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
        size: 0
    },
    legend: {
        labels: {
            colors: '#CACDD1',
            useSeriesColors: false
        },
        markers: {
            width: 12,
            height: 12,
            fillColors: ["#14c03d", '#00cfe8', '#ea5455'],
            radius: 2,
        }
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
                fontWeight: 500,
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
                fontWeight: 600,
                cssClass: 'apexcharts-xaxis-label-y',
            },
            formatter: function(val) {
                val = val.toString().split('.')
                val = val[0]
                if (val.length >= 7) {
                    if (val.length == 8){
                        val = val.slice(0,3)
                        val = val.charAt(0) + val.charAt(1) + "," + val.charAt(2)
                        return val + " mi"
                    } else {
                        val = val.slice(0, 2)
                        val = val.charAt(0) + "," + val.charAt(1)
                        return val + " mi"
                    }                    
                } else if (val.length == 6) {
                    val = val.slice(0, 3)
                    return val + " mil"
                } else if (val.length == 5){
                    val = val.slice(0, 2)
                    return val + " mil"
                } else if (val.length == 4){
                    val = val.slice(0, 1)
                    return val + " mil"
                }
                return val[0]
            }
        }
    },
    tooltip: {
        shared: true,
        intersect: false,
        marker: {
            width: 12,
            height: 12,
            fillColors: ["#14c03d", '#00cfe8', '#ea5455'],
        },
        theme: 'dark',
        y: {
            formatter: function (y) {
                y = y.toString()
                if (typeof y !== "undefined") {
                    y = y.split(".")
                    y = y[0]
                    
                    if (y.length >= 7) {
                        if(y.length == 8){
                            let value = y.slice(0, 3)

                            value = value.charAt(0) + value.charAt(1) + "," + value.charAt(2)
                            return value + " mi"
                        } else {
                            let value = y.slice(0, 2)

                            value = value.charAt(0) + "," + value.charAt(1)
                            return value + " mi"
                        } 
                    } else if (y.length == 6) {
                        let value = y.slice(0, 3)
                        return value + " mil"
                    } else if (y.length == 5){
                        let value = y.slice(0, 2)
                        return value + " mil"
                    } else if (y.length == 4){
                        let value = y.slice(0, 1)
                        return value + " mil"
                    }
                }
                return y

            }
        }
    }
}

var chart = new ApexCharts(document.querySelector("#chart"), options)
chart.render()

let dados = options.series
let empresasData = {} // Objeto para armazenar os dados por empresa

dados.forEach(serie => {
    let categoria = serie.name // 'FATURADO', 'LUCRO' ou 'GASTO'

    serie.data.forEach((valor, indice) => {
        let empresa = empresas[indice]

        if (!empresasData[empresa]) {
            empresasData[empresa] = {} // Inicialize o objeto da empresa se não existir
        }

        empresasData[empresa][categoria.toLowerCase()] = valor // Defina o valor da categoria para a empresa
    })
})

let endEmpresas = [empresasData]
console.log(endEmpresas)
let faturado = document.getElementById('faturado')
let gasto = document.getElementById('gasto')
let lucro = document.getElementById('lucro')
let selectElement = document.getElementById('form-field')

const nomeEmpresas = Object.keys(endEmpresas[0]);

// Adicione as opções ao elemento select
nomeEmpresas.forEach(nomeEmpresa => {
    let option = document.createElement('option');
    option.value = nomeEmpresa;
    option.textContent = nomeEmpresa;
    selectElement.appendChild(option);
})

function formatValue(val) {
    val = val.toString().split('.');
    val = val[0];
    if (val.length >= 7) {
        if (val.length == 8) {
            val = val.slice(0, 3);
            val = val.charAt(0) + val.charAt(1) + "," + val.charAt(2);
            return val + " mi";
        } else {
            val = val.slice(0, 2);
            val = val.charAt(0) + "," + val.charAt(1);
            return val + " mi";
        }
    } else if (val.length == 6) {
        val = val.slice(0, 3);
        return val + " mil";
    } else if (val.length == 5) {
        val = val.slice(0, 2);
        return val + " mil";
    } else if (val.length == 4) {
        val = val.slice(0, 1);
        return val + " mil";
    }
    return val;
}

function calcularSomaTotal() {
    // Inicialize as somas com zero
    let somaFaturado = 0
    let somaGasto = 0
    let somaLucro = 0

    // Itere sobre as empresas e some os valores
    for (const nomeEmpresa in endEmpresas[0]) {
        const empresa = endEmpresas[0][nomeEmpresa]
        somaFaturado += empresa.faturado
        somaGasto += empresa.gasto
        somaLucro += empresa.lucro
    }

    return {
        somaFaturado: formatValue(somaFaturado),
        somaGasto: formatValue(somaGasto),
        somaLucro: formatValue(somaLucro),
    };
}

function updateValues(selectedCompany) {
    if (selectedCompany === 'Default') {
        let somaTotal = calcularSomaTotal();
        faturado.textContent = `R$ ${somaTotal.somaFaturado}`;
        gasto.textContent = `R$ ${somaTotal.somaGasto}`;
        lucro.textContent = `R$ ${somaTotal.somaLucro}`;
    } else {
        const selectedEmpresa = endEmpresas[0][selectedCompany];

        if (selectedEmpresa) {
            faturado.textContent = `R$ ${formatValue(selectedEmpresa.faturado)}`;
            gasto.textContent = `R$ ${formatValue(selectedEmpresa.gasto)}`;
            lucro.textContent = `R$ ${formatValue(selectedEmpresa.lucro)}`;
        }
    }
}

// Adiciona o evento "change"
selectElement.addEventListener('change', (event) => {
    const selectedCompany = event.target.value
    updateValues(selectedCompany) // Chama a função para atualizar os valores
})

// Chamada inicial para exibir os valores padrão
updateValues('Default')
