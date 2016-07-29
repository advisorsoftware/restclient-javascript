var url= "https://sandbox.advisorsoftware.com:443/v1/rq/delete" 
var xmlhttp = new XMLHttpRequest()
xmlhttp.open("DELETE",url, true);
	xmlhttp.setRequestHeader("Accept": "application/json)",
	xmlhttp.setRequestHeader("Content-Type": "application/json)",
	xmlhttp.setRequestHeader("Authorization": "ASI_CLIENT client_id={YOUR CLIENT ID HERE} client_secret={YOUR CLIENT SECRET HERE})",
xmlhttp.send();
console.log(xmlhttp.status);
console.log(xmlhttp.statusText);
