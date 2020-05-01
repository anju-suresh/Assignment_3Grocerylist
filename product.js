function display(){
var xhttp=new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var products= JSON.parse(this.responseText);
        var prod=products.product;
        var depart=document.getElementById("drop");
        console.log(depart.value);
      var txt="";
      txt += "<table border='6' class ='table table-striped' id='myTable'>"
      txt += "<thead><tr>"
        txt += "<th>" + " Serial No "+ "</th>"
        txt += "<th>" + " Name " + "</th>"
        txt += "<th>" + " Quantity " + "</th>"
        txt += "<th>" + " Unit " + "</th>"
        txt += "<th>" + " Department " + "</th>"
        txt += "<th>" + " Remarks " + "</th>"
        txt += "<th>" + " status " + "</th>"
        txt += "<th>" + "  " + "</th>"
        txt+= "</tr></thead>";
        var j=1;
      for (i=0;i<prod.length;i++) {
        if(depart.value==prod[i].dept){
         
          txt += "<tr id='d'>"
          txt += "<td>" + j++ +"</td>"
          txt += "<td>" + prod[i].name  +"</td>"
          txt += "<td>" + prod[i].quantity +"</td>"
          txt +=  "<td>" + prod[i].unit +" </td>"
          txt += "<td>" + prod[i].dept  + "</td>"
          txt += "<td>" + prod[i].notes + "</td>"
          txt += "<td>" + "<input type='checkbox'></input>" + "</td>"
          txt += "<td>" + "<input type='button' class='btn btn-danger' value='Delete' onclick='deleteRow(this);'>" + "</td>"
          txt+= "</tr>";
        }if(depart.value=="All"){
          txt += "<tr id='d'>"
          txt += "<td>" + prod[i].serialNo  +"</td>"
          txt += "<td>" + prod[i].name  +"</td>"
          txt += "<td>" + prod[i].quantity +"</td>"
          txt +=  "<td>" + prod[i].unit +" </td>"
          txt += "<td>" + prod[i].dept  + "</td>"
          txt += "<td>" + prod[i].notes + "</td>"
          txt += "<td>" + "<input type='checkbox'></input>" + "</td>"
          txt += "<td>" + "<input type='button' class='btn btn-danger' value='Delete' onclick='deleteRow(this);'>" + "</td>"
          txt+= "</tr>";
        }
      }
      txt += "</table>"    
      document.getElementById("dem").innerHTML = txt;
    
      }
    };
xhttp.open("GET","product.json",true);
xhttp.send();

}

function deleteRow(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("myTable").deleteRow(i);
}
function addItem(){
  var table = document.getElementById("myTable");
  var i = table.rows.length;
  var row = table.insertRow(i);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  var cell8 = row.insertCell(7);
  cell1.innerHTML = i;
  cell2.innerHTML = document.getElementById("nam").value;
  cell3.innerHTML = document.getElementById("qunt").value;
  cell4.innerHTML = document.getElementById("unit").value;
  cell5.innerHTML = document.getElementById("deptmt").value;
  cell6.innerHTML = document.getElementById("remark").value;
  cell7.innerHTML = "<input type='checkbox'></input>";
  cell8.innerHTML = "<input type='button' class='btn btn-danger' value='Delete' onclick='deleteRow(this);'>";
  
}
