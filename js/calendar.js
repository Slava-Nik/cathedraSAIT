function createCalendar(id, year, month) {
      var elem = document.getElementById(id);
      var weekDays = ['ПН','ВТ','СР','ЧТ','ПТ','СБ','ВС'];
     (function createFrame() {
      var table = document.createElement("table");
      elem.appendChild(table);
      table.id = "table";

      for(var row = 0; row < 6; row++) {
        var tr = document.createElement("tr");
        table.appendChild(tr);
        for(var col = 0; col<7; col++) {
          if(row===0) {
            var th = document.createElement("th");
            th.innerHTML = weekDays[col];
            table.lastElementChild.appendChild(th);
          }else {
            var td = document.createElement("td");
            table.lastElementChild.appendChild(td);
           }
        }
      }
    })();



    var dayCells = table.getElementsByTagName("td");
    var requiredDate = new Date(year,month-1);

    // Определяем последний день месяца
    var monthEnd = new Date(+requiredDate);
    var lastDay = 31;
    monthEnd.setDate(lastDay);

    for( var i = 0; i < 3; i++ ) {
      if( monthEnd.getMonth()!== requiredDate.getMonth() ) {
        monthEnd.setMonth(month-1);
        monthEnd.setDate(--lastDay);
      }else break;
    }
    // Определяем день недели первого числа и заполняем календарь

    var firstWeekDay  = new Date(+requiredDate).getDay();
    firstWeekDay = firstWeekDay - 1;

try {
   for( var j = 0; j < lastDay; j++ ) {
      dayCells[firstWeekDay + j].innerHTML = j+1;
   }
} catch(e) {
    var lastTr = document.createElement("tr");
    for(var k=0; k<=6; k++) {
      var td = document.createElement("td");
      if(k===0)   td.innerHTML = "31";
      lastTr.appendChild(td);
    }
    table.appendChild(lastTr);
 }

 var tableCells = table.getElementsByTagName("td");
 for( var l=0; l < tableCells.length; l++ ) {
   if( tableCells[l].innerHTML==="" ) {
     tableCells[l].style.backgroundColor = "#92c3ff";
   }
 }

 var today = new Date();
 if( requiredDate.getMonth()===today.getMonth() ) {
   for( var day=0;  day < tableCells.length; day++ ) {
     if( tableCells[day].innerHTML==today.getDate() ) {
       tableCells[day].style.border = "3px solid red";
        tableCells[day].style.backgroundColor = "#FFB4B4";
        tableCells[day].style.fontWeight = "600";
       break;
     }
   }
 }

}

var today = new Date();
var year = today.getFullYear();
var month = today.getMonth();

var months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь","Ноябрь", "Декабрь"];
var currentMonth = months[month];

var spanMonth = calendar.querySelector("#calendar .month");
var spanYear = calendar.querySelector("#calendar .year");

spanMonth.innerHTML = currentMonth + " ";
spanYear.innerHTML = year;
createCalendar('calendar', year, month+1);
