$(document).ready(function () {

    // Date object
    $(".dateCurrent").val(new Date().toJSON().slice(0, 10));

    console.log(true && true && false);
});
// alert
// var successAddition
// function confirmdata() {

//     $.confirm({
//         title: 'Confirm!',
//         content: 'Are you sure to add data?',
//         buttons: {
//             confirm: function () {
//                 $.alert('Confirmed!');
//                 successAddition = "success";
//             },
//             cancel: function () {
//                 $.alert('Canceled!');
//             },

//         }
//     });
// }
// console.log(successAddition);
function savedata() {
    //Loop through the Table rows and build a JSON array.
    var customers = new Array();
    $("#pipelineTable tbody tr").each(function () {
        var row = $(this);
        var customer = {};
        customer.type = row.find("TD").eq(0).html();
        customer.code = row.find("TD").eq(1).html();
        customer.pipeline_description = row.find("TD").eq(2).html();
        customer.height_in_mtr = row.find("TD").eq(3).html();
        customer.dia_in_mtr = row.find("TD").eq(4).html();
        customer.length_in_meters = row.find("TD").eq(5).html();
        customer.volume_in_liters = row.find("TD").eq(6).html();
        customer.last_calibration = row.find("TD").eq(7).html();
        customer.calibration_upto = row.find("TD").eq(8).html();
        customer.calibration_due = row.find("TD").eq(9).html();
        customer.remarks = row.find("TD").eq(10).html();
        customers.push(customer);

    });

}


//Send the JSON array to Controller using AJAX.
function btnAdd() {

    var inputType = $("#type");
    var inputCode = $("#code");
    var inputDescription = $("#description");
    var inputHeigth = $('#height');
    var inputDi = $('#dimtr');
    var inputLength = $('#length');
    var inputVolumn = $('#volumn');
    var inputLastca = $('#lastca');
    var inputCaliUpto = $('#calibrationupto');
    var inputCaliDue = $('#calibrationdue');
    var inputRemark = $("#remark")

    //Get the reference of the Table's TBODY element.
    var tBody = $("#pipelineTable > TBODY")[0];

    if (inputType.val() !== '' && inputCode.val() !== ''
        && inputDescription.val() !== ''
        && inputHeigth.val() !== ''
        && inputDi.val() !== '' && inputLength.val() !== '' && inputVolumn.val() !== '' &&

        inputRemark.val() !== '') {
        //Add Row.
        var row = tBody.insertRow(-1);

        //Add Type cell.
        var cell = $(row.insertCell(-1));
        cell.html(inputType.val());

        //Add Code cell.
        cell = $(row.insertCell(-1));
        cell.html(inputCode.val());

        //Add Description cell.
        cell = $(row.insertCell(-1));
        cell.html(inputDescription.val());

        //Add height cell.
        cell = $(row.insertCell(-1));
        cell.html(inputHeigth.val());

        //Add dim cell.
        cell = $(row.insertCell(-1));
        cell.html(inputDi.val());

        //Add lenght cell.
        cell = $(row.insertCell(-1));
        cell.html(inputLength.val());

        //Add VOLUMN cell.
        cell = $(row.insertCell(-1));
        cell.html(inputVolumn.val());

        //Add lastca cell.
        cell = $(row.insertCell(-1));
        cell.html(inputLastca.val());

        //Add calibration Upto cell.
        cell = $(row.insertCell(-1));
        cell.html(inputCaliUpto.val());

        //Add calibration Deu cell.
        cell = $(row.insertCell(-1));
        cell.html(inputCaliDue.val());

        //Add Remark cell.
        cell = $(row.insertCell(-1));
        cell.html(inputRemark.val());

        //Add Button cell.
        // cell = $(row.insertCell(-1));
        // var btnRemove = $("<input />");
        // btnRemove.attr("type", "button");
        // btnRemove.attr("onclick", "Remove(this);");
        // btnRemove.val("Remove");
        // cell.append(btnRemove);

        //Clear the TextBoxes.
        inputType.val("");
        inputCode.val("");
        inputDescription.val("");
        inputHeigth.val("");
        inputDi.val("");
        inputLength.val("");
        inputVolumn.val("");
        inputLastca.val(new Date().toJSON().slice(0, 10));
        inputCaliUpto.val(new Date().toJSON().slice(0, 10));
        inputCaliDue.val(new Date().toJSON().slice(0, 10));
        inputRemark.val("");
    }
    else {
        alert("Fill data first")
    }
}



function Remove(button) {
    //Determine the reference of the Row using the Button.
    var row = $(button).closest("TR");
    var name = $("TD", row).eq(0).html();
    if (confirm("Do you want to delete: " + name)) {
        //Get the reference of the Table.
        var table = $("#pipelineTable")[0];

        //Delete the Table row using it's Index.
        table.deleteRow(row[0].rowIndex);
    }
};


function ExportToExcel(type, fn, dl) {
    var elt = document.getElementById('pipelineTable');
    var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
    return dl ?
        XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }) :
        XLSX.writeFile(wb, fn || ('MySheetName.' + (type || 'xlsx')));
}