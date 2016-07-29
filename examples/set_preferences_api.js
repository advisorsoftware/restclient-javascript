var url= "https://sandbox.advisorsoftware.com:443/v1/tenant/preference/set" 
formData = "{\r\n\t\"preferenceList\": {\r\n\t\t\"preferences\": [{\r\n\t\t\t\"name\": \"Goal Configuration\",\r\n\t\t\t\"value\": \"Risk And Goal\"\r\n\t\t}]\r\n\t}\r\n}"
var xmlhttp = new XMLHttpRequest()
xmlhttp.open("POST",url, true);
xmlhttp.setRequestHeader("Accept": "application/json)",
xmlhttp.setRequestHeader("Content-Type": "application/json)",
xmlhttp.setRequestHeader("Authorization": "ASI_CLIENT client_id={YOUR CLIENT ID HERE} client_secret={YOUR CLIENT SECRET HERE})",
xmlhttp.send(formData);
xmlhttp.send();
console.log(xmlhttp.status);
console.log(xmlhttp.statusText);
