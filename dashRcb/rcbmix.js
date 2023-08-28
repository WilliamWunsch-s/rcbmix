let selectElement = document.getElementById('form-field2')
let totalFaturado = document.getElementById('faturado')
let totalGasto = document.getElementById('gasto')
let toneladas = document.getElementById('toneladas')
let mediaCaminhao = document.getElementById('mediaCaminhao')

let empresas = [
empresaA = {
    "nome": "rcbmixA",
    "faturado": 10.000,
    "gasto": 2.500,
    "toneladas": 200,
    "mediaCaminhao": 3.000
},
empresaB = {
    "nome": "rcbmixB",
    "faturado": 11.000,
    "gasto": 3.500,
    "toneladas": 300,
    "mediaCaminhao": 4.000
},
empresaC = {
    "nome": "rcbmixC",
    "faturado": 12.000,
    "gasto": 4.500,
    "toneladas": 500,
    "mediaCaminhao": 5.000
}]

empresas.forEach(empresa => {
    let option = document.createElement('option')
    option.value = empresa.nome
    option.textContent = empresa.nome
    selectElement.appendChild(option)
})
function calcularSomaTotal() {
    let somaFaturado = empresas.reduce((total, empresa) => total + empresa.faturado, 0)
    let somaGasto = empresas.reduce((total, empresa) => total + empresa.gasto, 0)
    let somaToneladas = empresas.reduce((total, empresa) => total + empresa.toneladas, 0)
    let somaMediaCaminhao = empresas.reduce((total, empresa) => total + empresa.mediaCaminhao, 0)

    return {
        somaFaturado,
        somaGasto,
        somaToneladas,
        somaMediaCaminhao
    }
}

