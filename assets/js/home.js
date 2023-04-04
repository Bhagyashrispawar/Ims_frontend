$(document).ready(function() {
    $("#nav").load("./../../templates/Header/header.html", function() {
        // alert('navigation loaded');
    });
    $("#ITTRequest_content").load("./../../templates/ITTRequest/ITTRequest.html");
    $("#PhysicalGaugingReport_content").load("./../../templates/PhysicalGaugingReport/PhysicalGaugingReport.html");
    $("#RakeOTRSummary_content").load("./../../templates/RakeOTRSummary/RakeUnloadingSummary.html");
    $("#ITTSummary_content").load("./../../templates/ITTSummary/ITTSummary.html");
});