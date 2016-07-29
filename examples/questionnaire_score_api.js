var url= "https://sandbox.advisorsoftware.com:443/v1/questionnaire_score" 
formData = "{\r\n    \"questionnaireID\": \"asidemorq2\",\r\n    \"questionList\": [\r\n        {\r\n            \"questionNumber\": \"1\",\r\n            \"selectedAnswerNumber\": \"2\"\r\n        },\r\n        {\r\n            \"questionNumber\": \"2\",\r\n            \"selectedAnswerNumber\": \"2\"\r\n        }\r\n    ]\r\n}"
var xmlhttp = new XMLHttpRequest()
xmlhttp.open("POST",url, true);
xmlhttp.setRequestHeader("Accept": "application/json)",
xmlhttp.setRequestHeader("Content-Type": "application/json)",
xmlhttp.setRequestHeader("Authorization": "ASI_CLIENT client_id={YOUR CLIENT ID HERE} client_secret={YOUR CLIENT SECRET HERE})",
xmlhttp.send(formData);
xmlhttp.send();
console.log(xmlhttp.status);
console.log(xmlhttp.statusText);
