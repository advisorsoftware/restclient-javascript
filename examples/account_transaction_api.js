var url= "https://sandbox.advisorsoftware.com:443/v1/account/transactions" 
formData = "{\r\n\t\"accounts\": [\r\n\t\t11,\r\n\t\t12,\r\n\t\t15\r\n\t],\r\n\t\"startDate\": \"2014-05-01\"\r\n}"
var xmlhttp = new XMLHttpRequest()
xmlhttp.open("POST",url, true);
xmlhttp.setRequestHeader("Accept": "application/json)",
xmlhttp.setRequestHeader("Content-Type": "application/json)",
xmlhttp.setRequestHeader("Authorization": "ASI_CLIENT client_id={YOUR CLIENT ID HERE} client_secret={YOUR CLIENT SECRET HERE})",
xmlhttp.send(formData);
xmlhttp.send();
console.log(xmlhttp.status);
console.log(xmlhttp.statusText);
