$(document).ready(function() {
    $("#nav").load("./../../templates/Header/header.html", function() {
        // alert('navigation loaded');
    });
    $("#left-sidebar").load("./../../templates/left-sidebar/left-sidebar.html");
    $("#layoutSidenav_content").load("./../../templates/dashboard/dashboard.html");
});