function updateValues (selectedCompany){
    if (selectedCompany === 'Default') {
        let somaTotal = calcularSomaTotal()

        totalFaturado.innerHTML = `<h3 class="font-bold text-3xl text-white">R$ ${somaTotal.somaFaturado.toLocaleString('pt-BR', {minimumFractionDigits: 3})}</h3>
        <h5 class="font-bold text-white text-center">Total Faturado</h5>`

        totalGasto.innerHTML = `<h3 class="font-bold text-3xl text-white">R$ ${somaTotal.somaGasto.toLocaleString('pt-BR', {minimumFractionDigits: 3})}</h3>
        <h5 class="font-bold text-white text-center">Total Gasto</h5>`

        toneladas.innerHTML = `<h3 class="font-bold text-3xl text-white text-center">${somaTotal.somaToneladas}</h3>
        <h5 class="font-bold text-white text-center">Toneladas Transportadas</h5>`

        mediaCaminhao.innerHTML = `<h3 class="font-bold text-3xl text-white">R$ ${somaTotal.somaMediaCaminhao.toLocaleString('pt-BR', {minimumFractionDigits: 3})}</h3>
        <h5 class="font-bold text-white text-center">Média por Caminhão</h5>`
    } else {
        let selectedEmpresa = empresas.find(empresa => empresa.nome === selectedCompany)

        if (selectedEmpresa) {
            totalFaturado.innerHTML = `<h3 class="font-bold text-3xl text-white">R$ ${selectedEmpresa.faturado.toLocaleString('pt-BR', {minimumFractionDigits: 3})}</h3>
            <h5 class="font-bold text-white text-center">Total Faturado</h5>`
            
            totalGasto.innerHTML = `<h3 class="font-bold text-3xl text-white">R$ ${selectedEmpresa.gasto.toLocaleString('pt-BR', {minimumFractionDigits: 3})}</h3>
            <h5 class="font-bold text-white text-center">Total Gasto</h5>`
            
            toneladas.innerHTML = `<h3 class="font-bold text-3xl text-white text-center">${selectedEmpresa.toneladas}</h3>
            <h5 class="font-bold text-white text-center">Toneladas Transportadas</h5>`
            
            mediaCaminhao.innerHTML = `<h3 class="font-bold text-3xl text-white">R$ ${selectedEmpresa.mediaCaminhao.toLocaleString('pt-BR', {minimumFractionDigits: 3})}</h3>
            <h5 class="font-bold text-white text-center">Média por Caminhão</h5>`
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

function atualizarGrafico(serie, cor) {
    mainChart.update({
        series: [serie],
        options: {
            lineSmooth: {
                type: 'monotone',
                fillOpacity: 0.5
            },
            low: 0,
            showArea: true,
            showPoint: false,
            fullWidth: true,
            lineSmooth: Chartist.Interpolation.simple({
                divisor: 2
            }),
            chartPadding: {
                right: 30
            },
            plugins: [
                Chartist.plugins.tooltip()
            ],
            axisX: {
                showGrid: false
            },
            axisY: {
                onlyInteger: true,
                showGrid: false,
            },
            fullWidth: true,
            series: {
                [serie.name]: {
                    lineSmooth: Chartist.Interpolation.simple(),
                    showArea: true,
                    showPoint: false,
                    color: cor
                }
            }
        }
    })
}

const data = {
    labels: [empresas[0].nome, empresas[0].nome, empresas[0].nome,empresas[0].nome],
    series: [
        [1, 1, 5, 2, 5, 4, 3, 7, 8, 9, 10, 11], // Gastos
        [2, 3, 4, 8, 1, 2, 4, 5, 10, 23, 42, 12], // Toneladas
        [5, 4, 3, 2, 1, 0.5, 1, 8, 10, 11, 23, 24] // Faturado
    ]
}

// Opções do gráfico
const options = {
    low: 0,
    showArea: true,
    showPoint: false,
    fullWidth: true
}
function alternarClasseSerie(classeSerie) {
    const grafico = document.getElementById('chart3');

    // Remova todas as classes da série
    grafico.classList.remove('ct-series-a', 'ct-series-b', 'ct-series-c');

    // Adicione a classe da série desejada
    grafico.classList.add(classeSerie);
}

// Crie o gráfico inicialmente
const mainChart = new Chartist.Line('#chart1', data, options)
const mostraFaturados = document.getElementById('mostraFaturados');
const mostraGastos = document.getElementById('mostraGastos');
const mostraToneladas = document.getElementById('mostraToneladas');

mostraFaturados.addEventListener('click', () => {
    alternarClasseSerie('ct-series-c');
    mainChart.update({
        series: [data.series[2]],
        labels: data.labels // Mostra apenas a série "Faturado"
    });
});

mostraGastos.addEventListener('click', () => {
    alternarClasseSerie('ct-series-a');
    mainChart.update({
        series: [data.series[0]],
        labels: data.labels // Mostra apenas a série "Gastos"
    });
});

mostraToneladas.addEventListener('click', () => {
    alternarClasseSerie('ct-series-b');
    mainChart.update({
        series: [data.series[1]],
        labels: data.labels // Mostra apenas a série "Toneladas"
    });
});
function mostrarTudo() {
    alternarClasseSerie('ct-series-default'); // Defina a classe padrão
    mainChart.update(data); // Restaure os dados originais
}

const mostraTudoBtn = document.getElementById('mostraTudo');
mostraTudoBtn.addEventListener('click', mostrarTudo);

mainChart.on('draw', function(data) {
    if (data.type === 'line' || data.type === 'area') {
        data.element.animate({
            d: {
                begin: 1000 * data.index,
                dur: 1000,
                from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                to: data.path.clone().stringify(),
                easing: Chartist.Svg.Easing.easeOutQuint
            }
        })
    }
})

var chartScatter = new Chartist.Line('#chart2', {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    series: [
        [12, 9, 7, 8, 5, 4, 6, 2, 3, 3, 4, 6],
        [4, 5, 3, 7, 3, 5, 5, 3, 4, 4, 5, 5],
        [5, 3, 4, 5, 6, 3, 3, 4, 5, 6, 3, 4],
        [3, 4, 5, 6, 7, 6, 4, 5, 6, 7, 6, 3]
    ]
}, {
    low: 0
})

chartScatter.on('draw', function(data) {
    if (data.type === 'line' || data.type === 'area') {
        data.element.animate({
            d: {
                begin: 500 * data.index,
                dur: 1000,
                from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                to: data.path.clone().stringify(),
                easing: Chartist.Svg.Easing.easeOutQuint
            }
        })
    }
})

var chartBar = new Chartist.Bar('#chart3', {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    series: [
        [800000, 1200000, 1400000, 1300000],
        [200000, 400000, 500000, 300000],
        [100000, 200000, 400000, 600000]
    ]
}, {
    stackBars: true,
    axisY: {
        labelInterpolationFnc: function(value) {
            return (value / 1000) + 'k'
        }
    }
})

chartBar.on('draw', function(data) {
    if (data.type === 'bar') {
        data.element.attr({
                style: 'stroke-width: 30px'
            }),
            data.element.animate({
                y2: {
                    dur: '0.5s',
                    from: data.y1,
                    to: data.y2
                }
            })
    }
})

var chartPie = new Chartist.Pie('#chart4', {
    series: [10, 20, 50, 20, 5, 50, 15],
    labels: [1, 2, 3, 4, 5, 6, 7]
}, {
    donut: true,
    showLabel: true
})

chartPie.on('draw', function(data) {
    if (data.type === 'slice') {
        var pathLength = data.element._node.getTotalLength()
        data.element.attr({
            'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
        })

        var animationDefinition = {
            'stroke-dashoffset': {
                id: 'anim' + data.index,
                dur: 200,
                from: -pathLength + 'px',
                to: '0px',
                easing: Chartist.Svg.Easing.easeOutQuint,
                fill: 'freeze'
            }
        }

        if (data.index !== 0) {
            animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end'
        }

        data.element.attr({
            'stroke-dashoffset': -pathLength + 'px'
        })

        data.element.animate(animationDefinition, false)
    }
})
