$(document).ready(function () {



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



});