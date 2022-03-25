const term_data_returner = (term, year) => {

    let data = require('./excel_util_import.js')()

    console.log(`data = ${data}`)
    let term_info = require('./term_info.js')()

    let start_month, end_month

    term_info.forEach(termer => {
        if (termer.term === term) {
            start_month = termer.start_month
            end_month = termer.end_month
        }
    })
    return data.filter((record, index) => {
        let month_of_time_log = record["Date"].getMonth()

        console.log(`Row num = ${index}`)
        console.log(`month_of_time_log = ${month_of_time_log}`)
        console.log("record[\"Date\"] = ", record["Date"])


        let year_of_time_log = record["Date"].getFullYear()

        if (month_of_time_log >= start_month && month_of_time_log <= end_month && year_of_time_log === year) {
            return record
        }
    })
}

module.exports = term_data_returner
