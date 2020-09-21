const loadCalendar = () => {
    const initialDate = new Date(new Date().getFullYear(), 0, 1);
    const lastDayYear = new Date(new Date().getFullYear(), 11, 31);

    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const yearDates = {};

    while (initialDate.getTime() !== lastDayYear.getTime()) {
        if (yearDates[months[initialDate.getMonth()]]) {
            yearDates[months[initialDate.getMonth()]].push(initialDate.getDate());
        } else {
            yearDates[months[initialDate.getMonth()]] = [initialDate.getDate()];
        }

        initialDate.setDate(initialDate.getDate() + 1)
    }





    let html = '';

    months.forEach(month => {
        html += '<table><tr>' + weekDays.map(item => `<th>${item}</th>`) + '</tr>';

        let count = day;
        yearDates[month].forEach(day => {

            if (count === 7) {
                html += `<td>${day}</td></tr>`;
                count = 1;
            } if (count === 1) {
                html += `<tr><td>${day}</td>`;
            } else {
                html += `<td>${day}</td>`;
            }

            count++;
        });

        html += '</tr></table>';
    })

    document.getElementById("calendar").innerHTML = html;
}





// const aaaa = new Date(new Date().getFullYear(), 11, 31)


// console.log(lastDayYear)
// console.log(aaaa)

// if() {
//     console.log("AAAAAAAAA")
// } else {
//     console.log("CCCCCCCCC")
// }


// 


// // tomorrow.setDate(tomorrow.getDate() + 1);

// // const d = new Date();
// // document.write("The current month is " + monthNames[d.getMonth()]);