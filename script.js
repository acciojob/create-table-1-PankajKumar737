function insert_Row() {
    //Write your code here
	let table = document.getElementBuId("sampleTable");
	table.innerHTML = "
		<tr><td>New cell1</td> 
		<td>New cell2</td></tr>
		"
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = "NEW CELL1";
  cell2.innerHTML = "NEW CELL2";
  
}
