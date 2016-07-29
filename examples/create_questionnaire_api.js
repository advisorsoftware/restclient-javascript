var url= "https://sandbox.advisorsoftware.com:443/v1/rq/create_questionnaire" 
formData = "{\r\n\t\"riskQuestionnaire\": {\r\n\t\t\"questionnaireName\": \"Asidemo Risk Questionnaire\",\r\n\t\t\"description\": \"Asidemo Questionnaire description\",\r\n\t\t\"tenantName\": \"asidemo\",\r\n\t\t\"questions\": [{\r\n\t\t\t\"questionNumber\": 1,\r\n\t\t\t\"questionText\": \"In comparison to others, how would you rate your willingness to take financial risks?\",\r\n\t\t\t\"answers\": [{\r\n\t\t\t\t\"answerNumber\": 1,\r\n\t\t\t\t\"answerText\": \"Low\",\r\n\t\t\t\t\"answerWeight\": \"50\"\r\n\t\t\t}, {\r\n\t\t\t\t\"answerNumber\": 2,\r\n\t\t\t\t\"answerText\": \"High\",\r\n\t\t\t\t\"answerWeight\": \"50\"\r\n\t\t\t}]\r\n\t\t}, {\r\n\t\t\t\"questionNumber\": 2,\r\n\t\t\t\"questionText\": \"Which statement explains your greatest concern when selecting an investment?\",\r\n\t\t\t\"answers\": [{\r\n\t\t\t\t\"answerNumber\": 1,\r\n\t\t\t\t\"answerText\": \"Potential for loss\",\r\n\t\t\t\t\"answerWeight\": \"50\"\r\n\t\t\t}, {\r\n\t\t\t\t\"answerNumber\": 2,\r\n\t\t\t\t\"answerText\": \"I would only choose investments with low risk associated with them\",\r\n\t\t\t\t\"answerWeight\": \"50\"\r\n\t\t\t}]\r\n\t\t}],\r\n\t\t\"riskToleranceStrategy\": [{\r\n\t\t\t\"strategyName\": \"Conservative\",\r\n\t\t\t\"label\": \"Conservative\",\r\n\t\t\t\"value\": \"50\"\r\n\t\t}, {\r\n\t\t\t\"strategyName\": \"Aggressive\",\r\n\t\t\t\"label\": \"Aggressive\",\r\n\t\t\t\"value\": \"100\"\r\n\t\t}]\r\n\t}\r\n}"
var xmlhttp = new XMLHttpRequest()
xmlhttp.open("POST",url, true);
xmlhttp.setRequestHeader("Accept": "application/json)",
xmlhttp.setRequestHeader("Content-Type": "application/json)",
xmlhttp.setRequestHeader("Authorization": "ASI_CLIENT client_id={YOUR CLIENT ID HERE} client_secret={YOUR CLIENT SECRET HERE})",
xmlhttp.send(formData);
xmlhttp.send();
console.log(xmlhttp.status);
console.log(xmlhttp.statusText);
