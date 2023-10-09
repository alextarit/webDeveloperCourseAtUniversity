function getDeliveryDate(args) {
    const nowTime = new Date()

    const borderTime = new Date()
    borderTime.setHours(20, 0, 0, 0)

    if (nowTime < borderTime) {
        nowTime.setDate(nowTime.getDate() + 1)
    } else {
        nowTime.setDate(nowTime.getDate() + 2)
    }

    while (args.includes((`${nowTime.getDate()}-${nowTime.getMonth() + 1}`))) {
        nowTime.setDate(nowTime.getDate() + 1)
    }

    function formatDate(date) {
        const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
        return `${date.getDate()} ${months[date.getMonth()]}`;
    }

    const formattedDate = formatDate(nowTime)

    return formattedDate;
}


const holidaysInput = document.querySelector("#holidays");
const output = document.querySelector("#output");

holidaysInput.addEventListener('input', () => {
    const holidays = holidaysInput.value.split(' ');
    const orderTime = getDeliveryDate(holidays);
    output.textContent = `Ближайшая дата доставки: ${orderTime}`;
});

// const holidays =["11-10", "12-10"]
// const orderTime = getDeliveryDate(holidays)
// console.log(orderTime)