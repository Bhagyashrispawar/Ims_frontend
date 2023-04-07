 /*$(document).ready(function () {

    // Date object
    $(".dateCurrent").val(new Date().toJSON().slice(0, 10));

    console.log(true && true && false);
});*/
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
    $("#tankTable tbody tr").each(function () {
        var row = $(this);
        var customer = {};
        customer.supplier_name = row.find("TD").eq(0).html();
        customer.supplier_details = row.find("TD").eq(1).html();
        
        customers.push(customer);

    });

}
 

//Send the JSON array to Controller using AJAX.
function btnAdd() {

    var inputName = $("#tank_name");
    var inputDetails = $("#tank_details");
    
    //Get the reference of the Table's TBODY element.
    var tBody = $("#tankTable > TBODY")[0];

    if (inputName.val() !== '' && inputDetails.val() !== '') {
        //Add Row.
        var row = tBody.insertRow(-1);

        //Add name cell.
        var cell = $(row.insertCell(-1));
        cell.html(inputName.val());

        //Add detail cell.
        cell = $(row.insertCell(-1));
        cell.html(inputDetails.val());

       

        //Add Button cell.
        // cell = $(row.insertCell(-1));
        // var btnRemove = $("<input />");
        // btnRemove.attr("type", "button");
        // btnRemove.attr("onclick", "Remove(this);");
        // btnRemove.val("Remove");
        // cell.append(btnRemove);

        //Clear the TextBoxes.
        inputName.val("");
        inputDetails.val("");
        
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
        var table = $("#tankTable")[0];

        //Delete the Table row using it's Index.
        table.deleteRow(row[0].rowIndex);
    }
};

/*
function ExportToExcel(type, fn, dl) {
    var elt = document.getElementById('pipelineTable');
    var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
    return dl ?
        XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }) :
        XLSX.writeFile(wb, fn || ('MySheetName.' + (type || 'xlsx')));
}*/
