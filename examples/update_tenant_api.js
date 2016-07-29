var url= "https://sandbox.advisorsoftware.com:443/v1/tenant/update" 
formData = "{\r\n\t\"tenant\": {\r\n\t\t\"name\": \"test11\",\r\n\t\t\"email\": \"example@test.com\",\r\n\t\t\"isActive\": \"true\"\r\n\t}\r\n}"
var xmlhttp = new XMLHttpRequest()
xmlhttp.open("PUT",url, true);
	xmlhttp.setRequestHeader("Accept": "application/json)",
	xmlhttp.setRequestHeader("Content-Type": "application/json)",
	xmlhttp.setRequestHeader("Authorization": "ASI_CLIENT client_id={YOUR CLIENT ID HERE} client_secret={YOUR CLIENT SECRET HERE})",
xmlhttp.send(formData);
xmlhttp.send();
console.log(xmlhttp.status);
console.log(xmlhttp.statusText);
