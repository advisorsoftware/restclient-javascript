var url= "https://sandbox.advisorsoftware.com:443/v1/model_holding" 
formData = "{\r\n\t\"modelPortfolio\": \"85\",\r\n\t\"symbol\": \"IBM\",\r\n\t\"allocPercent\": \"100\",\r\n\t\"dataOwner\": \"3\",\r\n\t\"assetClass\": \"FI\",\r\n\t\"security\": 12345\r\n}"
var xmlhttp = new XMLHttpRequest()
xmlhttp.open("POST",url, true);
xmlhttp.setRequestHeader("Accept": "application/json)",
xmlhttp.setRequestHeader("Content-Type": "application/json)",
xmlhttp.setRequestHeader("Authorization": "ASI_CLIENT client_id={YOUR CLIENT ID HERE} client_secret={YOUR CLIENT SECRET HERE})",
xmlhttp.send(formData);
xmlhttp.send();
console.log(xmlhttp.status);
console.log(xmlhttp.statusText);
