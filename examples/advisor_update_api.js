var url= "https://sandbox.advisorsoftware.com:443/v1/advisor/update" 
formData = "{\r\n\t\"advisor\": {\r\n\t\t\"advisorId\": \"2\",\r\n\t\t\"firstName\": \"John\",\r\n\t\t\"lastName\": \"Danis\",\r\n\t\t\"teamId\": \"16\",\r\n\t\t\"title\": \"Advisor\",\r\n\t\t\"country\": \"U.S.\",\r\n\t\t\"company\": \"ASI Client\",\r\n\t\t\"addr1\": \"N. California Blvd.\",\r\n\t\t\"addr2\": \"Suite 400 - Walnut Creek\",\r\n\t\t\"city\": \"CA\",\r\n\t\t\"email\": \"jdanis@advisorsoftware.com\",\r\n\t\t\"phone\": \"2212322\",\r\n\t\t\"fax\": \"2224322\",\r\n\t\t\"state\": \"CA\",\r\n\t\t\"zipCode\": \"94596\",\r\n\t\t\"login\": \"johnDanis\",\r\n\t\t\"password\": \"654321\"\r\n\t}\r\n}"
var xmlhttp = new XMLHttpRequest()
xmlhttp.open("PUT",url, true);
	xmlhttp.setRequestHeader("Accept": "application/json)",
	xmlhttp.setRequestHeader("Content-Type": "application/json)",
	xmlhttp.setRequestHeader("Authorization": "ASI_CLIENT client_id={YOUR CLIENT ID HERE} client_secret={YOUR CLIENT SECRET HERE})",
xmlhttp.send(formData);
xmlhttp.send();
console.log(xmlhttp.status);
console.log(xmlhttp.statusText);
