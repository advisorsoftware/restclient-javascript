var url= "https://sandbox.advisorsoftware.com:443/v1/accounts/historical_returns" 
formData = "{\r\n    \"accountIDs\": [\r\n        11,\r\n        12\r\n    ],\r\n    \"limit\": \"200\",\r\n    \"offset\": \"2\",\r\n    \"startDate\": \"2014-05-01\"\r\n}"
var xmlhttp = new XMLHttpRequest()
xmlhttp.open("POST",url, true);
xmlhttp.setRequestHeader("Accept": "application/json)",
xmlhttp.setRequestHeader("Content-Type": "application/json)",
xmlhttp.setRequestHeader("Authorization": "ASI_CLIENT client_id={YOUR CLIENT ID HERE} client_secret={YOUR CLIENT SECRET HERE})",
xmlhttp.send(formData);
xmlhttp.send();
console.log(xmlhttp.status);
console.log(xmlhttp.statusText);
