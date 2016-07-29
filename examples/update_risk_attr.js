var url= "https://sandbox.advisorsoftware.com:443/v1/risk_attr/update" 
formData = "{\r\n\t\"riskAttr\": {\r\n\t\t\"id\": 110,\r\n\t\t\"name\": \"RA2\",\r\n\t\t\"order\": 1\r\n\t}\r\n}"
var xmlhttp = new XMLHttpRequest()
xmlhttp.open("PUT",url, true);
	xmlhttp.setRequestHeader("Accept": "application/json)",
	xmlhttp.setRequestHeader("Content-Type": "application/json)",
	xmlhttp.setRequestHeader("Authorization": "ASI_CLIENT client_id={YOUR CLIENT ID HERE} client_secret={YOUR CLIENT SECRET HERE})",
xmlhttp.send(formData);
xmlhttp.send();
console.log(xmlhttp.status);
console.log(xmlhttp.statusText);
