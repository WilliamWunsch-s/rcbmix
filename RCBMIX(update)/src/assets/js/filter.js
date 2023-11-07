$(function() {
    // Calcula a data de 30 dias atrás
    var thirtyDaysAgo = new Date()
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)

    // Converte a data de 30 dias atrás em uma string no formato "mm/dd/yyyy"
    var thirtyDaysAgoFormatted = ((thirtyDaysAgo.getMonth() + 1) < 10 ? '0' : '') + (thirtyDaysAgo.getMonth() + 1) + '/' + (thirtyDaysAgo.getDate() < 10 ? '0' : '') + thirtyDaysAgo.getDate() + '/' + thirtyDaysAgo.getFullYear()

    $("#from-date").datepicker({
        dateFormat: "mm/dd/yy" // Define o formato de data desejado para "From"
    })
    console.log(typeof thirtyDaysAgoFormatted)
    // Define o placeholder do campo "From" como "30 dias atrás"
    $("#from-date").attr("placeholder", "23.09.2023")

    // Obtém a data atual e a formata no formato "mm/dd/yyyy"
    var currentDate = new Date()
    var currentDateFormatted = ((currentDate.getMonth() + 1) < 10 ? '0' : '') + (currentDate.getMonth() + 1) + '/' + (currentDate.getDate() < 10 ? '0' : '') + currentDate.getDate() + '/' + currentDate.getFullYear()

    $("#to-date").datepicker({
        dateFormat: "mm/dd/yy" // Define o formato de data desejado para "To"
    })
    console.log(typeof currentDateFormatted)
    // Define o valor padrão para o campo "To" como a data atual formatada corretamente
    $("#to-date").attr("placeholder", "23.09.2023")
})

$(function() {
    $("#from-date").datepicker()
    $("#to-date").datepicker()
})