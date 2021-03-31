// JavaScript Document
window.load=doShowAll();
function CheckBrowser() {
    if ('localStorage' in window && window['localStorage'] !== null) {
        // We can use localStorage object to store data.
        return true;
    } else {
            return false;
    }
}
// Dynamically populate the table with symptoms.
//Step below can be done via PHP and AJAX, too.
function doShowAll() {
    if (CheckBrowser()) {
        var key = "";
        var list = "<tr><th>Activity</th><br><br><th>Date</th></tr>\n";
        var i = 0;
        //For a more advanced feature, you can set a cap on max items in the cart.
        for (i = 0; i <= localStorage.length-1; i++) {
            key = localStorage.key(i);
            list += "<tr><td>" + key + "</td>\n<td>"
                    + localStorage.getItem(key) + "</td></tr>\n";
        }
        //If no item exists in the cart.
        if (list == "<tr><th>Activity</th><th>Value</th></tr>\n") {
            list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
        }
        //Bind the data to HTML table.
        //You can use jQuery, too.
        document.getElementById('list').innerHTML = list;
		
    } else {
        alert('Cannot save Activity as your browser does not support HTML 5');
    }
}
localStorage.myProperty="myValue";
delete localStorage.myProperty;
function SaveItem() {

    var name = document.forms.ShoppingList.name.value;
    var data = document.forms.ShoppingList.data.value;
    localStorage.setItem(name, data);
    doShowAll();

}
//Change an existing key-value in HTML5 storage.
function ModifyItem() {
    var name1 = document.forms.ShoppingList.name.value;
    var data1 = document.forms.ShoppingList.data.value;
    //check if name1 is already exists

//Check if key exists.
            if (localStorage.getItem(name1) !=null)
            {
              //update
              localStorage.setItem(name1,data1);
              document.forms.ShoppingList.data.value = localStorage.getItem(name1);
            }

    doShowAll();
}
function RemoveItem()
{
var name=document.forms.ShoppingList.name.value;
document.forms.ShoppingList.data.value=localStorage.removeItem(name);
doShowAll();
}
function ClearAll() {
    localStorage.clear();
    doShowAll();
}


function blink(){
    $('.help-tip').delay(1000).fadeTo(100,0.5).delay(1000).fadeTo(100,1, blink);
}

$(document).ready(function() {
    blink();
});




    // Add products to <table>
function productsAdd() {
        // First check if a <tbody> tag exists, add one if not
        if ($("#productTable tbody").length == 0) {
            $("#productTable").append("<tbody></tbody>");
        }
        
        // Append product to the table
$("#productTable tbody").append("<tr>" +"<td>Extending Bootstrap with CSS, JavaScript and jQuery</td>" +
            "<td>6/11/2015</td>" + "<td>http://bit.ly/1SNzc0i</td>" +"</tr>");
            
        $("#productTable tbody").append("<tr>" +
            "<td>Build your own Bootstrap Business Application Template in MVC</td>" +
            "<td>1/29/2015</td>" +
            "<td>http://bit.ly/1I8ZqZg</td>" +
            "</tr>");
}
function productUpdateInTable() {
	// Find Product in <table>
var row =
$("#productTable button[data-id='"
+ id + "']")
.parents("tr")[0];
// Add changed product to table
$(row).after(productBuildTableRow(id));
// Remove original product
$(row).remove();
   
    
    // Clear form fields
    formClear();
    
    // Change Update Button Text
    $("#updateButton").text("Add");
}

function productAddToTable() {
    // Does tbody tag exist? add one if not
    if ($("#productTable tbody").length == 0) {
        $("#productTable").append("<tbody></tbody>");
    }
    
    // Append product to table
    $("#productTable tbody").append(productBuildTableRow(_nextId));
    
    // Increment next ID to use
    _nextId += 1;
}


    // Append product to the table
    $("#productTable tbody").append(
        "<tr>" +
        "<td>" + $("#productname").val() + "</td>" +
        "<td>" + $("#introdate").val() + "</td>" +
        "<td>" + $("#url").val() + "</td>" +
        "<td>" +
        "<button type='button' onclick='productDelete(this);' class='btn btn-default'>" +
        "<span class='glyphicon glyphicon-remove' />" +
        "</button>" +
        "</td>" +
        "</tr>");


function formClear() {
    $("#productname").val("");
    $("#introdate").val("");
    $("#url").val("");
}
function productDelete(ctl) {
    $(ctl).parents("tr").remove();
}
function productBuildTableRow(id) {
    var ret = "<tr>" +
        "<td>" +
        "<button type='button' onclick='productDisplay(this);' class='btn btn-default' data-id='" + id + "'>" +
        "<span class='glyphicon glyphicon-edit' />" +
        "</button>" +
        "</td>" +
        "<td>" + $("#productname").val() + "</td>" +
        "<td>" + $("#introdate").val() + "</td>" +
        "<td>" + $("#url").val() + "</td>" +
        "<td>" +
        "<button type='button' onclick='productDelete(this);' class='btn btn-default' data-id='" + id + "'>" +
        "<span class='glyphicon glyphicon-remove' />" +
        "</button>" +
        "</td>" +
        "</tr>"

    return ret;
}

    // Current product being edited
    var _row = null;
function productDisplay(ctl) {
    var row = $(ctl).parents("tr");
    var cols = row.children("td");
    _activeId = $($(cols[0]).children("button")[0]).data("id");
    $("#productname").val($(cols[1]).text());
    $("#introdate").val($(cols[2]).text());
    $("#url").val($(cols[3]).text());
    
    // Change Update Button Text
    $("#updateButton").text("Update");
}



 // Next ID for adding a new Product
    var _nextId = 1;
    
    // ID of Product currently editing
    var _activeId = 0;
_activeId = $($(cols[0]).
children("button")[0]).data("id");

function productUpdate() {
	if ($("#productname").val() != null && $("#productname").val() != '') {
        // Add product to Table
        productAddToTable();

        // Clear form fields
        formClear();

        // Focus to product name field
        $("#productname").focus();
    }
    if ($("#updateButton").text() == "Update") {
        productUpdateInTable(_activeId);
    }
    else {
        productAddToTable();
    }
    
    // Clear form fields
    formClear();
    
    // Focus to product name field
    $("#productname").focus();
}

$(document).ready(function () {
    productsAdd();
});
