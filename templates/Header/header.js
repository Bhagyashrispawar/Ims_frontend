$(document).ready(function () {
    onListheader()
    getDateTime()
    
});
function onListheader (){

    $.ajax({
        url: "./../../assets/js/list.json",
        success: function (result) {
            $.each(result, function (index, item) {
                var name = item.name; //this should be in div class = "card-header"
                var headerIndex = item.numberIndex
                var items = item.items; //this should be in div class = "card-header"
    
                var html = '<div class="dropdown">';
                html += `<button class="btn  dropdown-toggle dropdown-btn" type="button" id=${headerIndex} data-bs-toggle="dropdown" aria-expanded="false">` + name + `</button>`;
                html += `<ul class="dropdown-menu" aria-labelledby=${headerIndex}>`;
                $.each(items, function (i, items) {
                    html += `<li><a class="dropdown-item" href=${items.link}>` + items.name + '</a></li>';
                })
                html += '</ul>';
                html += '</div>';
    
                $("#id").append(html);
    
            });
    
        }
    });
}


function getDateTime() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    if (month.toString().length == 1) {
        month = '0' + month;
    }
    if (day.toString().length == 1) {
        day = '0' + day;
    }
    if (hour.toString().length == 1) {
        hour = '0' + hour;
    }
    if (minute.toString().length == 1) {
        minute = '0' + minute;
    }
    if (second.toString().length == 1) {
        second = '0' + second;
    }
    var dateTime = day + '/' + month + '/' + year + ' ' + hour + ':' + minute + ':' + second;
    return dateTime;
}

// example usage: realtime clock
setInterval(function () {
    currentTime = getDateTime();
    document.getElementById("datetime").innerHTML = currentTime;
}, 1000);