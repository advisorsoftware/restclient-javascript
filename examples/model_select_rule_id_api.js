var url= "https://sandbox.advisorsoftware.com:443/v1/model_portfolio/select_rules/{ruleId}" 
formData = "null"
var xmlhttp = new XMLHttpRequest()
xmlhttp.open("PUT",url, true);
	xmlhttp.setRequestHeader("Accept": "application/json)",
	xmlhttp.setRequestHeader("Content-Type": "application/json)",
	xmlhttp.setRequestHeader("Authorization": "ASI_CLIENT client_id={YOUR CLIENT ID HERE} client_secret={YOUR CLIENT SECRET HERE})",
xmlhttp.send(formData);
xmlhttp.send();
console.log(xmlhttp.status);
console.log(xmlhttp.statusText);
