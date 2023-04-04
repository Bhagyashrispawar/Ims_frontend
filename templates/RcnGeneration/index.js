$(document).ready(function () {
});
function depcalculate() {
    // Natural kl
    var ndepart = document.getElementById('ndepartment').value || 0;
    var narrival = document.getElementById('narrival').value || 0;
    var ndeff = document.getElementById('ndeff');
    var departResult = parseInt(ndepart) + parseInt(narrival);
    ndeff.value = departResult;
}
function klcalculate() {
    // kl and 15
    var kdepart = document.getElementById('kdepartment').value || 0;
    var karrival = document.getElementById('karrival').value || 0;
    var kdeff = document.getElementById('kdeff');
    var klResult = parseInt(kdepart) + parseInt(karrival);
    kdeff.value = klResult;
}
function mitcalculate() {
    // In mits
    var idepart = document.getElementById('idepartment').value || 0;
    var iarrival = document.getElementById('iarrival').value || 0;
    var ideff = document.getElementById('ideff');
    var mitsResult = parseInt(idepart) + parseInt(iarrival);
    ideff.value = mitsResult;



    // var ndeffper = ((parseInt(ndeffper) / parseInt(narrival)) * 100).toFixed(3);
    // console.log(ndeffper);
    // $('#ndeffper').val(ndeffper);
}
function saveFormdata() {
    var rceNo = $("#rcnNo").val();
    var rcnDate = $("#rcnDate").val();
    var supplier = $("#supplier").val();
    var prfdate = $("#prfdate").val();
    var prtdate = $("#prtdate").val();
    var fdate = $("#fdate").val();
    var tdate = $("#tdate").val();
    var nossicke = $("#nossicke").val();
    var qty = $("#qty").val();
    var ndepart = $("#ndepartment").val();
    var narrival = $("#narrival").val();
    var ndeff = $("#ndeff").val();
    var ndeffper = $("#ndeffper").text();

    var kdepart = $("#kdepartment").val();
    var karrival = $("#karrival").val();
    var kdeff = $("#kndeff").val();
    var kdeffper = $("#kdeffper").text();

    var idepart = $("#idepartment").val();
    var iarrival = $("#iarrival").val();
    var ideff = $("#ideff").val();
    var ideffper = $("#ideffper").text();

    var objectarryemail = {
        'rcnNo': rceNo, 'rcndate': rcnDate, 'supplier': supplier, 'prfdate': prfdate, 'prtdate': prtdate, 'fdate': fdate, 'tdate': tdate, 'sick': nossicke, "qty": qty,
        "narrival": narrival, "ndepartment": ndepart, "perDepartment": ndeffper, "diff": ndeff,
        "karrival": karrival, "kldepartment": kdepart, "perkl": kdeffper, "diffkl": kdeff,
        "iarrival": iarrival, "mitdepartment": idepart, "permits": ideffper, "diffmit": ideff
    }
    console.log(objectarryemail);



}