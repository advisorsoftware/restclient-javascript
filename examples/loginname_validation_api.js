var url= "https://sandbox.advisorsoftware.com:443/v1/loginName_validation" 
formData = "{\r\n    \"loginNameList\": [\r\n        \"mm@asi.com\",\r\n        \"rr@asi.ai\",\r\n        \"testusername\",\r\n        \"bbragg\",\r\n        \"testusername\"\r\n    ]\r\n}\r"
var xmlhttp = new XMLHttpRequest()
xmlhttp.open("POST",url, true);
xmlhttp.setRequestHeader("Accept": "application/json)",
xmlhttp.setRequestHeader("Content-Type": "application/json)",
xmlhttp.setRequestHeader("Authorization": "ASI_CLIENT client_id={YOUR CLIENT ID HERE} client_secret={YOUR CLIENT SECRET HERE})",
xmlhttp.send(formData);
xmlhttp.send();
console.log(xmlhttp.status);
console.log(xmlhttp.statusText);
