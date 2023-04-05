$(document).ready(function () {
    var now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    document.getElementById('rcnDate').value = now.toISOString().slice(0, 16);
    document.getElementById('prtdate').value = now.toISOString().slice(0, 16);
    document.getElementById('tdate').value = now.toISOString().slice(0, 16);



});

function exportPdf (){
    window.onload = function () {
        document.getElementById("download")
            .addEventListener("click", () => {
                const invoice = this.document.getElementById("output");
                console.log(invoice);
                console.log(window);
                var opt = {
                    margin: 0.5,
                    filename: 'record.pdf',
                    image: { type: 'jpeg', quality: 1 },
                    html2canvas: { scale: 2 },
                    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
                };
                html2pdf().from(invoice).set(opt).save();
            })
    }
}

var rceNo = $("#rcnNo").val();
var rcnDate = $("#rcnDate").val();
var supplier = $("#supplier").val();
var prfdate = $("#prfdate").val();
var prtdate = $("#prtdate").val();
var fdate = $("#fdate").val();
var tdate = $("#tdate").val();
var nossicke = $("#nossicke").val();
var nowagon = $("#nowagon").val()
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

function depcalculate() {
    // Natural kl
    var ndepart = document.getElementById('ndepartment').value || 0;
    var narrival = document.getElementById('narrival').value || 0;
    var ndeff = document.getElementById('ndeff');
    // Addition
    var departResult = parseInt(ndepart) + parseInt(narrival);
    ndeff.value = departResult;
    //  Percentage
    var perd = ((ndepart/narrival) * 100).toFixed(3);
    $('#ndeffper').val(perd + '%');
}
function klcalculate() {
    // kl and 15
    var kdepart = document.getElementById('kdepartment').value || 0;
    var karrival = document.getElementById('karrival').value || 0;
    var kdeff = document.getElementById('kdeff');
    // Addition
    var klResult = parseInt(kdepart) + parseInt(karrival);
    kdeff.value = klResult;
    // Percentage
    var perk = ((kdepart/karrival) * 100).toFixed(3);
    $('#kdeffper').val(perk + '%');
}
function mitcalculate() {
    // In mits
    var idepart = document.getElementById('idepartment').value || 0;
    var iarrival = document.getElementById('iarrival').value || 0;
    var ideff = document.getElementById('ideff');
    // Addtion
    var mitsResult = parseInt(idepart) + parseInt(iarrival);
    ideff.value = mitsResult;
    // Percentage
    var perm = ((idepart/iarrival) * 100).toFixed(3);
    $('#ideffper').val(perm + '%');

}

// function checking() {
//     if (rceNo.type) {
        
//     }
// }

function clearData(){
    document.getElementById("submithandler").reset()
}

function saveFormdata() {


    var objectarryemail = {
        'rcnNo': rceNo, 'rcndate': rcnDate, 'supplier': supplier, 'prfdate': prfdate, 'prtdate': prtdate, 'fdate': fdate, 'tdate': tdate, 'sick': nossicke, "qty": qty,
        "narrival": narrival, "ndepartment": ndepart, "perDepartment": ndeffper, "diff": ndeff,
        "karrival": karrival, "kldepartment": kdepart, "perkl": kdeffper, "diffkl": kdeff,
        "iarrival": iarrival, "mitdepartment": idepart, "permits": ideffper, "diffmit": ideff, "nowagon":nowagon
    }
    if (rceNo === '', rcnDate === '', supplier === '', prfdate === '', prtdate === '', fdate === '', tdate === '', nossicke === '', qty === '',
        narrival === '', ndepart === '', ndeffper === '', ndeff === '',
        karrival === '', kdepart === '', kdeffper === '', kdeff === '',
        iarrival === '', idepart === '', ideffper === '', ideff === '', nowagon==='') {
        alert("Fill the data")
    }
    else{
        alert("Submit Successfully")
        console.log(objectarryemail);
    }
}