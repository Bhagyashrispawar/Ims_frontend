$(document).ready(function() {
    $("#nav").load("./../../templates/Header/header.html", function() {
        // alert('navigation loaded');
    });
    $("#left-sidebar").load("./../../templates/left-sidebar/left-sidebar.html");
    $("#layoutSidenav_content").load("./../../templates/dashboard/dashboard.html");
    $("#ITTRequest_content").load("./../../templates/ITTRequest/ITTRequest.html");
    $("#PhysicalGaugingReport_content").load("./../../templates/PhysicalGaugingReport/PhysicalGaugingReport.html");
    $("#RakeOTRSummary_content").load("./../../templates/RakeOTRSummary/RakeUnloadingSummary.html");
    $("#ITTSummary_content").load("./../../templates/ITTSummary/ITTSummary.html");
});