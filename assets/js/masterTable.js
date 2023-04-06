$(document).ready(function () {
  $("#nav").load("./../../templates/Header/header.html", function () { });
    $("#pipelineTable").load("./../../templates/Mastertablesub/PipelineVolumeMaster.html");
    $("#productTable").load("./../../templates/Mastertablesub/ProductMaster.html");
    $("#pumpTable").load("./../../templates/Mastertablesub/PumpMaster.html");
    $("#supplierTable").load("./../../templates/Mastertablesub/SupplierMaster.html");
    $("#surveyTable").load("./../../templates/Mastertablesub/SurveyMaster.html");
    $("#tankCalibrationTable").load("./../../templates/Mastertablesub/TankCalibrationMaster.html");
    $("#tankTable").load("./../../templates/Mastertablesub/TankMaster.html");
    $("#userTable").load("./../../templates/Mastertablesub/UserMaster.html");


});
