"use strict";

function getDeliveryDate(args) {
  var nowTime = new Date();
  var borderTime = new Date();
  borderTime.setHours(20, 0, 0, 0);

  if (nowTime < borderTime) {
    nowTime.setDate(nowTime.getDate() + 1);
  } else {
    nowTime.setDate(nowTime.getDate() + 2);
  }

  while (args.includes("".concat(nowTime.getDate(), "-").concat(nowTime.getMonth() + 1))) {
    nowTime.setDate(nowTime.getDate() + 1);
  }

  function formatDate(date) {
    var months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    return "".concat(date.getDate(), " ").concat(months[date.getMonth()]);
  }

  var formattedDate = formatDate(nowTime);
  return formattedDate;
}

var holidaysInput = document.querySelector("#holidays");
var output = document.querySelector("#output");
holidaysInput.addEventListener('input', function () {
  var holidays = holidaysInput.value.split(' ');
  var orderTime = getDeliveryDate(holidays);
  output.textContent = "\u0411\u043B\u0438\u0436\u0430\u0439\u0448\u0430\u044F \u0434\u0430\u0442\u0430 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438: ".concat(orderTime);
}); // const holidays =["11-10", "12-10"]
// const orderTime = getDeliveryDate(holidays)
// console.log(orderTime)